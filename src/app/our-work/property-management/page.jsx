import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Users,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
} from 'lucide-react'

const ChallengeCard = ({ icon, title, description }) => (
  <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
    <div className="flex items-center mb-3">
      <div className="p-2 bg-amber-100 rounded-lg mr-3">
        {icon}
      </div>
      <h3 className="font-semibold text-amber-900">{title}</h3>
    </div>
    <p className="text-amber-800 text-sm">{description}</p>
  </div>
)

const SolutionCard = ({ icon, title, description }) => (
  <div className="bg-kn-green/5 p-6 rounded-lg border border-kn-green/20">
    <div className="flex items-center mb-3">
      <div className="p-2 bg-kn-green/10 rounded-lg mr-3 text-kn-green">
        {icon}
      </div>
      <h3 className="font-semibold text-kn-navy">{title}</h3>
    </div>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
)

const FeatureCard = ({ icon, title, description, details }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-kn-green/10 rounded-lg mr-4 text-kn-green">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-kn-navy">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {details.map((detail, index) => (
        <li
          key={index}
          className="flex items-start text-sm text-gray-700"
        >
          <CheckCircle className="w-4 h-4 text-kn-green mr-2 mt-0.5 flex-shrink-0" />
          {detail}
        </li>
      ))}
    </ul>
  </div>
)

export default function PropertyCaseStudy() {
  const challenges = [
    {
      icon: <FileText className="w-5 h-5 text-amber-700" />,
      title: 'Fragmented Records',
      description:
        'Tenant information, lease documents, rent records, and maintenance notes stored across paper files, spreadsheets, and inboxes—making it difficult to access reliable data quickly.',
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-amber-700" />,
      title: 'Inconsistent Communications',
      description:
        'Conversations spread across phone, email, and messaging, leading to missed updates, slow response times, and a poor tenant experience.',
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-700" />,
      title: 'High Administrative Overhead',
      description:
        'Significant time spent on manual follow-ups, chasing payments, and coordinating maintenance instead of focusing on portfolio growth and strategy.',
    },
  ]

  const solutions = [
    {
      icon: <Home className="w-5 h-5" />,
      title: 'Single Source of Truth',
      description:
        'A central platform for tenants, properties, leases, and financials—giving management a clear real-time picture of the entire portfolio.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Structured Communications',
      description:
        'Standardised communication flows and automated notifications for key events, reducing manual follow-up and missed messages.',
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Workflow Automation',
      description:
        'Automation of recurring processes such as rent reminders, maintenance workflows, and document tracking to reduce routine admin work.',
    },
  ]

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Tenant Management',
      description: 'End-to-end tenant lifecycle management on one platform.',
      details: [
        'Digital tenant profiles and documentation',
        'Lease agreement tracking and status',
        'Structured contact and communication records',
        'Tenant history and activity overview',
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Rent & Revenue Tracking',
      description:
        'Visibility and control over rental income, arrears, and payment patterns.',
      details: [
        'Automated rent reminders and due dates',
        'Payment history and reconciliation',
        'Overdue payment flags and alerts',
        'Portfolio-level financial reporting',
      ],
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Maintenance Management',
      description:
        'A structured, trackable process for maintenance and repair work.',
      details: [
        'Online maintenance request submission',
        'Priority and SLA-based handling',
        'Contractor assignment and notes',
        'Historical maintenance log per property',
      ],
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Portfolio Overview',
      description:
        'Top-level visibility across multiple properties and units.',
      details: [
        'Key metrics by property and portfolio',
        'Unified property records and documents',
        'Property-level performance insights',
        'Scalable structure for future acquisitions',
      ],
    },
  ]

  const expectedResults = [
    { metric: '50%', description: 'Reduction in admin time' },
    { metric: '100%', description: 'Digital portfolio visibility' },
    { metric: 'Automated', description: 'Key tenant communications' },
    { metric: 'Real-time', description: 'Operational updates' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Executive Summary */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link
              href="/our-work"
              className="inline-flex items-center text-kn-navy hover:text-kn-green transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                In Development · Property Management Platform
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-kn-navy mb-4 leading-tight">
                Custom Property Management Platform for a Multi-Property Portfolio
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                KN Consulting is designing and building a centralised, automation-led
                property management platform to replace fragmented processes and give
                ownership teams real-time visibility across their portfolio.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                The system brings together tenant management, rent and revenue
                tracking, maintenance workflows, and portfolio reporting into a single
                digital environment—removing manual effort and improving control.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  'Multi-Property Management',
                  'Tenant Lifecycle',
                  'Automation & Workflows',
                  'Financial Oversight',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-kn-green/10 text-kn-green px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1471&auto=format&fit=crop"
                alt="Modern property management system interface displayed on a laptop"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">
              Business Context & Challenges
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Managing a growing property portfolio through manual processes and
              disconnected tools creates risk, inconsistency, and a lack of
              operational oversight. The client required a scalable, centralised
              solution to support future growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} {...challenge} />
            ))}
          </div>
        </div>
      </section>

      {/* Development / Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">
              Our Approach & Current Status
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              KN Consulting is following a structured, consulting-led approach:
              understanding current workflows, designing the target operating model,
              and then engineering a platform aligned to those real-world needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-kn-navy mb-6">
                  Delivery Methodology
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Discovery & Workflow Mapping
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Detailed review of current processes, tools, and pain points
                        across tenant, financial, and maintenance workflows.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Solution Architecture & Design
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Defining the core modules, data structure, and automation
                        logic required to support multi-property operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Implementation & Iteration
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Configuring and building the platform with client feedback
                        loops to ensure alignment with daily operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Launch, Training & Ongoing Support
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Structured rollout, team training, and continued support for
                        optimisation and future feature development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-kn-green/10 to-blue-500/10 p-6 rounded-xl">
                <h4 className="font-semibold text-kn-navy mb-4">
                  Current Project Status
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Discovery & Planning:</span>
                    <span className="font-semibold text-kn-green">Completed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Core Development:</span>
                    <span className="font-semibold text-orange-500">In Progress</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">User Testing:</span>
                    <span className="font-semibold text-gray-400">Scheduled</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Production Launch:</span>
                    <span className="font-semibold text-gray-400">
                      Planned post-UAT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">
              Target Solution Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The solution is designed as a centralised property management platform
              that standardises processes, increases transparency, and supports
              future growth in a scalable way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical / Functional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The platform brings together tenant, financial, maintenance, and
              portfolio functions into a coherent, easy-to-operate system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-20 bg-gradient-to-r from-kn-navy to-kn-green">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Expected Business Outcomes
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Once fully deployed, the platform is expected to significantly reduce
              administrative workload, improve data visibility, and enhance the
              tenant experience across the portfolio.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {expectedResults.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {result.metric}
                </div>
                <div className="text-white/80 text-sm">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">
              Technology Backbone
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The solution is built on a modern, proven technology stack chosen for
              reliability, performance, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Laravel', description: 'Application backend and APIs' },
              { name: 'Relational Database', description: 'Structured data storage' },
              { name: 'Notification Services', description: 'Email / message alerts' },
              { name: 'Admin Dashboard', description: 'Operational control centre' },
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100"
              >
                <h3 className="font-semibold text-kn-navy mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-6">
            Exploring a Property Management Platform for Your Portfolio?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Speak with KN Consulting about building a property management system
            tailored to your portfolio and operating model. We focus on systems that
            deliver measurable operational impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-kn-green text-white font-semibold rounded-lg hover:bg-kn-green/90 transition-colors"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center px-8 py-4 border border-kn-navy text-kn-navy font-semibold rounded-lg hover:bg-kn-navy/5 transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
