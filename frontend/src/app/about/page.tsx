"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Samiul Bashar",
      role: "President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Leading our tech community with passion for innovation",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Tasnia Ahmed",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Driving technical excellence and member engagement",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Rifat Hossain",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Building cutting-edge projects and mentoring developers",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Nusrat Jahan",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Creating amazing experiences through workshops and events",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Mahbub Rahman",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Building bridges and fostering collaboration",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Farida Akter",
      role: "Media & Design Lead",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      bio: "Crafting visual stories and brand identity",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ]

  const milestones = [
    { year: "2020", title: "Foundation", description: "KhEC IT Circle was established by passionate students" },
    { year: "2021", title: "First Hackathon", description: "Organized our first inter-college hackathon with 100+ participants" },
    { year: "2022", title: "Project Showcase", description: "Launched annual project exhibition featuring 50+ innovations" },
    { year: "2023", title: "Industry Partnerships", description: "Established partnerships with 10+ tech companies" },
    { year: "2024", title: "150+ Members", description: "Reached milestone of 150+ active members across all departments" }
  ]

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace new technologies and encourage creative problem-solving"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe in the power of teamwork and knowledge sharing"
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for quality in everything we do, from code to community"
    },
    {
      icon: "🌱",
      title: "Growth",
      description: "We foster continuous learning and personal development"
    },
    {
      icon: "🌍",
      title: "Impact",
      description: "We build solutions that make a difference in our community"
    },
    {
      icon: "🔓",
      title: "Openness",
      description: "We champion open-source and inclusive technology education"
    }
  ]

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
                About Us
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Empowering Tomorrow's
                </span>
                <br />
                <span className="text-foreground">Tech Leaders</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                KhEC IT Circle is more than just a tech club—we're a vibrant community of innovators, 
                builders, and dreamers united by our passion for technology and creating positive impact.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <GlassCard className="p-8 glow-hover">
                <GlassCardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To cultivate a thriving ecosystem where students can explore cutting-edge technologies, 
                    collaborate on impactful projects, and develop the skills needed to become future tech leaders. 
                    We provide hands-on learning experiences, mentorship, and a supportive community that empowers 
                    every member to reach their full potential.
                  </p>
                </GlassCardContent>
              </GlassCard>

              <GlassCard className="p-8 glow-hover">
                <GlassCardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading student tech community in Bangladesh, recognized for producing exceptional 
                    technologists who drive innovation and solve real-world problems. We envision a future where 
                    our alumni network spans the globe, contributing to groundbreaking projects and inspiring the 
                    next generation of tech enthusiasts.
                  </p>
                </GlassCardContent>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
                Our Values
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape our community culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <GlassCard key={index} className="p-6 glow-hover">
                  <GlassCardContent className="p-0 space-y-3">
                    <div className="text-4xl">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </GlassCardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Milestones & Achievements
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary font-bold text-lg shrink-0">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-glass-border mt-4" />
                    )}
                  </div>
                  <GlassCard className="flex-1 p-6 glow-hover mb-8">
                    <GlassCardHeader className="p-0">
                      <GlassCardTitle className="text-xl">{milestone.title}</GlassCardTitle>
                      <GlassCardDescription>{milestone.description}</GlassCardDescription>
                    </GlassCardHeader>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
                Leadership Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dedicated individuals driving our community forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <GlassCard key={index} className="overflow-hidden group glow-hover">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-sm text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <GlassCardContent className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1 border-glass-border bg-glass-primary">
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 border-glass-border bg-glass-primary">
                        LinkedIn
                      </Button>
                    </div>
                  </GlassCardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <GlassCard className="max-w-4xl mx-auto p-12 text-center glow-primary">
              <GlassCardContent className="p-0 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Ready to Join Us?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Become part of KhEC's most dynamic tech community. Learn, build, and grow with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                    Join the Circle
                  </Button>
                  <Button variant="outline" size="lg" className="border-glass-border bg-glass-primary">
                    Contact Us
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
