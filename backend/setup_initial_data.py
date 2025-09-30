"""
Initial data setup script for ITCircle Website
Run this after migrations to populate the database with sample data
Usage: python manage.py shell < setup_initial_data.py
"""

from users.models import User, Badge
from events.models import Event, EventTag
from projects.models import Project, ProjectTechnology
from resources.models import Resource, ResourceTag
from django.utils import timezone
from datetime import timedelta

print("Creating sample data for ITCircle Website...")

# Create Badges
badges_data = [
    {"name": "Top Contributor", "description": "Made 50+ contributions", "icon": "🏆", "criteria": "50+ contributions"},
    {"name": "Early Bird", "description": "Joined in first month", "icon": "⚡", "criteria": "Joined within first month"},
    {"name": "Project Leader", "description": "Led a successful project", "icon": "🎯", "criteria": "Lead developer role in project"},
    {"name": "Rising Star", "description": "Showed exceptional growth", "icon": "🌟", "criteria": "Rapid skill development"},
    {"name": "Mentor", "description": "Helped 10+ members", "icon": "🎓", "criteria": "Mentored 10+ members"},
    {"name": "Event Organizer", "description": "Organized 5+ events", "icon": "📅", "criteria": "Organized 5+ events"},
]

for badge_data in badges_data:
    badge, created = Badge.objects.get_or_create(**badge_data)
    if created:
        print(f"✓ Created badge: {badge.name}")

# Create sample events
events_data = [
    {
        "title": "React Advanced Workshop",
        "slug": "react-advanced-workshop",
        "description": "Deep dive into advanced React patterns, hooks, performance optimization, and state management with Redux Toolkit and Zustand.",
        "category": "workshop",
        "level": "intermediate",
        "status": "published",
        "event_date": (timezone.now() + timedelta(days=5)).date(),
        "event_time": "14:00:00",
        "duration": "3 hours",
        "location": "Computer Lab 2, KhEC",
        "is_online": False,
        "speaker": "Dr. Mahmud Hasan",
        "speaker_bio": "Senior Software Engineer with 10+ years experience in React development",
        "max_attendees": 60,
        "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        "tags": ["React", "Frontend", "JavaScript"]
    },
    {
        "title": "AI/ML Fundamentals Seminar",
        "slug": "ai-ml-fundamentals-seminar",
        "description": "Introduction to artificial intelligence and machine learning concepts, algorithms, and practical applications in modern software development.",
        "category": "seminar",
        "level": "beginner",
        "status": "published",
        "event_date": (timezone.now() + timedelta(days=8)).date(),
        "event_time": "18:00:00",
        "duration": "2 hours",
        "location": "Auditorium, KhEC",
        "is_online": False,
        "speaker": "Prof. Ayesha Rahman",
        "speaker_bio": "AI researcher and professor specializing in machine learning",
        "max_attendees": 150,
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        "tags": ["AI", "ML", "Python"]
    },
    {
        "title": "Winter Hackathon 2024",
        "slug": "winter-hackathon-2024",
        "description": "48-hour coding marathon to build innovative solutions for real-world problems. Form teams, collaborate, and compete for exciting prizes!",
        "category": "hackathon",
        "level": "all",
        "status": "published",
        "event_date": (timezone.now() + timedelta(days=10)).date(),
        "event_time": "09:00:00",
        "duration": "48 hours",
        "location": "Innovation Hub, KhEC",
        "is_online": False,
        "speaker": "Multiple Mentors",
        "speaker_bio": "Industry experts and senior students",
        "max_attendees": 120,
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
        "tags": ["Hackathon", "Team", "Competition"]
    }
]

for event_data in events_data:
    tags = event_data.pop('tags', [])
    event, created = Event.objects.get_or_create(
        slug=event_data['slug'],
        defaults=event_data
    )
    if created:
        print(f"✓ Created event: {event.title}")
        for tag in tags:
            EventTag.objects.get_or_create(event=event, tag=tag)

