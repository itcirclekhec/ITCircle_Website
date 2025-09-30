from rest_framework import generics, status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404
from .models import Event, EventRegistration
from .serializers import (
    EventSerializer, EventCreateUpdateSerializer,
    EventRegistrationSerializer, RegisterForEventSerializer
)


class EventListView(generics.ListAPIView):
    """
    List all published events with filtering
    """
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        queryset = Event.objects.filter(status='published')
        
        # Filter by category
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)
        
        # Filter by level
        level = self.request.query_params.get('level', None)
        if level:
            queryset = queryset.filter(level=level)
        
        # Filter upcoming or past events
        event_type = self.request.query_params.get('type', 'upcoming')
        from django.utils import timezone
        today = timezone.now().date()
        
        if event_type == 'upcoming':
            queryset = queryset.filter(event_date__gte=today)
        elif event_type == 'past':
            queryset = queryset.filter(event_date__lt=today)
        
        # Search
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(title__icontains=search) | queryset.filter(description__icontains=search)
        
        return queryset


class EventDetailView(generics.RetrieveAPIView):
    """
    Get event details
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'


class EventCreateView(generics.CreateAPIView):
    """
    Create new event (Admin/Moderator only)
    """
    serializer_class = EventCreateUpdateSerializer
    permission_classes = [IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(
            created_by=self.request.user,
            organizer=self.request.user
        )


class EventUpdateView(generics.UpdateAPIView):
    """
    Update event (Admin/Moderator only)
    """
    queryset = Event.objects.all()
    serializer_class = EventCreateUpdateSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'slug'


class EventDeleteView(generics.DestroyAPIView):
    """
    Delete event (Admin only)
    """
    queryset = Event.objects.all()
    permission_classes = [IsAuthenticated]
    lookup_field = 'slug'


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def register_for_event(request, slug):
    """
    Register user for an event
    """
    event = get_object_or_404(Event, slug=slug)
    
    # Check if event is full
    if event.is_full:
        return Response({
            'error': 'Event is full'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    # Check if already registered
    existing_registration = EventRegistration.objects.filter(
        event=event,
        user=request.user
    ).first()
    
    if existing_registration:
        return Response({
            'error': 'Already registered for this event'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    # Create registration
    serializer = RegisterForEventSerializer(data=request.data)
    if serializer.is_valid():
        registration_status = 'pending' if event.requires_approval else 'approved'
        registration = EventRegistration.objects.create(
            event=event,
            user=request.user,
            status=registration_status,
            notes=serializer.validated_data.get('notes', '')
        )
        
        response_serializer = EventRegistrationSerializer(registration)
        return Response({
            'message': 'Registration successful',
            'registration': response_serializer.data
        }, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def cancel_event_registration(request, slug):
    """
    Cancel event registration
    """
    event = get_object_or_404(Event, slug=slug)
    registration = get_object_or_404(
        EventRegistration,
        event=event,
        user=request.user
    )
    
    registration.status = 'cancelled'
    registration.save()
    
    return Response({
        'message': 'Registration cancelled successfully'
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_events(request):
    """
    Get user's registered events
    """
    registrations = EventRegistration.objects.filter(
        user=request.user,
        status__in=['pending', 'approved']
    )
    
    serializer = EventRegistrationSerializer(registrations, many=True)
    return Response({
        'registrations': serializer.data
    }, status=status.HTTP_200_OK)


class EventRegistrationListView(generics.ListAPIView):
    """
    List registrations for an event (Admin/Moderator only)
    """
    serializer_class = EventRegistrationSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        slug = self.kwargs.get('slug')
        event = get_object_or_404(Event, slug=slug)
        return EventRegistration.objects.filter(event=event)
