# ITCircle Website - Setup Guide

This project consists of a Next.js frontend and Django backend with PostgreSQL database.

## Prerequisites

- Node.js 18+ and npm/bun
- Python 3.10+
- PostgreSQL 14+

## Database Setup

1. **Install PostgreSQL** (if not already installed)
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql`
   - Linux: `sudo apt-get install postgresql`

2. **Create Database**
   ```bash
   # Connect to PostgreSQL
   psql -U postgres
   
   # Create database
   CREATE DATABASE itcircle_db;
   
   # Create user (optional)
   CREATE USER itcircle_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE itcircle_db TO itcircle_user;
   
   # Exit
   \q
   ```

## Backend Setup (Django)

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create and activate virtual environment**
   ```bash
   # Windows
   python -m venv .venv
   .venv\Scripts\activate
   
   # Mac/Linux
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Update database credentials in `.env`:
     ```
     DB_NAME=itcircle_db
     DB_USER=postgres
     DB_PASSWORD=your_password
     DB_HOST=localhost
     DB_PORT=5432
     ```

5. **Run migrations**
   ```bash
   python manage.py migrate
   ```

6. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run development server**
   ```bash
   python manage.py runserver
   ```
   
   Backend will be available at: http://localhost:8000

## Frontend Setup (Next.js)

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env.local`
   - Update if needed (default values should work):
     ```
     NEXT_PUBLIC_API_URL=http://localhost:8000
     NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
     ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```
   
   Frontend will be available at: http://localhost:3000

## Testing the Connection

1. **Start both servers** (backend and frontend)

2. **Test backend health endpoint**
   - Visit: http://localhost:8000/api/health/
   - Should return: `{"status": "ok", "message": "Django backend is running"}`

3. **Test from frontend**
   - Open browser console on http://localhost:3000
   - Run:
     ```javascript
     fetch('/api/django/api/health/')
       .then(r => r.json())
       .then(console.log)
     ```

## Project Structure

```
ITCircle_Website/
├── backend/                 # Django backend
│   ├── ITCircle_Website/   # Main Django project
│   │   ├── settings.py     # Django settings (PostgreSQL config)
│   │   ├── urls.py         # Main URL routing
│   │   └── api_urls.py     # API endpoints
│   ├── .env                # Environment variables
│   ├── requirements.txt    # Python dependencies
│   └── manage.py           # Django management script
│
└── frontend/               # Next.js frontend
    ├── src/
    │   ├── app/           # Next.js app directory
    │   ├── components/    # React components
    │   └── lib/
    │       └── api.ts     # API utility functions
    ├── .env.local         # Environment variables
    ├── next.config.ts     # Next.js configuration
    └── package.json       # Node dependencies
```

## API Usage in Frontend

Use the API utility functions in `src/lib/api.ts`:

```typescript
import { api } from '@/lib/api';

// GET request
const data = await api.get('/endpoint');

// POST request
const result = await api.post('/endpoint', { key: 'value' });

// Upload file
const response = await api.uploadFile('/upload', file);
```

## Common Issues

### Database Connection Error
- Ensure PostgreSQL is running
- Check database credentials in `.env`
- Verify database exists: `psql -U postgres -l`

### CORS Error
- Ensure backend is running on port 8000
- Check CORS settings in `backend/ITCircle_Website/settings.py`

### Port Already in Use
- Backend: Change port with `python manage.py runserver 8001`
- Frontend: Change port with `PORT=3001 npm run dev`

## Production Deployment

### Backend
1. Set `DEBUG=False` in `.env`
2. Update `ALLOWED_HOSTS` and `CORS_ALLOWED_ORIGINS`
3. Use production database credentials
4. Collect static files: `python manage.py collectstatic`
5. Run with gunicorn: `gunicorn ITCircle_Website.wsgi:application`

### Frontend
1. Build: `npm run build`
2. Start: `npm start`
3. Or deploy to Vercel/Netlify

## Additional Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Django REST Framework](https://www.django-rest-framework.org/)
