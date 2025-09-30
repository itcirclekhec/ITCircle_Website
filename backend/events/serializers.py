from rest_framework import serializers
from .models import Event, EventTag, EventRegistration
from users.serializers import UserSerializer


class EventTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventTag
        fields = ['tag']


class EventSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    attendees = serializers.SerializerMethodField()
    organizer_name = serializers.SerializerMethodField()
    is_registered = serializers.SerializerMethodField()
    
    class Meta:
        model = Event
        fields = [
            'id', 'title', 'slug', 'description', 'category', 'level', 'status',
            'event_date', 'event_time', 'duration', 'location', 'is_online',
            'meeting_link', 'image', 'speaker', 'speaker_bio', 'max_attendees',
            'registration_deadline', 'requires_approval', 'attendees',
            'organizer_name', 'tags', 'is_registered', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'slug', 'created_at', 'updated_at']
    
    def get_tags(self, obj):
        return [tag.tag for tag in obj.tags.all()]
    
    def get_attendees(self, obj):
        return obj.attendee_count
    
    def get_organizer_name(self, obj):
        return obj.organizer.get_full_name() if obj.organizer else obj.speaker
    
    def get_is_registered(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return EventRegistration.objects.filter(
                event=obj,
                user=request.user,
                status__in=['pending', 'approved']
            ).exists()
        return False


class EventCreateUpdateSerializer(serializers.ModelSerializer):
    tags = serializers.ListField(
        child=serializers.CharField(max_length=50),
        required=False,
        allow_empty=True
    )
    
    class Meta:
        model = Event
        fields = [
            'title', 'description', 'category', 'level', 'status',
            'event_date', 'event_time', 'duration', 'location', 'is_online',
            'meeting_link', 'image', 'speaker', 'speaker_bio', 'max_attendees',
            'registration_deadline', 'requires_approval', 'tags'
        ]
    
    def create(self, validated_data):
        tags_data = validated_data.pop('tags', [])
        
        # Generate slug from title
        from django.utils.text import slugify
        validated_data['slug'] = slugify(validated_data['title'])
        
        event = Event.objects.create(**validated_data)
        
        # Create tags
        for tag in tags_data:
            EventTag.objects.create(event=event, tag=tag)
        
        return event
    
    def update(self, instance, validated_data):
        tags_data = validated_data.pop('tags', None)
        
        # Update event fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # Update tags if provided
        if tags_data is not None:
            instance.tags.all().delete()
            for tag in tags_data:
                EventTag.objects.create(event=instance, tag=tag)
        
        return instance


class EventRegistrationSerializer(serializers.ModelSerializer):
    event = EventSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = EventRegistration
        fields = [
            'id', 'event', 'user', 'status', 'notes',
            'attended', 'registered_at', 'updated_at'
        ]
        read_only_fields = ['id', 'registered_at', 'updated_at']


class RegisterForEventSerializer(serializers.Serializer):
    notes = serializers.CharField(required=False, allow_blank=True)
