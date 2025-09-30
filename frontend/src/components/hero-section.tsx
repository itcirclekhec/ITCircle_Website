"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DataWidget, ProgressWidget, Sparkline } from "@/components/ui/data-widget"
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card"

export function HeroSection() {
  // Sample data for widgets
  const sparklineData = [65, 70, 68, 75, 72, 78, 80, 82, 85, 88, 90, 87]
  const [currentMembers, setCurrentMembers] = React.useState(150)
  const [eventsThisMonth, setEventsThisMonth] = React.useState(8)

  // Animate counters on mount
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMembers(167)
      setEventsThisMonth(12)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Space Background - now global */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="bg-glass-primary border-glass-border text-sm px-3 py-1"
              >
                🚀 Join 150+ Tech Enthusiasts
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  KhEC IT Circle
                </span>
                <br />
                <span className="text-foreground">
                  Where Innovation
                </span>
                <br />
                <span className="text-foreground">
                  Meets Community
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Empowering the next generation of tech leaders through hands-on workshops,
                collaborative projects, and cutting-edge innovation at Khulna Engineering College.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 glow-primary text-lg px-8 py-6 h-auto"
              >
                Join the Circle
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-glass-border bg-glass-primary hover:bg-glass-secondary text-lg px-8 py-6 h-auto"
              >
                Explore Events
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{currentMembers}+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{eventsThisMonth}</div>
                <div className="text-sm text-muted-foreground">Events/Month</div>
              </div>
            </div>
          </div>

          {/* Dashboard Widgets */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Member Growth */}
            <div className="col-span-2">
              <Sparkline
                data={sparklineData}
                label="Member Growth"
                color="rgb(139, 92, 246)"
                className="h-32"
              />
            </div>

            {/* Active Projects */}
            <DataWidget
              label="Active Projects"
              value="25"
              trend="up"
              trendValue="+3"
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              }
            />

            {/* Event Attendance */}
            <DataWidget
              label="Avg Attendance"
              value="89%"
              trend="up"
              trendValue="+12%"
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              }
            />

            {/* Learning Progress */}
            <ProgressWidget
              label="Skill Development"
              value={78}
              format={(v) => `${v}%`}
            />

            {/* Community Engagement */}
            <ProgressWidget
              label="Community Engagement"
              value={92}
              format={(v) => `${v}%`}
            />

            {/* Featured Achievement */}
            <GlassCard className="col-span-2 p-4 glow-hover">
              <GlassCardContent className="p-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Latest Achievement</div>
                    <div className="text-xs text-muted-foreground">Won Inter-University Hackathon 2024</div>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}