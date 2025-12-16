"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const examples = [
  {
    src: "/wallet-examples/storecard-1.jpeg",
    alt: "Digital wallet loyalty card example",
  },
  {
    src: "/wallet-examples/storecard-2.jpeg",
    alt: "Digital wallet membership card example",
  },
]

export default function WalletShowcase() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % examples.length)
  const prev = () =>
    setIndex((index - 1 + examples.length) % examples.length)

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32" style={{ color: '#131A2F' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #4CAF50 0%, transparent 70%)' }} />
      </div>

      {/* HEADER */}
      <div className="text-center mb-20 lg:mb-24">
        <div className="inline-flex items-center gap-2 mb-6 rounded-full border bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-sm" style={{ borderColor: '#e5e7eb', color: '#8A898C' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#4CAF50' }}>
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <span>Apple Wallet & Google Wallet Integration</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight" style={{ color: '#131A2F' }}>
          Enterprise Digital Wallet
          <br className="hidden md:block" />
          <span style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Solutions & Platform Integration
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#8A898C' }}>
          We architect and implement <span className="font-semibold" style={{ color: '#131A2F' }}>Apple Wallet</span> and{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>Google Wallet</span> solutions as integral components
          of your digital infrastructure. From <span className="font-semibold" style={{ color: '#131A2F' }}>standalone digital passes</span> to{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>comprehensive loyalty ecosystems</span>, we transform
          mobile wallets into strategic customer engagement channels.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative flex justify-center items-center mb-24 lg:mb-32">
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 md:-left-12 lg:-left-16 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-105"
          style={{ borderColor: '#e5e7eb', color: '#8A898C' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#131A2F'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#8A898C'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[40px] blur-2xl opacity-20" style={{ background: 'linear-gradient(135deg, #4CAF50, #45a049)' }} />
          <div className="relative w-[320px] md:w-[360px] h-[660px] rounded-[36px] flex items-center justify-center overflow-hidden shadow-2xl border" style={{ background: 'linear-gradient(135deg, #131A2F 0%, #1a2440 100%)', borderColor: '#2a3447' }}>
            <div className="relative w-full h-full">
              <Image
                src={examples[index].src}
                alt={examples[index].alt}
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 md:-right-12 lg:-right-16 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-105"
          style={{ borderColor: '#e5e7eb', color: '#8A898C' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#131A2F'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#8A898C'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* CAPABILITIES OVERVIEW */}
      <div className="max-w-5xl mx-auto mb-20 lg:mb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#131A2F' }}>
          Digital Wallet Pass Capabilities
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: '#8A898C' }}>
          Digital wallet passes extend far beyond traditional loyalty programs. Deploy them as{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>digital business cards</span>,{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>membership credentials</span>,{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>event access tokens</span>, or{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>customer identification systems</span>.
          Each pass supports QR code or barcode integration, enabling direct connection to your{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>website</span>,{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>portfolio</span>,{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>reservation platform</span>,
          or any digital destination within your ecosystem.
        </p>
      </div>

      {/* FEATURE GRID */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-24">
        <div className="group relative bg-white rounded-2xl p-8 shadow-sm border hover:shadow-xl transition-all duration-300" style={{ borderColor: '#e5e7eb' }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #4CAF50, #45a049)' }}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#131A2F' }}>
            Cross-Platform Compatibility
          </h3>
          <p className="leading-relaxed" style={{ color: '#8A898C' }}>
            Unified solution supporting both <span className="font-semibold" style={{ color: '#131A2F' }}>Apple Wallet</span> and{" "}
            <span className="font-semibold" style={{ color: '#131A2F' }}>Google Wallet</span>, ensuring comprehensive reach
            across iOS and Android ecosystems. Zero application downloads required—passes integrate natively
            within existing wallet infrastructure.
          </p>
        </div>

        <div className="group relative bg-white rounded-2xl p-8 shadow-sm border hover:shadow-xl transition-all duration-300" style={{ borderColor: '#e5e7eb' }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #4CAF50, #45a049)' }}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#131A2F' }}>
            Static & Dynamic Architecture
          </h3>
          <p className="leading-relaxed" style={{ color: '#8A898C' }}>
            Deploy <span className="font-semibold" style={{ color: '#131A2F' }}>static passes</span> for streamlined use cases
            such as digital business cards or portfolio links, or implement{" "}
            <span className="font-semibold" style={{ color: '#131A2F' }}>dynamic passes</span> with real-time synchronization
            for loyalty points, rewards progression, or status-based updates.
          </p>
        </div>

        <div className="group relative bg-white rounded-2xl p-8 shadow-sm border hover:shadow-xl transition-all duration-300" style={{ borderColor: '#e5e7eb' }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #4CAF50, #45a049)' }}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: '#131A2F' }}>
            Enterprise Loyalty Integration
          </h3>
          <p className="leading-relaxed" style={{ color: '#8A898C' }}>
            Wallet passes integrate seamlessly with comprehensive{" "}
            <span className="font-semibold" style={{ color: '#131A2F' }}>loyalty platforms</span>, including administrative
            dashboards, customer relationship management systems, QR code validation infrastructure, analytics
            reporting, and bi-directional integration with existing enterprise systems.
          </p>
        </div>
      </div>

      {/* CUSTOM SOFTWARE */}
      <div className="max-w-5xl mx-auto mb-20 lg:mb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#131A2F' }}>
          Comprehensive Software Development
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: '#8A898C' }}>
          Beyond wallet passes, we architect and develop{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>enterprise-grade custom software</span> aligned with
          your operational requirements. Our expertise spans{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>web applications</span>,{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>mobile platforms</span>,{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>internal tooling</span>, and{" "}
          <span className="font-semibold" style={{ color: '#131A2F' }}>system integration architecture</span>.
          Whether addressing workflow optimization, innovative concepts, or operational challenges,
          we deliver tailored software solutions—with wallet passes serving as the customer-facing
          engagement layer.
        </p>
      </div>

      {/* USE CASE EXAMPLES */}
      <div className="max-w-6xl mx-auto mb-20 lg:mb-24">
        <h3 className="text-2xl font-bold mb-10 text-center" style={{ color: '#131A2F' }}>
          Industry Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border" style={{ borderColor: '#e5e7eb' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#e8f5e9' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#4CAF50' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: '#131A2F' }}>
                  Restaurants & Retail Operations
                </h4>
                <p style={{ color: '#8A898C' }}>
                  Loyalty point accumulation, visit frequency tracking, promotional offer distribution,
                  and QR-based check-in systems—accessible directly through customer mobile devices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border" style={{ borderColor: '#e5e7eb' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#e8f5e9' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#4CAF50' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: '#131A2F' }}>
                  Professional Services & Consultants
                </h4>
                <p style={{ color: '#8A898C' }}>
                  Contemporary digital business credentials stored natively in Apple or Google Wallet,
                  with direct integration to professional portfolios, LinkedIn profiles, or appointment scheduling platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border" style={{ borderColor: '#e5e7eb' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#e8f5e9' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#4CAF50' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: '#131A2F' }}>
                  Events & Community Organizations
                </h4>
                <p style={{ color: '#8A898C' }}>
                  Membership credential management, access control systems, and identity verification
                  infrastructure utilizing QR code technology for seamless entry management.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border" style={{ borderColor: '#e5e7eb' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#e8f5e9' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#4CAF50' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2" style={{ color: '#131A2F' }}>
                  Custom Enterprise Solutions
                </h4>
                <p style={{ color: '#8A898C' }}>
                  Define your operational requirements and workflows—we architect wallet-based solutions
                  tailored to your specific business processes and strategic objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-10" style={{ background: 'linear-gradient(135deg, #4CAF50, #45a049)' }} />
        <div className="relative rounded-3xl p-12 lg:p-16 text-center border shadow-2xl" style={{ background: 'linear-gradient(135deg, #131A2F 0%, #1a2440 100%)', borderColor: '#2a3447' }}>
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Customer Engagement?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#b0b0b0' }}>
            Let's discuss your requirements and determine whether a static pass implementation,
            comprehensive loyalty ecosystem, or fully customized software solution aligns with your strategic objectives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: '#4CAF50' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
          >
            Schedule a Consultation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-6 text-sm" style={{ color: '#8A898C' }}>
            Our team will conduct a comprehensive analysis of your use case and recommend
            the optimal technical approach for your organization.
          </p>
        </div>
      </div>
    </section>
  )
}