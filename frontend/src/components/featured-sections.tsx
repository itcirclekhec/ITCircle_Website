"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card"

export function FeaturedEvents() {
  const events = [
    {
      title: "React Workshop Series",
      description: "Deep dive into modern React development with hooks, context, and performance optimization.",
      date: "Dec 15, 2024",
      time: "2:00 PM",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
      category: "Workshop"
    },
    {
      title: "AI/ML Study Group",
      description: "Weekly meetup to discuss machine learning algorithms, papers, and practical implementations.",
      date: "Dec 18, 2024", 
      time: "6:00 PM",
      attendees: 32,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
      category: "Study Group"
    },
    {
      title: "Hackathon 2024",
      description: "48-hour coding marathon to build innovative solutions for real-world problems.",
      date: "Dec 20, 2024",
      time: "9:00 AM",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop",
      category: "Competition"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
            Upcoming Events
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Next Event
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From hands-on workshops to competitive hackathons, we offer diverse learning opportunities for all skill levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <GlassCard key={index} className="overflow-hidden group glow-hover">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {event.category}
                  </Badge>
                </div>
              </div>
              
              <GlassCardHeader>
                <GlassCardTitle className="text-xl">{event.title}</GlassCardTitle>
                <GlassCardDescription>{event.description}</GlassCardDescription>
              </GlassCardHeader>

              <GlassCardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {event.date} at {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {event.attendees} registered
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                    Register Now
                  </Button>
                </div>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturedProjects() {
  const projects = [
    {
      title: "Smart Campus System",
      description: "IoT-based campus management system with real-time monitoring and automated controls.",
      technologies: ["React", "Node.js", "MongoDB", "Arduino"],
      github: "https://github.com/khec-it/smart-campus",
      demo: "https://smart-campus-demo.khec.edu.bd",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
      contributors: 8
    },
    {
      title: "AI Course Recommendation",
      description: "Machine learning system that recommends optimal course sequences based on student performance.",
      technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
      github: "https://github.com/khec-it/ai-course-rec",
      demo: "https://course-rec-demo.khec.edu.bd",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
      contributors: 5
    },
    {
      title: "Digital Library Portal",
      description: "Modern digital library with advanced search, recommendation system, and collaborative features.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Elasticsearch"],
      github: "https://github.com/khec-it/digital-library",
      demo: "https://library-demo.khec.edu.bd",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop",
      contributors: 12
    }
  ]

  return (
    <section className="py-20 bg-surface-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
            Student Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Innovative Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the cutting-edge projects built by our talented members, from AI applications to IoT solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} className="overflow-hidden group glow-hover">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <GlassCardHeader>
                <GlassCardTitle className="text-xl">{project.title}</GlassCardTitle>
                <GlassCardDescription>{project.description}</GlassCardDescription>
              </GlassCardHeader>

              <GlassCardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {project.contributors} contributors
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-glass-border bg-glass-primary">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Demo
                    </Button>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}