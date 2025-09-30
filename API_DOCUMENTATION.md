# ITCircle Website - API Documentation

## Base URL
- **Development**: `http://localhost:8000/api`
- **Production**: `https://your-domain.com/api`

## Authentication
The API uses session-based authentication. After logging in, the session cookie is automatically included in subsequent requests.

---

## Authentication Endpoints

### Register User
**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123",
  "confirm_password": "securepassword123",
  "first_name": "John",
  "last_name": "Doe",
  "username": "johndoe",  // Optional, generated from email if not provided
  "department": "CSE",     // Optional
  "year": "3rd"           // Optional
}
```

**Response (201):**
```json
{
  "message": "Registration successful",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "role": "member",
    "department": "CSE",
    "year": "3rd",
    "joined_at": "2024-12-10T10:30:00Z",
    "skills": [],
    "badges": []
  }
}
```

---

### Login
**POST** `/auth/login`

Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "role": "member",
    "avatar": null,
    "department": "CSE",
    "year": "3rd",
    "bio": null,
    "skills": ["React", "Python"],
    "badges": [],
    "joined_at": "2024-12-10T10:30:00Z"
  }
}
```

---

### Logout
**POST** `/auth/logout`

Logout current user.

**Headers:**
- `Cookie: sessionid=<session_id>`

**Response (200):**
```json
{
  "message": "Logout successful"
}
```

---

### Get Current User
**GET** `/auth/me`

Get currently authenticated user details.

**Headers:**
- `Cookie: sessionid=<session_id>`

**Response (200):**
```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "role": "member",
    "avatar": "https://example.com/avatar.jpg",
    "department": "CSE",
    "year": "3rd",
    "bio": "Passionate developer",
    "skills": ["React", "Python", "Django"],
    "badges": [
      {
        "id": 1,
        "badge": {
          "id": 1,
          "name": "Top Contributor",
          "description": "Made 50+ contributions",
          "icon": "🏆"
        },
        "earned_at": "2024-11-15T08:00:00Z"
      }
    ],
    "joined_at": "2024-10-01T10:30:00Z"
  }
}
```

---

### Update Profile
**PATCH** `/auth/profile`

Update current user's profile.

