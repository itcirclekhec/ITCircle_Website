"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "CS Student & Frontend Developer",
      department: "CSE",
      year: "3rd Year",
      content: "KhEC IT Circle transformed my understanding of web development. The hands-on workshops and collaborative projects helped me build real-world applications that I never thought possible.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Rahim Khan",
      role: "AI/ML Enthusiast",
      department: "CSE",
      year: "4th Year",
      content: "The AI study groups and hackathons here are incredible. I've learned more in 6 months than in my entire university career. The community support is unmatched.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Nusrat Jahan",
      role: "Full Stack Developer",
      department: "EEE",
      year: "2nd Year",
      content: "Being part of this community opened doors I didn't know existed. The mentorship and networking opportunities have been invaluable for my career growth.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-surface-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
            Member Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Members Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from students who've grown their skills and built amazing projects with our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} className="p-6 glow-hover group">
              <GlassCardContent className="p-0 space-y-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-glass-border/30">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary">
                      {testimonial.department} • {testimonial.year}
                    </div>
                  </div>
                </div>
              </GlassCardContent>
            </GlassCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-muted-foreground mb-8">
              Be part of a community that's shaping the future of technology at Khulna Engineering College.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 glow-primary">
                Join KhEC IT Circle
              </button>
              <button className="px-8 py-4 border-2 border-glass-border bg-glass-primary/50 hover:bg-glass-secondary text-foreground font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
                View All Members
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
