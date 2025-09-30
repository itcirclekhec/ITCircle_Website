# API Documentation

## Overview

The IT Circle website uses a Django REST Framework backend that provides APIs for the React frontend. This documentation covers all available endpoints, their parameters, responses, and usage examples.

## Base URL

```
http://localhost:8000/api/
```

In production, this would be:
```
https://api.itcircle.khec.edu.np/
```

## Authentication

Most API endpoints require authentication. We use Django's built-in authentication system with session-based auth for the admin interface and token-based auth for API access.

### Login Endpoint

**POST** `/api/auth/login/`

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

**Response:**
```json
{
  "token": "your_jwt_token",
  "user": {
    "id": 1,
    "username": "your_username",
    "email": "your_email@example.com"
  }
}
```

## Available Endpoints

### Projects API

#### List Projects
**GET** `/api/projects/`

**Query Parameters:**
- `page` (integer): Page number for pagination
- `limit` (integer): Number of items per page (default: 20)
- `search` (string): Search in project title and description
- `technology` (string): Filter by technology stack
- `category` (string): Filter by project category
- `skill_level` (string): Filter by skill level (beginner, intermediate, advanced)

**Response:**
```json
{
  "count": 150,
  "next": "http://localhost:8000/api/projects/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "E-commerce Website",
      "description": "A full-stack e-commerce platform built with React and Django",
      "technology_stack": ["React", "Django", "PostgreSQL"],
      "category": "Web Development",
      "skill_level": "Intermediate",
      "github_url": "https://github.com/student/ecommerce",
      "demo_url": "https://student-ecommerce.vercel.app",
      "image": "/media/projects/ecommerce.jpg",
      "author": {
        "id": 1,
        "username": "student_user",
        "email": "student@khec.edu.np"
      },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-20T14:45:00Z"
    }
  ]
}
```

#### Create Project
**POST** `/api/projects/`

**Headers:**
```
Authorization: Bearer your_jwt_token
Content-Type: application/json
```

**Body:**
```json
{
  "title": "My Awesome Project",
  "description": "A brief description of what the project does",
  "technology_stack": ["React", "Node.js", "MongoDB"],
  "category": "Web Development",
  "skill_level": "Beginner",
  "github_url": "https://github.com/username/project",
  "demo_url": "https://my-project-demo.vercel.app"
}
```

#### Get Project Details
**GET** `/api/projects/{id}/`

**Response:** Same format as list items but with additional fields like full description, screenshots, etc.

#### Update Project
**PUT/PATCH** `/api/projects/{id}/`

**Headers:**
```
Authorization: Bearer your_jwt_token
Content-Type: application/json
```

#### Delete Project
**DELETE** `/api/projects/{id}/`

**Headers:**
```
Authorization: Bearer your_jwt_token
```

### Events API

#### List Events
**GET** `/api/events/`

**Query Parameters:**
- `status` (string): Filter by status (upcoming, ongoing, completed, cancelled)
- `category` (string): Filter by event category (workshop, seminar, competition, etc.)
- `start_date` (date): Filter events from this date onwards
- `end_date` (date): Filter events until this date

**Response:**
```json
{
  "count": 25,
  "results": [
    {
      "id": 1,
      "title": "React Workshop 2024",
      "description": "Learn React fundamentals in this hands-on workshop",
      "start_date": "2024-02-15T09:00:00Z",
      "end_date": "2024-02-15T17:00:00Z",
      "location": "Computer Lab 1, Khwopa Engineering College",
      "category": "Workshop",
      "status": "upcoming",
      "max_participants": 50,
      "registered_count": 35,
      "registration_deadline": "2024-02-10T23:59:59Z",
      "image": "/media/events/react-workshop.jpg",
      "organizer": {
        "id": 1,
        "name": "IT Circle Committee",
        "email": "itcircle@khec.edu.np"
      }
    }
  ]
}
```

#### Register for Event
**POST** `/api/events/{id}/register/`

**Headers:**
```
Authorization: Bearer your_jwt_token
```

**Response:**
```json
{
  "message": "Successfully registered for the event",
  "registration_id": "reg_12345",
  "event": {
    "id": 1,
    "title": "React Workshop 2024"
  }
}
```

### Users API

