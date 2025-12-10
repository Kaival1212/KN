
import React from 'react'
import Link from 'next/link'
import { Shield, Cog, Smartphone, Users, Headphones, ArrowRight, Check, Clock, Zap } from 'lucide-react'

export const metadata = {
    title: "Services | KN Consulting & Innovation Ltd | Websites, Apps, Automation & Custom Software",
    description:
        "Explore KN Consulting’s full range of digital engineering services including automation systems, custom software, loyalty programs, startup technical partnerships, mobile app development, website development, and managed technical support.",
    keywords:
        "business automation, custom software, mobile apps, website development, digital loyalty programs, Apple Wallet loyalty, Google Wallet loyalty, startup technical partnership, software engineering, KN Consulting, automation systems",
};

function ServiceDetail({ id, icon, title, description, benefits, process, pricing, examples }) {
    return (
        <section id={id} className="py-20 border-b border-gray-100 last:border-b-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT: TEXT CONTENT */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="p-4 bg-kn-green/10 rounded-full w-16 h-16 flex items-center justify-center text-kn-green mr-4">
                                {icon}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                        </div>

                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            {description}
                        </p>

                        {/* BENEFITS */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">What You Get:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start">
                                        <Check className="w-5 h-5 text-kn-green mr-3 mt-0.5" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* REAL EXAMPLES */}
                        {examples && (
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Real Examples:</h3>
                                <div className="space-y-3">
                                    {examples.map((example, index) => (
                                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                            <p className="font-medium text-kn-navy">{example.title}</p>
                                            <p className="text-gray-600 text-sm">{example.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: PROCESS + PRICING */}
                    <div className="lg:pl-8">

                        {/* PROCESS */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                            <h3 className="text-xl font-semibold mb-6">How It Works:</h3>
                            <div className="space-y-4">
                                {process.map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">{step.title}</h4>
                                            <p className="text-gray-600 text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PRICING */}
                        <div className="bg-gradient-to-br from-kn-navy to-kn-green p-8 rounded-xl text-white">
                            <h3 className="text-xl font-semibold mb-4">How Payment Works:</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span>Upfront Development:</span>
                                    <span className="font-semibold">{pricing.upfront}</span>
                                </div>
                                {pricing.monthly && (
                                    <div className="flex justify-between items-center">
                                        <span>Monthly Support:</span>
                                        <span className="font-semibold">{pricing.monthly}</span>
                                    </div>
                                )}
                                {pricing.equity && (
                                    <div className="flex justify-between items-center">
                                        <span>Equity Option:</span>
                                        <span className="font-semibold">{pricing.equity}</span>
                                    </div>
                                )}
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/20">
                                <p className="text-sm opacity-90">{pricing.note}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default function ServicesPage() {
    const services = [

        /* -----------------------------------------------------------
           1) AUTOMATION
        ----------------------------------------------------------- */
        {
            id: 'automation',
            icon: <Cog size={28} />,
            title: 'Automation & Intelligent Operations Systems',
            description:
                'Automation systems engineered to eliminate manual work and allow your business to operate around the clock. From smart locker systems to property management platforms, we build reliable systems that run behind the scenes and scale with your business.',
            benefits: [
                'Reduce manual tasks and paperwork',
                'Lower staffing costs and human errors',
                'Enable 24/7 autonomous operations',
                'Automated customer notifications',
                'Real-time dashboard monitoring',
                'Integrated payments and workflows'
            ],
            process: [
                { title: 'Map Your Workflow', description: 'We analyse your operations to identify automation opportunities.' },
                { title: 'Engineer Your System', description: 'We build a tailored automation workflow for your business.' },
                { title: 'Train Your Team', description: 'Your team learns how to use the system with confidence.' },
                { title: 'Launch & Support', description: 'We deploy the system and provide continuous improvements.' }
            ],
            pricing: {
                upfront: 'Pay only when satisfied',
                monthly: 'Optional monthly hosting & support',
                note: 'You only pay once the automation system is functioning and approved by you.'
            },
            examples: [
                { title: 'Smart Locker System (Eurowash)', description: 'Automated laundry service with payments, customer access, and staff panels.' },
                { title: 'Property Management System', description: 'Tenant management, rent automation, and maintenance workflows.' }
            ]
        },

        /* -----------------------------------------------------------
           2) LOYALTY PROGRAMS
        ----------------------------------------------------------- */
        {
            id: 'loyalty-programs',
            icon: <Shield size={28} />,
            title: 'Digital Loyalty & Customer Retention Systems',
            description:
                'Digital loyalty systems integrated with Apple Wallet and Google Wallet. Increase repeat visits with tiered rewards, digital punch cards, referrals, and analytics dashboards to track customer behaviour and performance.',
            benefits: [
                'Instant registration via Apple & Google Wallet',
                'Tiered rewards and incentives',
                'Digital punch card tracking',
                'Customer referral programs',
                'Engagement analytics dashboard',
                'Automated customer reminders'
            ],
            process: [
                { title: 'Design Loyalty Model', description: 'We plan the perfect loyalty structure for your business.' },
                { title: 'Develop Digital System', description: 'We build the wallet integration and loyalty features.' },
                { title: 'Launch & Promote', description: 'We support you in launching and promoting your new loyalty program.' },
                { title: 'Monitor & Improve', description: 'We review analytics and optimise the system over time.' }
            ],
            pricing: {
                upfront: 'Custom pricing based on scope',
                monthly: 'Monthly support available',
                note: 'Pricing varies based on features and integrations.'
            },
            examples: [
                { title: 'Copper Chimney Restaurant', description: 'Wallet-based points and reward system.' },
                { title: 'Happy London Restaurant', description: 'Referral system and analytics-driven loyalty engagement.' }
            ]
        },

        /* -----------------------------------------------------------
           3) STARTUP PARTNERSHIP
        ----------------------------------------------------------- */
        {
            id: 'partnerships',
            icon: <Users size={28} />,
            title: 'Startup Technical Partnership',
            description:
                'We act as your technical co-founder—providing product development, engineering leadership, long-term support, and strategy. Instead of high upfront costs, you can choose an equity-based model.',
            benefits: [
                'Co-founder level engineering expertise',
                'Lower upfront investment',
                'Shared incentives and aligned goals',
                'Technical strategy & roadmap planning',
                'MVP development and iteration',
                'Ongoing product scaling'
            ],
            process: [
                { title: 'Idea Review', description: 'We evaluate your business idea, audience, and technical scope.' },
                { title: 'Partnership Setup', description: 'Define equity split, responsibilities, and roadmap.' },
                { title: 'Build the MVP', description: 'Develop the first product version for real user testing.' },
                { title: 'Scale Together', description: 'Continuous improvements and long-term product growth.' }
            ],
            pricing: {
                upfront: 'Low upfront + equity',
                equity: 'Equity partnership option',
                note: 'We share the risk with you—lower upfront costs in exchange for equity.'
            },
            examples: [
                { title: 'SaaS Platform', description: 'Full-stack SaaS development with long-term partnership.' },
                { title: 'E-commerce Automation', description: 'End-to-end automation for online stores and inventory.' }
            ]
        },

        /* -----------------------------------------------------------
           4) DEVELOPMENT (WEBSITES + APPS)
        ----------------------------------------------------------- */
        {
            id: 'development',
            icon: <Smartphone size={28} />,
            title: 'Websites, Apps & Custom Software',
            description:
                'High-performance websites, mobile apps, and bespoke software platforms built for daily operational use. No templates—every system is designed around your workflow and business goals.',
            benefits: [
                'Built for real daily use',
                'Training included for adoption',
                'Live data and real-time updates',
                'Integrates with your existing tools',
                'Designed around your workflow'
            ],
            process: [
                { title: 'Workflow Discovery', description: 'We analyse how your team works and what they need.' },
                { title: 'User-Focused Design', description: 'We design intuitive interfaces your team will love.' },
                { title: 'Iterative Development', description: 'Feedback-driven improvements as we build.' },
                { title: 'Training & Rollout', description: 'Full training to ensure successful adoption.' }
            ],
            pricing: {
                upfront: 'Pay only when satisfied',
                monthly: 'Optional monthly hosting & updates',
                note: 'You only pay when your software is working and approved by your team.'
            },
            examples: [
                { title: 'Customer Management System', description: 'Centralised system for bookings, notes, and communication.' },
                { title: 'Inventory & Ordering Platform', description: 'Live stock levels, automated ordering, supplier tracking.' }
            ]
        },

        /* -----------------------------------------------------------
           5) SUPPORT & MAINTENANCE
        ----------------------------------------------------------- */
        {
            id: 'maintenance',
            icon: <Headphones size={28} />,
            title: 'Managed Support & System Maintenance',
            description:
                'Reliable monthly support to keep your systems secure, fast, and up-to-date. Includes hosting, monitoring, updates, bug fixes, and direct access to our engineering team.',
            benefits: [
                '24/7 system monitoring',
                'Regular security updates',
                'Bug fixes and performance upgrades',
                'New features over time',
                'Direct access to support',
                'Backups & disaster recovery'
            ],
            process: [
                { title: 'Monitoring', description: 'We monitor uptime, performance, and security.' },
                { title: 'Proactive Updates', description: 'Fixes and updates before issues appear.' },
                { title: 'Direct Support', description: 'Fast response via WhatsApp or phone.' },
                { title: 'Future Planning', description: 'Plan new features as your business grows.' }
            ],
            pricing: {
                monthly: 'Monthly support available',
                note: 'Includes hosting, monitoring, updates, and direct access to engineers.'
            },
            examples: [
                { title: 'Server Management', description: 'Hosting, SSL, backups, optimisation.' },
                { title: 'Feature Development', description: 'Monthly feature improvements.' }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white">

            {/* HERO HEADER */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-kn-navy">
                        Our Digital Services
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our full range of digital engineering services—automation, software development, mobile apps, websites, loyalty systems, and long-term technical partnerships.
                    </p>
                </div>
            </section>

            {/* SERVICES */}
            {services.map((service) => (
                <ServiceDetail key={service.id} {...service} />
            ))}

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-kn-navy to-kn-green">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Speak with us today. Let’s build a digital system that helps your business run smarter, faster, and more efficiently.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-kn-navy px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-sm"
                    >
                        Speak With Us
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
