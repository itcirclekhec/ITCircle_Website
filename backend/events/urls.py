from django.urls import path
from . import views

urlpatterns = [
    # Event CRUD
    path('', views.EventListView.as_view(), name='event_list'),
    path('create', views.EventCreateView.as_view(), name='event_create'),
    path('<slug:slug>', views.EventDetailView.as_view(), name='event_detail'),
    path('<slug:slug>/update', views.EventUpdateView.as_view(), name='event_update'),
    path('<slug:slug>/delete', views.EventDeleteView.as_view(), name='event_delete'),
    
    # Registration
    path('<slug:slug>/register', views.register_for_event, name='register_for_event'),
    path('<slug:slug>/cancel', views.cancel_event_registration, name='cancel_registration'),
    path('<slug:slug>/registrations', views.EventRegistrationListView.as_view(), name='event_registrations'),
    
    # User events
    path('my/events', views.my_events, name='my_events'),
]
