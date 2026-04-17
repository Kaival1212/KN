import React from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Smartphone, Bell, Users, BarChart2, CreditCard, Zap, Star, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'KN Loyalty — Digital Loyalty Cards. No App Required. | KN Consulting',
  description:
    'KN Loyalty gives any business a digital loyalty programme in days. Customers onboard in 10 seconds — their card goes straight into Apple Wallet or Google Wallet. No app download ever needed. Includes CRM, push notifications, and analytics.',
  keywords:
    'digital loyalty card, no app loyalty program, Apple Wallet loyalty, Google Wallet loyalty, loyalty CRM, push notifications loyalty, KN Loyalty, KN Consulting, UK loyalty platform',
}

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: '10-Second Customer Onboarding',
    description: 'One short form — name and email or phone — and the customer instantly has a digital loyalty card in their Apple or Google Wallet. No app to download, no account to set up, no friction.',
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Apple Wallet & Google Wallet Cards',
    description: 'Loyalty cards live directly in the customer\'s phone wallet. Always visible on their lock screen. Works on every iPhone and Android device without any extra app.',
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Push Notifications to the Lock Screen',
    description: 'Send promotions, reward alerts, and re-engagement messages directly to your customers via wallet push notifications. Higher open rates than email — and no app required.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Built-in CRM',
    description: 'Every customer who joins is automatically added to your CRM. View profiles, stamp history, visit frequency, and contact details — all in one clean dashboard.',
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'Analytics & Retention Insights',
    description: 'Track your most loyal customers, visit frequency, and churn risk. Use real data to run smarter promotions and bring lapsed customers back.',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Works for Any Business',
    description: 'Restaurants, cafés, barbershops, retail stores, gyms, salons — if you have repeat customers, KN Loyalty works for you. No technical knowledge needed.',
  },
]

const steps = [
  {
    number: '01',
    title: 'We set up your programme',
    description: 'We configure your card design, reward rules, stamp thresholds, and business CRM in 1–2 days. You approve everything before it goes live.',
  },
  {
    number: '02',
    title: 'Customers scan to join',
    description: 'Display a QR code at your counter or on receipts. Customers scan, fill in a 10-second form, and their loyalty card is instantly created.',
  },
  {
    number: '03',
    title: 'Card saved to their Wallet',
    description: 'Their digital loyalty card is automatically added to Apple Wallet or Google Wallet. No link, no email, no app — it just appears.',
  },
  {
    number: '04',
    title: 'You stamp, track & notify',
    description: 'Log visits with a tap, send push notifications to all your customers, and view your full CRM from your dashboard — from any device.',
  },
]

const benefits = [
  'No app download required — ever',
  'Works on every iPhone and Android',
  '10-second customer onboarding',
  'Cards saved to Apple & Google Wallet',
  'Push notifications to lock screens',
  'Full CRM for every customer',
  'Visit tracking and reward history',
  'Works for any business type',
  'Simple dashboard — no tech skills needed',
  'Branded card matching your business',
  'Live in 1–2 days',
  'Ongoing support included',
]

export default function KNLoyaltyPage() {
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
                  Live & Available
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                KN Loyalty
              </h1>
              <p className="text-xl text-kn-green font-semibold mb-4">
                Digital loyalty for your business. No app required.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Customers onboard in 10 seconds. Their card is saved straight to Apple Wallet or Google Wallet. You get a full CRM, push notifications, and analytics — all in one platform.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50 mb-8">
                {['No app download', 'Apple & Google Wallet', 'Push notifications', 'Built-in CRM'].map((t) => (
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
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Right side trust card */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/50 text-sm">Loved by businesses</span>
                </div>
                <blockquote className="text-white/70 text-lg leading-relaxed italic mb-4">
                  "Our customers were surprised — scan the QR, done. The card was in their wallet in seconds. No confusion, no drop-off."
                </blockquote>
                <p className="text-kn-green font-semibold text-sm">KN Loyalty Customer</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '10s', label: 'Customer onboarding' },
                  { value: '100%', label: 'No app required' },
                  { value: '1–2 days', label: 'Live in' },
                  { value: '2 sides', label: 'Customer + business dashboard' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="text-white/40 text-xs mt-1">{s.label}</div>
                  </div>
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
              Everything your loyalty programme needs
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              One platform. No app downloads. No complicated setup. Just loyal customers coming back more often.
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-kn-navy mb-4">How it works</h2>
            <p className="text-lg text-gray-500">Up and running in 1–2 days. Your customers will be in their wallets in seconds.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-4xl font-extrabold text-kn-green/20 leading-none shrink-0">{step.number}</div>
                <div>
                  <h3 className="text-lg font-bold text-kn-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-kn-navy">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-3">What you get</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Everything included</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4 rounded-xl">
                <Check className="w-5 h-5 text-kn-green shrink-0" />
                <span className="text-white/80 font-medium text-sm">{benefit}</span>
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
            Ready to launch your loyalty programme?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Book a free demo and we'll show you exactly how KN Loyalty works for your business — live walkthrough, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-kn-green text-white px-10 py-4 rounded-xl font-bold hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20"
            >
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-kn-navy px-10 py-4 rounded-xl font-bold hover:border-kn-navy transition-all"
            >
              See Our Work
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
