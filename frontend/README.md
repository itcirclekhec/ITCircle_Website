# IT Circle - Khwopa Engineering College

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black.svg)](https://nextjs.org/)
[![Django](https://img.shields.io/badge/Django-5.2.6-green.svg)](https://www.djangoproject.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC.svg)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

> Official website for IT Circle, Khwopa Engineering College - A platform to showcase student projects, events, achievements, and foster collaboration in the tech community.

## 🌟 Project Overview

IT Circle is the official platform for the Information Technology community at Khwopa Engineering College. This full-stack web application serves as a central hub for:

- **Student Projects**: Showcase innovative projects and technical achievements
- **Events & Activities**: Promote and manage tech events, workshops, and seminars
- **Community Building**: Connect students, alumni, and industry professionals
- **Knowledge Sharing**: Share resources, tutorials, and learning materials
- **Achievement Recognition**: Highlight student accomplishments and milestones

## 🚀 Key Features

### Frontend (Next.js + TypeScript)
- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **Interactive Components**: Smooth animations and transitions
- **Project Gallery**: Showcase student projects with filtering and search
- **Event Management**: Display upcoming and past events
- **Testimonials**: Student and alumni success stories
- **Responsive Design**: Works seamlessly on all devices

### Backend (Django + PostgreSQL)
- **REST API**: Robust API for data management
- **User Authentication**: Secure user management system
- **Content Management**: Dynamic content updates
- **Database Integration**: PostgreSQL for reliable data storage

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI, Headless UI, Heroicons
- **Animations**: Framer Motion
- **State Management**: React hooks and context
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization

### Backend
- **Framework**: Django 5.2.6
- **Language**: Python 3.11+
- **Database**: PostgreSQL
- **API**: Django REST Framework
- **Authentication**: Django Auth + JWT
- **Deployment**: Gunicorn + WhiteNoise

### Development Tools
- **Package Manager**: npm, bun (frontend), pip (backend)
- **Linting**: ESLint (frontend), Black (backend)
- **Type Checking**: TypeScript
- **Code Quality**: Prettier, Husky
- **Version Control**: Git + GitHub

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### System Requirements
- **Node.js**: 18.x or later
- **Python**: 3.11 or later
- **PostgreSQL**: 13.x or later
- **Git**: Latest version
- **Package Manager**: npm, yarn, pnpm, or bun

### For Windows Users (Recommended)
- **Git Bash** or **WSL2** for Unix-like environment
- **Visual Studio Code** with recommended extensions
- **Python** installed via official installer

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/KhEC-IT-Circle/ITCircle_Website.git
cd ITCircle_Website
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
# On Windows: python -m venv venv
# On macOS/Linux: python3 -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Setup environment variables
cp .env.example .env
# Edit .env file with your database credentials

# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Start Django server
python manage.py runserver
```

### 3. Frontend Setup
```bash
# Open new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local file with API endpoints

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 4. Access the Application
- **Frontend**: Open [http://localhost:3000](http://localhost:3000)
- **Backend API**: Available at [http://localhost:8000](http://localhost:8000)
- **Admin Panel**: [http://localhost:8000/admin](http://localhost:8000/admin)

## 🔧 Development Scripts

### Frontend Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Backend Scripts
```bash
# Run development server
python manage.py runserver

# Run migrations
python manage.py migrate

# Create new migration
python manage.py makemigrations

# Create superuser
python manage.py createsuperuser

# Run tests
python manage.py test

# Collect static files
python manage.py collectstatic
```

## 📁 Project Structure

```
ITCircle_Website/
├── .github/                 # GitHub configuration
│   ├── workflows/          # CI/CD workflows
│   └── ISSUE_TEMPLATE/     # Issue templates
├── docs/                   # Documentation
│   ├── api/               # API documentation
│   ├── architecture/      # System architecture
│   ├── deployment/        # Deployment guides
│   └── development/       # Development guides
├── frontend/              # Next.js frontend
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── app/         # Next.js app directory
│   │   ├── components/  # React components
│   │   └── lib/         # Utility functions
│   └── package.json
├── backend/              # Django backend
│   ├── ITCircle_Website/ # Django project
│   ├── events/          # Events app
│   ├── projects/        # Projects app
│   ├── users/           # Users app
│   └── requirements.txt
└── README.md
```

## 🎨 UI Components

### Core Sections
- **Navigation**: Responsive navbar with mobile menu
- **Hero Section**: Welcome banner with call-to-action
- **About Section**: Information about IT Circle
- **Stats Section**: Key metrics and achievements
- **Featured Events**: Upcoming and recent events
- **Testimonials**: Student and alumni stories
- **Featured Projects**: Showcase of student work
- **Footer**: Contact information and links

### Interactive Features
- **Project Filtering**: Filter projects by category/technology
- **Event Registration**: Sign up for events
- **Contact Forms**: Get in touch with IT Circle
- **Responsive Gallery**: Image galleries with lightbox
- **Animations**: Smooth page transitions and hover effects

## 🔌 API Integration

The frontend communicates with the Django backend through REST APIs:

- **Projects API**: `/api/projects/` - CRUD operations for projects
- **Events API**: `/api/events/` - Event management
- **Users API**: `/api/users/` - User authentication and profiles
- **Testimonials API**: `/api/testimonials/` - Success stories

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
# Build the application
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod --dir=dist
```

### Backend Deployment (Railway/Heroku/DigitalOcean)
```bash
# Production settings
export DJANGO_SETTINGS_MODULE=ITCircle_Website.settings.production

# Collect static files
python manage.py collectstatic --noinput

# Run migrations
python manage.py migrate

# Start with Gunicorn
gunicorn ITCircle_Website.wsgi:application
```

## 🤝 Contributing

We welcome contributions from students, alumni, and the developer community! Here's how you can get involved:

### Getting Started
1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch
4. **Make** your changes
5. **Test** thoroughly
6. **Submit** a pull request

### Contribution Areas
- **Frontend Development**: UI/UX improvements, new features
- **Backend Development**: API enhancements, database optimizations
- **Documentation**: Improve guides and tutorials
- **Testing**: Write unit and integration tests
- **Design**: Create icons, illustrations, or improve styling

### Development Guidelines
- Follow the established coding standards
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Be respectful and collaborative

📖 **Read our detailed [Contributing Guide](CONTRIBUTING.md) for more information.**

## 📚 Documentation

- **API Documentation**: [View API Docs](./docs/api/README.md)
- **Architecture Guide**: [System Architecture](./docs/architecture/README.md)
- **Deployment Guide**: [Deployment Instructions](./docs/deployment/README.md)
- **Development Guide**: [Development Setup](./docs/development/README.md)

## 🏆 Recognition

### Contributors
<a href="https://github.com/KhEC-IT-Circle/ITCircle_Website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=KhEC-IT-Circle/ITCircle_Website" />
</a>

### Contributors are Welcome!
We recognize and appreciate all contributors who help improve this project. Your contributions help fellow students learn and grow in their development journey.

## 📞 Contact & Support

### IT Circle Leadership
- **Faculty Advisor**: [Contact Information]
- **Student President**: [Contact Information]
- **Technical Lead**: [Contact Information]

### Get in Touch
- **Email**: itcircle@khec.edu.np
- **Discord**: [IT Circle Discord Server]
- **LinkedIn**: [IT Circle LinkedIn Page]
- **GitHub Issues**: [Report Issues](https://github.com/KhEC-IT-Circle/ITCircle_Website/issues)

### Office Hours
- **Location**: Khwopa Engineering College, Computer Lab
- **Hours**: Monday - Friday, 10:00 AM - 5:00 PM NPT

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Khwopa Engineering College** for their continuous support
- **Faculty Members** for guidance and mentorship
- **Student Contributors** for their dedication and hard work
- **Open Source Community** for tools, libraries, and inspiration

## 🌟 Support This Project

If you find this project helpful, please consider:

- ⭐ **Star** this repository
- 🐛 **Report** bugs and issues
- 💡 **Suggest** new features
- 🔄 **Share** with fellow students
- 🤝 **Contribute** code improvements

---

**Built with ❤️ by IT Circle, Khwopa Engineering College**

*Nepal Time (NPT): UTC+5:45 | Last Updated: 2025-10-01*
