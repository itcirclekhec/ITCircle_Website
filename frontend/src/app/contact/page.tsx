"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card"
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle2, Facebook, Linkedin, Github, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "itcircle@khec.edu.bd",
      link: "mailto:itcircle@khec.edu.bd",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+880 1234-567890",
      link: "tel:+8801234567890",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "Khulna Engineering & Technology University, Khulna-9203, Bangladesh",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      value: "Saturday - Thursday: 10:00 AM - 5:00 PM",
      link: null,
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "https://facebook.com/khec.itcircle" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "https://instagram.com/khec.itcircle" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "https://linkedin.com/company/khec-it-circle" },
    { icon: <Github className="w-5 h-5" />, name: "GitHub", url: "https://github.com/khec-it-circle" },
  ]

  const faqs = [
    {
      question: "How do I become a member?",
      answer: "Fill out our membership application form and attend the orientation session. Membership is open to all KhEC students.",
    },
    {
      question: "Are there any membership fees?",
      answer: "There is a nominal annual membership fee that helps us organize events and workshops. Details are provided during registration.",
    },
    {
      question: "Can I join multiple projects?",
      answer: "Yes! Members can contribute to multiple projects based on their interests and availability.",
    },
    {
      question: "Do I need prior programming experience?",
      answer: "No prior experience is required. We welcome students of all skill levels and provide learning resources for beginners.",
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

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <GlassCard key={index} className="p-6 glow-hover text-center">
                  <GlassCardContent className="p-0 space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                      {info.icon}
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{info.value}</p>
                    )}
                  </GlassCardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div>
                <GlassCard className="glow-primary">
                  <GlassCardHeader>
                    <GlassCardTitle>Send us a Message</GlassCardTitle>
                    <GlassCardDescription>
                      Fill out the form below and we'll get back to you within 24-48 hours
                    </GlassCardDescription>
                  </GlassCardHeader>

                  <GlassCardContent>
                    {submitted ? (
                      <div className="text-center py-12 space-y-4">
                        <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thank you for contacting us. We'll respond to your inquiry soon.
                        </p>
                        <Button 
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          className="border-glass-border bg-glass-primary"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                            className="bg-glass-primary border-glass-border"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
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
                          <Label htmlFor="category">Category *</Label>
                          <Select value={formData.category} onValueChange={(value) => handleChange("category", value)} required>
                            <SelectTrigger className="bg-glass-primary border-glass-border">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="membership">Membership Question</SelectItem>
                              <SelectItem value="events">Events & Workshops</SelectItem>
                              <SelectItem value="projects">Project Collaboration</SelectItem>
                              <SelectItem value="sponsorship">Sponsorship Opportunity</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => handleChange("subject", e.target.value)}
                            required
                            className="bg-glass-primary border-glass-border"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            required
                            rows={6}
                            className="bg-glass-primary border-glass-border"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </GlassCardContent>
                </GlassCard>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <GlassCard className="overflow-hidden">
                  <div className="relative h-80 bg-gradient-to-br from-primary/10 to-accent/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.7302905996!2d89.53904431495837!3d22.815774685055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9071cb556515%3A0x5fa584202ea28ba7!2sKhulna%20University%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sbd!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                </GlassCard>

                {/* Social Media */}
                <GlassCard>
                  <GlassCardHeader>
                    <GlassCardTitle>Connect With Us</GlassCardTitle>
                    <GlassCardDescription>
                      Follow us on social media for updates and announcements
                    </GlassCardDescription>
                  </GlassCardHeader>
                  <GlassCardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="justify-start border-glass-border bg-glass-primary hover:bg-glass-secondary"
                          onClick={() => window.open(social.url, "_blank")}
                        >
                          {social.icon}
                          <span className="ml-2">{social.name}</span>
                        </Button>
                      ))}
                    </div>
                  </GlassCardContent>
                </GlassCard>

                {/* Quick Links */}
                <GlassCard>
                  <GlassCardHeader>
                    <GlassCardTitle>Quick Links</GlassCardTitle>
                  </GlassCardHeader>
                  <GlassCardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start border-glass-border bg-glass-primary" onClick={() => window.location.href = "/join"}>
                      Become a Member
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-glass-border bg-glass-primary" onClick={() => window.location.href = "/events"}>
                      Browse Events
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-glass-border bg-glass-primary" onClick={() => window.location.href = "/projects"}>
                      View Projects
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-glass-border bg-glass-primary" onClick={() => window.location.href = "/resources"}>
                      Access Resources
                    </Button>
                  </GlassCardContent>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-surface-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="bg-glass-primary border-glass-border mb-4">
                  FAQs
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground">
                  Quick answers to common questions
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <GlassCard key={index} className="p-6">
                    <GlassCardContent className="p-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </GlassCardContent>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
