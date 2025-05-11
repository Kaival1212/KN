import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=870&auto=format&fit=crop',
    title: 'Phones & Vapes For All',
    description:
      'Multi-location POS system with repair booking and Stripe integration that increased operational efficiency by 35%.',
    tags: ['E-commerce', 'POS', 'Stripe Integration'],
    href: '/case-studies/phones-and-vapes',
  },
  {
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1471&auto=format&fit=crop',
    title: 'Eurowash Launderette',
    description:
      'Locker-based self-service system with management panel that reduced customer wait times by 50%.',
    tags: ['IoT', 'Management System', 'Automation'],
    href: '/case-studies/eurowash-launderette',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=870&auto=format&fit=crop',
    title: 'FreshTrack Logistics',
    description:
      'Real-time delivery tracking solution with customer notification system that improved delivery accuracy by 28%.',
    tags: ['Logistics', 'Tracking', 'Mobile App'],
    href: '/case-studies/freshtrack-logistics',
  },
]

function CaseStudyCard({ image, title, description, tags, href }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group">
      <div className="relative h-48 lg:h-64">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 text-kn-navy text-xs font-medium px-2.5 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-kn-green font-medium hover:underline transition-colors"
          aria-label={`Read case study: ${title}`}
        >
          Read Case Study
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="py-20"
      aria-labelledby="case-studies-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2
              id="case-studies-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover how we've helped businesses like yours achieve their goals
              with our innovative tech solutions.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 rounded-md border border-kn-navy text-kn-navy hover:bg-kn-navy/5 transition-colors font-medium"
            aria-label="View all case studies"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.title} {...cs} />
          ))}
        </div>
      </div>
    </section>
  )
}