**Headers:**
- `Cookie: sessionid=<session_id>`

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Smith",
  "avatar": "https://example.com/new-avatar.jpg",
  "bio": "Full-stack developer passionate about web technologies",
  "phone": "+880 1234-567890",
  "github_url": "https://github.com/johnsmith",
  "linkedin_url": "https://linkedin.com/in/johnsmith",
  "skills": ["React", "Node.js", "Python", "Django", "PostgreSQL"]
}
```

**Response (200):**
```json
{
  "message": "Profile updated successfully",
  "user": { /* Updated user object */ }
}
```

---

### List Users
**GET** `/auth/`

Get list of all users with optional filtering.

**Query Parameters:**
- `role` - Filter by role (admin, moderator, member, guest)
- `department` - Filter by department (CSE, EEE, ME, CE, IPE)
- `search` - Search by name or email

**Example:**
```
GET /auth/?role=member&department=CSE&search=john
```

**Response (200):**
```json
{
  "count": 50,
  "next": "http://localhost:8000/api/auth/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe",
      "role": "member",
      "department": "CSE",
      "year": "3rd",
      "skills": ["React", "Python"],
      "badges": []
    }
  ]
}
```

---

### Get User Details
**GET** `/auth/<user_id>`

Get details of a specific user.

**Response (200):**
```json
{
  "id": 1,
  "email": "user@example.com",
  "name": "John Doe",
  "role": "member",
  "avatar": "https://example.com/avatar.jpg",
  "department": "CSE",
  "year": "3rd",
  "bio": "Passionate developer",
  "github_url": "https://github.com/johndoe",
  "linkedin_url": "https://linkedin.com/in/johndoe",
  "skills": ["React", "Python", "Django"],
  "badges": [],
  "joined_at": "2024-10-01T10:30:00Z"
}
```

---

## Events Endpoints

### List Events
**GET** `/events/`

Get list of published events with filtering.

**Query Parameters:**
- `category` - Filter by category (workshop, hackathon, seminar, competition, meetup)
- `level` - Filter by difficulty level (beginner, intermediate, advanced, all)
- `type` - Filter by time (upcoming, past) - default: upcoming
- `search` - Search by title or description

**Example:**
```
GET /events/?category=workshop&level=intermediate&type=upcoming
```

**Response (200):**
```json
{
  "count": 12,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "React Advanced Workshop",
      "slug": "react-advanced-workshop",
      "description": "Deep dive into React hooks and performance",
      "category": "workshop",
      "level": "intermediate",
      "status": "published",
      "event_date": "2024-12-15",
      "event_time": "14:00:00",
      "duration": "3 hours",
      "location": "Computer Lab 2, KhEC",
      "is_online": false,
      "meeting_link": null,
      "image": "https://images.unsplash.com/photo-xyz",
      "speaker": "Dr. Mahmud Hasan",
      "speaker_bio": "Senior Software Engineer with 10+ years experience",
      "max_attendees": 60,
      "registration_deadline": "2024-12-14T23:59:59Z",
      "requires_approval": false,
      "attendees": 45,
      "organizer_name": "Dr. Mahmud Hasan",
      "tags": ["React", "Frontend", "JavaScript"],
      "is_registered": false,
      "created_at": "2024-12-01T10:00:00Z",
      "updated_at": "2024-12-05T14:30:00Z"
    }
  ]
}
```

---

### Get Event Details
**GET** `/events/<slug>`

Get detailed information about a specific event.

**Response (200):**
```json
{
  "id": 1,
  "title": "React Advanced Workshop",
  "slug": "react-advanced-workshop",
  "description": "Comprehensive workshop covering...",
  "category": "workshop",
  "level": "intermediate",
  "status": "published",
  "event_date": "2024-12-15",
  "event_time": "14:00:00",
  "duration": "3 hours",
  "location": "Computer Lab 2, KhEC",
  "is_online": false,
  "meeting_link": null,
  "image": "https://images.unsplash.com/photo-xyz",
  "speaker": "Dr. Mahmud Hasan",
  "speaker_bio": "Senior Software Engineer...",
  "max_attendees": 60,
  "registration_deadline": "2024-12-14T23:59:59Z",
  "requires_approval": false,
  "attendees": 45,
  "organizer_name": "Dr. Mahmud Hasan",
  "tags": ["React", "Frontend", "JavaScript"],
  "is_registered": true,
  "created_at": "2024-12-01T10:00:00Z",
  "updated_at": "2024-12-05T14:30:00Z"
}
```

---

### Create Event
**POST** `/events/create`

Create a new event (requires authentication).

**Headers:**
- `Cookie: sessionid=<session_id>`

**Request Body:**
```json
{
  "title": "Python Data Science Workshop",
  "description": "Learn pandas, numpy, and visualization",
  "category": "workshop",
  "level": "beginner",
  "status": "published",
  "event_date": "2024-12-20",
  "event_time": "10:00:00",
  "duration": "4 hours",
  "location": "Software Lab, KhEC",
  "is_online": false,
  "meeting_link": null,
  "image": "https://example.com/event-image.jpg",
  "speaker": "Prof. Ayesha Rahman",
  "speaker_bio": "Data Science expert",
  "max_attendees": 40,
  "registration_deadline": "2024-12-19T23:59:59Z",
  "requires_approval": false,
  "tags": ["Python", "Data Science", "Pandas"]
}
```

**Response (201):**
```json
{
  "id": 5,
  "title": "Python Data Science Workshop",
  "slug": "python-data-science-workshop",
  // ... other fields
}
```

---

### Update Event
**PUT/PATCH** `/events/<slug>/update`

Update an existing event.

**Headers:**
- `Cookie: sessionid=<session_id>`

**Request Body:** (same as create, all fields optional for PATCH)

---

### Delete Event
**DELETE** `/events/<slug>/delete`

Delete an event (admin only).

**Headers:**
- `Cookie: sessionid=<session_id>`

**Response (204):** No content

---

### Register for Event
**POST** `/events/<slug>/register`

Register current user for an event.

**Headers:**
- `Cookie: sessionid=<session_id>`

**Request Body:**
```json
{
  "notes": "Looking forward to this workshop!" // Optional
}
```

**Response (201):**
```json
{
  "message": "Registration successful",
  "registration": {
    "id": 123,
    "event": { /* Event object */ },
    "user": { /* User object */ },
    "status": "approved",
    "notes": "Looking forward to this workshop!",
    "attended": false,
    "registered_at": "2024-12-10T15:30:00Z",
    "updated_at": "2024-12-10T15:30:00Z"
  }
}
```

---

### Cancel Registration
**DELETE** `/events/<slug>/cancel`

Cancel event registration.

**Headers:**
- `Cookie: sessionid=<session_id>`

**Response (200):**
```json
{
  "message": "Registration cancelled successfully"
}
```

---

### Get My Events
**GET** `/events/my/events`

Get all events the current user is registered for.

**Headers:**
- `Cookie: sessionid=<session_id>`

**Response (200):**
```json
{
  "registrations": [
    {
      "id": 123,
      "event": { /* Event object */ },
      "user": { /* User object */ },
      "status": "approved",
      "notes": "",
      "attended": false,
      "registered_at": "2024-12-10T15:30:00Z"
    }
  ]
}
```

---

### Get Event Registrations
**GET** `/events/<slug>/registrations`

Get all registrations for a specific event (admin/moderator only).

**Headers:**
- `Cookie: sessionid=<session_id>`

**Response (200):**
```json
{
  "count": 45,
  "results": [
    {
      "id": 123,
      "event": { /* Event object */ },
      "user": { /* User object */ },
      "status": "approved",
      "attended": false,
      "registered_at": "2024-12-10T15:30:00Z"
    }
  ]
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "field_name": ["Error message"],
  "another_field": ["Another error message"]
}
```

### 401 Unauthorized
```json
{
  "detail": "Authentication credentials were not provided."
}
```

### 403 Forbidden
```json
{
  "detail": "You do not have permission to perform this action."
}
```

### 404 Not Found
```json
{
  "detail": "Not found."
}
```

### 500 Internal Server Error
```json
{
  "detail": "Internal server error."
}
```

---

## Using the API from Frontend

### Example: Login
```typescript
import { api } from '@/lib/api'

