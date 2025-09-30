# Backend Setup Guide

## Prerequisites
- Python 3.10 or higher
- PostgreSQL 14 or higher
- pip (Python package manager)

## Step 1: PostgreSQL Database Setup

### Install PostgreSQL
- **Windows**: Download and install from https://www.postgresql.org/download/windows/
- **Mac**: `brew install postgresql`
- **Linux**: `sudo apt-get install postgresql postgresql-contrib`

### Create Database
```bash
# Start PostgreSQL service (if not already running)
# Windows: PostgreSQL should auto-start
# Mac: brew services start postgresql
# Linux: sudo systemctl start postgresql

# Login to PostgreSQL
psql -U postgres

# Create database and user
CREATE DATABASE itcircle_db;
CREATE USER itcircle_user WITH PASSWORD 'your_secure_password';
ALTER ROLE itcircle_user SET client_encoding TO 'utf8';
ALTER ROLE itcircle_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE itcircle_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE itcircle_db TO itcircle_user;

# Exit PostgreSQL
\q
```

## Step 2: Backend Environment Setup

### Navigate to Backend Directory
```bash
cd f:\ITCircle_Website\backend
```

### Create Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

## Step 3: Environment Configuration

### Create .env File
Create a `.env` file in the `backend` directory:

```env
# Django Settings
SECRET_KEY=your-secret-key-here-generate-a-new-one
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database Settings
DB_NAME=itcircle_db
DB_USER=itcircle_user
DB_PASSWORD=your_secure_password
DB_HOST=localhost
DB_PORT=5432

# CORS Settings
FRONTEND_URL=http://localhost:3000
```

### Generate Secret Key
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```
Copy the output and replace `your-secret-key-here-generate-a-new-one` in your `.env` file.

## Step 4: Run Migrations

### Create Migrations
```bash
python manage.py makemigrations users
python manage.py makemigrations events
python manage.py makemigrations projects
python manage.py makemigrations resources
```

### Apply Migrations
```bash
python manage.py migrate
```

## Step 5: Create Superuser

```bash
python manage.py createsuperuser
```

Follow the prompts to create an admin account:
- Email: admin@khec.edu.bd
- Username: admin
- Password: (your secure password)

## Step 6: Load Sample Data (Optional)

You can create sample data through the Django admin or using a management command.

## Step 7: Start Development Server

```bash
python manage.py runserver
```

The API will be available at: `http://localhost:8000`

## Step 8: Test the API

### Health Check
```bash
curl http://localhost:8000/api/health/
```

Expected response:
```json
{
  "status": "ok",
  "message": "Django backend is running"
}
```

### Test Authentication
```bash
# Register a user
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "testpass123",
    "confirm_password": "testpass123",
    "first_name": "Test",
    "last_name": "User",
    "department": "CSE",
    "year": "3rd"
  }'
```

## Step 9: Access Django Admin

Navigate to: `http://localhost:8000/admin`

Login with your superuser credentials to manage:
- Users
- Events
- Projects
- Resources
- Badges
- Registrations

## Troubleshooting

### Error: "password authentication failed"
- Check your `.env` file has the correct database credentials
- Verify PostgreSQL is running
- Ensure the database user has proper permissions

### Error: "relation does not exist"
- Run migrations: `python manage.py migrate`
- Check that all apps are in INSTALLED_APPS

### Error: "ModuleNotFoundError"
- Activate virtual environment
- Install dependencies: `pip install -r requirements.txt`

### Error: "Port already in use"
- Stop other Django processes
- Use different port: `python manage.py runserver 8001`

## API Endpoints Quick Reference

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user
- `PATCH /api/auth/profile` - Update profile

### Events
- `GET /api/events/` - List events
- `GET /api/events/<slug>` - Event details
- `POST /api/events/create` - Create event
- `POST /api/events/<slug>/register` - Register for event
- `GET /api/events/my/events` - My registered events

### Projects
- `GET /api/projects/` - List projects
- `GET /api/projects/<slug>` - Project details
- `POST /api/projects/create` - Create project

### Resources
- `GET /api/resources/` - List resources
- `GET /api/resources/<slug>` - Resource details
- `POST /api/resources/<slug>/download` - Track download

See `API_DOCUMENTATION.md` for complete API reference.

## Production Deployment

### Security Checklist
- [ ] Set `DEBUG=False` in production
- [ ] Use strong `SECRET_KEY`
- [ ] Configure proper `ALLOWED_HOSTS`
- [ ] Enable HTTPS
- [ ] Set secure cookie settings
- [ ] Use environment variables for sensitive data
- [ ] Configure CORS properly
- [ ] Set up database backups
- [ ] Configure logging
- [ ] Use gunicorn/uwsgi for production server

### Example Production Settings
```env
DEBUG=False
SECRET_KEY=production-secret-key-very-long-and-random
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
DB_HOST=your-production-db-host
SESSION_COOKIE_SECURE=True
CSRF_COOKIE_SECURE=True
```

## Database Backup

### Backup
```bash
pg_dump -U itcircle_user itcircle_db > backup.sql
```

### Restore
```bash
psql -U itcircle_user itcircle_db < backup.sql
```

## Useful Commands

```bash
# Create new app
python manage.py startapp app_name

# Make migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic

# Run tests
python manage.py test

# Shell
python manage.py shell

# Check for issues
python manage.py check
```

## Next Steps

1. Connect frontend to backend API
2. Test all endpoints
3. Add sample data through admin
4. Configure email service (for notifications)
5. Set up OAuth providers (GitHub, Google)
6. Configure file uploads (for avatars, resources)
7. Set up CI/CD pipeline
8. Configure production server
