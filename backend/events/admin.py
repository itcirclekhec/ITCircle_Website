from django.contrib import admin
from .models import Event, EventTag, EventRegistration


class EventTagInline(admin.TabularInline):
    model = EventTag
    extra = 1


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'level', 'status', 'event_date', 'attendee_count', 'max_attendees']
    list_filter = ['category', 'level', 'status', 'event_date', 'is_online']
    search_fields = ['title', 'description', 'speaker']
    prepopulated_fields = {'slug': ('title',)}
    inlines = [EventTagInline]
    date_hierarchy = 'event_date'


@admin.register(EventRegistration)
class EventRegistrationAdmin(admin.ModelAdmin):
    list_display = ['user', 'event', 'status', 'attended', 'registered_at']
    list_filter = ['status', 'attended', 'registered_at']
    search_fields = ['user__email', 'event__title']
