from django.db import models
from django.conf import settings


class Project(models.Model):
    """
    Student projects
    """
    STATUS_CHOICES = (
        ('active', 'Active'),
        ('completed', 'Completed'),
        ('archived', 'Archived'),
    )
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=250, unique=True)
    description = models.TextField()
    
    # Links
    github_url = models.URLField()
    demo_url = models.URLField(blank=True, null=True)
    image = models.URLField(blank=True, null=True)
    
    # Metadata
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    is_featured = models.BooleanField(default=False)
    
    # Stats (can be synced from GitHub API)
    stars = models.IntegerField(default=0)
    forks = models.IntegerField(default=0)
    
    # Tracking
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='created_projects'
    )
    
    class Meta:
        db_table = 'projects'
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title


class ProjectTechnology(models.Model):
    """
    Technologies used in projects
    """
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='technologies')
    technology = models.CharField(max_length=100)
    
    class Meta:
        db_table = 'project_technologies'
        unique_together = ('project', 'technology')
    
    def __str__(self):
        return f"{self.project.title} - {self.technology}"


class ProjectContributor(models.Model):
    """
    Contributors to projects
    """
    ROLE_CHOICES = (
        ('lead', 'Lead Developer'),
        ('developer', 'Developer'),
        ('designer', 'Designer'),
        ('contributor', 'Contributor'),
    )
    
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='contributors')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='project_contributions')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='contributor')
    joined_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'project_contributors'
        unique_together = ('project', 'user')
        ordering = ['-joined_at']
    
    def __str__(self):
        return f"{self.user.email} - {self.project.title} ({self.role})"
