"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card"

export function AboutSection() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Excellence",
      description: "Striving for the highest standards in technology education and innovation."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: "Community",
      description: "Building strong connections and fostering collaboration among tech enthusiasts."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Innovation",
      description: "Encouraging creative thinking and pushing the boundaries of what's possible."
    }
  ]

  return (
    <section className="py-20 bg-surface-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
              About Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Empowering Tomorrow's Tech Leaders
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              KhEC IT Circle, established in 2025, is more than just a club—it's a vibrant community of passionate tech enthusiasts,
              innovators, and problem-solvers dedicated to advancing technology education and fostering
              meaningful connections at Khwopa Engineering College, Libali, Bhaktapur, Nepal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-8 glow-hover">
              <GlassCardHeader className="p-0 mb-6">
                <GlassCardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  Our Mission
                </GlassCardTitle>
              </GlassCardHeader>
              <GlassCardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">
                  To create an inclusive environment where students can explore, learn, and innovate in technology.
                  We believe that by providing hands-on experiences and fostering collaboration, we can empower
                  the next generation of tech leaders and entrepreneurs.
                </p>
              </GlassCardContent>
            </GlassCard>

            <GlassCard className="p-8 glow-hover">
              <GlassCardHeader className="p-0 mb-6">
                <GlassCardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  Our Vision
                </GlassCardTitle>
              </GlassCardHeader>
              <GlassCardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">
                  To be the premier technology community at Khwopa Engineering College, recognized for our
                  innovative projects, impactful events, and the success of our students in the tech industry.
                  We envision a future where every student has the opportunity to excel in technology, starting with our AWS Fundamentals session and continuing with our Hacktoberfest 2025 contributions.
                </p>
              </GlassCardContent>
            </GlassCard>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our community culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <GlassCard key={index} className="p-6 text-center glow-hover group">
                <GlassCardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </GlassCardContent>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