try {
  const response = await api.post('/api/django/auth/login', {
    email: 'user@example.com',
    password: 'password123'
  })
  console.log('Logged in:', response.user)
} catch (error) {
  console.error('Login failed:', error)
}
```

### Example: Get Events
```typescript
import { api } from '@/lib/api'

try {
  const events = await api.get('/api/django/events/', {
    params: {
      category: 'workshop',
      type: 'upcoming'
    }
  })
  console.log('Events:', events.results)
} catch (error) {
  console.error('Failed to fetch events:', error)
}
```

### Example: Register for Event
```typescript
import { api } from '@/lib/api'

try {
  const response = await api.post('/api/django/events/react-workshop/register', {
    notes: 'Excited to attend!'
  })
  console.log('Registered:', response.registration)
} catch (error) {
  console.error('Registration failed:', error)
}
```

---

## Rate Limiting
Currently no rate limiting is implemented. In production, consider implementing rate limiting for:
- Authentication endpoints: 5 requests per minute
- Registration endpoints: 3 requests per minute
- General API: 100 requests per minute

---

## Pagination
All list endpoints support pagination with the following query parameters:
- `page` - Page number (default: 1)
- `page_size` - Items per page (default: 20, max: 100)

Example:
```
GET /events/?page=2&page_size=10
```

---

## Next Steps for Backend

1. **Projects App** - Create models and endpoints for project management
2. **Resources App** - Create models and endpoints for resource library
3. **Contact App** - Create contact form submission endpoint
4. **Join App** - Create membership application endpoint
5. **Admin Analytics** - Add analytics endpoints for dashboard
6. **File Upload** - Implement file upload for avatars and resources
7. **Email Notifications** - Set up email service for notifications
8. **OAuth Integration** - Implement GitHub and Google OAuth
9. **Permissions** - Add role-based permissions decorators
10. **Testing** - Write unit and integration tests
