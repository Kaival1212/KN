import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, Eye } from 'lucide-react'

const caseStudies = [
  {
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1471&auto=format&fit=crop',
    title: 'Eurowash Launderette Smart System',
    description:
      'Complete 24/7 automation with smart lockers, payment processing, and management dashboard. Eliminated the need for on-site staff.',
    tags: ['Smart Lockers', 'Payment Integration', '24/7 Automation'],
    href: '/case-studies/eurowash-launderette',
    highlight: 'Live System'
  },
  {
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=1471&auto=format&fit=crop',
    title: 'AI Security System - Retail Protection',
    description:
      'When traditional CCTV failed to identify thieves, our AI system captured crystal clear faces.',
    tags: ['AI Detection', 'Edge Processing', 'Crime Prevention'],
    href: '/case-studies/ai-security-system',
    highlight: 'Proven Results'
  },
  {
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1471&auto=format&fit=crop',
    title: 'Property Management System',
    description:
      'Custom tenant management, rent tracking, and automated communications system. Currently in development for multi-property portfolio.',
    tags: ['Property Management', 'Tenant Portal', 'Automated Workflows'],
    href: '/case-studies/property-management',
    highlight: 'In Development'
  },
]

function CaseStudyCard({ image, title, description, tags, href, highlight }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative">
      {highlight && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${highlight === 'Live System' ? 'bg-kn-green text-white' :
            highlight === 'Proven Results' ? 'bg-blue-500 text-white' :
              'bg-orange-500 text-white'
            }`}>
            {highlight}
          </span>
        </div>
      )}

      <div className="relative h-48 lg:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-kn-green/10 text-kn-green text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-3 text-kn-navy group-hover:text-kn-green transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center text-kn-green font-medium hover:text-kn-navy transition-colors group/link"
          aria-label={`Read case study: ${title}`}
        >
          Read Case Study
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

// Stats component to show credibility
function StatsBar() {
  const stats = [
    { icon: <Shield className="w-5 h-5" />, value: "100%", label: "Client Satisfaction" },
    { icon: <Lock className="w-5 h-5" />, value: "24/7", label: "System Uptime" },
    { icon: <Eye className="w-5 h-5" />, value: "Real", label: "Working Solutions" }
  ];

  return (
    <div className="bg-gradient-to-r from-kn-navy to-kn-green p-8 rounded-xl text-white mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-3 bg-white/20 rounded-full mb-3 text-white">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="py-20 bg-gray-50"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="case-studies-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-kn-navy"
          >
            Real Results from Real Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've transformed businesses with working automation systems. These aren't just case studies - they're live, operating solutions.
          </p>
        </div>

        {/* <St atsBar /> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.title} {...cs} />
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 rounded-md bg-kn-green text-white hover:bg-kn-green/90 transition-colors font-semibold"
              aria-label="View all case studies"
            >
              View Detailed Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-md border border-kn-navy text-kn-navy hover:bg-kn-navy/5 transition-colors font-semibold"
              aria-label="Start your project"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}