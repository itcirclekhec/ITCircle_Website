"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { ProtectedRoute } from "@/components/protected-route"
import { useAuth } from "@/lib/auth-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card"
import { DataWidget, ProgressWidget, Sparkline } from "@/components/ui/data-widget"
import { Calendar, Code, Users, Award, Bell, TrendingUp, Zap, BookOpen } from "lucide-react"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

function DashboardContent() {
  const { user } = useAuth()
  const [sparklineData] = React.useState([45, 52, 48, 61, 58, 65, 72, 68, 75, 82, 78, 85])

  // Mock data - will be fetched from API
  const upcomingEvents = [
    {
      id: 1,
      title: "React Advanced Workshop",
      date: "Dec 15, 2024",
      time: "2:00 PM",
      registered: true,
      attendees: 45,
    },
    {
      id: 2,
      title: "AI/ML Fundamentals",
      date: "Dec 18, 2024",
      time: "6:00 PM",
      registered: true,
      attendees: 120,
    },
    {
      id: 3,
      title: "Winter Hackathon 2024",
      date: "Dec 20, 2024",
      time: "9:00 AM",
      registered: false,
      attendees: 95,
    },
  ]

  const myProjects = [
    {
      id: 1,
      title: "Smart Campus System",
      role: "Lead Developer",
      status: "active",
      progress: 75,
    },
    {
      id: 2,
      title: "Digital Library Portal",
      role: "Frontend Developer",
      status: "active",
      progress: 60,
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "contribution",
      message: "You contributed to Smart Campus System",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "event",
      message: "Registered for React Advanced Workshop",
      time: "5 hours ago",
    },
    {
      id: 3,
      type: "achievement",
      message: "Earned 'Top Contributor' badge",
      time: "1 day ago",
    },
    {
      id: 4,
      type: "resource",
      message: "Downloaded 'Complete React Hooks Guide'",
      time: "2 days ago",
    },
  ]

  const achievements = [
    { icon: "🏆", title: "Top Contributor", date: "Nov 2024" },
    { icon: "⚡", title: "Early Bird", date: "Oct 2024" },
    { icon: "🎯", title: "Project Leader", date: "Sep 2024" },
    { icon: "🌟", title: "Rising Star", date: "Aug 2024" },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "contribution":
        return <Code className="w-4 h-4 text-blue-400" />
      case "event":
        return <Calendar className="w-4 h-4 text-green-400" />
      case "achievement":
        return <Award className="w-4 h-4 text-yellow-400" />
      case "resource":
        return <BookOpen className="w-4 h-4 text-purple-400" />
      default:
        return <Bell className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Welcome Section */}
        <section className="py-12 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Welcome back, {user?.name}! 👋
                </h1>
                <p className="text-muted-foreground">
                  Here's what's happening with your account today
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="border-glass-border bg-glass-primary">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DataWidget
                label="Events Attended"
                value="12"
                trend="up"
                trendValue="+3"
                icon={<Calendar className="w-5 h-5" />}
              />
              <DataWidget
                label="Active Projects"
                value="2"
                trend="neutral"
                icon={<Code className="w-5 h-5" />}
              />
              <DataWidget
                label="Contributions"
                value="45"
                trend="up"
                trendValue="+8"
                icon={<Zap className="w-5 h-5" />}
              />
              <DataWidget
                label="Badges Earned"
                value="4"
                trend="up"
                trendValue="+1"
                icon={<Award className="w-5 h-5" />}
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Upcoming Events */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Upcoming Events</h2>
                    <Button variant="outline" size="sm" className="border-glass-border bg-glass-primary">
                      View All
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <GlassCard key={event.id} className="glow-hover">
                        <GlassCardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                                {event.registered && (
                                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                    Registered
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {event.date}
                                </div>
                                <span>{event.time}</span>
                                <div className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  {event.attendees} attending
                                </div>
                              </div>
                            </div>
                            {!event.registered && (
                              <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                                Register
                              </Button>
                            )}
                          </div>
                        </GlassCardContent>
                      </GlassCard>
                    ))}
                  </div>
                </div>

                {/* My Projects */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">My Projects</h2>
                    <Button variant="outline" size="sm" className="border-glass-border bg-glass-primary">
                      View All
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {myProjects.map((project) => (
                      <GlassCard key={project.id} className="glow-hover">
                        <GlassCardHeader>
                          <div className="flex items-center justify-between">
                            <GlassCardTitle className="text-lg">{project.title}</GlassCardTitle>
                            <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                              {project.status}
                            </Badge>
                          </div>
                          <GlassCardDescription>{project.role}</GlassCardDescription>
                        </GlassCardHeader>
                        <GlassCardContent>
                          <ProgressWidget
                            label="Progress"
                            value={project.progress}
                            format={(v) => `${v}%`}
                          />
                        </GlassCardContent>
                      </GlassCard>
                    ))}
                  </div>
                </div>

                {/* Activity Chart */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Your Activity</h2>
                  <Sparkline
                    data={sparklineData}
                    label="Contributions This Year"
                    color="rgb(139, 92, 246)"
                    className="h-48"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Recent Activity */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
                  <GlassCard>
                    <GlassCardContent className="p-6">
                      <div className="space-y-4">
                        {recentActivities.map((activity) => (
                          <div key={activity.id} className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-glass-primary flex items-center justify-center shrink-0">
                              {getActivityIcon(activity.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-foreground">{activity.message}</p>
                              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4 border-glass-border bg-glass-primary">
                        View All Activity
                      </Button>
                    </GlassCardContent>
                  </GlassCard>
                </div>

                {/* Achievements */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Achievements</h2>
                  <GlassCard>
                    <GlassCardContent className="p-6">
                      <div className="space-y-4">
                        {achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="text-3xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <p className="font-semibold text-foreground">{achievement.title}</p>
                              <p className="text-xs text-muted-foreground">{achievement.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4 border-glass-border bg-glass-primary">
                        View All Badges
                      </Button>
                    </GlassCardContent>
                  </GlassCard>
                </div>

                {/* Quick Actions */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
                  <GlassCard>
                    <GlassCardContent className="p-6 space-y-3">
                      <Button variant="outline" className="w-full justify-start border-glass-border bg-glass-primary">
                        <Calendar className="w-4 h-4 mr-2" />
                        Browse Events
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-glass-border bg-glass-primary">
                        <Code className="w-4 h-4 mr-2" />
                        Submit Project
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-glass-border bg-glass-primary">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Access Resources
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-glass-border bg-glass-primary">
                        <Users className="w-4 h-4 mr-2" />
                        Find Members
                      </Button>
                    </GlassCardContent>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
