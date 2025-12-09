import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Users, Shield, Zap, CheckCircle, Lock } from 'lucide-react'

const ChallengeCard = ({ icon, title, description }) => (
    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
        <div className="flex items-center mb-3">
            <div className="p-2 bg-red-100 rounded-lg mr-3">
                {icon}
            </div>
            <h3 className="font-semibold text-red-800">{title}</h3>
        </div>
        <p className="text-red-700 text-sm">{description}</p>
    </div>
);

const SolutionCard = ({ icon, title, description }) => (
    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
        <div className="flex items-center mb-3">
            <div className="p-2 bg-green-100 rounded-lg mr-3 text-green-600">
                {icon}
            </div>
            <h3 className="font-semibold text-green-800">{title}</h3>
        </div>
        <p className="text-green-700 text-sm">{description}</p>
    </div>
);

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
);

export default function EurowashCaseStudy() {
    const challenges = [
        {
            icon: <Clock className="w-5 h-5 text-red-600" />,
            title: "Limited Operating Hours",
            description: "Traditional launderette required staff presence, limiting service availability to business hours only."
        },
        {
            icon: <Users className="w-5 h-5 text-red-600" />,
            title: "High Staff Costs",
            description: "Required full-time staff for customer service, payment processing, and order management."
        },
        {
            icon: <Shield className="w-5 h-5 text-red-600" />,
            title: "Manual Processes",
            description: "Paper-based order tracking, manual payment collection, and phone-based customer communications."
        }
    ];

    const solutions = [
        {
            icon: <Lock className="w-5 h-5" />,
            title: "Smart Locker System",
            description: "Secure, automated drop-off and pickup system with unique access codes for each customer."
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "24/7 Operations",
            description: "Customers can now access services anytime, significantly expanding business hours."
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            title: "Complete Automation",
            description: "Eliminated need for on-site staff while maintaining high service quality."
        }
    ];

    const features = [
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Smart Locker System",
            description: "Secure automated lockers for customer drop-off and pickup",
            details: [
                "Unique access codes generated for each customer",
                "Multiple locker sizes for different order volumes",
                "Secure locking mechanism with backup access",
                "Real-time locker availability tracking"
            ]
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Management Dashboard",
            description: "Complete order management and business oversight system",
            details: [
                "Real-time order status tracking",
                "Customer communication management",
                "Revenue and performance analytics",
                "Staff task assignment and tracking"
            ]
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Automated Notifications",
            description: "SMS and email communication system",
            details: [
                "Order confirmation messages",
                "Wash completion notifications",
                "Payment request automation",
                "Pickup ready alerts with access codes"
            ]
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Payment Integration",
            description: "Secure online payment processing",
            details: [
                "Stripe payment gateway integration",
                "Secure payment link generation",
                "Automatic receipt generation",
                "Payment confirmation triggers locker access"
            ]
        }
    ];

    const results = [
        { metric: "24/7", description: "Service Availability", color: "text-blue-600" },
        { metric: "100%", description: "Staff Cost Reduction", color: "text-green-600" },
        { metric: "0", description: "Manual Order Processing", color: "text-purple-600" },
        { metric: "Automated", description: "Payment & Notifications", color: "text-orange-600" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-8">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center text-kn-navy hover:text-kn-green transition-colors font-medium"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Case Studies
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-kn-green text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                Live System
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-kn-navy mb-6">
                                Eurowash Launderette Smart System
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Complete transformation from traditional launderette to fully automated 24/7 operation with smart lockers, payment processing, and management dashboard.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-6">
                                {['Smart Lockers', 'Payment Integration', '24/7 Automation', 'Management Dashboard'].map((tag) => (
                                    <span key={tag} className="bg-kn-green/10 text-kn-green px-3 py-1 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <Image
                                src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1471&auto=format&fit=crop"
                                alt="Modern launderette with smart automation systems"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge */}
            <section className="py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">The Challenge</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Traditional launderette operations were limited by manual processes, restricted operating hours, and high staffing costs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {challenges.map((challenge, index) => (
                            <ChallengeCard key={index} {...challenge} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Overview */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Our Solution</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A comprehensive automation system that eliminates manual processes and enables 24/7 operations without on-site staff.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {solutions.map((solution, index) => (
                            <SolutionCard key={index} {...solution} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Features */}
            <section className="py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">System Features</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Every component designed to work seamlessly together, creating a complete business automation solution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-20 bg-gradient-to-r from-kn-navy to-kn-green">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Results</h2>
                        <p className="text-lg text-white/90 max-w-3xl mx-auto">
                            Complete transformation of business operations with measurable improvements across all key metrics.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {results.map((result, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {result.metric}
                                </div>
                                <div className="text-white/80 text-sm">
                                    {result.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Technology Used</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Built with modern, reliable technologies to ensure system stability and scalability.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: "Laravel", description: "Backend Framework" },
                            { name: "Livewire", description: "Real-time Interface" },
                            { name: "Stripe", description: "Payment Processing" },
                            { name: "SMS/Email", description: "Notifications" }
                        ].map((tech, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-kn-navy mb-2">{tech.name}</h3>
                                <p className="text-sm text-gray-600">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-6">
                        Ready to Automate Your Business?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        See how we can transform your operations with custom automation systems. Pay only when you're completely satisfied.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-kn-green text-white font-semibold rounded-lg hover:bg-kn-green/90 transition-colors"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            href="/our-work"
                            className="inline-flex items-center px-8 py-4 border border-kn-navy text-kn-navy font-semibold rounded-lg hover:bg-kn-navy/5 transition-colors"
                        >
                            View More Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}