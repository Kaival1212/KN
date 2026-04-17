"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Mail, MapPin, Clock, Send, CheckCircle, AlertCircle,
  ArrowRight, Phone, Star, Zap, Shield, Users
} from 'lucide-react'

const ContactPage = () => {

  useEffect(() => {
    if (typeof window !== "undefined" && window.turnstile) {
      window.turnstile.render(".cf-turnstile", {
        sitekey: "0x4AAAAAACFzZSz9cLYWihQk",
        theme: "light",
      })
    }
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project_type: '',
    budget: '',
    message: '',
    urgency: 'normal'
  })

  const [status, setStatus] = useState({ type: '', message: '' })

  const projectTypes = [
    'Business Website',
    'Mobile App (iOS / Android)',
    'Custom Software / Platform',
    'Business Automation System',
    'Digital Loyalty Program',
    'Stack Management & Technical Support',
    'Startup Development & Technical Partnership',
    'Not Sure - Need Consultation',
  ]

  const budgetRanges = [
    'Under £1,000',
    '£1,000 - £3,000',
    '£3,000 - £8,000',
    '£8,000 - £20,000',
    '£20,000+',
    "Let's Discuss",
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = document.querySelector("[name='cf-turnstile-response']")?.value
    if (!token) {
      setStatus({ type: 'error', message: 'Verification failed. Please complete the security check.' })
      return
    }
    setStatus({ type: 'loading', message: 'Sending your message...' })
    try {
      const response = await fetch('https://formspree.io/f/xpwrdyrl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...formData,
          company: formData.company || 'Not specified',
          budget: formData.budget || 'Not specified',
          _subject: `New Inquiry: ${formData.project_type} - ${formData.name}${formData.urgency === 'high' ? ' (URGENT)' : ''}`,
          _replyto: formData.email,
          "cf-turnstile-response": token,
        })
      })
      if (response.ok) {
        setStatus({ type: 'success', message: "Message received - we'll respond within 2 hours during business hours." })
        setFormData({ name: '', email: '', company: '', project_type: '', budget: '', message: '', urgency: 'normal' })
      } else {
        throw new Error()
      }
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please email us directly at sales@knconsulting.uk.' })
    }
  }

  const StatusMessage = () => {
    if (!status.type) return null
    const icons = {
      success: <CheckCircle className="w-5 h-5" />,
      error: <AlertCircle className="w-5 h-5" />,
      loading: <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
    }
    const colors = { success: 'bg-green-500', error: 'bg-red-500', loading: 'bg-blue-500' }
    return (
      <div className={`${colors[status.type]} text-white p-4 rounded-lg mb-6 flex items-center gap-3`}>
        {icons[status.type]}
        <span>{status.message}</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="py-20 bg-kn-navy">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 bg-kn-green/20 text-kn-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-kn-green rounded-full animate-pulse" />
                Free consultation - no commitment required
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                {"Let's build your"}
                <br />
                <span className="text-kn-green">next big thing.</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Whether you need a website, mobile app, custom software, or someone to manage your existing stack - we give you a clear plan and a fixed price within 24 hours.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Zap className="w-5 h-5" />, text: "Response within 2 hours during business hours" },
                  { icon: <Shield className="w-5 h-5" />, text: "Fixed price - no surprise invoices, ever" },
                  { icon: <CheckCircle className="w-5 h-5" />, text: "UK registered company - No. 16605561" },
                  { icon: <Users className="w-5 h-5" />, text: "100% client satisfaction across all projects" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-white/70">
                    <span className="text-kn-green shrink-0">{icon}</span>
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/70 text-sm">100% satisfaction across all client projects</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Prefer to reach out directly?</h3>
                <div className="space-y-4">
                  <a href="mailto:sales@knconsulting.uk" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-kn-green/20 rounded-xl flex items-center justify-center text-kn-green group-hover:bg-kn-green group-hover:text-white transition-all shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Email</p>
                      <p className="text-kn-green text-sm">sales@knconsulting.uk</p>
                    </div>
                  </a>
                  <a href="tel:+447377297077" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-kn-green/20 rounded-xl flex items-center justify-center text-kn-green group-hover:bg-kn-green group-hover:text-white transition-all shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Phone</p>
                      <p className="text-kn-green text-sm">+44 7377 297077</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-kn-green/20 rounded-xl flex items-center justify-center text-kn-green shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Location</p>
                      <p className="text-white/50 text-sm">Twickenham, London - serving UK-wide</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-kn-green/20 rounded-xl flex items-center justify-center text-kn-green shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Response time</p>
                      <p className="text-white/50 text-sm">Within 2 hours, Mon-Fri 9am-6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">We build with</p>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "Livewire", "React", "Next.js", "React Native", "SwiftUI", "Spring Boot", "Node.js", "PHP"].map((t) => (
                    <span key={t} className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <div className="text-center mb-12">
            <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-3">Get started</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-kn-navy mb-4">
              Tell us about your project
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Fill in the form below and we will come back with a clear plan, timeline, and fixed price. No commitment required.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <StatusMessage />
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text" name="name" required value={formData.name} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kn-green focus:border-transparent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email" name="email" required value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kn-green focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                <input
                  type="text" name="company" value={formData.company} onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kn-green focus:border-transparent outline-none transition-all"
                  placeholder="Your Company Ltd"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">What do you need? *</label>
                  <select
                    name="project_type" required value={formData.project_type} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kn-green focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget" value={formData.budget} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kn-green focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">How urgent is this?</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'low', label: 'No Rush', desc: 'Exploring options' },
                    { value: 'normal', label: 'Normal', desc: 'Within a few weeks' },
                    { value: 'high', label: 'Urgent', desc: 'Need it soon' },
                  ].map(option => (
                    <label
                      key={option.value}
                      className={`flex flex-col items-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.urgency === option.value
                          ? 'border-kn-green bg-kn-green/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input type="radio" name="urgency" value={option.value} checked={formData.urgency === option.value} onChange={handleInputChange} className="sr-only" />
                      <span className={`font-semibold text-sm ${formData.urgency === option.value ? 'text-kn-green' : 'text-gray-700'}`}>{option.label}</span>
                      <span className="text-xs text-gray-400 mt-0.5 text-center">{option.desc}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                <textarea
                  name="message" required rows={5} value={formData.message} onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kn-green focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us what you want to build, automate, or improve. What problem are you solving? The more detail you give, the better our response."
                />
              </div>

              <div className="cf-turnstile" data-sitekey="0x4AAAAAACFzZSz9cLYWihQk" />

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-kn-green text-white py-4 px-6 rounded-xl font-bold hover:bg-kn-green/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-kn-green/20 hover:-translate-y-0.5 text-base"
              >
                {status.type === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send My Project Brief
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to be contacted about your project. We never share your information.
              </p>

            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: <Clock className="w-5 h-5" />, title: "2-hour response", desc: "We reply fast - usually within 2 hours on weekdays" },
              { icon: <Shield className="w-5 h-5" />, title: "Fixed price", desc: "Clear quote before we start - no vague estimates" },
              { icon: <CheckCircle className="w-5 h-5" />, title: "No commitment", desc: "The consultation is free - just start a conversation" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-kn-green/10 rounded-xl flex items-center justify-center text-kn-green mb-3">{icon}</div>
                <h3 className="font-bold text-kn-navy text-sm mb-1">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}

export default ContactPage