# Create sample projects
projects_data = [
    {
        "title": "Smart Campus Management System",
        "slug": "smart-campus-management-system",
        "description": "IoT-based comprehensive campus management platform with real-time monitoring, automated controls, and data analytics for efficient resource management.",
        "github_url": "https://github.com/khec-it/smart-campus",
        "demo_url": "https://smart-campus-demo.khec.edu.bd",
        "status": "active",
        "is_featured": True,
        "stars": 45,
        "forks": 12,
        "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        "technologies": ["React", "Node.js", "MongoDB", "Arduino", "IoT"]
    },
    {
        "title": "AI Course Recommendation Engine",
        "slug": "ai-course-recommendation-engine",
        "description": "Machine learning system that analyzes student performance, interests, and career goals to recommend optimal course sequences and learning paths.",
        "github_url": "https://github.com/khec-it/ai-course-rec",
        "demo_url": "https://course-rec-demo.khec.edu.bd",
        "status": "active",
        "is_featured": True,
        "stars": 67,
        "forks": 18,
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
        "technologies": ["Python", "TensorFlow", "Flask", "PostgreSQL", "Scikit-learn"]
    },
    {
        "title": "Digital Library Portal",
        "slug": "digital-library-portal",
        "description": "Modern digital library with advanced search capabilities, AI-powered recommendation system, collaborative reading features, and seamless integration with academic resources.",
        "github_url": "https://github.com/khec-it/digital-library",
        "demo_url": "https://library-demo.khec.edu.bd",
        "status": "active",
        "is_featured": True,
        "stars": 89,
        "forks": 23,
        "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
        "technologies": ["Next.js", "Prisma", "PostgreSQL", "Elasticsearch", "Redis"]
    }
]

for project_data in projects_data:
    technologies = project_data.pop('technologies', [])
    project, created = Project.objects.get_or_create(
        slug=project_data['slug'],
        defaults=project_data
    )
    if created:
        print(f"✓ Created project: {project.title}")
        for tech in technologies:
            ProjectTechnology.objects.get_or_create(project=project, technology=tech)

# Create sample resources
resources_data = [
    {
        "title": "Complete React Hooks Guide",
        "slug": "complete-react-hooks-guide",
        "description": "Comprehensive guide covering all React hooks including useState, useEffect, useContext, and custom hooks with practical examples.",
        "category": "web",
        "resource_type": "tutorial",
        "format": "PDF",
        "file_size": "2.4 MB",
        "duration": "45 min read",
        "author": "Dr. Mahmud Hasan",
        "is_public": True,
        "file_url": "https://example.com/react-hooks-guide.pdf",
        "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
        "tags": ["React", "JavaScript", "Frontend"]
    },
    {
        "title": "Machine Learning Fundamentals Workshop",
        "slug": "machine-learning-fundamentals-workshop",
        "description": "Recording of our popular ML workshop covering supervised learning, neural networks, and practical implementations with scikit-learn and TensorFlow.",
        "category": "ml",
        "resource_type": "video",
        "format": "Video",
        "file_size": "450 MB",
        "duration": "2h 30min",
        "author": "Prof. Ayesha Rahman",
        "is_public": True,
        "external_url": "https://youtube.com/watch?v=example",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        "tags": ["ML", "AI", "Python", "TensorFlow"]
    },
    {
        "title": "Docker & Kubernetes Workshop Slides",
        "slug": "docker-kubernetes-workshop-slides",
        "description": "Complete slide deck from our DevOps workshop covering containerization, orchestration, and deployment strategies.",
        "category": "devops",
        "resource_type": "slides",
        "format": "PPTX",
        "file_size": "12 MB",
        "duration": "1h presentation",
        "author": "Eng. Karim Ahmed",
        "is_public": True,
        "file_url": "https://example.com/docker-k8s-slides.pptx",
        "image": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
        "tags": ["Docker", "Kubernetes", "DevOps"]
    }
]

for resource_data in resources_data:
    tags = resource_data.pop('tags', [])
    resource, created = Resource.objects.get_or_create(
        slug=resource_data['slug'],
        defaults=resource_data
    )
    if created:
        print(f"✓ Created resource: {resource.title}")
        for tag in tags:
            ResourceTag.objects.get_or_create(resource=resource, tag=tag)

print("\n✅ Sample data creation complete!")
print("\nSummary:")
print(f"- {Badge.objects.count()} badges")
print(f"- {Event.objects.count()} events")
print(f"- {Project.objects.count()} projects")
print(f"- {Resource.objects.count()} resources")
print("\nYou can now test the application with this sample data!")
