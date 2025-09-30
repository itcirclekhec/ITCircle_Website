"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Mail, Search, Award, Code, Zap } from "lucide-react"

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedRole, setSelectedRole] = React.useState<string>("all")
  const [selectedDept, setSelectedDept] = React.useState<string>("all")

  const roles = [
    { id: "all", label: "All Members", count: 167 },
    { id: "admin", label: "Leadership", count: 6 },
    { id: "moderator", label: "Moderators", count: 12 },
    { id: "member", label: "Active Members", count: 149 }
  ]

  const departments = [
    { id: "all", label: "All Departments" },
    { id: "cse", label: "CSE" },
    { id: "eee", label: "EEE" },
    { id: "me", label: "ME" },
    { id: "ce", label: "CE" }
  ]

  const members = [
    {
      id: 1,
      name: "Samiul Bashar",
      role: "President",
      roleType: "admin",
      department: "CSE",
      year: "4th Year",
      bio: "Full-stack developer passionate about building scalable web applications",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      skills: ["React", "Node.js", "AWS", "Docker"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 45,
      projects: 8,
      badges: ["Leader", "Mentor", "Top Contributor"]
    },
    {
      id: 2,
      name: "Tasnia Ahmed",
      role: "Vice President",
      roleType: "admin",
      department: "CSE",
      year: "4th Year",
      bio: "AI/ML enthusiast working on computer vision and NLP projects",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 38,
      projects: 6,
      badges: ["Leader", "ML Expert"]
    },
    {
      id: 3,
      name: "Rifat Hossain",
      role: "Technical Lead",
      roleType: "admin",
      department: "CSE",
      year: "3rd Year",
      bio: "DevOps engineer and cloud architecture specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      skills: ["Kubernetes", "AWS", "CI/CD", "Terraform"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 52,
      projects: 10,
      badges: ["Leader", "DevOps Pro", "Top Contributor"]
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      role: "Events Coordinator",
      roleType: "admin",
      department: "EEE",
      year: "3rd Year",
      bio: "Frontend developer specializing in React and modern web technologies",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      skills: ["React", "TypeScript", "Tailwind", "Next.js"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 41,
      projects: 7,
      badges: ["Leader", "UI/UX Expert"]
    },
    {
      id: 5,
      name: "Mahbub Rahman",
      role: "Community Manager",
      roleType: "moderator",
      department: "CSE",
      year: "3rd Year",
      bio: "Backend developer focusing on scalable microservices architecture",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      skills: ["Node.js", "MongoDB", "Redis", "GraphQL"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 35,
      projects: 5,
      badges: ["Moderator", "Backend Expert"]
    },
    {
      id: 6,
      name: "Farida Akter",
      role: "Media Lead",
      roleType: "moderator",
      department: "CSE",
      year: "2nd Year",
      bio: "UI/UX designer and frontend developer creating beautiful interfaces",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      skills: ["Figma", "React", "CSS", "Animation"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 28,
      projects: 4,
      badges: ["Moderator", "Design Pro"]
    },
    {
      id: 7,
      name: "Karim Ahmed",
      role: "Workshop Lead",
      roleType: "moderator",
      department: "EEE",
      year: "3rd Year",
      bio: "IoT developer building smart solutions for real-world problems",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      skills: ["Arduino", "Raspberry Pi", "Python", "C++"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 31,
      projects: 6,
      badges: ["Moderator", "IoT Specialist"]
    },
    {
      id: 8,
      name: "Sadia Rahman",
      role: "Active Member",
      roleType: "member",
      department: "CSE",
      year: "2nd Year",
      bio: "Mobile app developer creating cross-platform applications",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      skills: ["React Native", "Flutter", "Firebase"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 22,
      projects: 3,
      badges: ["Rising Star"]
    },
    {
      id: 9,
      name: "Imran Hossain",
      role: "Active Member",
      roleType: "member",
      department: "ME",
      year: "2nd Year",
      bio: "Data scientist analyzing complex datasets and building predictive models",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      skills: ["Python", "Pandas", "Scikit-learn", "SQL"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 19,
      projects: 2,
      badges: ["Data Enthusiast"]
    },
    {
      id: 10,
      name: "Ayesha Khan",
      role: "Active Member",
      roleType: "member",
      department: "CSE",
      year: "1st Year",
      bio: "Aspiring software engineer learning web development and algorithms",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
      skills: ["JavaScript", "HTML/CSS", "Git"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 8,
      projects: 1,
      badges: ["Newcomer"]
    },
    {
      id: 11,
      name: "Fahim Shahriar",
      role: "Active Member",
      roleType: "member",
      department: "CE",
      year: "2nd Year",
      bio: "Cybersecurity enthusiast exploring ethical hacking and network security",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
      skills: ["Python", "Kali Linux", "Networking"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 15,
      projects: 2,
      badges: ["Security Focused"]
    },
    {
      id: 12,
      name: "Lamia Sultana",
      role: "Active Member",
      roleType: "member",
      department: "EEE",
      year: "3rd Year",
      bio: "Game developer creating immersive experiences with Unity",
      image: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?w=400&h=400&fit=crop",
      skills: ["Unity", "C#", "3D Modeling"],
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      contributions: 24,
      projects: 4,
      badges: ["Game Dev"]
    }
  ]

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesRole = selectedRole === "all" || member.roleType === selectedRole
    const matchesDept = selectedDept === "all" || member.department === selectedDept
    return matchesSearch && matchesRole && matchesDept
  })

  const spotlightMember = members[0]

  const getBadgeColor = (badge: string) => {
    const colors: Record<string, string> = {
      "Leader": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Mentor": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Top Contributor": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "ML Expert": "bg-green-500/20 text-green-400 border-green-500/30",
      "DevOps Pro": "bg-red-500/20 text-red-400 border-red-500/30",
      "UI/UX Expert": "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Moderator": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "Rising Star": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    }
    return colors[badge] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
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
                Our Community
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Meet Our Members
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Talented individuals from diverse backgrounds united by their passion for technology and innovation.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">167</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">25+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Contributions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spotlight Member */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
                Member Spotlight
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured This Month
              </h2>
            </div>

            <GlassCard className="max-w-5xl mx-auto overflow-hidden glow-primary">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <img 
                    src={spotlightMember.image}
                    alt={spotlightMember.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <GlassCardContent className="p-8 flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{spotlightMember.name}</h3>
                    <p className="text-primary text-lg font-medium">{spotlightMember.role}</p>
                    <p className="text-muted-foreground">{spotlightMember.department} • {spotlightMember.year}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {spotlightMember.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {spotlightMember.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-glass-border bg-glass-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{spotlightMember.projects}</span>
                      <span className="text-muted-foreground">Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{spotlightMember.contributions}</span>
                      <span className="text-muted-foreground">Contributions</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-glass-border bg-glass-primary">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="border-glass-border bg-glass-primary">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </GlassCardContent>
              </div>
            </GlassCard>
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
                  placeholder="Search members by name, skills, or bio..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-glass-primary border-glass-border"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {roles.map((role) => (
                  <Button
                    key={role.id}
                    variant={selectedRole === role.id ? "default" : "outline"}
                    onClick={() => setSelectedRole(role.id)}
                    className={selectedRole === role.id 
                      ? "bg-gradient-to-r from-primary to-accent" 
                      : "border-glass-border bg-glass-primary hover:bg-glass-secondary"
                    }
                  >
                    {role.label}
                    <Badge variant="secondary" className="ml-2 bg-white/10">
                      {role.count}
                    </Badge>
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {departments.map((dept) => (
                  <Button
                    key={dept.id}
                    size="sm"
                    variant={selectedDept === dept.id ? "default" : "outline"}
                    onClick={() => setSelectedDept(dept.id)}
                    className={selectedDept === dept.id 
                      ? "bg-primary" 
                      : "border-glass-border bg-glass-primary hover:bg-glass-secondary"
                    }
                  >
                    {dept.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Members Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredMembers.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-glass-primary flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No members found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {filteredMembers.map((member) => (
                  <GlassCard key={member.id} className="overflow-hidden group glow-hover">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-sm text-white/80">{member.role}</p>
                        <p className="text-xs text-white/60">{member.department} • {member.year}</p>
                      </div>
                    </div>

                    <GlassCardContent className="p-4 space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>

                      <div className="flex flex-wrap gap-1">
                        {member.badges.map((badge) => (
                          <Badge key={badge} variant="outline" className={`text-xs ${getBadgeColor(badge)}`}>
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {member.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-glass-primary border-glass-border">
                            {skill}
                          </Badge>
                        ))}
                        {member.skills.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-glass-primary border-glass-border">
                            +{member.skills.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-glass-border">
                        <div className="flex items-center gap-1">
                          <Code className="w-3 h-3" />
                          {member.projects} projects
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          {member.contributions} contrib.
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 border-glass-border bg-glass-primary">
                          <Github className="w-3 h-3" />
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 border-glass-border bg-glass-primary">
                          <Linkedin className="w-3 h-3" />
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 border-glass-border bg-glass-primary">
                          <Mail className="w-3 h-3" />
                        </Button>
                      </div>
                    </GlassCardContent>
                  </GlassCard>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <GlassCard className="max-w-4xl mx-auto p-12 text-center glow-primary">
              <GlassCardContent className="p-0 space-y-6">
                <Award className="w-16 h-16 mx-auto text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Want to Join Our Community?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Be part of KhEC's most vibrant tech community. Learn, collaborate, and grow with like-minded individuals.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                  Become a Member
                </Button>
              </GlassCardContent>
            </GlassCard>
          </div>
        </section>
      </main>
    </div>
  )
}
