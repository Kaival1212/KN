import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CaseStudiesSection from '../components/CaseStudiesSection.jsx'

export const metadata = {
  title: "Our Work | KN Consulting & Innovation Ltd — Real Projects, Real Impact",
  description:
    "Explore KN Consulting's portfolio of real-world software projects — automation systems, digital loyalty platforms, smart locker systems, and custom software built for UK businesses.",
}

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-4">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-kn-navy mb-6 leading-tight">
            Real projects. Real impact.
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            These are not mock-ups. Every project below is a live, working system — built on Laravel, React, Next.js, and SwiftUI — and used by real businesses and customers every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-kn-green text-white px-8 py-4 rounded-xl font-bold hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-kn-navy text-kn-navy hover:bg-kn-navy hover:text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <CaseStudiesSection />

      {/* CTA */}
      <section className="py-24 bg-kn-navy">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-4">Your project is next</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to build something like this?
          </h2>
          <p className="text-white/50 mb-10">
            Tell us what you want to build. We'll come back within 2 hours with a clear plan and a fixed price.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-kn-green text-white px-10 py-4 rounded-xl font-bold hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-6 text-white/30 text-sm">
            Or email{" "}
            <a href="mailto:sales@knconsulting.uk" className="text-kn-green hover:underline">sales@knconsulting.uk</a>
          </p>
        </div>
      </section>

    </div>
  )
}
