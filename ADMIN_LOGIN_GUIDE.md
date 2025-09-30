# Admin Login Guide

## How to Login as Admin

There are two ways to access the admin features:

### Option 1: Create Admin User Through Django Admin (Recommended)

1. **Access Django Admin Panel**
   ```
   http://localhost:8000/admin
   ```

2. **Login with your Django superuser credentials**
   - Email: (the one you created with `createsuperuser`)
   - Password: (the one you set)

3. **Create a Frontend User**
   - Click on **"Users"** in the left sidebar
   - Click **"Add User"** button (top right)
   - Fill in the form:
     - **Email**: admin@khec.edu.bd (or your preferred email)
     - **Password**: (set a password)
     - **Username**: admin
     - **First name**: Admin
     - **Last name**: User
     - **Role**: Select **"admin"** from dropdown
     - **Is active**: ✓ (checked)
     - **Is staff**: ✓ (checked)
     - **Is superuser**: ✓ (checked)
   - Click **"Save"**

4. **Now Login on Frontend**
   - Go to http://localhost:3000
   - Click "Sign In" button in top right
   - Enter:
     - Email: admin@khec.edu.bd
     - Password: (the password you set)
   - Click Login

5. **Access Admin Features**
   - After login, click your name in top right
   - You'll see "Admin Panel" option in dropdown
   - Click it to access /admin page

### Option 2: Register Through Frontend Then Upgrade Role

1. **Register a new account**
   - Go to http://localhost:3000/register
   - Fill in registration form
   - Complete registration

2. **Upgrade to Admin in Django Admin**
   - Go to http://localhost:8000/admin
   - Login with Django superuser
   - Click "Users"
   - Find your newly registered user
   - Click to edit
   - Change **Role** to "admin"
   - Check **Is staff** and **Is superuser** boxes
   - Save

3. **Logout and Login Again**
   - Logout from frontend
   - Login again
   - You should now see admin options

---

## Why Django Superuser Can't Login Directly?

The Django superuser you created with `createsuperuser` command is primarily for Django admin access, not the frontend. Here's why:

1. **Different User Model Fields**: The custom User model has additional fields (role, first_name, last_name, etc.) that the superuser might not have set properly.

2. **API Expectations**: The frontend login API expects specific field formats and validations.

3. **Best Practice**: Separate admin panel access from application user access.

---

## Quick Admin User Creation Script

You can also create an admin user via Django shell:

```bash
cd backend
python manage.py shell
```

```python
from users.models import User

# Create admin user
admin = User.objects.create_user(
    email='admin@khec.edu.bd',
    username='admin',
    password='your_secure_password',  # Change this!
    first_name='Admin',
    last_name='User',
    role='admin',
    is_staff=True,
    is_superuser=True
)

print(f"Admin user created: {admin.email}")
exit()
```

---

## Testing Admin Access

After creating admin user:

1. **Test Frontend Login**:
   ```
   http://localhost:3000/login
   ```
   - Email: admin@khec.edu.bd
   - Password: your_secure_password

2. **Check User Menu**:
   - After login, click your name/icon in top right
   - You should see:
     - Dashboard
     - Admin Panel ← This should be visible
     - Settings
     - Logout

3. **Access Admin Dashboard**:
   - Click "Admin Panel"
   - You should see the admin dashboard at /admin
   - All management features should be accessible

---

## Troubleshooting

### "Login button not showing in navbar"
- Clear browser cache and refresh
- Make sure frontend server is running: `npm run dev`
- Check browser console for errors

### "Can't see Admin Panel option after login"
- Verify user role is set to "admin" in Django admin
- Logout and login again
- Check browser console for errors

### "Invalid credentials" error
- Make sure you're using the frontend user account (not Django superuser)
- Password is case-sensitive
- Try resetting password in Django admin

### "Session not persisting"
- Check that backend is running on correct port (8000)
- Check CORS settings in Django
- Clear browser cookies and try again

---

## Default Admin Credentials

After following Option 1, you'll have:

**Django Admin Access:**
- URL: http://localhost:8000/admin
- Email: (your superuser email)
- Password: (your superuser password)

**Frontend Admin Access:**
- URL: http://localhost:3000/login
- Email: admin@khec.edu.bd
- Password: (password you set when creating user)

---

## Security Notes

**For Production:**
1. Change default admin email
2. Use strong passwords (min 12 characters)
3. Enable 2FA if possible
4. Limit admin role to trusted users only
5. Regularly audit admin activities
6. Use different passwords for Django admin vs frontend

**Role Hierarchy:**
- **admin**: Full access to everything
- **moderator**: Can manage events, projects, resources
- **member**: Standard user access
- **guest**: Public access only

---

## Next Steps

Once logged in as admin:

1. **Add Content via Django Admin**:
   - Create events
   - Add projects
   - Upload resources
   - Create badges

2. **Manage via Frontend Admin Panel**:
   - Approve member applications
   - Moderate content
   - View analytics

3. **Test All Features**:
   - Create an event and register for it
   - Add a project
   - Upload a resource
   - Invite team members

---

**Need Help?** Check the main documentation files or Django admin interface.
