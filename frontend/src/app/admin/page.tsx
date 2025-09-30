"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { ProtectedRoute } from "@/components/protected-route"
import { useAuth } from "@/lib/auth-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card"
import { DataWidget } from "@/components/ui/data-widget"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Calendar, Code, FileText, Settings, TrendingUp, Plus, Edit, Trash2, Eye } from "lucide-react"

export default function AdminPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminDashboard />
    </ProtectedRoute>
  )
}

function AdminDashboard() {
  const { user } = useAuth()

  // Mock data - will be fetched from API
  const stats = {
    totalMembers: 167,
    memberGrowth: "+12",
    totalEvents: 24,
    upcomingEvents: 6,
    activeProjects: 25,
    projectsThisMonth: "+3",
    totalResources: 48,
    resourceDownloads: 2543,
  }

  const recentMembers = [
    { id: 1, name: "Ayesha Khan", email: "ayesha@example.com", department: "CSE", status: "pending", joinedAt: "2024-12-08" },
    { id: 2, name: "Fahim Shahriar", email: "fahim@example.com", department: "CE", status: "pending", joinedAt: "2024-12-07" },
    { id: 3, name: "Lamia Sultana", email: "lamia@example.com", department: "EEE", status: "approved", joinedAt: "2024-12-06" },
  ]

  const upcomingEvents = [
    { id: 1, title: "React Workshop", date: "2024-12-15", attendees: 45, status: "published" },
    { id: 2, title: "AI/ML Seminar", date: "2024-12-18", attendees: 120, status: "published" },
    { id: 3, title: "Winter Hackathon", date: "2024-12-20", attendees: 95, status: "draft" },
  ]

  const recentProjects = [
    { id: 1, title: "Smart Campus System", contributors: 8, status: "active", lastUpdate: "2 days ago" },
    { id: 2, title: "AI Course Recommendation", contributors: 5, status: "active", lastUpdate: "3 days ago" },
    { id: 3, title: "Digital Library Portal", contributors: 12, status: "active", lastUpdate: "5 days ago" },
  ]

  const pendingResources = [
    { id: 1, title: "Machine Learning Guide", author: "Prof. Rahman", type: "PDF", status: "pending" },
    { id: 2, title: "React Hooks Tutorial", author: "Dr. Hasan", type: "Video", status: "pending" },
  ]

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      approved: "bg-green-500/20 text-green-400 border-green-500/30",
      rejected: "bg-red-500/20 text-red-400 border-red-500/30",
      published: "bg-green-500/20 text-green-400 border-green-500/30",
      draft: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      active: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    }
    return colors[status] || colors.pending
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Admin Dashboard
                  </span>
                </h1>
                <p className="text-muted-foreground">
                  Manage members, events, projects, and resources
                </p>
              </div>
              <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                Admin Access
              </Badge>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DataWidget
                label="Total Members"
                value={stats.totalMembers}
                trend="up"
                trendValue={stats.memberGrowth}
                icon={<Users className="w-5 h-5" />}
              />
              <DataWidget
                label="Upcoming Events"
                value={stats.upcomingEvents}
                trend="neutral"
                icon={<Calendar className="w-5 h-5" />}
              />
              <DataWidget
                label="Active Projects"
                value={stats.activeProjects}
                trend="up"
                trendValue={stats.projectsThisMonth}
                icon={<Code className="w-5 h-5" />}
              />
              <DataWidget
                label="Total Resources"
                value={stats.totalResources}
                trend="up"
                trendValue="+5"
                icon={<FileText className="w-5 h-5" />}
              />
            </div>
          </div>
        </section>

        {/* Management Tabs */}
        <section className="py-12 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="members" className="space-y-8">
              <TabsList className="bg-glass-primary border border-glass-border">
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Members Tab */}
              <TabsContent value="members" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-foreground">Member Management</h2>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Member
                  </Button>
                </div>

                <GlassCard>
                  <GlassCardHeader>
                    <GlassCardTitle>Recent Applications</GlassCardTitle>
                    <GlassCardDescription>Pending member applications awaiting approval</GlassCardDescription>
                  </GlassCardHeader>
                  <GlassCardContent>
                    <div className="space-y-4">
                      {recentMembers.map((member) => (
                        <div key={member.id} className="flex items-center justify-between p-4 rounded-lg bg-glass-primary border border-glass-border">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-foreground">{member.name}</h3>
                              <Badge variant="outline" className={getStatusBadge(member.status)}>
                                {member.status}
                              </Badge>
                            </div>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>{member.email}</span>
                              <span>•</span>
                              <span>{member.department}</span>
                              <span>•</span>
                              <span>Applied {member.joinedAt}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-glass-border bg-glass-primary">
                              <Eye className="w-4 h-4" />
                            </Button>
                            {member.status === "pending" && (
                              <>
                                <Button size="sm" className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
                                  Approve
                                </Button>
                                <Button size="sm" variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/20">
                                  Reject
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCardContent>
                </GlassCard>

                <div className="grid md:grid-cols-3 gap-6">
                  <GlassCard className="p-6">
                    <GlassCardContent className="p-0 text-center space-y-2">
                      <div className="text-3xl font-bold text-foreground">15</div>
                      <p className="text-sm text-muted-foreground">Pending Applications</p>
                      <Button size="sm" variant="outline" className="w-full border-glass-border bg-glass-primary">
                        Review All
                      </Button>
                    </GlassCardContent>
                  </GlassCard>
                  <GlassCard className="p-6">
                    <GlassCardContent className="p-0 text-center space-y-2">
                      <div className="text-3xl font-bold text-foreground">145</div>
                      <p className="text-sm text-muted-foreground">Active Members</p>
                      <Button size="sm" variant="outline" className="w-full border-glass-border bg-glass-primary">
                        View All
                      </Button>
                    </GlassCardContent>
                  </GlassCard>
                  <GlassCard className="p-6">
                    <GlassCardContent className="p-0 text-center space-y-2">
                      <div className="text-3xl font-bold text-foreground">7</div>
                      <p className="text-sm text-muted-foreground">Inactive Members</p>
                      <Button size="sm" variant="outline" className="w-full border-glass-border bg-glass-primary">
                        View All
                      </Button>
                    </GlassCardContent>
                  </GlassCard>
                </div>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-foreground">Event Management</h2>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                </div>

                <GlassCard>
                  <GlassCardHeader>
                    <GlassCardTitle>Upcoming Events</GlassCardTitle>
                    <GlassCardDescription>Manage and monitor your scheduled events</GlassCardDescription>
                  </GlassCardHeader>
                  <GlassCardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-center justify-between p-4 rounded-lg bg-glass-primary border border-glass-border">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-foreground">{event.title}</h3>
                              <Badge variant="outline" className={getStatusBadge(event.status)}>
                                {event.status}
                              </Badge>
                            </div>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>{event.date}</span>
                              <span>•</span>
                              <span>{event.attendees} registered</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-glass-border bg-glass-primary">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-glass-border bg-glass-primary">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/20">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCardContent>
                </GlassCard>
              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-foreground">Project Management</h2>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </div>

                <GlassCard>
                  <GlassCardHeader>
                    <GlassCardTitle>Active Projects</GlassCardTitle>
                    <GlassCardDescription>Monitor ongoing projects and their progress</GlassCardDescription>
                  </GlassCardHeader>
                  <GlassCardContent>
                    <div className="space-y-4">
                      {recentProjects.map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 rounded-lg bg-glass-primary border border-glass-border">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-foreground">{project.title}</h3>
                              <Badge variant="outline" className={getStatusBadge(project.status)}>
                                {project.status}
                              </Badge>
                            </div>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>{project.contributors} contributors</span>
                              <span>•</span>
                              <span>Updated {project.lastUpdate}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-glass-border bg-glass-primary">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-glass-border bg-glass-primary">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCardContent>
                </GlassCard>
              </TabsContent>

              {/* Resources Tab */}
              <TabsContent value="resources" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-foreground">Resource Management</h2>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                    <Plus className="w-4 h-4 mr-2" />
                    Upload Resource
                  </Button>
                </div>

                <GlassCard>
                  <GlassCardHeader>
                    <GlassCardTitle>Pending Approvals</GlassCardTitle>
                    <GlassCardDescription>Review and approve submitted resources</GlassCardDescription>
                  </GlassCardHeader>
                  <GlassCardContent>
                    <div className="space-y-4">
                      {pendingResources.map((resource) => (
                        <div key={resource.id} className="flex items-center justify-between p-4 rounded-lg bg-glass-primary border border-glass-border">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-foreground">{resource.title}</h3>
                              <Badge variant="outline" className={getStatusBadge(resource.status)}>
                                {resource.status}
                              </Badge>
                            </div>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>By {resource.author}</span>
                              <span>•</span>
                              <span>{resource.type}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="border-glass-border bg-glass-primary">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/20">
                              Reject
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCardContent>
                </GlassCard>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Analytics & Insights</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <GlassCard className="p-6">
                    <GlassCardContent className="p-0 text-center space-y-2">
                      <TrendingUp className="w-8 h-8 mx-auto text-green-400" />
                      <div className="text-2xl font-bold text-foreground">+23%</div>
                      <p className="text-sm text-muted-foreground">Member Growth</p>
                    </GlassCardContent>
                  </GlassCard>
                  <GlassCard className="p-6">
                    <GlassCardContent className="p-0 text-center space-y-2">
                      <Calendar className="w-8 h-8 mx-auto text-blue-400" />
                      <div className="text-2xl font-bold text-foreground">92%</div>
                      <p className="text-sm text-muted-foreground">Event Attendance</p>
                    </GlassCardContent>
                  </GlassCard>
                  <GlassCard className="p-6">
                    <GlassCardContent className="p-0 text-center space-y-2">
                      <Code className="w-8 h-8 mx-auto text-purple-400" />
                      <div className="text-2xl font-bold text-foreground">85%</div>
                      <p className="text-sm text-muted-foreground">Project Completion</p>
                    </GlassCardContent>
                  </GlassCard>
                  <GlassCard className="p-6">
                    <GlassCardContent className="p-0 text-center space-y-2">
                      <FileText className="w-8 h-8 mx-auto text-yellow-400" />
                      <div className="text-2xl font-bold text-foreground">2.5K</div>
                      <p className="text-sm text-muted-foreground">Resource Downloads</p>
                    </GlassCardContent>
                  </GlassCard>
                </div>

                <GlassCard>
                  <GlassCardHeader>
                    <GlassCardTitle>Engagement Metrics</GlassCardTitle>
                    <GlassCardDescription>Track member engagement and platform usage</GlassCardDescription>
                  </GlassCardHeader>
                  <GlassCardContent>
                    <div className="text-center py-12 text-muted-foreground">
                      <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Detailed analytics charts will be displayed here</p>
                      <p className="text-sm mt-2">Integration with analytics service coming soon</p>
                    </div>
                  </GlassCardContent>
                </GlassCard>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}
