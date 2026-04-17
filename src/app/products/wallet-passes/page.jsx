"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Check, Smartphone, Bell, Zap, RefreshCw, CreditCard, Users } from "lucide-react"

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

const features = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Apple and Google Wallet",
    description: "Passes live natively in the customer's phone wallet. No app download, no friction — works on every iPhone and Android device out of the box.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Static and Dynamic Passes",
    description: "Deploy simple static passes for business cards or event tickets, or dynamic passes that update in real-time with loyalty points, status, and rewards.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Push Notifications",
    description: "Send promotions and alerts directly to a customer's lock screen via wallet push notifications — higher open rates than email, no app required.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "QR and Barcode Support",
    description: "Every pass includes scannable QR codes or barcodes linking directly to your website, booking platform, loyalty system, or any digital destination.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Full CRM Integration",
    description: "Connect wallet passes to a full customer management system — track visits, manage loyalty points, view history, and send targeted messages.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Custom Enterprise Systems",
    description: "We build the full backend — pass generation APIs, admin dashboards, validation tools, and analytics reporting — tailored to your workflows.",
  },
]

const useCases = [
  { title: "Loyalty and Stamp Cards", desc: "Points, stamps, and reward tiers — customers carry their loyalty card in their wallet forever." },
  { title: "Digital Business Cards", desc: "A professional credential in Apple or Google Wallet, linked to your portfolio, LinkedIn, or booking system." },
  { title: "Membership and Access", desc: "Club memberships, gym passes, and access credentials — verified via QR scan at the door." },
  { title: "Event Tickets", desc: "Issue event passes that live in the wallet, update automatically, and scan for entry without paper." },
  { title: "Staff and ID Badges", desc: "Internal employee passes with roles, departments, and QR-based access control." },
  { title: "Coupons and Promotions", desc: "Send time-limited offers as passes that appear on the lock screen when customers are near your location." },
]

export default function WalletPassesPage() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % examples.length)
  const prev = () => setIndex((index - 1 + examples.length) % examples.length)

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="py-24 bg-kn-navy">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-kn-green/20 text-kn-green px-4 py-2 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-kn-green rounded-full animate-pulse" />
                  Our Product
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 text-white/70 px-4 py-2 rounded-full text-sm font-semibold">
                  Live and Available
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Wallet Passes
              </h1>
              <p className="text-xl text-kn-green font-semibold mb-4">
                Digital passes for Apple Wallet and Google Wallet.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                We build custom digital wallet passes for any business — loyalty cards, memberships, event tickets, business cards, and more. No app download. Works on every iOS and Android device.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50 mb-8">
                {['No app download', 'Apple and Google Wallet', 'Push notifications', 'Full backend included'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-kn-green" /> {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-kn-green text-white px-8 py-4 rounded-xl font-bold hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20"
                >
                  Get a Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#use-cases"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all"
                >
                  See Use Cases
                </Link>
              </div>
            </div>

            {/* Phone carousel */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative flex items-center gap-4">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="relative w-[280px] h-[580px] rounded-[36px] overflow-hidden shadow-2xl border border-white/10 bg-kn-navy">
                  <Image
                    src={examples[index].src}
                    alt={examples[index].alt}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>

                <button
                  onClick={next}
                  aria-label="Next"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex gap-2">
                {examples.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-kn-green w-6' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-kn-navy mb-4">
              Everything built in-house
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We don't use third-party pass builders. Every system is engineered by KN Consulting — from pass generation to the backend API to the admin dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="mb-5 p-3 bg-kn-green/10 rounded-full w-14 h-14 flex items-center justify-center text-kn-green group-hover:bg-kn-green group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-kn-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="py-24 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-kn-navy mb-4">
              Works for any business
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Whether you need a simple loyalty card or a fully integrated enterprise pass system, we build it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <Check className="w-5 h-5 text-kn-green mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-bold text-kn-navy mb-1">{uc.title}</h3>
                  <p className="text-gray-600 text-sm">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-kn-navy">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">How it works</h2>
            <p className="text-lg text-white/50">From brief to live passes in a matter of days.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { number: '01', title: 'Tell us what you need', description: "We discuss your use case — loyalty, membership, events, or something custom — and scope out exactly what to build." },
              { number: '02', title: 'We design and build', description: "Our team builds the pass templates, backend API, admin dashboard, and any integrations you need — all from scratch." },
              { number: '03', title: 'You test and approve', description: "We deliver a working prototype for you to test on real devices before anything goes live." },
              { number: '04', title: 'Launch and scale', description: "We deploy, monitor, and support the system. You can issue passes, send push notifications, and manage customers from day one." },
            ].map((step) => (
              <div key={step.number} className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl font-extrabold text-kn-green/20 leading-none shrink-0">{step.number}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-4">Get started</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-kn-navy mb-6">
            Ready to launch your wallet pass?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Book a free demo and we'll show you exactly how wallet passes work for your use case — live walkthrough, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-kn-green text-white px-10 py-4 rounded-xl font-bold hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20"
            >
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/kn-loyalty"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-kn-navy px-10 py-4 rounded-xl font-bold hover:border-kn-navy transition-all"
            >
              See KN Loyalty
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
