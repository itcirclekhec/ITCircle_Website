"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FeaturedEvents, FeaturedProjects } from "@/components/featured-sections"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <FeaturedEvents />
        <TestimonialsSection />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}