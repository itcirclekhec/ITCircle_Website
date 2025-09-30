"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Loader2 } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: "admin" | "moderator" | "member"
  fallback?: React.ReactNode
}

export function ProtectedRoute({ children, requiredRole, fallback }: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  React.useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login")
      } else if (requiredRole) {
        const roleHierarchy = {
          admin: ["admin"],
          moderator: ["admin", "moderator"],
          member: ["admin", "moderator", "member"],
        }
        
        const hasAccess = roleHierarchy[requiredRole].includes(user.role)
        if (!hasAccess) {
          router.push("/dashboard")
        }
      }
    }
  }, [user, loading, requiredRole, router])

  if (loading) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      )
    )
  }

  if (!user) {
    return null
  }

  if (requiredRole) {
    const roleHierarchy = {
      admin: ["admin"],
      moderator: ["admin", "moderator"],
      member: ["admin", "moderator", "member"],
    }
    
    const hasAccess = roleHierarchy[requiredRole].includes(user.role)
    if (!hasAccess) {
      return null
    }
  }

  return <>{children}</>
}
