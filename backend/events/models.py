from django.db import models
from django.conf import settings


class Event(models.Model):
    """
    Events and workshops
    """
    CATEGORY_CHOICES = (
        ('workshop', 'Workshop'),
        ('hackathon', 'Hackathon'),
        ('seminar', 'Seminar'),
        ('competition', 'Competition'),
        ('meetup', 'Meetup'),
    )
    
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    )
    
    LEVEL_CHOICES = (
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
        ('all', 'All Levels'),
    )
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=250, unique=True)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES, default='all')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')
    
    # Date and time
    event_date = models.DateField()
    event_time = models.TimeField()
    duration = models.CharField(max_length=50, help_text="e.g., 2 hours, 3 days")
    
    # Location
    location = models.CharField(max_length=200)
    is_online = models.BooleanField(default=False)
    meeting_link = models.URLField(blank=True, null=True)
    
    # Media
    image = models.URLField(blank=True, null=True)
    
    # Speaker/Organizer
    speaker = models.CharField(max_length=200)
    speaker_bio = models.TextField(blank=True, null=True)
    organizer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='organized_events'
    )
    
    # Registration
    max_attendees = models.IntegerField(default=50)
    registration_deadline = models.DateTimeField(null=True, blank=True)
    requires_approval = models.BooleanField(default=False)
    
    # Tracking
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='created_events'
    )
    
    class Meta:
        db_table = 'events'
        ordering = ['-event_date', '-event_time']
    
    def __str__(self):
        return self.title
    
    @property
    def attendee_count(self):
        return self.registrations.filter(status='approved').count()
    
    @property
    def is_full(self):
        return self.attendee_count >= self.max_attendees


class EventTag(models.Model):
    """
    Tags for events
    """
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='tags')
    tag = models.CharField(max_length=50)
    
    class Meta:
        db_table = 'event_tags'
        unique_together = ('event', 'tag')
    
    def __str__(self):
        return f"{self.event.title} - {self.tag}"


class EventRegistration(models.Model):
    """
    User registrations for events
    """
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('cancelled', 'Cancelled'),
        ('attended', 'Attended'),
    )
    
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='registrations')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='event_registrations')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='approved')
    
    # Additional info
    notes = models.TextField(blank=True, null=True)
    attended = models.BooleanField(default=False)
    
    # Tracking
    registered_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'event_registrations'
        unique_together = ('event', 'user')
        ordering = ['-registered_at']
    
    def __str__(self):
        return f"{self.user.email} - {self.event.title}"
