# Quick Start Guide

Get the ITCircle Website running in minutes!

## Prerequisites
- Python 3.10+
- Node.js 18+
- PostgreSQL 14+

## Setup in 5 Steps

### Step 1: Database Setup
```bash
# Login to PostgreSQL
psql -U postgres

# Run these commands:
CREATE DATABASE itcircle_db;
CREATE USER itcircle_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE itcircle_db TO itcircle_user;
\q
```

### Step 2: Backend Setup
```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Create .env file (copy from .env.example and update values)
# Update DB_PASSWORD to match what you set above

# Run migrations
python manage.py makemigrations users events projects resources
python manage.py migrate

# Create admin user
python manage.py createsuperuser
# Email: admin@khec.edu.bd
# Username: admin
# Password: (your choice)

# Start server
python manage.py runserver
```

Backend running at: **http://localhost:8000**

### Step 3: Frontend Setup
```bash
# Open new terminal
cd frontend

# Install dependencies
npm install

# Create .env.local (should already exist)
# Verify it has: NEXT_PUBLIC_API_URL=http://localhost:8000

# Start development server
npm run dev
```

Frontend running at: **http://localhost:3000**

### Step 4: Add Sample Data (Optional)
Visit Django Admin: **http://localhost:8000/admin**
Login with superuser credentials and add:
- Some events
- A few projects
- Sample resources

### Step 5: Test the Application

1. **Visit**: http://localhost:3000
2. **Register**: Click "Join Club" or go to /register
3. **Login**: Use your credentials
4. **Explore**: Visit /dashboard, /events, /projects, /resources
5. **Admin**: Go to /admin (if you're logged in as admin)

## Key URLs

- **Frontend Home**: http://localhost:3000
- **About**: http://localhost:3000/about
- **Events**: http://localhost:3000/events
- **Projects**: http://localhost:3000/projects
- **Members**: http://localhost:3000/members
- **Resources**: http://localhost:3000/resources
- **Login**: http://localhost:3000/login
- **Register**: http://localhost:3000/register
- **Dashboard**: http://localhost:3000/dashboard
- **Join**: http://localhost:3000/join
- **Contact**: http://localhost:3000/contact
- **Admin**: http://localhost:3000/admin

- **Django Admin**: http://localhost:8000/admin
- **API Health**: http://localhost:8000/api/health/
- **API Docs**: See API_DOCUMENTATION.md

## Default Test Account

After registering through the UI, you can test with:
- Email: (what you registered with)
- Password: (what you set)

## Troubleshooting

**Backend won't start?**
- Check PostgreSQL is running
- Verify .env file has correct database credentials
- Make sure virtual environment is activated
- Run migrations again: `python manage.py migrate`

**Frontend won't start?**
- Run `npm install` again
- Check Node.js version: `node --version` (should be 18+)
- Delete `.next` folder and restart

**Can't login?**
- Make sure backend is running
- Check browser console for errors
- Verify CORS settings in backend

**Database errors?**
- Check PostgreSQL service is running
- Verify database name and credentials in .env
- Try recreating the database

## What's Next?

1. **Add content** through Django admin
2. **Customize** the design and content
3. **Test** all features
4. **Deploy** to production (see SETUP.md)

For detailed documentation, see:
- BACKEND_SETUP_GUIDE.md
- API_DOCUMENTATION.md
- IMPLEMENTATION_COMPLETE.md

## Quick Commands Reference

**Backend:**
```bash
cd backend
venv\Scripts\activate
python manage.py runserver
```

**Frontend:**
```bash
cd frontend
npm run dev
```

**Create migrations:**
```bash
python manage.py makemigrations
python manage.py migrate
```

**Access Django shell:**
```bash
python manage.py shell
```

## Need Help?

1. Check the error message carefully
2. Review the relevant documentation file
3. Check Django admin for data issues
4. Verify API endpoints with curl or Postman
5. Check browser console for frontend errors

Enjoy building with ITCircle Website! 🚀
