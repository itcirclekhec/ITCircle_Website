from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User, UserSkill, Badge, UserBadge


class UserSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkill
        fields = ['id', 'skill_name', 'proficiency']


class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = ['id', 'name', 'description', 'icon']


class UserBadgeSerializer(serializers.ModelSerializer):
    badge = BadgeSerializer(read_only=True)
    
    class Meta:
        model = UserBadge
        fields = ['id', 'badge', 'earned_at']


class UserSerializer(serializers.ModelSerializer):
    skills = serializers.SerializerMethodField()
    badges = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    
    class Meta:
        model = User
        fields = [
            'id', 'email', 'name', 'first_name', 'last_name', 'role', 'avatar',
            'department', 'year', 'bio', 'phone', 'student_id',
            'github_url', 'linkedin_url', 'skills', 'badges',
            'joined_at', 'last_login_at', 'is_active'
        ]
        read_only_fields = ['id', 'joined_at', 'last_login_at']
    
    def get_name(self, obj):
        return obj.get_full_name()
    
    def get_skills(self, obj):
        return [skill.skill_name for skill in obj.skills.all()]
    
    def get_badges(self, obj):
        user_badges = obj.badges.all()[:4]  # Limit to 4 badges
        return UserBadgeSerializer(user_badges, many=True).data


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    confirm_password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = [
            'email', 'password', 'confirm_password', 'first_name', 'last_name',
            'department', 'year', 'username'
        ]
    
    def validate(self, data):
        if data.get('password') != data.get('confirm_password'):
            raise serializers.ValidationError("Passwords do not match")
        return data
    
    def create(self, validated_data):
        validated_data.pop('confirm_password')
        
        # Generate username from email if not provided
        if not validated_data.get('username'):
            validated_data['username'] = validated_data['email'].split('@')[0]
        
        user = User.objects.create_user(**validated_data)
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        
        if email and password:
            # Try to authenticate with email
            try:
                user = User.objects.get(email=email)
                user = authenticate(username=user.username, password=password)
            except User.DoesNotExist:
                user = None
            
            if not user:
                raise serializers.ValidationError("Invalid email or password")
            
            if not user.is_active:
                raise serializers.ValidationError("User account is disabled")
            
            data['user'] = user
            return data
        else:
            raise serializers.ValidationError("Must include email and password")


class ProfileUpdateSerializer(serializers.ModelSerializer):
    skills = serializers.ListField(
        child=serializers.CharField(max_length=100),
        required=False,
        allow_empty=True
    )
    
    class Meta:
        model = User
        fields = [
            'first_name', 'last_name', 'avatar', 'department', 'year',
            'bio', 'phone', 'github_url', 'linkedin_url', 'skills'
        ]
    
    def update(self, instance, validated_data):
        skills_data = validated_data.pop('skills', None)
        
        # Update user fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # Update skills if provided
        if skills_data is not None:
            # Remove old skills
            instance.skills.all().delete()
            # Add new skills
            for skill_name in skills_data:
                UserSkill.objects.create(user=instance, skill_name=skill_name)
        
        return instance
