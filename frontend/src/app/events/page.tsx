"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card"
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all")
  const [selectedMonth, setSelectedMonth] = React.useState<string>("december")

  const categories = [
    { id: "all", label: "All Events", count: 12 },
    { id: "workshop", label: "Workshops", count: 6 },
    { id: "hackathon", label: "Hackathons", count: 2 },
    { id: "seminar", label: "Seminars", count: 3 },
    { id: "competition", label: "Competitions", count: 1 }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "React Advanced Workshop",
      description: "Deep dive into advanced React patterns, hooks, performance optimization, and state management with Redux Toolkit and Zustand.",
      date: "2024-12-15",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab 2, KhEC",
      category: "workshop",
      attendees: 45,
      maxAttendees: 60,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      speaker: "Dr. Mahmud Hasan",
      level: "Intermediate",
      tags: ["React", "Frontend", "JavaScript"]
    },
    {
      id: 2,
      title: "AI/ML Fundamentals Seminar",
      description: "Introduction to artificial intelligence and machine learning concepts, algorithms, and practical applications in modern software development.",
      date: "2024-12-18",
      time: "6:00 PM - 8:00 PM",
      location: "Auditorium, KhEC",
      category: "seminar",
      attendees: 120,
      maxAttendees: 150,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      speaker: "Prof. Ayesha Rahman",
      level: "Beginner",
      tags: ["AI", "ML", "Python"]
    },
    {
      id: 3,
      title: "Winter Hackathon 2024",
      description: "48-hour coding marathon to build innovative solutions for real-world problems. Form teams, collaborate, and compete for exciting prizes!",
      date: "2024-12-20",
      time: "9:00 AM - 9:00 AM (48hrs)",
      location: "Innovation Hub, KhEC",
      category: "hackathon",
      attendees: 95,
      maxAttendees: 120,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
      speaker: "Multiple Mentors",
      level: "All Levels",
      tags: ["Hackathon", "Team", "Competition"]
    },
    {
      id: 4,
      title: "DevOps & Cloud Workshop",
      description: "Hands-on workshop covering Docker, Kubernetes, CI/CD pipelines, and cloud deployment on AWS and Azure platforms.",
      date: "2024-12-22",
      time: "10:00 AM - 2:00 PM",
      location: "Computer Lab 3, KhEC",
      category: "workshop",
      attendees: 32,
      maxAttendees: 50,
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
      speaker: "Eng. Karim Ahmed",
      level: "Intermediate",
      tags: ["DevOps", "Cloud", "Docker"]
    },
    {
      id: 5,
      title: "Mobile App Development Bootcamp",
      description: "Learn to build cross-platform mobile apps using React Native. From basics to deployment on Play Store and App Store.",
      date: "2024-12-25",
      time: "3:00 PM - 6:00 PM",
      location: "Software Lab, KhEC",
      category: "workshop",
      attendees: 28,
      maxAttendees: 40,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      speaker: "Tasnim Kabir",
      level: "Beginner",
      tags: ["Mobile", "React Native", "App Dev"]
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      description: "Learn about web security, ethical hacking, penetration testing, and how to secure your applications from common vulnerabilities.",
      date: "2024-12-28",
      time: "4:00 PM - 7:00 PM",
      location: "Network Lab, KhEC",
      category: "seminar",
      attendees: 67,
      maxAttendees: 80,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
      speaker: "Mr. Rahim Uddin",
      level: "Intermediate",
      tags: ["Security", "Ethical Hacking", "Web Security"]
    }
  ]

  const filteredEvents = selectedCategory === "all" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    }
  }

  const getAttendancePercentage = (attendees: number, max: number) => {
    return (attendees / max) * 100
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="bg-glass-primary border-glass-border">
                Events & Workshops
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Learn, Build, Compete
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join our workshops, hackathons, and seminars to enhance your skills and connect with fellow tech enthusiasts.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">12</div>
                  <div className="text-sm text-muted-foreground">Upcoming Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">387</div>
                  <div className="text-sm text-muted-foreground">Total RSVPs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">Attendance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-surface-secondary/30 sticky top-16 z-40 backdrop-blur-xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-gradient-to-r from-primary to-accent" 
                    : "border-glass-border bg-glass-primary hover:bg-glass-secondary"
                  }
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2 bg-white/10">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {filteredEvents.map((event, index) => (
                <GlassCard key={event.id} className="overflow-hidden group glow-hover">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge className="bg-primary/90 text-primary-foreground capitalize">
                        {event.category}
                      </Badge>
                      <Badge variant="outline" className={getLevelColor(event.level)}>
                        {event.level}
                      </Badge>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <GlassCardHeader>
                    <GlassCardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {event.title}
                    </GlassCardTitle>
                    <GlassCardDescription className="line-clamp-2">
                      {event.description}
                    </GlassCardDescription>
                  </GlassCardHeader>

                  <GlassCardContent className="space-y-4">
                    {/* Event Details */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        Speaker: {event.speaker}
                      </div>
                    </div>

                    {/* Attendance Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {event.attendees} / {event.maxAttendees} registered
                        </span>
                        <span className="text-foreground font-medium">
                          {event.maxAttendees - event.attendees} spots left
                        </span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                          style={{ width: `${getAttendancePercentage(event.attendees, event.maxAttendees)}%` }}
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                        disabled={event.attendees >= event.maxAttendees}
                      >
                        {event.attendees >= event.maxAttendees ? "Event Full" : "Register Now"}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="border-glass-border bg-glass-primary hover:bg-glass-secondary"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </GlassCardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar CTA */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <GlassCard className="max-w-4xl mx-auto p-12 text-center glow-primary">
              <GlassCardContent className="p-0 space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Never Miss an Event
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Subscribe to our event calendar and get notifications about upcoming workshops, hackathons, and seminars.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                    Subscribe to Calendar
                  </Button>
                  <Button variant="outline" size="lg" className="border-glass-border bg-glass-primary">
                    Download ICS File
                  </Button>
                </div>
              </GlassCardContent>
            </GlassCard>
          </div>
        </section>
      </main>
    </div>
  )
}
