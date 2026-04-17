
import React from 'react'
import Link from 'next/link'
import { Shield, Cog, Smartphone, Users, Headphones, ArrowRight, Check, Server } from 'lucide-react'

export const metadata = {
    title: "Services | KN Consulting & Innovation Ltd — Laravel, React, Mobile Apps & Automation",
    description:
        "KN Consulting builds websites, mobile apps, automation systems, and custom software for UK businesses. Built on Laravel, React, Next.js, and SwiftUI. We also manage your existing stack.",
    keywords:
        "Laravel development UK, business automation, custom software London, mobile apps UK, website development, digital loyalty programs, startup technical partnership, stack management, PHP development, React development",
};

function ServiceDetail({ id, icon, title, badge, description, benefits, process, pricing, examples }) {
    return (
        <section id={id} className="py-20 border-b border-gray-100 last:border-b-0">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT: TEXT CONTENT */}
                    <div>
                        <div className="flex items-center mb-6 gap-4">
                            <div className="p-4 bg-kn-green/10 rounded-full w-16 h-16 flex items-center justify-center text-kn-green shrink-0">
                                {icon}
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-kn-navy">{title}</h2>
                                {badge && (
                                    <span className={`mt-1 inline-block px-3 py-0.5 rounded-full text-xs font-semibold ${
                                        badge === 'Most Popular' ? 'bg-kn-green text-white' :
                                        badge === 'Our Product' ? 'bg-purple-600 text-white' :
                                        'bg-orange-500 text-white'
                                    }`}>{badge}</span>
                                )}
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-kn-navy">What You Get</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-kn-green mt-0.5 shrink-0" />
                                        <span className="text-gray-700 text-sm">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {examples && (
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4 text-kn-navy">Real Examples</h3>
                                <div className="space-y-3">
                                    {examples.map((example, index) => (
                                        <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                            <p className="font-semibold text-kn-navy text-sm">{example.title}</p>
                                            <p className="text-gray-600 text-sm mt-0.5">{example.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: PROCESS + PRICING */}
                    <div className="lg:pl-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <h3 className="text-xl font-semibold mb-6 text-kn-navy">How It Works</h3>
                            <div className="space-y-5">
                                {process.map((step, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{step.title}</h4>
                                            <p className="text-gray-600 text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-kn-navy p-8 rounded-xl text-white">
                            <h3 className="text-xl font-semibold mb-4">Pricing</h3>
                            <div className="space-y-3 text-sm">
                                {pricing.upfront && (
                                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                        <span className="text-white/70">Project fee:</span>
                                        <span className="font-semibold">{pricing.upfront}</span>
                                    </div>
                                )}
                                {pricing.monthly && (
                                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                        <span className="text-white/70">Monthly support:</span>
                                        <span className="font-semibold">{pricing.monthly}</span>
                                    </div>
                                )}
                                {pricing.equity && (
                                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                        <span className="text-white/70">Equity option:</span>
                                        <span className="font-semibold">{pricing.equity}</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-white/50 text-xs mt-4">{pricing.note}</p>
                            <Link
                                href="/contact"
                                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-kn-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-kn-green/90 transition-all text-sm"
                            >
                                Get a Free Quote <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function ServicesPage() {
    const services = [
        {
            id: 'automation',
            icon: <Cog size={28} />,
            title: 'Automation & Intelligent Operations',
            badge: 'Most Popular',
            description:
                'Automation systems engineered to eliminate manual work and allow your business to operate around the clock. From smart locker systems to property management platforms, we build reliable backend systems in Laravel and Node.js that run 24/7 and scale with your business.',
            benefits: [
                'Eliminate manual tasks and paperwork',
                'Lower staffing costs and human errors',
                'Enable 24/7 autonomous operations',
                'Automated customer notifications',
                'Real-time dashboard monitoring',
                'Integrated payments and workflows',
                'Built on Laravel & Node.js backends',
                'Custom admin panels and reporting',
            ],
            process: [
                { title: 'Map Your Workflow', description: 'We analyse your operations to identify automation opportunities and bottlenecks.' },
                { title: 'Engineer Your System', description: 'We build a tailored automation system using Laravel, APIs, and custom integrations.' },
                { title: 'Train Your Team', description: 'Your staff learn how to use the system with confidence — we handle onboarding.' },
                { title: 'Launch & Support', description: 'We deploy, monitor, and continuously improve the system as your business evolves.' },
            ],
            pricing: {
                upfront: 'Fixed-price project fee',
                monthly: 'Optional hosting & support',
                note: 'Pricing agreed upfront. No hidden fees.',
            },
            examples: [
                { title: 'Eurowash Smart Locker Platform', description: 'Automated laundry service — smart lockers, payments, customer access, and live management dashboard. Zero staff required.' },
                { title: 'Smart Locker & Laundry Contractor Marketplace', description: 'Two-sided platform where contractors register to take jobs and customers book and pay through smart lockers.' },
                { title: 'Property Management System', description: 'Tenant management, automated rent collection, maintenance workflows, and landlord dashboards.' },
            ],
        },
        {
            id: 'loyalty-programs',
            icon: <Shield size={28} />,
            title: 'Digital Loyalty & Customer Retention',
            badge: 'Our Product',
            description:
                'Digital loyalty solutions integrated with Apple Wallet and Google Wallet. KN Loyalty — our own product — gives any customer a loyalty card in under 10 seconds with no app download required. Businesses get a full CRM, push notification tools, and engagement analytics.',
            benefits: [
                '10-second customer onboarding',
                'No app download required',
                'Apple Wallet & Google Wallet cards',
                'Push notifications to customers',
                'Built-in CRM and customer database',
                'Tiered rewards and punch cards',
                'Referral tracking and incentives',
                'Engagement and retention analytics',
            ],
            process: [
                { title: 'Design Your Loyalty Model', description: 'We build the right rewards structure for your business and customer base.' },
                { title: 'Develop the System', description: 'We configure and customise KN Loyalty — or build a bespoke loyalty platform.' },
                { title: 'Launch & Onboard', description: 'We support your launch with marketing materials and setup guidance.' },
                { title: 'Monitor & Improve', description: 'Review retention data and optimise the programme over time.' },
            ],
            pricing: {
                upfront: 'Setup fee from £499',
                monthly: 'Monthly platform fee',
                note: 'Pricing depends on features and business size.',
            },
            examples: [
                { title: 'KN Loyalty Platform', description: 'Our own product — 10-second onboarding, Apple/Google Wallet card, CRM, and push notifications for any business.' },
                { title: 'Custom Restaurant & Retail Loyalty', description: 'Bespoke wallet-based points systems, referral programmes, and analytics for hospitality and retail clients.' },
            ],
        },
        {
            id: 'development',
            icon: <Smartphone size={28} />,
            title: 'Websites, Apps & Custom Software',
            description:
                'High-performance websites, iOS & Android apps, and bespoke software platforms. We build on Laravel, React, Next.js, and SwiftUI — never templates, always engineered from scratch around your workflow and goals. If you already have a system, we can also take over and manage your stack.',
            benefits: [
                'Built on Laravel, React & Next.js',
                'iOS (SwiftUI) & Android apps',
                'Custom admin panels & dashboards',
                'SEO-optimised, fast-loading websites',
                'E-commerce and booking systems',
                'API integrations with third-party tools',
                'Can manage and improve your existing stack',
                'Full training and handover included',
            ],
            process: [
                { title: 'Discovery & Scoping', description: 'We understand your users, your workflow, and what success looks like for this product.' },
                { title: 'Design & Architecture', description: 'We design the interfaces and plan the technical architecture before writing code.' },
                { title: 'Build & Iterate', description: 'Development happens in stages with regular demos and feedback sessions.' },
                { title: 'Launch & Handover', description: 'Full testing, deployment, and training so your team can run it confidently.' },
            ],
            pricing: {
                upfront: 'Fixed-price project fee',
                monthly: 'Optional hosting & updates',
                note: 'Pricing agreed upfront. No hidden fees.',
            },
            examples: [
                { title: 'Business Websites', description: 'Conversion-focused websites built on Next.js — fast, SEO-optimised, and designed to generate leads.' },
                { title: 'Customer-Facing Mobile Apps', description: 'iOS and Android apps for service booking, customer management, and order tracking.' },
                { title: 'Bespoke Admin Systems', description: 'Internal dashboards, CRM systems, inventory platforms, and operational tools.' },
            ],
        },
        {
            id: 'stack-management',
            icon: <Server size={28} />,
            title: 'Stack Management & Technical Takeover',
            description:
                'Already have a website, app, or system but nobody reliable to manage it? We take ownership of your existing codebase — auditing, stabilising, and continuously improving whatever you are running. Laravel, PHP, Node.js, React, WordPress, or legacy codebases.',
            benefits: [
                'Full audit of your existing codebase',
                'Laravel, PHP, Node, React experts',
                'Bug fixing and performance improvements',
                'Security patches and updates',
                'Adding new features to existing systems',
                'Server and hosting management',
                'Legacy system modernisation',
                '24/7 monitoring and incident response',
            ],
            process: [
                { title: 'Codebase Audit', description: 'We review your existing system, identify risks, and plan improvements.' },
                { title: 'Stabilise & Secure', description: 'We fix critical bugs, update dependencies, and lock down security vulnerabilities.' },
                { title: 'Ongoing Management', description: 'We take ownership of deployments, updates, and day-to-day technical operations.' },
                { title: 'Continuous Improvement', description: 'New features and performance improvements delivered monthly.' },
            ],
            pricing: {
                monthly: 'Monthly retainer from £299',
                note: 'Pricing depends on the size and complexity of your stack.',
            },
            examples: [
                { title: 'Laravel Application Management', description: 'Taking over and improving existing Laravel backends — APIs, admin panels, and data pipelines.' },
                { title: 'WordPress & Legacy System Modernisation', description: 'Auditing and upgrading older PHP sites and custom CMS builds to modern standards.' },
            ],
        },
        {
            id: 'partnerships',
            icon: <Users size={28} />,
            title: 'Startup Technical Partnership',
            description:
                'We act as your technical co-founder — providing product development, engineering leadership, and long-term support. Equity-based models are available for early-stage founders who need a senior technical team without full-time salaries. We have built SaaS platforms, marketplaces, and consumer apps from scratch.',
            benefits: [
                'Co-founder level engineering expertise',
                'Lower upfront investment options',
                'Equity or fixed-fee models',
                'Technical strategy and roadmap',
                'MVP development and user testing',
                'Ongoing product scaling and support',
                'Full-stack Laravel + React + mobile',
                'Aligned incentives — we share the risk',
            ],
            process: [
                { title: 'Idea Evaluation', description: 'We assess your business idea, audience, competition, and technical feasibility.' },
                { title: 'Partnership Structure', description: 'We define the engagement model — equity, fixed-fee, or hybrid.' },
                { title: 'Build the MVP', description: 'Ship a working product to real users as fast as possible, then iterate.' },
                { title: 'Scale Together', description: 'Long-term product growth, feature expansion, and ongoing engineering support.' },
            ],
            pricing: {
                upfront: 'Low upfront fee',
                equity: 'Equity partnership available',
                note: 'We share the risk — lower upfront costs in exchange for equity stake.',
            },
            examples: [
                { title: 'SaaS Platform Development', description: 'Full-stack SaaS built on Laravel + React with subscriptions, billing, and multi-tenancy.' },
                { title: 'Two-Sided Marketplace', description: 'Consumer-facing marketplace apps with contractor/supplier side, payments, and live tracking.' },
            ],
        },
        {
            id: 'maintenance',
            icon: <Headphones size={28} />,
            title: 'Managed Support & System Maintenance',
            description:
                'Reliable monthly support to keep your systems secure, fast, and evolving. Includes hosting, monitoring, updates, bug fixes, and direct access to our engineering team. No more chasing unreliable freelancers or being left on your own after launch.',
            benefits: [
                '24/7 system monitoring and alerts',
                'Regular security and dependency updates',
                'Bug fixes and performance improvements',
                'New features delivered monthly',
                'Direct access to your engineer',
                'Automated backups and recovery',
                'SSL, domain, and server management',
                'Priority response for critical issues',
            ],
            process: [
                { title: 'Onboarding & Audit', description: 'We review your systems, document everything, and set up monitoring.' },
                { title: 'Proactive Monitoring', description: 'We watch for issues before they affect your users or business.' },
                { title: 'Monthly Updates', description: 'Security patches, performance work, and feature improvements every month.' },
                { title: 'Direct Support Channel', description: 'Fast access to your engineer via Zoho, email, or phone whenever you need it.' },
            ],
            pricing: {
                monthly: 'Monthly retainer from £149',
                note: 'Includes hosting, monitoring, updates, and direct engineer access.',
            },
            examples: [
                { title: 'Server & Infrastructure Management', description: 'Hosting, SSL, backups, CDN setup, and performance optimisation.' },
                { title: 'Ongoing Feature Development', description: 'Monthly improvements and new feature delivery on a rolling retainer.' },
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-white">

            {/* HERO */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
                    <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-4">Our Services</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-kn-navy leading-tight">
                        Everything you need — built in-house
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                        Websites, apps, automation, and custom software — all built by our in-house team using Laravel, React, Next.js, and SwiftUI. We also manage and improve your existing stack.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-kn-green text-white px-8 py-4 rounded-xl font-bold hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20"
                        >
                            Get a Free Quote <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/our-work"
                            className="inline-flex items-center justify-center gap-2 border-2 border-kn-navy text-kn-navy hover:bg-kn-navy hover:text-white px-8 py-4 rounded-xl font-bold transition-all"
                        >
                            See Our Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            {services.map((service) => (
                <ServiceDetail key={service.id} {...service} />
            ))}

            {/* CTA */}
            <section className="py-24 bg-kn-navy">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-4">Ready to start?</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                        Let's build something that works.
                    </h2>
                    <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
                        Free consultation. Fixed price. No commitment required until you're happy with the proposal.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-kn-green text-white px-10 py-4 rounded-xl font-bold hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20"
                    >
                        Start a Project <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="mt-6 text-white/30 text-sm">
                        Or email us directly at{' '}
                        <a href="mailto:sales@knconsulting.uk" className="text-kn-green hover:underline">sales@knconsulting.uk</a>
                    </p>
                </div>
            </section>
        </div>
    )
}
