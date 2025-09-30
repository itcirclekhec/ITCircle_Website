# Production Deployment Guide

Complete guide for deploying the ITCircle Website to production.

## Pre-Deployment Checklist

### Security
- [ ] Set `DEBUG=False` in Django settings
- [ ] Generate new `SECRET_KEY` for production
- [ ] Configure proper `ALLOWED_HOSTS`
- [ ] Set `SESSION_COOKIE_SECURE=True`
- [ ] Set `CSRF_COOKIE_SECURE=True`
- [ ] Enable HTTPS/SSL
- [ ] Configure firewall rules
- [ ] Set up proper CORS origins
- [ ] Review and restrict API permissions

### Database
- [ ] Use production PostgreSQL instance
- [ ] Enable database backups
- [ ] Configure connection pooling
- [ ] Set up database monitoring
- [ ] Create read replicas (if needed)

### Environment
- [ ] Set all environment variables
- [ ] Configure email service
- [ ] Set up file storage (S3/CloudFlare)
- [ ] Configure CDN
- [ ] Set up monitoring and logging

## Deployment Options

### Option 1: Traditional VPS (DigitalOcean, Linode, AWS EC2)

#### Backend Deployment

**1. Provision Server**
```bash
# Ubuntu 22.04 LTS recommended
# Minimum: 2GB RAM, 2 CPU cores, 40GB storage
```

**2. Install Dependencies**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Python and PostgreSQL
sudo apt install python3.10 python3-pip python3-venv postgresql postgresql-contrib nginx -y

# Install Node.js (for any frontend build tools)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

**3. Set Up PostgreSQL**
```bash
sudo -u postgres psql

CREATE DATABASE itcircle_prod;
CREATE USER itcircle_prod WITH PASSWORD 'strong_production_password';
ALTER ROLE itcircle_prod SET client_encoding TO 'utf8';
ALTER ROLE itcircle_prod SET default_transaction_isolation TO 'read committed';
ALTER ROLE itcircle_prod SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE itcircle_prod TO itcircle_prod;
\q
```

**4. Clone and Setup Application**
```bash
cd /var/www
sudo git clone <your-repo-url> itcircle
sudo chown -R $USER:$USER /var/www/itcircle
cd itcircle/backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
pip install gunicorn
```

**5. Configure Environment**
```bash
nano /var/www/itcircle/backend/.env
```

```env
# Production Environment Variables
DEBUG=False
SECRET_KEY=your-production-secret-key-min-50-chars
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com

# Database
DB_NAME=itcircle_prod
DB_USER=itcircle_prod
DB_PASSWORD=strong_production_password
DB_HOST=localhost
DB_PORT=5432

# CORS
FRONTEND_URL=https://yourdomain.com

# Email (optional)
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

**6. Run Migrations and Collect Static**
```bash
cd /var/www/itcircle/backend
source venv/bin/activate

