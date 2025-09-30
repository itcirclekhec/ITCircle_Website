"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card"

export function StatsSection() {
  const stats = [
    {
      number: "167",
      label: "Active Members",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      trend: "+15%",
      trendUp: true
    },
    {
      number: "25",
      label: "Projects Completed",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      trend: "+8",
      trendUp: true
    },
    {
      number: "89%",
      label: "Event Attendance",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      trend: "+12%",
      trendUp: true
    },
    {
      number: "12",
      label: "Events This Month",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      trend: "+3",
      trendUp: true
    }
  ]

  const achievements = [
    {
      title: "Inter-University Hackathon Champions 2024",
      description: "First place in the annual tech competition with innovative solutions",
      year: "2024"
    },
    {
      title: "Best Tech Community Award",
      description: "Recognized for outstanding contribution to student tech education",
      year: "2023"
    },
    {
      title: "50+ Alumni in Tech Industry",
      description: "Our graduates are making impact at leading tech companies worldwide",
      year: "2024"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
            Our Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Growing Stronger Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a thriving community of innovators, learners, and tech enthusiasts making real impact.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <GlassCard key={index} className="p-6 text-center glow-hover group">
              <GlassCardContent className="p-0 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className={`text-xs flex items-center justify-center gap-1 ${
                    stat.trendUp ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <svg
                      className={`w-3 h-3 ${stat.trendUp ? '' : 'rotate-180'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {stat.trend}
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Recent Achievements
            </h3>
            <p className="text-muted-foreground">
              Celebrating our community's milestones and successes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <GlassCard key={index} className="p-6 glow-hover group">
                <GlassCardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary">{achievement.year}</div>
                    <h4 className="text-lg font-semibold text-foreground leading-tight">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </GlassCardContent>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
