# Development Guide

## 🚀 Quick Start for Developers

This guide provides detailed instructions for setting up your development environment, understanding the codebase, and contributing effectively to the IT Circle project.

## 📋 Prerequisites

### System Requirements
- **Operating System**: Windows 10/11, macOS 12+, or Linux (Ubuntu 20.04+)
- **Processor**: 2+ cores recommended
- **RAM**: 8GB minimum, 16GB recommended
- **Storage**: 10GB free space for dependencies and build artifacts

### Software Requirements
- **Git**: Latest version for version control
- **Node.js**: 18.x or later (for frontend)
- **Python**: 3.11 or later (for backend)
- **PostgreSQL**: 13.x or later (for database)
- **Package Manager**: npm, yarn, pnpm, or bun

## 🛠 Environment Setup

### 1. Repository Setup

```bash
# Clone the repository
git clone https://github.com/KhEC-IT-Circle/ITCircle_Website.git
cd ITCircle_Website

# Add upstream remote for updates
git remote add upstream https://github.com/KhEC-IT-Circle/ITCircle_Website.git

# Fetch latest changes
git fetch upstream

# Create your feature branch
git checkout -b feature/your-feature-name
```

### 2. Backend Setup (Django)

```bash
cd backend

# Create virtual environment
python -m venv venv
# Windows users: python -m venv venv

# Activate virtual environment
# Windows PowerShell:
venv\Scripts\Activate.ps1
# Windows Command Prompt:
venv\Scripts\activate.bat
# macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Copy environment configuration
cp .env.example .env

# Edit .env file with your settings:
# DATABASE_URL=postgresql://username:password@localhost:5432/itcircle
# SECRET_KEY=your-secret-key-here
# DEBUG=True
# ALLOWED_HOSTS=localhost,127.0.0.1

# Run database migrations
python manage.py migrate

# Create superuser for admin access
python manage.py createsuperuser

# Start Django development server
python manage.py runserver
```

### 3. Frontend Setup (Next.js)

```bash
cd frontend

# Install Node.js dependencies
npm install
# Alternative package managers:
# yarn install
# pnpm install
# bun install

# Copy environment configuration
cp .env.example .env.local

# Edit .env.local file:
# NEXT_PUBLIC_API_URL=http://localhost:8000
# NEXT_PUBLIC_APP_URL=http://localhost:3000

# Start Next.js development server
npm run dev
```

### 4. Database Setup

```bash
# Install PostgreSQL (if not already installed)
# Windows: Download from https://postgresql.org
# macOS: brew install postgresql
# Ubuntu: sudo apt install postgresql postgresql-contrib

# Create database
createdb itcircle

# Or via psql:
psql -U postgres
CREATE DATABASE itcircle;
\q

# Update .env file with database credentials
# DATABASE_URL=postgresql://username:password@localhost:5432/itcircle
```

## 🔧 Development Workflow

### Code Organization

#### Backend Structure
```
backend/
├── ITCircle_Website/     # Django project settings
│   ├── settings/        # Environment-specific settings
│   ├── urls.py         # Main URL configuration
│   └── wsgi.py         # WSGI configuration
├── events/             # Events management app
│   ├── models.py       # Database models
│   ├── views.py        # View logic
│   ├── serializers.py  # API serializers
│   ├── urls.py         # App URL patterns
│   └── tests.py        # Unit tests
├── projects/           # Projects showcase app
└── users/             # User management app
```

#### Frontend Structure
```
frontend/
├── src/
│   ├── app/           # Next.js 13+ app directory
│   │   ├── api/       # API routes
│   │   ├── components/ # Reusable React components
│   │   └── lib/       # Utility functions
│   ├── components/    # Shared components
│   └── styles/        # Global styles
├── public/            # Static assets
└── package.json       # Dependencies and scripts
```

### Development Commands

#### Backend Commands
```bash
# Run development server
python manage.py runserver

# Run database migrations
python manage.py migrate

# Create new migration
python manage.py makemigrations

# Create superuser
python manage.py createsuperuser

# Run tests
python manage.py test

# Run tests with coverage
coverage run --source='.' manage.py test
coverage report

# Create admin documentation
python manage.py generate_docs
```

#### Frontend Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Run tests
npm run test

# Type checking
npm run type-check

# Storybook (if configured)
npm run storybook
```

## 🧪 Testing

### Running Tests

#### Backend Tests
```bash
# Run all tests
python manage.py test

# Run specific app tests
python manage.py test projects

# Run specific test file
python manage.py test users.tests.UserTestCase

# Run with verbose output
python manage.py test --verbosity=2
```

#### Frontend Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test ComponentName.test.tsx
```

### Writing Tests

