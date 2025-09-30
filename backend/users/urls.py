from django.urls import path
from . import views

urlpatterns = [
    # Authentication endpoints
    path('register', views.register_view, name='register'),
    path('login', views.login_view, name='login'),
    path('logout', views.logout_view, name='logout'),
    path('me', views.me_view, name='me'),
    path('profile', views.update_profile_view, name='update_profile'),
    
    # User listing and details
    path('', views.UserListView.as_view(), name='user_list'),
    path('<int:pk>', views.UserDetailView.as_view(), name='user_detail'),
]
