from rest_framework import generics, permissions
from .models import Project
from .serializers import ProjectSerializer, ProjectCreateUpdateSerializer


class ProjectListView(generics.ListAPIView):
    """
    List all projects with filtering
    """
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]
    
    def get_queryset(self):
        queryset = Project.objects.all()
        
        # Filter by status
        status = self.request.query_params.get('status', None)
        if status:
            queryset = queryset.filter(status=status)
        
        # Filter featured projects
        is_featured = self.request.query_params.get('featured', None)
        if is_featured == 'true':
            queryset = queryset.filter(is_featured=True)
        
        # Search by title or description
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(title__icontains=search) | queryset.filter(description__icontains=search)
        
        # Filter by technology
        tech = self.request.query_params.get('technology', None)
        if tech:
            queryset = queryset.filter(technologies__technology__icontains=tech).distinct()
        
        return queryset


class ProjectDetailView(generics.RetrieveAPIView):
    """
    Get project details
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'


class ProjectCreateView(generics.CreateAPIView):
    """
    Create new project
    """
    serializer_class = ProjectCreateUpdateSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class ProjectUpdateView(generics.UpdateAPIView):
    """
    Update project
    """
    queryset = Project.objects.all()
    serializer_class = ProjectCreateUpdateSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'slug'


class ProjectDeleteView(generics.DestroyAPIView):
    """
    Delete project
    """
    queryset = Project.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'slug'
