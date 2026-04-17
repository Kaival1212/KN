import React from 'react'
import Link from 'next/link'
import { Shield, Cog, Smartphone, Users, Headphones, ArrowRight, Clock, Zap, Server } from 'lucide-react'

const services = [
    {
        icon: <Cog size={24} />,
        title: 'Automation & Intelligent Operations',
        description:
            'Powerful automation and custom software engineered to eliminate manual work — from smart locker systems to full property management platforms and tailored operational workflows. We build systems that run 24/7 without staff.',
        features: ['24/7 Autonomous Operation', 'Staff Cost Reduction', 'Custom Workflows'],
        badge: 'Most Popular',
        href: '/services#automation',
    },
    {
        icon: <Shield size={24} />,
        title: 'Digital Loyalty & Retention Systems',
        description:
            'Digital loyalty solutions integrated with Apple Wallet and Google Wallet. Our own product, KN Loyalty, gives customers a loyalty card in 10 seconds — no app download required. Includes a full CRM, push notifications, and analytics.',
        features: ['No App Required', 'Apple & Google Wallet', 'Push Notifications & CRM'],
        badge: 'Our Product',
        href: '/products/kn-loyalty',
    },
    {
        icon: <Smartphone size={24} />,
        title: 'Websites, Apps & Custom Software',
        description:
            'High-performance websites, iOS & Android apps, and bespoke software platforms — built on Laravel, Livewire, React, Next.js, React Native, SwiftUI, and Spring Boot. No templates. Every system is engineered around your workflow.',
        features: ['Laravel, Livewire & Next.js', 'SwiftUI & React Native Apps', 'Built to Your Workflow'],
        badge: null,
        href: '/services#development',
    },
    {
        icon: <Server size={24} />,
        title: 'Stack Management & Technical Support',
        description:
            "Already have a system but no one to manage it? We take ownership of your existing codebase — maintaining, improving, and scaling whatever stack you're running. Laravel, Node, PHP, React, or legacy systems.",
        features: ['Manage Your Existing Stack', 'Laravel & PHP Experts', '24/7 Monitoring & Fixes'],
        badge: null,
        href: '/services#maintenance',
    },
    {
        icon: <Users size={24} />,
        title: 'Startup Technical Partnership',
        description:
            'We act as your technical co-founder — providing product development, engineering leadership, and long-term support. Equity-based models available for early-stage founders who need a senior technical team without the full-time salary.',
        features: ['Co-Founder Level Support', 'Equity or Fixed-Fee', 'MVP to Scale'],
        badge: 'New',
        href: '/services#partnerships',
    },
    {
        icon: <Headphones size={24} />,
        title: 'Managed Support & Continuous Improvement',
        description:
            'End-to-end monthly management — hosting, monitoring, proactive updates, bug resolution, and continuous feature development. Your systems stay secure, fast, and evolving as your business grows.',
        features: ['24/7 Monitoring', 'Regular Updates', 'Direct Engineer Access'],
        badge: null,
        href: '/services#maintenance',
    },
]

const stats = [
    { icon: <Zap size={20} />, number: '50%+', label: 'Operational Efficiency Gains' },
    { icon: <Clock size={20} />, number: '24/7', label: 'Fully Automated Systems' },
    { icon: <Users size={20} />, number: '100%', label: 'Client Satisfaction Rate' },
]

function ServiceCard({ icon, title, description, features, badge, href }) {
    return (
        <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            {badge && (
                <div className="absolute -top-3 left-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        badge === 'Most Popular' ? 'bg-kn-green text-white' :
                        badge === 'Our Product' ? 'bg-purple-600 text-white' :
                        'bg-orange-500 text-white'
                    }`}>
                        {badge}
                    </span>
                </div>
            )}

            <div className="mb-6 p-3 bg-kn-green/10 rounded-full w-14 h-14 flex items-center justify-center text-kn-green group-hover:bg-kn-green group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {icon}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-kn-navy group-hover:text-kn-green transition-colors">
                {title}
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {description}
            </p>

            <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-kn-green rounded-full mr-3 shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>

            <Link
                href={href}
                className="inline-flex items-center text-kn-navy font-medium hover:text-kn-green transition-colors group/link text-sm"
                aria-label={`Learn more about ${title}`}
            >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
            </Link>
        </div>
    )
}

function StatsCard({ icon, number, label }) {
    return (
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-kn-green/10 rounded-full text-kn-green mb-3">
                {icon}
            </div>
            <div className="text-3xl font-bold text-kn-navy mb-1">{number}</div>
            <div className="text-sm text-gray-600">{label}</div>
        </div>
    )
}

export default function Service() {
    return (
        <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="services-heading">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-3">What we do</p>
                    <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4 text-kn-navy">
                        Everything your business needs — built in-house
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                        From your first website to a fully automated operations platform — we build, launch, and manage the technology that runs your business. Built on Laravel, Livewire, React, Next.js, React Native, SwiftUI, Spring Boot, and more.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
                        {stats.map((stat, index) => (
                            <StatsCard key={index} {...stat} />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((svc) => (
                        <ServiceCard key={svc.title} {...svc} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 border-2 border-kn-navy text-kn-navy hover:bg-kn-navy hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                    >
                        View All Services <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
