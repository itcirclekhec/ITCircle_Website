from django.db import models
from django.conf import settings


class Resource(models.Model):
    """
    Learning resources
    """
    CATEGORY_CHOICES = (
        ('web', 'Web Development'),
        ('mobile', 'Mobile Development'),
        ('ml', 'ML/AI'),
        ('data', 'Data Science'),
        ('devops', 'DevOps'),
        ('design', 'UI/UX Design'),
        ('other', 'Other'),
    )
    
    TYPE_CHOICES = (
        ('tutorial', 'Tutorial'),
        ('video', 'Video'),
        ('slides', 'Slides'),
        ('code', 'Code Samples'),
        ('article', 'Article'),
        ('book', 'Book'),
    )
    
    FORMAT_CHOICES = (
        ('PDF', 'PDF'),
        ('Video', 'Video'),
        ('PPTX', 'PowerPoint'),
        ('ZIP', 'ZIP Archive'),
        ('Notebook', 'Jupyter Notebook'),
        ('Article', 'Web Article'),
        ('Other', 'Other'),
    )
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=250, unique=True)
    description = models.TextField()
    
    # Classification
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    resource_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    format = models.CharField(max_length=20, choices=FORMAT_CHOICES)
    
    # Files/Links
    file_url = models.URLField(blank=True, null=True)
    external_url = models.URLField(blank=True, null=True)
    image = models.URLField(blank=True, null=True)
    
    # Metadata
    file_size = models.CharField(max_length=50, blank=True, null=True)  # e.g., "2.4 MB"
    duration = models.CharField(max_length=50, blank=True, null=True)  # e.g., "45 min read"
    author = models.CharField(max_length=200)
    
    # Access control
    is_public = models.BooleanField(default=True)
    requires_membership = models.BooleanField(default=False)
    
    # Stats
    downloads = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    
    # Tracking
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    uploaded_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='uploaded_resources'
    )
    
    class Meta:
        db_table = 'resources'
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title


class ResourceTag(models.Model):
    """
    Tags for resources
    """
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE, related_name='tags')
    tag = models.CharField(max_length=50)
    
    class Meta:
        db_table = 'resource_tags'
        unique_together = ('resource', 'tag')
    
    def __str__(self):
        return f"{self.resource.title} - {self.tag}"


class ResourceDownload(models.Model):
    """
    Track resource downloads
    """
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE, related_name='download_records')
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='resource_downloads'
    )
    downloaded_at = models.DateTimeField(auto_now_add=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    
    class Meta:
        db_table = 'resource_downloads'
        ordering = ['-downloaded_at']
    
    def __str__(self):
        return f"{self.user.email if self.user else 'Anonymous'} - {self.resource.title}"
