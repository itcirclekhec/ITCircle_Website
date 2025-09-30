"""
API URL Configuration
"""
from django.urls import path, include
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def health_check(request):
    """Health check endpoint"""
    return Response({
        'status': 'ok',
        'message': 'Django backend is running'
    })

urlpatterns = [
    path('health/', health_check, name='health_check'),
    
    # Authentication endpoints
    path('auth/', include('users.urls')),
    
    # Events endpoints
    path('events/', include('events.urls')),
    
    # Projects endpoints
    path('projects/', include('projects.urls')),
    
    # Resources endpoints
    path('resources/', include('resources.urls')),
]
