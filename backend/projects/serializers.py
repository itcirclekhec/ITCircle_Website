from rest_framework import serializers
from .models import Project, ProjectTechnology, ProjectContributor
from users.serializers import UserSerializer


class ProjectSerializer(serializers.ModelSerializer):
    technologies = serializers.SerializerMethodField()
    contributors = serializers.SerializerMethodField()
    contributor_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'description', 'github_url', 'demo_url',
            'image', 'status', 'is_featured', 'stars', 'forks',
            'technologies', 'contributors', 'contributor_count',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'slug', 'created_at', 'updated_at']
    
    def get_technologies(self, obj):
        return [tech.technology for tech in obj.technologies.all()]
    
    def get_contributors(self, obj):
        contributors = obj.contributors.all()[:6]  # Limit to 6
        return [{
            'user': UserSerializer(contrib.user).data,
            'role': contrib.role
        } for contrib in contributors]
    
    def get_contributor_count(self, obj):
        return obj.contributors.count()


class ProjectCreateUpdateSerializer(serializers.ModelSerializer):
    technologies = serializers.ListField(
        child=serializers.CharField(max_length=100),
        required=False,
        allow_empty=True
    )
    
    class Meta:
        model = Project
        fields = [
            'title', 'description', 'github_url', 'demo_url', 'image',
            'status', 'is_featured', 'technologies'
        ]
    
    def create(self, validated_data):
        technologies_data = validated_data.pop('technologies', [])
        
        # Generate slug from title
        from django.utils.text import slugify
        validated_data['slug'] = slugify(validated_data['title'])
        
        project = Project.objects.create(**validated_data)
        
        # Create technologies
        for tech in technologies_data:
            ProjectTechnology.objects.create(project=project, technology=tech)
        
        return project
    
    def update(self, instance, validated_data):
        technologies_data = validated_data.pop('technologies', None)
        
        # Update project fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # Update technologies if provided
        if technologies_data is not None:
            instance.technologies.all().delete()
            for tech in technologies_data:
                ProjectTechnology.objects.create(project=instance, technology=tech)
        
        return instance
