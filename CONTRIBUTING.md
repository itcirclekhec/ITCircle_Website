# Contributing to IT Circle Website

Thank you for your interest in contributing to the IT Circle website! 🎉

We welcome contributions from students, alumni, faculty, and the broader developer community. This guide will help you get started with contributing to our project.

## 🌟 Why Contribute?

Contributing to open source projects like this one is an excellent way to:

- **Learn New Skills**: Gain experience with modern web development technologies
- **Build Your Portfolio**: Showcase your work to potential employers
- **Network**: Connect with fellow students and industry professionals
- **Make an Impact**: Help improve the IT Circle community platform
- **Get Mentorship**: Learn from experienced developers and faculty

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Environment Setup](#development-environment-setup)
- [Understanding the Project Structure](#understanding-the-project-structure)
- [Coding Standards and Guidelines](#coding-standards-and-guidelines)
- [Git Workflow](#git-workflow)
- [Making Contributions](#making-contributions)
- [Testing Guidelines](#testing-guidelines)
- [Code Review Process](#code-review-process)
- [Recognition and Rewards](#recognition-and-rewards)
- [Getting Help](#getting-help)

## 🚀 Getting Started

### Prerequisites

Before you start contributing, make sure you have:

- **GitHub Account**: [Sign up](https://github.com) if you don't have one
- **Basic Git Knowledge**: Understand forking, branching, and pull requests
- **Development Environment**: See setup instructions below
- **Code Editor**: We recommend [Visual Studio Code](https://code.visualstudio.com/)

### 1. Fork the Repository

1. Go to the [IT Circle repository](https://github.com/KhEC-IT-Circle/ITCircle_Website)
2. Click the **"Fork"** button in the top-right corner
3. Select your GitHub account as the destination

### 2. Clone Your Fork

```bash
# Clone your fork locally
git clone https://github.com/YOUR_USERNAME/ITCircle_Website.git

# Navigate to the project directory
cd ITCircle_Website

# Add the original repository as upstream
git remote add upstream https://github.com/KhEC-IT-Circle/ITCircle_Website.git
```

### 3. Create a Feature Branch

Always create a new branch for your work:

```bash
# Fetch latest changes from upstream
git fetch upstream

# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description
```

## 🛠 Development Environment Setup

### Frontend Setup (Next.js + TypeScript)

```bash
cd frontend

# Install dependencies (choose one)
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# Copy environment file
cp .env.example .env.local

# Edit .env.local with your settings
# NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend Setup (Django + Python)

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file
cp .env.example .env

# Edit .env with your database settings
# DATABASE_URL=postgresql://user:password@localhost:5432/itcircle
```

### Running the Development Environment

1. **Start the Backend** (Terminal 1):
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
python manage.py runserver
```

2. **Start the Frontend** (Terminal 2):
```bash
cd frontend
npm run dev
```

3. **Access the Application**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8000](http://localhost:8000)
   - Admin Panel: [http://localhost:8000/admin](http://localhost:8000/admin)

## 📁 Understanding the Project Structure

```
ITCircle_Website/
├── frontend/              # Next.js React application
│   ├── src/
│   │   ├── app/          # Next.js 13+ app directory
│   │   ├── components/   # Reusable React components
│   │   └── lib/         # Utility functions and configurations
│   └── package.json     # Frontend dependencies
├── backend/              # Django REST API
│   ├── ITCircle_Website/ # Django project settings
│   ├── events/          # Events management app
│   ├── projects/        # Projects showcase app
│   ├── users/           # User management app
│   └── requirements.txt # Python dependencies
└── docs/                # Documentation (you can help improve this!)
```

## 📝 Coding Standards and Guidelines

### General Principles

- **Write Clean Code**: Follow established patterns and conventions
- **Comment Your Code**: Explain complex logic and business rules
- **Keep It Simple**: Prefer simple solutions over complex ones
- **Be Consistent**: Follow the existing code style in each file

### Frontend Standards (TypeScript/React)

#### File Naming
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Hooks: `useCamelCase.ts` (e.g., `useAuth.ts`)
- Utils: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `PascalCase.ts` (e.g., `UserTypes.ts`)

#### Code Style
```typescript
// ✅ Good
interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
    </div>
  );
};

// ❌ Avoid
const userprofile = () => {
  var isloading = false;
  return <div>{user.name}</div>;
}
```

#### Component Structure
```typescript
// ✅ Recommended structure
import React from 'react';

interface ComponentProps {
  // Define props here
}

export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Custom hooks
  const data = useCustomHook();

  // Event handlers
  const handleClick = useCallback(() => {
    // Handle click logic
  }, []);

  // Early returns for loading/error states
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  // Main render
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};
```

### Backend Standards (Django/Python)

#### Code Style
```python
# ✅ Good
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def project_list(request):
    """Get all projects or create a new project."""
    if request.method == 'GET':
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ❌ Avoid
def projectlist(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        return JsonResponse(list(projects.values()), safe=False)
```

## 🔄 Git Workflow

### Branch Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Feature | `feature/feature-name` | `feature/add-project-search` |
| Bug Fix | `fix/issue-description` | `fix/navbar-mobile-responsive` |
| Documentation | `docs/update-readme` | `docs/add-api-documentation` |
| Refactor | `refactor/component-name` | `refactor/user-authentication` |
| Hotfix | `hotfix/critical-issue` | `hotfix/database-connection` |

### Commit Message Guidelines

```bash
# ✅ Good commit messages
feat: add project filtering functionality
fix: resolve mobile navigation bug
docs: update API documentation for projects endpoint
refactor: optimize database queries in project model
test: add unit tests for user authentication

# ❌ Avoid
update
fix bug
add stuff
```

### Pull Request Process

1. **Create a Draft PR** early if you're working on a large feature
2. **Write a Clear Title** that summarizes the changes
3. **Provide Detailed Description**:
   - What changes were made
   - Why the changes were needed
   - How to test the changes
   - Any breaking changes
4. **Link Related Issues** using keywords like "Closes #123"
5. **Request Reviews** from maintainers or relevant team members

## 🎯 Making Contributions

### Types of Contributions

#### 1. Bug Reports
- Use the [Bug Report template](https://github.com/KhEC-IT-Circle/ITCircle_Website/issues/new?template=bug_report.md)
- Include steps to reproduce, expected vs actual behavior
- Add screenshots if applicable

#### 2. Feature Requests
- Use the [Feature Request template](https://github.com/KhEC-IT-Circle/ITCircle_Website/issues/new?template=feature_request.md)
- Describe the problem you're trying to solve
- Suggest a solution if you have one in mind

#### 3. Code Contributions
- Follow the coding standards above
- Add tests for new functionality
- Update documentation as needed

#### 4. Documentation Improvements
- Fix typos and grammar issues
- Improve clarity of instructions
- Add missing information
- Update outdated content

### Finding Issues to Work On

- **Good First Issues**: Perfect for beginners, labeled with `good first issue`
- **Help Wanted**: Issues that need community contributions
- **Documentation**: Tasks related to improving docs
- **Enhancement**: Feature requests and improvements

## 🧪 Testing Guidelines

### Frontend Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Backend Testing

```bash
# Run Django tests
python manage.py test

# Run specific app tests
python manage.py test projects

# Run with coverage
coverage run --source='.' manage.py test
coverage report
```

### Writing Tests

#### Frontend (Jest + React Testing Library)
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles user interaction', async () => {
    const user = userEvent.setup();
    render(<ComponentName />);

    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Updated Text')).toBeInTheDocument();
  });
});
```

#### Backend (Django TestCase)
```python
from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from .models import Project

class ProjectAPITestCase(APITestCase):
    def setUp(self):
        self.project = Project.objects.create(
            title="Test Project",
            description="Test Description"
        )

    def test_project_list(self):
        """Test retrieving project list."""
        url = reverse('project-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
```

## 🔍 Code Review Process

### What Reviewers Look For

1. **Functionality**: Does it work as expected?
2. **Code Quality**: Follows standards and best practices
3. **Tests**: Adequate test coverage for new features
4. **Documentation**: Updated docs and comments
5. **Security**: No obvious security issues
6. **Performance**: No performance regressions

### Responding to Reviews

- **Be Open**: Accept constructive feedback
- **Ask Questions**: If you don't understand a comment
- **Make Changes**: Implement requested changes
- **Explain**: If you disagree with a suggestion, explain why

## 🏆 Recognition and Rewards

### How We Recognize Contributors

- **GitHub Recognition**: Featured in README contributors section
- **Social Media Shoutouts**: Recognition on IT Circle social channels
- **Certificates**: Contribution certificates for active contributors
- **Mentorship Opportunities**: Senior students mentor juniors
- **Resume Building**: Contributions strengthen your portfolio

### Contribution Levels

- **🌱 First Timer**: Your first contribution
- **🌿 Contributor**: Multiple contributions, helping with issues
- **🌳 Core Contributor**: Regular contributions, reviewing PRs
- **🌲 Mentor**: Helping other contributors, leading initiatives

## 💬 Getting Help

### Communication Channels

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and community discussion
- **Email**: itcircle@khec.edu.np (for private matters)
- **Faculty Office Hours**: Monday-Friday, 10 AM - 5 PM NPT

### Asking for Help

When asking for help:

1. **Be Specific**: Clearly describe your problem
2. **Show Effort**: Mention what you've already tried
3. **Provide Context**: Include error messages and relevant code
4. **Use Proper Formatting**: Use code blocks for code snippets

### Example Help Request

```
**Problem**: I'm getting an error when running the Django server

**Error Message**:
```
ModuleNotFoundError: No module named 'django'
```

**What I've Tried**:
1. Created virtual environment with `python -m venv venv`
2. Activated environment with `source venv/bin/activate`
3. Ran `pip install -r requirements.txt`

**Environment**:
- OS: Windows 10
- Python: 3.11
- Django: 5.2.6

Any suggestions would be appreciated!
```

## 🎯 Best Practices

### For Students

1. **Start Small**: Begin with documentation improvements or small bug fixes
2. **Learn Actively**: Use this project as a learning opportunity
3. **Ask Questions**: Don't hesitate to ask for help from faculty or peers
4. **Document Your Learning**: Keep notes of what you learn

### For Contributors

1. **Be Patient**: Complex contributions take time to review
2. **Be Collaborative**: Work well with other contributors
3. **Be Respectful**: Treat everyone with respect and kindness
4. **Be Professional**: Maintain high standards in your work

## 📋 Contribution Checklist

Before submitting your contribution:

- [ ] **Follow coding standards** for your changes
- [ ] **Add tests** if you're adding new functionality
- [ ] **Update documentation** if needed
- [ ] **Test thoroughly** on your local machine
- [ ] **Create meaningful commit messages**
- [ ] **Write a clear pull request description**
- [ ] **Link related issues** in your PR
- [ ] **Request reviews** from appropriate people

## 🌟 Success Stories

<!-- > "Contributing to IT Circle helped me land my first internship!" - Alumni Student -->

> "I learned more about React and Django in 3 months of contributing than in 2 semesters of classes!" - Current Student

> "The mentorship and code reviews here are incredible for skill development." - Current Student

---

**Happy Contributing! 🚀**

*This guide was last updated on 2025-10-01 (NPT)*

*Questions? Reach out to us at itcircle@khec.edu.np*
