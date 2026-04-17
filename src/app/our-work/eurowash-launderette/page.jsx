import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowLeft,
    ArrowRight,
    Clock,
    Users,
    Shield,
    Zap,
    CheckCircle,
    Lock
} from 'lucide-react'

// Challenge cards
const ChallengeCard = ({ icon, title, description }) => (
    <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
        <div className="flex items-center mb-3">
            <div className="p-2 bg-amber-100 rounded-lg mr-3">{icon}</div>
            <h3 className="font-semibold text-amber-900">{title}</h3>
        </div>
        <p className="text-amber-800 text-sm">{description}</p>
    </div>
)

// Solution cards
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

// Feature cards
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
                <li key={index} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-kn-green mr-2 mt-0.5 flex-shrink-0" />
                    {detail}
                </li>
            ))}
        </ul>
    </div>
)

export default function EurowashCaseStudy() {
    // Accurate business challenges
    const challenges = [
        {
            icon: <Clock className="w-5 h-5 text-amber-700" />,
            title: 'Manual Order Handling',
            description:
                'Although the launderette was already 24/7 and unmanned, all orders were tracked manually through paper notes and WhatsApp messages.'
        },
        {
            icon: <Users className="w-5 h-5 text-amber-700" />,
            title: 'No Structured Staff Workflow',
            description:
                'Staff had no unified dashboard for tracking washing, drying, folding, pricing, or order completion.'
        },
        {
            icon: <Shield className="w-5 h-5 text-amber-700" />,
            title: 'Manual Payment Requests',
            description:
                'Payment links had to be created and sent manually, causing delays, missed payments, and inconsistent processes.'
        }
    ]

    // Real-world solution
    const solutions = [
        {
            icon: <Zap className="w-5 h-5" />,
            title: 'Digital Order Flow',
            description:
                'We recreated the entire locker workflow as a digital system — preserving their existing process but eliminating manual admin work.'
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            title: 'Staff Charging System',
            description:
                'Staff can now set charges in seconds. The system automatically sends secure payment links to customers.'
        },
        {
            icon: <Lock className="w-5 h-5" />,
            title: 'Automated Notifications',
            description:
                'Customers receive instant updates for order receipt, wash completion, payment reminders, and locker pickup details.'
        }
    ]

    // Features
    const features = [
        {
            icon: <Lock className="w-6 h-6" />,
            title: 'Smart Locker Workflow Digitisation',
            description:
                'A fully digital workflow built around their existing physical lockers — no hardware change required.',
            details: [
                'Unique access codes per customer',
                'Locker status tracking',
                'Pickup automation tied to payment',
                'Zero manual admin required for locker releases'
            ]
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Staff Operations Dashboard',
            description:
                'A structured system for staff to manage washing, drying, folding, charging, and order completion.',
            details: [
                'Task-based workflow',
                'Real-time status updates',
                'Order notes and history',
                'Automatic time tracking for jobs'
            ]
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Automated Customer Messaging',
            description:
                'Instant SMS & email notifications at every step of the order lifecycle.',
            details: [
                'Drop-off confirmation',
                'Wash completion alerts',
                'Payment link automation',
                'Pickup-ready notifications with access codes'
            ]
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Fully Integrated Payments',
            description:
                'A complete digital payment pipeline that reduces staff overhead and speeds up collections.',
            details: [
                'Stripe-integrated payment links',
                'Auto-generated receipts',
                'Automated reminders for unpaid orders',
                'Locker access restricted until payment is received'
            ]
        }
    ]

    // Tech stack
    const techStack = [
        { name: 'Laravel', desc: 'Backend API and workflow logic' },
        { name: 'Livewire', desc: 'Real-time staff dashboard' },
        { name: 'Stripe', desc: 'Payment links and automation' },
        { name: 'SMS and Email', desc: 'Customer notifications' },
    ]

    // Updated, realistic results
    const results = [
        { metric: '0 Manual', description: 'Order Tracking' },
        { metric: 'Fully', description: 'Digitised Staff Workflow' },
        { metric: 'Automatic', description: 'Payments & Notifications' },
        { metric: 'Consistent', description: 'Operations Across All Staff' }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* HEADER */}
            <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/our-work"
                        className="inline-flex items-center text-kn-navy hover:text-kn-green font-medium mb-8"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Case Studies
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-kn-green text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                Live System
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-kn-navy mb-4 leading-tight">
                                Eurowash Launderette Automation System
                            </h1>

                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                Eurowash already operated 24/7 as an unmanned launderette — but the
                                operational workflow behind the scenes was entirely manual. Orders,
                                charges, payment links, and customer updates were handled through paper
                                notes and WhatsApp messages.
                            </p>

                            <p className="text-base text-gray-600 leading-relaxed">
                                KN Consulting built a complete digital automation layer that integrates
                                with their existing workflow, enabling structured staff operations,
                                instant payment links, real-time tracking, and automated notifications.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-6">
                                {[
                                    'Workflow Automation',
                                    'Payment Integration',
                                    'Staff Dashboard',
                                    'Digital Locker Flow'
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

                        <Image
                            src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1471&auto=format&fit=crop"
                            width={600}
                            height={400}
                            alt="Eurowash smart system"
                            className="rounded-2xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* CHALLENGES */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-kn-navy text-center mb-6">
                        The Challenge
                    </h2>
                    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
                        Eurowash wanted to keep their 24/7 unmanned model — but eliminate all manual
                        admin and bring structure, speed, and automation to the workflow.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {challenges.map((c, i) => (
                            <ChallengeCard key={i} {...c} />
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-kn-navy text-center mb-6">
                        Our Solution
                    </h2>
                    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
                        A digital automation system designed to support staff, streamline customer
                        communication, and completely remove manual tracking.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.map((s, i) => (
                            <SolutionCard key={i} {...s} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-kn-navy text-center mb-6">
                        System Features
                    </h2>
                    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
                        Every part of the system works together to create a smooth, efficient,
                        fully digitised operation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((f, i) => (
                            <FeatureCard key={i} {...f} />
                        ))}
                    </div>
                </div>
            </section>

            {/* RESULTS */}
            <section className="py-20 bg-gradient-to-r from-kn-navy to-kn-green">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
                        Results
                    </h2>
                    <p className="text-lg text-white/90 text-center max-w-3xl mx-auto mb-16">
                        The final system brought structure, consistency, and automation to a
                        previously manual workflow — without changing how the launderette operates.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {results.map((r, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {r.metric}
                                </div>
                                <div className="text-white/80 text-sm">{r.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH STACK */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-kn-navy text-center mb-8">Built With</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {techStack.map((t) => (
                            <div key={t.name} className="text-center p-5 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-kn-navy mb-1">{t.name}</h3>
                                <p className="text-xs text-gray-500">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-kn-navy">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-4">Want something like this?</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                        Let’s automate your operations.
                    </h2>
                    <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
                        We build custom automation systems for service businesses — built on Laravel, integrated with payments, and running 24/7 without staff.
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
                            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all"
                        >
                            View More Case Studies
                        </Link>
                    </div>
                    <p className="mt-6 text-white/30 text-sm">
                        Or email <a href="mailto:sales@knconsulting.uk" className="text-kn-green hover:underline">sales@knconsulting.uk</a>
                    </p>
                </div>
            </section>
        </div>
    )
}
