from django.contrib import admin
from .models import Resource, ResourceTag, ResourceDownload


class ResourceTagInline(admin.TabularInline):
    model = ResourceTag
    extra = 1


@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'resource_type', 'format', 'is_public', 'downloads', 'views', 'created_at']
    list_filter = ['category', 'resource_type', 'format', 'is_public', 'requires_membership', 'created_at']
    search_fields = ['title', 'description', 'author']
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ResourceTagInline]


@admin.register(ResourceDownload)
class ResourceDownloadAdmin(admin.ModelAdmin):
    list_display = ['resource', 'user', 'downloaded_at', 'ip_address']
    list_filter = ['downloaded_at']
    search_fields = ['resource__title', 'user__email']
