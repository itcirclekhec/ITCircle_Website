"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { api } from "./api"

export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "moderator" | "member" | "guest"
  avatar?: string
  department?: string
  year?: string
  bio?: string
  skills?: string[]
  joinedAt: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => Promise<void>
  loginWithGithub: () => Promise<void>
  loginWithGoogle: () => Promise<void>
  updateProfile: (data: Partial<User>) => Promise<void>
  refreshUser: () => Promise<void>
}

interface RegisterData {
  email: string
  password: string
  name: string
  department?: string
  year?: string
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)
  const [loading, setLoading] = React.useState(true)
  const router = useRouter()

  // Check if user is authenticated on mount
  React.useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await api.get<{ user: User }>("/api/auth/me")
      setUser(response.user)
    } catch (error) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post<{ user: User }>("/api/auth/login", {
        email,
        password,
      })
      setUser(response.user)
      router.push("/dashboard")
    } catch (error: any) {
      throw new Error(error.message || "Login failed")
    }
  }

  const register = async (data: RegisterData) => {
    try {
      // Map to Django RegisterSerializer fields
      const name = (data.name || "").trim()
      const firstName = name.split(" ")[0] || ""
      const lastName = name.split(" ").slice(1).join(" ") || ""

      const payload: any = {
        email: data.email,
        password: data.password,
        confirm_password: data.password, // frontend already validates match
        first_name: firstName,
        last_name: lastName,
      }
      if (data.department) payload.department = data.department
      if (data.year) payload.year = data.year
      // optional username derived from email prefix
      if (data.email && data.email.includes("@")) {
        payload.username = data.email.split("@")[0]
      }

      const response = await api.post<{ user: User }>("/api/auth/register", payload)
      setUser(response.user)
      router.push("/dashboard")
    } catch (error: any) {
      throw new Error(error.message || "Registration failed")
    }
  }

  const logout = async () => {
    try {
      await api.post("/api/auth/logout", {})
      setUser(null)
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const loginWithGithub = async () => {
    // Redirect to Django OAuth endpoint
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/github/login`
  }

  const loginWithGoogle = async () => {
    // Redirect to Django OAuth endpoint
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`
  }

  const updateProfile = async (data: Partial<User>) => {
    try {
      const response = await api.patch<{ user: User }>("/api/auth/profile", data)
      setUser(response.user)
    } catch (error: any) {
      throw new Error(error.message || "Profile update failed")
    }
  }

  const refreshUser = async () => {
    await checkAuth()
  }

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    loginWithGithub,
    loginWithGoogle,
    updateProfile,
    refreshUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Hook to check if user has specific role
export function useRequireAuth(requiredRole?: User["role"]) {
  const { user, loading } = useAuth()
  const router = useRouter()

  React.useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    } else if (!loading && requiredRole && user && user.role !== requiredRole) {
      router.push("/dashboard")
    }
  }, [user, loading, requiredRole, router])

  return { user, loading }
}

// Hook to check if user has permission
export function usePermission() {
  const { user } = useAuth()

  const hasPermission = (permission: "admin" | "moderator" | "member") => {
    if (!user) return false
    
    const roleHierarchy = {
      admin: ["admin"],
      moderator: ["admin", "moderator"],
      member: ["admin", "moderator", "member"],
    }

    return roleHierarchy[permission].includes(user.role)
  }

  return { hasPermission, isAdmin: hasPermission("admin"), isModerator: hasPermission("moderator") }
}
