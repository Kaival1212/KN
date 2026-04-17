import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, CheckCircle, Users, Smartphone,
  CreditCard, Map, Bell, Shield, Zap, Globe
} from 'lucide-react'

export const metadata = {
  title: 'LaunderettesNearMe.com — Smart Locker & Contractor Marketplace | KN Consulting',
  description:
    'A two-sided marketplace platform built by KN Consulting. Customers find and book laundry services via smart lockers. Contractors register, accept jobs, and get paid — all automated.',
}

const ChallengeCard = ({ icon, title, description }) => (
  <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
    <div className="flex items-center mb-3">
      <div className="p-2 bg-amber-100 rounded-lg mr-3">{icon}</div>
      <h3 className="font-semibold text-amber-900">{title}</h3>
    </div>
    <p className="text-amber-800 text-sm">{description}</p>
  </div>
)

const SolutionCard = ({ icon, title, description }) => (
  <div className="bg-kn-green/5 p-6 rounded-lg border border-kn-green/20">
    <div className="flex items-center mb-3">
      <div className="p-2 bg-kn-green/10 rounded-lg mr-3 text-kn-green">{icon}</div>
      <h3 className="font-semibold text-kn-navy">{title}</h3>
    </div>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
)

const FeatureCard = ({ icon, title, description, details }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-kn-green/10 rounded-lg mr-4 text-kn-green">{icon}</div>
      <h3 className="text-xl font-semibold text-kn-navy">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4 text-sm">{description}</p>
    <ul className="space-y-2">
      {details.map((d, i) => (
        <li key={i} className="flex items-start text-sm text-gray-700 gap-2">
          <CheckCircle className="w-4 h-4 text-kn-green mt-0.5 shrink-0" />
          {d}
        </li>
      ))}
    </ul>
  </div>
)

export default function LaunderettesNearMePage() {
  const challenges = [
    {
      icon: <Map className="w-5 h-5 text-amber-700" />,
      title: 'No Centralised Discovery',
      description: 'Customers had no easy way to find a local laundry service, check availability, or book via smart lockers — everything was fragmented across Google Maps, WhatsApp, and word of mouth.',
    },
    {
      icon: <Users className="w-5 h-5 text-amber-700" />,
      title: 'No Contractor Network',
      description: 'Laundry contractors — individuals who can collect, wash, and return items — had no platform to register, manage jobs, and get paid. The industry was entirely informal.',
    },
    {
      icon: <CreditCard className="w-5 h-5 text-amber-700" />,
      title: 'Zero Automation',
      description: 'Booking, payment, notifications, and locker access all required manual coordination — making the process unreliable, slow, and unscalable.',
    },
  ]

  const solutions = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Customer-Facing Marketplace',
      description: 'A clean web platform where customers find launderettes near them, select a service, drop off via smart locker, and pay — all without needing to speak to anyone.',
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Contractor Registration & Job Flow',
      description: 'Contractors register on the platform, verify their profile, and receive job assignments. They collect items, complete the service, and return them — all tracked in the app.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'End-to-End Automation',
      description: 'Smart locker access codes, payment processing, job assignment, and customer notifications are all handled automatically — zero manual coordination required.',
    },
  ]

  const features = [
    {
      icon: <Map className="w-6 h-6" />,
      title: 'Location-Based Service Discovery',
      description: 'Customers search for laundry services near their location, view available lockers, pricing, and service options.',
      details: [
        'Postcode-based locker search',
        'Real-time locker availability',
        'Service type selection (wash, dry-clean, fold)',
        'Transparent upfront pricing',
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Contractor Marketplace',
      description: 'A two-sided marketplace where verified laundry contractors register, manage their availability, and take on jobs.',
      details: [
        'Contractor onboarding and profile verification',
        'Job assignment and acceptance flow',
        'Earnings dashboard and payout management',
        'Service radius and availability settings',
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Smart Locker Integration',
      description: 'Every drop-off and collection is tied to a smart locker — customers receive unique access codes automatically.',
      details: [
        'Unique per-order access codes',
        'Automated locker assignment',
        'Pickup-ready notifications',
        'Locker access restricted until payment confirmed',
      ],
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Full Order Automation',
      description: 'From booking to collection, every step triggers automated notifications, payments, and status updates.',
      details: [
        'Booking confirmation and drop-off instructions',
        'Contractor collection alerts',
        'Order ready for pickup notifications',
        'Automated payment and receipt generation',
      ],
    },
  ]

  const techStack = [
    { name: 'Laravel', desc: 'Backend API, marketplace logic, auth' },
    { name: 'Next.js', desc: 'Customer-facing web platform' },
    { name: 'Stripe', desc: 'Payments, payouts to contractors' },
    { name: 'Smart Lockers', desc: 'Hardware API integration' },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/our-work" className="inline-flex items-center text-kn-navy hover:text-kn-green font-medium mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-3 mb-4">
                <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">In Development</span>
                <span className="bg-kn-navy text-white px-4 py-1.5 rounded-full text-sm font-semibold">Two-Sided Marketplace</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-kn-navy mb-4 leading-tight">
                LaunderettesNearMe.com
              </h1>
              <p className="text-kn-green font-semibold text-lg mb-4">Smart Locker & Laundry Contractor Platform</p>

              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                A fully automated, two-sided marketplace platform that connects customers with local laundry contractors via smart lockers — with zero staff required at any point in the process.
              </p>

              <p className="text-base text-gray-600 leading-relaxed">
                Built by KN Consulting from the ground up on Laravel and Next.js — separate from the Eurowash system. LaunderettesNearMe.com is a standalone product designed to scale across the UK.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {['Two-Sided Marketplace', 'Smart Lockers', 'Contractor Network', 'Laravel & Next.js', 'Automated Payments'].map((tag) => (
                  <span key={tag} className="bg-kn-green/10 text-kn-green px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1471&auto=format&fit=crop"
              width={600}
              height={400}
              alt="LaunderettesNearMe smart locker platform"
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">The Problem We're Solving</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The UK laundry industry is fragmented, informal, and still largely offline. LaunderettesNearMe.com is being built to fix that.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((c, i) => <ChallengeCard key={i} {...c} />)}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Our Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A platform that automates every touchpoint — from discovery and booking to contractor fulfilment and payment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((s, i) => <SolutionCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Platform Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built to handle two user types — customers and contractors — with smart locker hardware in the middle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => <FeatureCard key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-kn-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Built With</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Every component is engineered in-house by KN Consulting — no third-party marketplace builders, no templates.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="font-bold text-white mb-1">{t.name}</h3>
                <p className="text-white/40 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-kn-navy mb-6">
            Want a marketplace platform like this?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We build two-sided marketplaces, service booking platforms, and contractor management systems from scratch. Tell us what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-kn-green text-white px-8 py-4 rounded-xl font-bold hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center justify-center gap-2 border-2 border-kn-navy text-kn-navy hover:bg-kn-navy hover:text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              View More Projects
            </Link>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            Or email <a href="mailto:sales@knconsulting.uk" className="text-kn-green hover:underline">sales@knconsulting.uk</a>
          </p>
        </div>
      </section>

    </div>
  )
}
