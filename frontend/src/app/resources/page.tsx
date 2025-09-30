"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Search, Download, Play, FileText, Video, Code2, BookOpen, Lock, Eye } from "lucide-react"

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all")
  const [selectedType, setSelectedType] = React.useState<string>("all")

  const categories = [
    { id: "all", label: "All Resources", count: 48 },
    { id: "web", label: "Web Development", count: 15 },
    { id: "mobile", label: "Mobile Dev", count: 8 },
    { id: "ml", label: "ML/AI", count: 10 },
    { id: "data", label: "Data Science", count: 7 },
    { id: "devops", label: "DevOps", count: 8 }
  ]

  const types = [
    { id: "all", label: "All Types" },
    { id: "tutorial", label: "Tutorials" },
    { id: "video", label: "Videos" },
    { id: "slides", label: "Slides" },
    { id: "code", label: "Code Samples" },
    { id: "article", label: "Articles" }
  ]

  const resources = [
    {
      id: 1,
      title: "Complete React Hooks Guide",
      description: "Comprehensive guide covering all React hooks including useState, useEffect, useContext, and custom hooks with practical examples.",
      category: "web",
      type: "tutorial",
      format: "PDF",
      size: "2.4 MB",
      duration: "45 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      author: "Dr. Mahmud Hasan",
      date: "2024-11-15",
      downloads: 234,
      views: 1240,
      isPublic: true,
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals Workshop",
      description: "Recording of our popular ML workshop covering supervised learning, neural networks, and practical implementations with scikit-learn and TensorFlow.",
      category: "ml",
      type: "video",
      format: "Video",
      size: "450 MB",
      duration: "2h 30min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      author: "Prof. Ayesha Rahman",
      date: "2024-11-20",
      downloads: 189,
      views: 890,
      isPublic: true,
      tags: ["ML", "AI", "Python", "TensorFlow"]
    },
    {
      id: 3,
      title: "Docker & Kubernetes Workshop Slides",
      description: "Complete slide deck from our DevOps workshop covering containerization, orchestration, and deployment strategies.",
      category: "devops",
      type: "slides",
      format: "PPTX",
      size: "12 MB",
      duration: "1h presentation",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
      author: "Eng. Karim Ahmed",
      date: "2024-11-25",
      downloads: 156,
      views: 678,
      isPublic: true,
      tags: ["Docker", "Kubernetes", "DevOps"]
    },
    {
      id: 4,
      title: "REST API Design Best Practices",
      description: "Article covering RESTful API design principles, authentication strategies, versioning, and documentation best practices.",
      category: "web",
      type: "article",
      format: "Article",
      size: "500 KB",
      duration: "20 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      author: "Rifat Hossain",
      date: "2024-11-28",
      downloads: 312,
      views: 1450,
      isPublic: true,
      tags: ["API", "Backend", "REST"]
    },
    {
      id: 5,
      title: "React Native Starter Template",
      description: "Production-ready React Native template with navigation, authentication, state management, and UI components pre-configured.",
      category: "mobile",
      type: "code",
      format: "ZIP",
      size: "15 MB",
      duration: "Setup guide",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      author: "Tasnim Kabir",
      date: "2024-12-01",
      downloads: 98,
      views: 456,
      isPublic: true,
      tags: ["React Native", "Mobile", "Template"]
    },
    {
      id: 6,
      title: "Data Analysis with Python",
      description: "Jupyter notebooks covering pandas, numpy, matplotlib for data manipulation, analysis, and visualization with real datasets.",
      category: "data",
      type: "code",
      format: "Notebook",
      size: "8 MB",
      duration: "Multiple notebooks",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      author: "Imran Hossain",
      date: "2024-12-03",
      downloads: 145,
      views: 723,
      isPublic: true,
      tags: ["Python", "Data Science", "Pandas"]
    },
    {
      id: 7,
      title: "Cybersecurity Essentials",
      description: "Comprehensive guide to web security, common vulnerabilities (OWASP Top 10), and defensive programming techniques.",
      category: "web",
      type: "tutorial",
      format: "PDF",
      size: "3.2 MB",
      duration: "1h read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      author: "Mr. Rahim Uddin",
      date: "2024-12-05",
      downloads: 278,
      views: 1120,
      isPublic: false,
      tags: ["Security", "Web", "OWASP"]
    },
    {
      id: 8,
      title: "CI/CD Pipeline Setup Tutorial",
      description: "Step-by-step guide to setting up automated testing, building, and deployment pipelines using GitHub Actions and Docker.",
      category: "devops",
      type: "tutorial",
      format: "Article",
      size: "1.2 MB",
      duration: "40 min",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop",
      author: "Rifat Hossain",
      date: "2024-12-07",
      downloads: 201,
      views: 934,
      isPublic: true,
      tags: ["CI/CD", "GitHub Actions", "Automation"]
    },
    {
      id: 9,
      title: "Deep Learning with PyTorch",
      description: "Video series covering neural network architectures, training techniques, and implementing CNNs and RNNs from scratch.",
      category: "ml",
      type: "video",
      format: "Video Series",
      size: "1.2 GB",
      duration: "5h total",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      author: "Tasnia Ahmed",
      date: "2024-12-10",
      downloads: 167,
      views: 756,
      isPublic: false,
      tags: ["Deep Learning", "PyTorch", "Neural Networks"]
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    const matchesType = selectedType === "all" || resource.type === selectedType
    return matchesSearch && matchesCategory && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-5 h-5" />
      case "tutorial":
        return <BookOpen className="w-5 h-5" />
      case "slides":
        return <FileText className="w-5 h-5" />
      case "code":
        return <Code2 className="w-5 h-5" />
      case "article":
        return <FileText className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  const getFormatBadgeColor = (format: string) => {
    const colors: Record<string, string> = {
      "PDF": "bg-red-500/20 text-red-400 border-red-500/30",
      "Video": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "PPTX": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "ZIP": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Notebook": "bg-green-500/20 text-green-400 border-green-500/30",
      "Article": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    }
    return colors[format] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
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
                Learning Resources
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Knowledge Library
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Access tutorials, workshop recordings, code samples, and articles curated by our community to accelerate your learning journey.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">48</div>
                  <div className="text-sm text-muted-foreground">Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">2.5K</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">12K</div>
                  <div className="text-sm text-muted-foreground">Total Views</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 bg-surface-secondary/30 sticky top-16 z-40 backdrop-blur-xl">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search resources by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-glass-primary border-glass-border"
                />
              </div>

              {/* Category Filters */}
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

              {/* Type Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {types.map((type) => (
                  <Button
                    key={type.id}
                    size="sm"
                    variant={selectedType === type.id ? "default" : "outline"}
                    onClick={() => setSelectedType(type.id)}
                    className={selectedType === type.id 
                      ? "bg-primary" 
                      : "border-glass-border bg-glass-primary hover:bg-glass-secondary"
                    }
                  >
                    {type.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredResources.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-glass-primary flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No resources found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredResources.map((resource) => (
                  <GlassCard key={resource.id} className="overflow-hidden group glow-hover">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <Badge variant="outline" className={getFormatBadgeColor(resource.format)}>
                          {resource.format}
                        </Badge>
                        {!resource.isPublic && (
                          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                            <Lock className="w-3 h-3 mr-1" />
                            Members Only
                          </Badge>
                        )}
                      </div>

                      {/* Type Icon */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-glass-primary backdrop-blur-md border border-glass-border flex items-center justify-center text-primary">
                          {getTypeIcon(resource.type)}
                        </div>
                      </div>
                    </div>

                    <GlassCardHeader>
                      <GlassCardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {resource.title}
                      </GlassCardTitle>
                      <GlassCardDescription className="line-clamp-2">
                        {resource.description}
                      </GlassCardDescription>
                    </GlassCardHeader>

                    <GlassCardContent className="space-y-4">
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{resource.duration}</span>
                        <span>{resource.size}</span>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        <p>By {resource.author}</p>
                        <p>{new Date(resource.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {resource.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-glass-primary border-glass-border">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-glass-border">
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {resource.downloads}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {resource.views}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        {resource.type === "video" ? (
                          <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                            <Play className="w-4 h-4 mr-2" />
                            Watch
                          </Button>
                        ) : (
                          <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        )}
                        <Button variant="outline" className="border-glass-border bg-glass-primary">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </GlassCardContent>
                  </GlassCard>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Upload CTA */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <GlassCard className="max-w-4xl mx-auto p-12 text-center glow-primary">
              <GlassCardContent className="p-0 space-y-6">
                <BookOpen className="w-16 h-16 mx-auto text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Want to Contribute?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Share your knowledge with the community. Upload tutorials, slides, or code samples to help others learn.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                    Upload Resource
                  </Button>
                  <Button variant="outline" size="lg" className="border-glass-border bg-glass-primary">
                    Guidelines
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