python manage.py migrate
python manage.py collectstatic --noinput
python manage.py createsuperuser
```

**7. Configure Gunicorn**
```bash
sudo nano /etc/systemd/system/gunicorn.service
```

```ini
[Unit]
Description=Gunicorn daemon for ITCircle
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/itcircle/backend
Environment="PATH=/var/www/itcircle/backend/venv/bin"
ExecStart=/var/www/itcircle/backend/venv/bin/gunicorn \
    --workers 3 \
    --bind unix:/var/www/itcircle/backend/gunicorn.sock \
    ITCircle_Website.wsgi:application

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl start gunicorn
sudo systemctl enable gunicorn
sudo systemctl status gunicorn
```

**8. Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/itcircle
```

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location /static/ {
        alias /var/www/itcircle/backend/staticfiles/;
    }

    location /media/ {
        alias /var/www/itcircle/backend/media/;
    }

    location /api/ {
        proxy_pass http://unix:/var/www/itcircle/backend/gunicorn.sock;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /admin/ {
        proxy_pass http://unix:/var/www/itcircle/backend/gunicorn.sock;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/itcircle /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

**9. Set Up SSL with Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
sudo systemctl reload nginx
```

#### Frontend Deployment

**Option A: Deploy on Same Server**
```bash
cd /var/www/itcircle/frontend

# Build
npm install
npm run build

# Update nginx config to serve Next.js
```

Add to nginx config:
```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

Create systemd service for Next.js:
```bash
sudo nano /etc/systemd/system/nextjs.service
```

```ini
[Unit]
Description=Next.js for ITCircle
After=network.target

[Service]
User=www-data
WorkingDirectory=/var/www/itcircle/frontend
ExecStart=/usr/bin/npm start
Restart=always
Environment="NODE_ENV=production"
Environment="PORT=3000"

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl start nextjs
sudo systemctl enable nextjs
```

**Option B: Deploy to Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

cd frontend
vercel login
vercel

# Set environment variables in Vercel dashboard
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

---

### Option 2: Docker Deployment

**1. Backend Dockerfile**
```dockerfile
# backend/Dockerfile
FROM python:3.10-slim

ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Run gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "ITCircle_Website.wsgi:application"]
```

**2. Frontend Dockerfile**
```dockerfile
# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project
COPY . .

# Build
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**3. Docker Compose**
```yaml
# docker-compose.yml
version: '3.8'

services:
  db:
    image: postgres:14
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: itcircle_prod
      POSTGRES_USER: itcircle_prod
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    restart: always

  backend:
    build: ./backend
    volumes:
      - ./backend:/app
      - static_volume:/app/staticfiles
    environment:
      - DEBUG=False
      - SECRET_KEY=${SECRET_KEY}
      - DB_NAME=itcircle_prod
      - DB_USER=itcircle_prod
      - DB_PASSWORD=${DB_PASSWORD}
      - DB_HOST=db
      - DB_PORT=5432
    depends_on:
      - db
    restart: always

  frontend:
    build: ./frontend
    environment:
      - NEXT_PUBLIC_API_URL=${API_URL}
    ports:
      - "3000:3000"
    restart: always

  nginx:
    image: nginx:alpine
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - static_volume:/static
    ports:
      - "80:80"
      - "443:443"
    depends_on:
      - backend
      - frontend
    restart: always

volumes:
  postgres_data:
  static_volume:
```

**Deploy with Docker**
```bash
# Build and start
docker-compose up -d

# Run migrations
docker-compose exec backend python manage.py migrate

# Create superuser
docker-compose exec backend python manage.py createsuperuser
```

---

### Option 3: Cloud Platform (AWS, Google Cloud, Azure)

#### AWS Elastic Beanstalk

**Backend:**
```bash
# Install EB CLI
pip install awsebcli

# Initialize
cd backend
eb init -p python-3.10 itcircle-backend

# Create environment
eb create itcircle-prod

# Set environment variables
eb setenv DEBUG=False SECRET_KEY=xxx DB_HOST=xxx ...

# Deploy
eb deploy
```

**Frontend (AWS Amplify):**
- Connect GitHub repository
- Configure build settings
- Set environment variables
- Deploy automatically on push

---

## Post-Deployment

### 1. Database Backups

**Automated Backups**
```bash
# Create backup script
sudo nano /usr/local/bin/backup-db.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/var/backups/itcircle"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
pg_dump -U itcircle_prod itcircle_prod > $BACKUP_DIR/backup_$DATE.sql
gzip $BACKUP_DIR/backup_$DATE.sql

# Keep only last 7 days
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +7 -delete
```

```bash
sudo chmod +x /usr/local/bin/backup-db.sh

# Add to crontab (daily at 2 AM)
sudo crontab -e
0 2 * * * /usr/local/bin/backup-db.sh
```

### 2. Monitoring

**Set up Monitoring Tools:**
- Sentry (Error tracking)
- New Relic or DataDog (Performance monitoring)
- UptimeRobot (Uptime monitoring)
- Google Analytics (Usage analytics)

**Install Sentry**
```bash
pip install sentry-sdk
```

```python
# settings.py
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

sentry_sdk.init(
    dsn="your-sentry-dsn",
    integrations=[DjangoIntegration()],
    traces_sample_rate=1.0,
    send_default_pii=True
)
```

### 3. Logging

```python
# settings.py
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'file': {
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': '/var/log/itcircle/django.log',
            'maxBytes': 1024 * 1024 * 15,  # 15MB
            'backupCount': 10,
            'formatter': 'verbose',
        },
    },
    'root': {
        'handlers': ['file'],
        'level': 'INFO',
    },
}
```

### 4. Set Up CI/CD

**GitHub Actions Example**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy Backend
        run: |
          ssh user@your-server << 'EOF'
            cd /var/www/itcircle
            git pull
            cd backend
            source venv/bin/activate
            pip install -r requirements.txt
            python manage.py migrate
            python manage.py collectstatic --noinput
            sudo systemctl restart gunicorn
          EOF
```

---

## Maintenance

### Regular Tasks
- [ ] Monitor error logs daily
- [ ] Review database performance weekly
- [ ] Update dependencies monthly
- [ ] Review security patches regularly
- [ ] Test backups monthly
- [ ] Monitor disk space
- [ ] Review user feedback

### Update Process
```bash
# Backend updates
cd /var/www/itcircle/backend
git pull
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic --noinput
sudo systemctl restart gunicorn

# Frontend updates (if self-hosted)
cd /var/www/itcircle/frontend
git pull
npm install
npm run build
sudo systemctl restart nextjs
```

---

## Troubleshooting

### Common Issues

**Gunicorn won't start:**
```bash
sudo journalctl -u gunicorn -n 50
# Check permissions and socket file
```

**Nginx 502 Bad Gateway:**
```bash
# Check gunicorn status
sudo systemctl status gunicorn

# Check nginx logs
sudo tail -f /var/log/nginx/error.log
```

**Database connection errors:**
```bash
# Test connection
psql -U itcircle_prod -d itcircle_prod -h localhost

# Check pg_hba.conf settings
sudo nano /etc/postgresql/14/main/pg_hba.conf
```

**Static files not loading:**
```bash
# Recollect static files
python manage.py collectstatic --noinput --clear

# Check nginx static file permissions
ls -la /var/www/itcircle/backend/staticfiles/
```

---

## Security Best Practices

1. **Keep software updated**
2. **Use strong passwords**
3. **Enable firewall (ufw)**
4. **Set up fail2ban**
5. **Regular security audits**
6. **Enable HTTPS only**
7. **Set proper file permissions**
8. **Regular backups**
9. **Monitor logs**
10. **Use environment variables for secrets**

---

## Performance Optimization

1. **Enable database query caching**
2. **Use Redis for session storage**
3. **Configure CDN for static files**
4. **Enable Gzip compression**
5. **Optimize database indexes**
6. **Use database connection pooling**
7. **Enable browser caching**
8. **Minimize API calls**
9. **Lazy load images**
10. **Use pagination for large datasets**

---

**Deployment complete! Your ITCircle Website is now live! 🚀**
