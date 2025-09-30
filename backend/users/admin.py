from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, UserSkill, Badge, UserBadge


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ['email', 'username', 'get_full_name', 'role', 'department', 'is_active', 'joined_at']
    list_filter = ['role', 'department', 'is_active', 'joined_at']
    search_fields = ['email', 'username', 'first_name', 'last_name', 'student_id']
    ordering = ['-joined_at']
    
    fieldsets = BaseUserAdmin.fieldsets + (
        ('Custom Fields', {
            'fields': ('role', 'avatar', 'department', 'year', 'bio', 'phone', 
                      'student_id', 'github_url', 'linkedin_url', 'github_id', 'google_id')
        }),
    )


@admin.register(UserSkill)
class UserSkillAdmin(admin.ModelAdmin):
    list_display = ['user', 'skill_name', 'proficiency', 'created_at']
    list_filter = ['proficiency', 'created_at']
    search_fields = ['user__email', 'skill_name']


@admin.register(Badge)
class BadgeAdmin(admin.ModelAdmin):
    list_display = ['name', 'icon', 'created_at']
    search_fields = ['name', 'description']


@admin.register(UserBadge)
class UserBadgeAdmin(admin.ModelAdmin):
    list_display = ['user', 'badge', 'earned_at']
    list_filter = ['badge', 'earned_at']
    search_fields = ['user__email', 'badge__name']
