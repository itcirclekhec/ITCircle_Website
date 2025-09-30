"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card"
import { CheckCircle2, Users, Code, Calendar, Award, Loader2 } from "lucide-react"

export default function JoinPage() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    studentId: "",
    department: "",
    year: "",
    interests: [] as string[],
    skills: "",
    experience: "",
    motivation: "",
    agreeToTerms: false,
  })
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const interestOptions = [
    "Web Development",
    "Mobile Development",
    "Machine Learning",
    "Data Science",
    "DevOps",
    "UI/UX Design",
    "Cybersecurity",
    "Game Development",
  ]

  const benefits = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Hands-on Workshops",
      description: "Learn from industry experts through practical, project-based workshops",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Networking Opportunities",
      description: "Connect with like-minded students and build your professional network",
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Exclusive Events",
      description: "Access to hackathons, seminars, and tech talks with industry leaders",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Skill Development",
      description: "Enhance your technical and soft skills through collaborative projects",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 2000)
  }

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <section className="py-20 min-h-[calc(100vh-5rem)] flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <GlassCard className="p-12 glow-primary">
                  <GlassCardContent className="p-0 space-y-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-12 h-12 text-green-400" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                      Application Submitted!
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      Thank you for your interest in joining KhEC IT Circle. We'll review your application and get back to you within 2-3 business days.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button 
                        onClick={() => window.location.href = "/"}
                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                      >
                        Back to Home
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => window.location.href = "/events"}
                        className="border-glass-border bg-glass-primary"
                      >
                        Browse Events
                      </Button>
                    </div>
                  </GlassCardContent>
                </GlassCard>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
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
                Membership Application
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Join Our Community
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Be part of KhEC's most vibrant tech community. Learn, collaborate, and grow with 150+ passionate students.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Join Us?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Unlock exclusive benefits and opportunities as a member
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <GlassCard key={index} className="p-6 glow-hover text-center">
                  <GlassCardContent className="p-0 space-y-3">
                    <div className="flex justify-center">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </GlassCardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <GlassCard className="glow-primary">
                <GlassCardHeader>
                  <GlassCardTitle>Membership Application</GlassCardTitle>
                  <GlassCardDescription>
                    Fill out this form to apply for membership. Fields marked with * are required.
                  </GlassCardDescription>
                </GlassCardHeader>

                <GlassCardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)}
                            required
                            className="bg-glass-primary border-glass-border"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="studentId">Student ID *</Label>
                          <Input
                            id="studentId"
                            value={formData.studentId}
                            onChange={(e) => handleChange("studentId", e.target.value)}
                            required
                            className="bg-glass-primary border-glass-border"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="bg-glass-primary border-glass-border"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            required
                            className="bg-glass-primary border-glass-border"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="department">Department *</Label>
                          <Select value={formData.department} onValueChange={(value) => handleChange("department", value)} required>
                            <SelectTrigger className="bg-glass-primary border-glass-border">
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CSE">Computer Science & Engineering</SelectItem>
                              <SelectItem value="EEE">Electrical & Electronic Engineering</SelectItem>
                              <SelectItem value="ME">Mechanical Engineering</SelectItem>
                              <SelectItem value="CE">Civil Engineering</SelectItem>
                              <SelectItem value="IPE">Industrial & Production Engineering</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="year">Academic Year *</Label>
                          <Select value={formData.year} onValueChange={(value) => handleChange("year", value)} required>
                            <SelectTrigger className="bg-glass-primary border-glass-border">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1st">1st Year</SelectItem>
                              <SelectItem value="2nd">2nd Year</SelectItem>
                              <SelectItem value="3rd">3rd Year</SelectItem>
                              <SelectItem value="4th">4th Year</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Interests & Skills */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Interests & Skills</h3>
                      
                      <div className="space-y-2">
                        <Label>Areas of Interest * (Select at least one)</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {interestOptions.map((interest) => (
                            <div key={interest} className="flex items-center space-x-2">
                              <Checkbox
                                id={interest}
                                checked={formData.interests.includes(interest)}
                                onCheckedChange={() => toggleInterest(interest)}
                              />
                              <Label htmlFor={interest} className="text-sm cursor-pointer">
                                {interest}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="skills">Technical Skills</Label>
                        <Textarea
                          id="skills"
                          placeholder="List your programming languages, frameworks, tools, etc."
                          value={formData.skills}
                          onChange={(e) => handleChange("skills", e.target.value)}
                          rows={3}
                          className="bg-glass-primary border-glass-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Previous Experience</Label>
                        <Textarea
                          id="experience"
                          placeholder="Describe any relevant projects, internships, or experiences"
                          value={formData.experience}
                          onChange={(e) => handleChange("experience", e.target.value)}
                          rows={3}
                          className="bg-glass-primary border-glass-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="motivation">Why do you want to join? *</Label>
                        <Textarea
                          id="motivation"
                          placeholder="Tell us what motivates you to join KhEC IT Circle"
                          value={formData.motivation}
                          onChange={(e) => handleChange("motivation", e.target.value)}
                          required
                          rows={4}
                          className="bg-glass-primary border-glass-border"
                        />
                      </div>
                    </div>

                    {/* Terms & Submit */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleChange("agreeToTerms", checked)}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm cursor-pointer">
                          I agree to the terms and conditions and understand that membership may involve participation in club activities and events *
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        disabled={loading || formData.interests.length === 0 || !formData.agreeToTerms}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting Application...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </div>
                  </form>
                </GlassCardContent>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