#### Backend Test Example
```python
# backend/events/tests.py
from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from .models import Event

class EventAPITestCase(APITestCase):
    def setUp(self):
        self.event = Event.objects.create(
            title="Test Event",
            description="Test Description",
            start_date="2024-02-01T10:00:00Z"
        )

    def test_event_list(self):
        """Test retrieving event list."""
        url = reverse('event-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data['results']), 1)

    def test_event_creation(self):
        """Test creating a new event."""
        url = reverse('event-list')
        data = {
            'title': 'New Event',
            'description': 'New Description',
            'start_date': '2024-03-01T10:00:00Z'
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Event.objects.count(), 2)
```

#### Frontend Test Example
```typescript
// frontend/src/components/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct CSS classes', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByText('Primary Button');
    expect(button).toHaveClass('btn-primary');
  });
});
```

## 🔍 Debugging

### Common Issues and Solutions

#### Backend Issues

**Issue**: `ModuleNotFoundError: No module named 'django'`
**Solution**:
```bash
# Ensure virtual environment is activated
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Reinstall requirements
pip install -r requirements.txt
```

**Issue**: Database connection errors
**Solution**:
```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql  # Linux
# or check Services on Windows

# Verify database exists and credentials are correct
python manage.py dbshell
```

#### Frontend Issues

**Issue**: `Module not found` errors
**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Build errors during `npm run build`
**Solution**:
```bash
# Check for TypeScript errors
npm run type-check

# Fix linting issues
npm run lint -- --fix
```

### Debugging Tools

#### Backend Debugging
- **Django Debug Toolbar**: Add debugging panels to Django admin
- **PDB**: Python debugger for setting breakpoints
- **Django Logging**: Configure logging in settings.py

#### Frontend Debugging
- **React DevTools**: Browser extension for React debugging
- **Redux DevTools**: For state management debugging
- **Browser Console**: Check for JavaScript errors and network requests

## 📚 Learning Resources

### Backend Development
- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework Guide](https://www.django-rest-framework.org/)
- [Python Testing with pytest](https://pytest-django.readthedocs.io/)

### Frontend Development
- [Next.js Documentation](https://nextjs.org/docs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Full-Stack Development
- [Full-Stack Django and React](https://www.freecodecamp.org/news/build-a-fullstack-app-with-django-and-react/)
- [Modern React with Next.js](https://nextjs.org/learn)

## 🤝 Contributing Guidelines

### Code Style

#### Backend (Python)
- Follow [PEP 8](https://pep8.org/) style guide
- Use Black for code formatting
- Maximum line length: 88 characters
- Use type hints where appropriate

#### Frontend (TypeScript/React)
- Follow [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- Use ESLint and Prettier for formatting
- Maximum line length: 100 characters
- Use functional components with hooks

### Commit Conventions

```bash
# Feature commits
feat: add user authentication system

# Bug fix commits
fix: resolve login form validation issue

# Documentation commits
docs: update API documentation for projects

# Refactor commits
refactor: optimize database queries in events

# Test commits
test: add unit tests for user model
```

### Pull Request Process

1. **Create a feature branch** from the latest main branch
2. **Make your changes** following coding standards
3. **Add tests** for new functionality
4. **Update documentation** if needed
5. **Submit a pull request** with a clear description
6. **Address review feedback** promptly

## 🚀 Deployment

### Development Deployment

```bash
# Backend
python manage.py collectstatic --noinput
python manage.py migrate
gunicorn ITCircle_Website.wsgi:application

# Frontend
npm run build
npm start
```

### Production Considerations

- Environment variables for sensitive data
- Static file serving with CDN
- Database backups and monitoring
- SSL/TLS certificates
- Performance monitoring

## 📞 Getting Help

### Support Channels
- **Faculty Advisor**: Available during office hours
- **Senior Students**: Ask for mentorship in IT Circle meetings
- **GitHub Issues**: For technical problems and feature requests
- **Documentation**: Check this guide and other docs first

### Asking Good Questions

When asking for help:
1. **Describe the problem clearly**
2. **Include error messages and stack traces**
3. **Mention what you've already tried**
4. **Specify your environment** (OS, Python/Node version, etc.)
5. **Be patient** and respectful

### Example Help Request

```
**Problem**: Getting 500 error when accessing projects page

**Error**:
```
Internal Server Error: /api/projects/
ModuleNotFoundError: No module named 'psycopg2'
```

**Environment**:
- OS: Windows 11
- Python: 3.11.5
- Django: 5.2.6

**What I've tried**:
1. Activated virtual environment
2. Installed requirements.txt
3. Checked database connection

Any suggestions would be appreciated!
```

---

*This development guide is maintained by the IT Circle Technical Team. Last updated: 2025-10-01*
