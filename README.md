# KhEC IT Circle - Community Website

A modern, full-stack web application for managing a tech community at Khulna Engineering College. Built with Next.js 15, Django 5, PostgreSQL, and featuring a beautiful dark-mode glassmorphism UI.

![Status](https://img.shields.io/badge/status-complete-success)
![Frontend](https://img.shields.io/badge/frontend-Next.js%2015-blue)
![Backend](https://img.shields.io/badge/backend-Django%205-green)
![Database](https://img.shields.io/badge/database-PostgreSQL-blue)

## 🌟 Features

### 🎨 Frontend
- ✅ **Dark-mode-first design** with glassmorphism UI
- ✅ **9 Complete pages**: Home, About, Events, Projects, Members, Resources, Login, Register, Dashboard, Admin, Join, Contact
- ✅ **Authentication system** with session management
- ✅ **Role-based access control** (Admin, Moderator, Member, Guest)
- ✅ **Responsive design** optimized for all devices
- ✅ **52+ UI components** from Radix UI/shadcn
- ✅ **Smooth animations** with Framer Motion
- ✅ **Real-time search** and filtering

### 🔧 Backend API
- ✅ **RESTful API** with Django REST Framework
- ✅ **4 Core apps**: Users, Events, Projects, Resources
- ✅ **Session-based authentication**
- ✅ **PostgreSQL database** with optimized queries
- ✅ **CORS configured** for frontend integration
- ✅ **Comprehensive admin panel**
- ✅ **Role-based permissions**

### 📋 Key Functionalities

#### User Management
- User registration and authentication
- Profile management with skills and badges
- Member directory with search and filters
- Role-based permissions

#### Events & Workshops
- Event creation and management
- RSVP system with waitlist
- Event calendar integration
- Attendance tracking
- Category and level filtering

#### Projects Showcase
- Project portfolio with GitHub integration
- Technology stack tagging
- Contributor management
- Featured projects section
- Search and filter by technology

#### Resource Library
- Categorized learning resources
- Download tracking
- Members-only content
- Multi-format support (PDF, Video, Slides, Code)
- View and download statistics

#### Admin Dashboard
- Member approval workflow
- Event management
- Project oversight
- Resource moderation
- Analytics and insights

## 🚀 Quick Start

### Prerequisites
```bash
- Node.js 18+
- Python 3.10+
- PostgreSQL 14+
```

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ITCircle_Website
```

### 2. Backend Setup
```bash
cd backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Create .env file (see .env.example)
# Update database credentials

# Run migrations
python manage.py makemigrations users events projects resources
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Load sample data (optional)
python manage.py shell < setup_initial_data.py

# Start server
python manage.py runserver
```

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api
- **Django Admin**: http://localhost:8000/admin

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started in 5 minutes
- **[BACKEND_SETUP_GUIDE.md](BACKEND_SETUP_GUIDE.md)** - Detailed backend setup
- **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)** - Complete API reference
- **[FRONTEND_ANALYSIS.md](FRONTEND_ANALYSIS.md)** - Frontend architecture
- **[IMPLEMENTATION_COMPLETE.md](IMPLEMENTATION_COMPLETE.md)** - Implementation summary

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 15.3.5 with App Router
- **UI Library**: React 19
- **Styling**: TailwindCSS 4
- **Components**: Radix UI, shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **State**: React Context API
- **TypeScript**: Strict mode

### Backend
- **Framework**: Django 5.2.6
- **API**: Django REST Framework 3.15
- **Database**: PostgreSQL 17
- **Authentication**: Session-based
- **CORS**: django-cors-headers

### DevOps
- **Version Control**: Git
- **Package Management**: npm, pip
- **Environment**: dotenv

## 📁 Project Structure

```
ITCircle_Website/
├── frontend/                # Next.js frontend
│   ├── src/
│   │   ├── app/            # App router pages
│   │   ├── components/     # React components
│   │   └── lib/            # Utilities & context
│   ├── public/             # Static assets
│   └── package.json
│
├── backend/                # Django backend
│   ├── users/              # User management
│   ├── events/             # Events & workshops
│   ├── projects/           # Project showcase
│   ├── resources/          # Resource library
│   ├── ITCircle_Website/   # Django settings
│   ├── manage.py
│   └── requirements.txt
│
└── Documentation/          # Project docs
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradient (`oklch(0.85 0.1 280)`)
- **Accent**: Blue gradient
- **Background**: Deep dark (`oklch(0.08 0.01 240)`)
- **Glass**: Semi-transparent overlays with backdrop-blur
- **Glow**: Radial gradient effects

### Typography
- **Sans**: Inter (body text)
- **Mono**: JetBrains Mono (code)

### Components
- Glass cards with backdrop blur
- Gradient buttons with glow effects
- Smooth hover animations
- Responsive navigation
- Data visualization widgets

## 🔐 Authentication & Permissions

### Roles
- **Admin**: Full system access
- **Moderator**: Content management
- **Member**: Standard access
- **Guest**: Public pages only

### Protected Routes
- `/dashboard` - Requires authentication
- `/admin` - Requires admin role
- Most API endpoints require authentication

## 🗃️ Database Schema

### Main Models
- **User**: Custom user model with roles
- **Event**: Events and workshops
- **EventRegistration**: RSVP tracking
- **Project**: Student projects
- **ProjectContributor**: Team members
- **Resource**: Learning materials
- **Badge**: Achievement badges
- **UserBadge**: User achievements

## 🧪 Testing

### Backend Tests
```bash
cd backend
python manage.py test
```

### Frontend Tests
```bash
cd frontend
npm run test
```

## 🚢 Deployment

### Backend Deployment
1. Set `DEBUG=False` in production
2. Configure `ALLOWED_HOSTS`
3. Set strong `SECRET_KEY`
4. Use production database
5. Configure static files
6. Set up gunicorn/uwsgi
7. Configure nginx/Apache
8. Enable HTTPS

### Frontend Deployment
1. Build production bundle: `npm run build`
2. Deploy to Vercel/Netlify/own server
3. Set environment variables
4. Configure domain and SSL

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user
- `PATCH /api/auth/profile` - Update profile

### Events
- `GET /api/events/` - List events
- `GET /api/events/<slug>` - Event details
- `POST /api/events/<slug>/register` - Register for event

### Projects
- `GET /api/projects/` - List projects
- `GET /api/projects/<slug>` - Project details

### Resources
- `GET /api/resources/` - List resources
- `GET /api/resources/<slug>` - Resource details
- `POST /api/resources/<slug>/download` - Track download

See [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for complete reference.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Team

**KhEC IT Circle Development Team**

## 🙏 Acknowledgments

- Khulna Engineering College
- Open source community
- All contributors

## 📧 Contact

- **Email**: itcircle@khec.edu.bd
- **Website**: https://khec.edu.bd
- **GitHub**: https://github.com/khec-it-circle

---

**Built with ❤️ by KhEC IT Circle**
