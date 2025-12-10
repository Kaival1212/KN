import React from 'react'
import Link from 'next/link'
import { Shield, Cog, Smartphone, Users, Headphones, ArrowRight, Clock, Zap } from 'lucide-react'

const services = [
    {
        icon: <Cog size={24} />,
        title: 'Automation & Intelligent Software Systems',
        description:
            'Powerful automation and custom software solutions engineered to remove manual work—ranging from smart locker systems to full property management platforms and tailored operational workflows.',
        features: ['24/7 Operation', 'Staff Reduction', 'Custom Workflows'],
        badge: 'Most Popular',
        href: '/services#automation',
    },
    {
        icon: <Shield size={24} />,
        title: 'Digital Loyalty & Customer Experience Systems',
        description:
            'Advanced digital loyalty systems integrated with Apple Wallet and Google Wallet—designed to increase repeat visits and create a measurable customer database.',
        features: ['Digital Punch Cards', 'Tiered Rewards', 'Referral Tracking'],
        badge: 'Proven Results',
        href: '/services#loyalty-programs',
    },
    {
        icon: <Users size={24} />,
        title: 'Technical Partnership for Startups',
        description:
            'We partner with early-stage founders to provide senior-level technical leadership, product development, and long-term engineering support—structured through tailored equity agreements.',
        features: ['Equity-based', 'Co-founder Level', 'Long-term Partnership'],
        badge: 'New',
        href: '/services#partnerships',
    },
    {
        icon: <Smartphone size={24} />,
        title: 'Websites, Apps & Custom Software',
        description:
            'High-performance websites, mobile apps, and custom software built for real daily use—not generic templates or static pages that become obsolete.',
        features: ['User-friendly Design', 'Team Training', 'Real-time Data'],
        badge: null,
        href: '/services#development',
    },
    {
        icon: <Headphones size={24} />,
        title: 'Managed Support & Continuous Improvement',
        description:
            'End-to-end management including hosting, monitoring, proactive updates, bug resolution, and continuous feature enhancements to ensure long-term performance.',
        features: ['24/7 Monitoring', 'Regular Updates', 'Direct Support'],
        badge: null,
        href: '/services#maintenance',
    },
]

const stats = [
    { icon: <Zap size={20} />, number: '50%', label: 'Operational Efficiency Improvement' },
    { icon: <Clock size={20} />, number: '24/7', label: 'Fully Automated Operations' },
    { icon: <Users size={20} />, number: '100%', label: 'Client Satisfaction Rate' },
]

function ServiceCard({ icon, title, description, features, badge, href }) {
    return (
        <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            {badge && (
                <div className="absolute -top-3 left-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge === 'Most Popular' ? 'bg-kn-green text-white' :
                        badge === 'Proven Results' ? 'bg-blue-500 text-white' :
                            'bg-orange-500 text-white'
                        }`}>
                        {badge}
                    </span>
                </div>
            )}

            <div className="mb-6 p-3 bg-kn-green/10 rounded-full w-14 h-14 flex items-center justify-center text-kn-green group-hover:bg-kn-green group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {icon}
            </div>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-kn-navy transition-colors">
                {title}
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
                {description}
            </p>

            <div className="mb-6">
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-kn-green rounded-full mr-3"></div>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <Link
                href={href}
                className="inline-flex items-center text-kn-navy font-medium hover:text-kn-green transition-colors group/link"
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
        <section id="services" className="py-10 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="services-heading">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4">
                        What We Deliver
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                        We design and build high-performance websites, apps, automation systems, and custom software that solve real business challenges from day one. Every solution is engineered for reliability, scalability, and measurable impact.                    </p>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
                        {stats.map((stat, index) => (
                            <StatsCard key={index} {...stat} />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((svc) => (
                        <ServiceCard
                            key={svc.title}
                            icon={svc.icon}
                            title={svc.title}
                            description={svc.description}
                            features={svc.features}
                            badge={svc.badge}
                            href={svc.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}