from django.urls import path
from . import views

urlpatterns = [
    path('', views.ResourceListView.as_view(), name='resource_list'),
    path('create', views.ResourceCreateView.as_view(), name='resource_create'),
    path('<slug:slug>', views.ResourceDetailView.as_view(), name='resource_detail'),
    path('<slug:slug>/update', views.ResourceUpdateView.as_view(), name='resource_update'),
    path('<slug:slug>/delete', views.ResourceDeleteView.as_view(), name='resource_delete'),
    path('<slug:slug>/download', views.download_resource, name='download_resource'),
]
