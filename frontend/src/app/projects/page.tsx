"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Github, ExternalLink, Users, Star, GitFork, Search } from "lucide-react"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedTech, setSelectedTech] = React.useState<string>("all")

  const technologies = [
    { id: "all", label: "All Projects", count: 25 },
    { id: "react", label: "React", count: 8 },
    { id: "python", label: "Python", count: 6 },
    { id: "nodejs", label: "Node.js", count: 5 },
    { id: "ml", label: "ML/AI", count: 4 },
    { id: "mobile", label: "Mobile", count: 2 }
  ]

  const projects = [
    {
      id: 1,
      title: "Smart Campus Management System",
      description: "IoT-based comprehensive campus management platform with real-time monitoring, automated controls, and data analytics for efficient resource management.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Arduino", "IoT"],
      category: "react",
      github: "https://github.com/khec-it/smart-campus",
      demo: "https://smart-campus-demo.khec.edu.bd",
      contributors: 8,
      stars: 45,
      forks: 12,
      status: "active",
      featured: true
    },
    {
      id: 2,
      title: "AI Course Recommendation Engine",
      description: "Machine learning system that analyzes student performance, interests, and career goals to recommend optimal course sequences and learning paths.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL", "Scikit-learn"],
      category: "ml",
      github: "https://github.com/khec-it/ai-course-rec",
      demo: "https://course-rec-demo.khec.edu.bd",
      contributors: 5,
      stars: 67,
      forks: 18,
      status: "active",
      featured: true
    },
    {
      id: 3,
      title: "Digital Library Portal",
      description: "Modern digital library with advanced search capabilities, AI-powered recommendation system, collaborative reading features, and seamless integration with academic resources.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Elasticsearch", "Redis"],
      category: "react",
      github: "https://github.com/khec-it/digital-library",
      demo: "https://library-demo.khec.edu.bd",
      contributors: 12,
      stars: 89,
      forks: 23,
      status: "active",
      featured: true
    },
    {
      id: 4,
      title: "Student Performance Analytics",
      description: "Data visualization dashboard for analyzing student performance trends, identifying at-risk students, and providing actionable insights for educators.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      technologies: ["React", "D3.js", "Python", "Django", "PostgreSQL"],
      category: "react",
      github: "https://github.com/khec-it/student-analytics",
      demo: "https://analytics-demo.khec.edu.bd",
      contributors: 6,
      stars: 34,
      forks: 9,
      status: "active",
      featured: false
    },
    {
      id: 5,
      title: "Blockchain Certificate Verification",
      description: "Decentralized certificate verification system using blockchain technology to ensure authenticity and prevent fraud in academic credentials.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
      category: "react",
      github: "https://github.com/khec-it/blockchain-cert",
      demo: "https://cert-verify-demo.khec.edu.bd",
      contributors: 4,
      stars: 56,
      forks: 15,
      status: "active",
      featured: false
    },
    {
      id: 6,
      title: "Chatbot for Student Support",
      description: "AI-powered chatbot that provides instant answers to student queries about courses, schedules, campus facilities, and administrative procedures.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
      technologies: ["Python", "Rasa", "NLP", "FastAPI", "Vue.js"],
      category: "ml",
      github: "https://github.com/khec-it/support-chatbot",
      demo: "https://chatbot-demo.khec.edu.bd",
      contributors: 7,
      stars: 41,
      forks: 11,
      status: "active",
      featured: false
    },
    {
      id: 7,
      title: "Mobile Attendance System",
      description: "Cross-platform mobile application for automated attendance tracking using QR codes, geolocation verification, and real-time synchronization.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
      category: "mobile",
      github: "https://github.com/khec-it/mobile-attendance",
      demo: "https://attendance-demo.khec.edu.bd",
      contributors: 5,
      stars: 28,
      forks: 7,
      status: "active",
      featured: false
    },
    {
      id: 8,
      title: "Code Plagiarism Detector",
      description: "Advanced plagiarism detection tool for programming assignments using abstract syntax trees and machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      technologies: ["Python", "AST", "Scikit-learn", "Django", "PostgreSQL"],
      category: "python",
      github: "https://github.com/khec-it/plagiarism-detector",
      demo: "https://plagiarism-demo.khec.edu.bd",
      contributors: 3,
      stars: 52,
      forks: 14,
      status: "active",
      featured: false
    },
    {
      id: 9,
      title: "Campus Navigation AR App",
      description: "Augmented reality mobile application that helps students and visitors navigate the campus using AR markers and real-time directions.",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=400&fit=crop",
      technologies: ["Unity", "ARCore", "ARKit", "C#", "Firebase"],
      category: "mobile",
      github: "https://github.com/khec-it/ar-navigation",
      demo: null,
      contributors: 4,
      stars: 38,
      forks: 8,
      status: "active",
      featured: false
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTech = selectedTech === "all" || project.category === selectedTech
    return matchesSearch && matchesTech
  })

  const featuredProjects = projects.filter(p => p.featured)

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
                Student Projects
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Innovation in Action
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore cutting-edge projects built by our talented members. From AI applications to IoT solutions, 
                discover what's possible when passion meets technology.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">25+</div>
                  <div className="text-sm text-muted-foreground">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">400+</div>
                  <div className="text-sm text-muted-foreground">GitHub Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">60+</div>
                  <div className="text-sm text-muted-foreground">Contributors</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 bg-surface-secondary/30 sticky top-16 z-40 backdrop-blur-xl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-glass-primary border-glass-border"
                />
              </div>

              {/* Tech Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech) => (
                  <Button
                    key={tech.id}
                    variant={selectedTech === tech.id ? "default" : "outline"}
                    onClick={() => setSelectedTech(tech.id)}
                    className={selectedTech === tech.id 
                      ? "bg-gradient-to-r from-primary to-accent" 
                      : "border-glass-border bg-glass-primary hover:bg-glass-secondary"
                    }
                  >
                    {tech.label}
                    <Badge variant="secondary" className="ml-2 bg-white/10">
                      {tech.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        {selectedTech === "all" && !searchQuery && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
                  Featured Projects
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Best Work
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {featuredProjects.map((project) => (
                  <GlassCard key={project.id} className="overflow-hidden group glow-hover">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                        Featured
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <GlassCardHeader>
                      <GlassCardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </GlassCardTitle>
                      <GlassCardDescription className="line-clamp-2">
                        {project.description}
                      </GlassCardDescription>
                    </GlassCardHeader>

                    <GlassCardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {project.forks}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.contributors}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 border-glass-border bg-glass-primary">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        {project.demo && (
                          <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </GlassCardContent>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Projects Grid */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {searchQuery ? `Search Results (${filteredProjects.length})` : "All Projects"}
              </h2>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-glass-primary flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredProjects.map((project) => (
                  <GlassCard key={project.id} className="overflow-hidden group glow-hover">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      {project.featured && (
                        <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                          Featured
                        </Badge>
                      )}
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
                      <GlassCardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </GlassCardTitle>
                      <GlassCardDescription className="line-clamp-2">
                        {project.description}
                      </GlassCardDescription>
                    </GlassCardHeader>

                    <GlassCardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {project.forks}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.contributors}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 border-glass-border bg-glass-primary">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        {project.demo && (
                          <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </GlassCardContent>
                  </GlassCard>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Submit Project CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <GlassCard className="max-w-4xl mx-auto p-12 text-center glow-primary">
              <GlassCardContent className="p-0 space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Github className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Have a Project to Showcase?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Share your innovative work with the community. Get feedback, collaborate, and inspire others.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                  Submit Your Project
                </Button>
              </GlassCardContent>
            </GlassCard>
          </div>
        </section>
      </main>
    </div>
  )
}
