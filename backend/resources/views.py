from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Resource, ResourceDownload
from .serializers import ResourceSerializer, ResourceCreateUpdateSerializer


class ResourceListView(generics.ListAPIView):
    """
    List all resources with filtering
    """
    serializer_class = ResourceSerializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        queryset = Resource.objects.filter(is_public=True)
        
        # Filter by category
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)
        
        # Filter by type
        resource_type = self.request.query_params.get('type', None)
        if resource_type:
            queryset = queryset.filter(resource_type=resource_type)
        
        # Search
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(title__icontains=search) | queryset.filter(description__icontains=search)
        
        # Filter by tags
        tag = self.request.query_params.get('tag', None)
        if tag:
            queryset = queryset.filter(tags__tag__icontains=tag).distinct()
        
        return queryset


class ResourceDetailView(generics.RetrieveAPIView):
    """
    Get resource details
    """
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        # Increment view count
        instance.views += 1
        instance.save(update_fields=['views'])
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class ResourceCreateView(generics.CreateAPIView):
    """
    Create new resource
    """
    serializer_class = ResourceCreateUpdateSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)


class ResourceUpdateView(generics.UpdateAPIView):
    """
    Update resource
    """
    queryset = Resource.objects.all()
    serializer_class = ResourceCreateUpdateSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'slug'


class ResourceDeleteView(generics.DestroyAPIView):
    """
    Delete resource
    """
    queryset = Resource.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'slug'


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticatedOrReadOnly])
def download_resource(request, slug):
    """
    Track resource download
    """
    resource = get_object_or_404(Resource, slug=slug)
    
    # Check access permissions
    if resource.requires_membership and not request.user.is_authenticated:
        return Response({
            'error': 'Authentication required to download this resource'
        }, status=status.HTTP_401_UNAUTHORIZED)
    
    # Track download
    ip_address = request.META.get('REMOTE_ADDR')
    ResourceDownload.objects.create(
        resource=resource,
        user=request.user if request.user.is_authenticated else None,
        ip_address=ip_address
    )
    
    # Increment download count
    resource.downloads += 1
    resource.save(update_fields=['downloads'])
    
    return Response({
        'message': 'Download tracked',
        'download_url': resource.file_url or resource.external_url
    }, status=status.HTTP_200_OK)
