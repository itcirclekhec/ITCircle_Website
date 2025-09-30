from rest_framework import serializers
from .models import Resource, ResourceTag


class ResourceSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    author_name = serializers.SerializerMethodField()
    
    class Meta:
        model = Resource
        fields = [
            'id', 'title', 'slug', 'description', 'category', 'resource_type',
            'format', 'file_url', 'external_url', 'image', 'file_size',
            'duration', 'author', 'author_name', 'is_public', 'requires_membership',
            'downloads', 'views', 'tags', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'slug', 'downloads', 'views', 'created_at', 'updated_at']
    
    def get_tags(self, obj):
        return [tag.tag for tag in obj.tags.all()]
    
    def get_author_name(self, obj):
        return obj.uploaded_by.get_full_name() if obj.uploaded_by else obj.author


class ResourceCreateUpdateSerializer(serializers.ModelSerializer):
    tags = serializers.ListField(
        child=serializers.CharField(max_length=50),
        required=False,
        allow_empty=True
    )
    
    class Meta:
        model = Resource
        fields = [
            'title', 'description', 'category', 'resource_type', 'format',
            'file_url', 'external_url', 'image', 'file_size', 'duration',
            'author', 'is_public', 'requires_membership', 'tags'
        ]
    
    def create(self, validated_data):
        tags_data = validated_data.pop('tags', [])
        
        # Generate slug from title
        from django.utils.text import slugify
        validated_data['slug'] = slugify(validated_data['title'])
        
        resource = Resource.objects.create(**validated_data)
        
        # Create tags
        for tag in tags_data:
            ResourceTag.objects.create(resource=resource, tag=tag)
        
        return resource
    
    def update(self, instance, validated_data):
        tags_data = validated_data.pop('tags', None)
        
        # Update resource fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # Update tags if provided
        if tags_data is not None:
            instance.tags.all().delete()
            for tag in tags_data:
                ResourceTag.objects.create(resource=instance, tag=tag)
        
        return instance