#### Get Current User Profile
**GET** `/api/users/profile/`

**Headers:**
```
Authorization: Bearer your_jwt_token
```

**Response:**
```json
{
  "id": 1,
  "username": "student_user",
  "email": "student@khec.edu.np",
  "first_name": "Student",
  "last_name": "Name",
  "bio": "Computer Science student passionate about web development",
  "skills": ["JavaScript", "React", "Python", "Django"],
  "github_profile": "https://github.com/student_user",
  "linkedin_profile": "https://linkedin.com/in/student_user",
  "year_of_study": 3,
  "department": "Computer Engineering",
  "profile_image": "/media/profiles/student.jpg",
  "is_verified": true,
  "projects_count": 5,
  "events_attended": 12
}
```

#### Update User Profile
**PUT/PATCH** `/api/users/profile/`

**Headers:**
```
Authorization: Bearer your_jwt_token
Content-Type: application/json
```

### Testimonials API

#### List Testimonials
**GET** `/api/testimonials/`

**Response:**
```json
{
  "count": 8,
  "results": [
    {
      "id": 1,
      "name": "Student Name",
      "role": "Alumni, Software Engineer at Tech Company",
      "content": "IT Circle helped me develop practical skills that directly contributed to my career success.",
      "image": "/media/testimonials/student.jpg",
      "company": "Tech Company Name",
      "batch_year": 2022,
      "is_featured": true,
      "created_at": "2024-01-10T08:30:00Z"
    }
  ]
}
```

## Error Responses

All API endpoints return appropriate HTTP status codes and error messages.

### Common Error Formats

**400 Bad Request:**
```json
{
  "error": "Invalid data provided",
  "details": {
    "title": ["This field is required"],
    "technology_stack": ["This field cannot be empty"]
  }
}
```

**401 Unauthorized:**
```json
{
  "error": "Authentication credentials were not provided"
}
```

**403 Forbidden:**
```json
{
  "error": "You don't have permission to perform this action"
}
```

**404 Not Found:**
```json
{
  "error": "The requested resource was not found"
}
```

**500 Internal Server Error:**
```json
{
  "error": "An internal server error occurred",
  "details": "Database connection failed"
}
```

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- Anonymous users: 100 requests per hour
- Authenticated users: 1000 requests per hour
- Admin users: 5000 requests per hour

## Pagination

List endpoints use cursor-based pagination with the following format:

```json
{
  "count": 150,
  "next": "http://localhost:8000/api/projects/?cursor=cD0yMDI0LTAxLTAxKzAwJTNBMzAlM0E0NQ==",
  "previous": "http://localhost:8000/api/projects/?cursor=cD0yMDI0LTAxLTAxKzAwJTNBMzAlM0E0NQ==",
  "results": [...]
}
```

## Filtering and Searching

Most list endpoints support filtering and searching:

### Search
- `?search=react` - Search in title and description fields

### Filtering
- `?technology=React` - Filter by technology
- `?category=Web Development` - Filter by category
- `?skill_level=Beginner` - Filter by skill level

### Combining Filters
- `?search=react&technology=React&skill_level=Beginner`

## File Upload

For endpoints that accept file uploads (like project images), use multipart form data:

```
Content-Type: multipart/form-data

POST /api/projects/
- title: "My Project"
- description: "Project description"
- image: (file upload)
```

## SDK and Libraries

While you can use any HTTP client, here are some popular options:

### JavaScript/TypeScript
```javascript
// Using Fetch API
const response = await fetch('/api/projects/', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(projectData)
});

// Using Axios
import axios from 'axios';
const response = await axios.post('/api/projects/', projectData, {
  headers: { 'Authorization': `Bearer ${token}` }
});
```

### Python
```python
import requests

headers = {'Authorization': f'Bearer {token}'}
response = requests.post('/api/projects/', json=project_data, headers=headers)
```

## Support

For API-related questions or issues:
- Email: api-support@itcircle.khec.edu.np
- Documentation Issues: [GitHub Issues](https://github.com/KhEC-IT-Circle/ITCircle_Website/issues)
- Office Hours: Monday - Friday, 10:00 AM - 5:00 PM NPT

---

*This API documentation is maintained by the IT Circle Technical Team. Last updated: 2025-10-01*
