import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Eye, Shield, Cpu, AlertTriangle, CheckCircle, Camera } from 'lucide-react'

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

export default function SecurityCaseStudy() {
    const challenges = [
        {
            icon: <Eye className="w-5 h-5 text-red-600" />,
            title: "Poor Image Quality",
            description: "Traditional CCTV cameras produced blurry, unusable footage when incidents occurred."
        },
        {
            icon: <AlertTriangle className="w-5 h-5 text-red-600" />,
            title: "Manual Monitoring",
            description: "Required constant human attention to identify security threats and suspicious activity."
        },
        {
            icon: <Camera className="w-5 h-5 text-red-600" />,
            title: "Limited Detection",
            description: "Standard cameras couldn't distinguish between legitimate customers and potential threats."
        }
    ];

    const solutions = [
        {
            icon: <Cpu className="w-5 h-5" />,
            title: "Edge AI Processing",
            description: "Local processing on Raspberry Pi hardware for real-time face visibility detection."
        },
        {
            icon: <Eye className="w-5 h-5" />,
            title: "Crystal Clear Detection",
            description: "Advanced AI algorithms capture clear facial details when traditional CCTV fails."
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Automated Alerts",
            description: "Instant notifications for security events with customer flagging capabilities."
        }
    ];

    const features = [
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Edge Processing System",
            description: "Local AI processing using Raspberry Pi and MediaPipe",
            details: [
                "Real-time face visibility detection",
                "No cloud dependency for privacy",
                "Low latency processing",
                "Cost-effective hardware solution"
            ]
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Advanced Detection",
            description: "AI-powered face visibility analysis",
            details: [
                "Detects if faces are visible or covered",
                "Works in various lighting conditions",
                "Privacy-focused visibility detection",
                "High accuracy identification"
            ]
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Admin Dashboard",
            description: "Complete monitoring and management interface",
            details: [
                "Real-time detection logs",
                "Customer flagging system",
                "Alert configuration",
                "Historical data analysis"
            ]
        },
        {
            icon: <AlertTriangle className="w-6 h-6" />,
            title: "Automated Storage",
            description: "Intelligent data management system",
            details: [
                "Local image storage first",
                "Cloudflare R2 integration",
                "Automatic weekly cleanup",
                "Optimized storage costs"
            ]
        }
    ];

    const results = [
        { metric: "Clear", description: "Facial Detection", color: "text-blue-600" },
        { metric: "Real-time", description: "Processing", color: "text-green-600" },
        { metric: "Local", description: "Edge Computing", color: "text-purple-600" },
        { metric: "Automated", description: "Threat Detection", color: "text-orange-600" }
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
                            <div className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                Proven Results
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-kn-navy mb-6">
                                AI Security System - Retail Protection
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Advanced AI-powered security system with edge processing that captures clear evidence when traditional CCTV fails. Real incident validation in retail environment.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-6">
                                {['AI Detection', 'Edge Processing', 'Crime Prevention', 'Real-time Alerts'].map((tag) => (
                                    <span key={tag} className="bg-kn-green/10 text-kn-green px-3 py-1 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <Image
                                src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=1471&auto=format&fit=crop"
                                alt="AI security camera system with edge processing"
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
                            Traditional security cameras were failing to provide usable evidence during incidents, leaving businesses vulnerable and unable to identify perpetrators.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {challenges.map((challenge, index) => (
                            <ChallengeCard key={index} {...challenge} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Real Incident */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Real-World Validation</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            When an actual theft occurred, our AI system proved its effectiveness by capturing clear evidence where traditional cameras failed.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-kn-navy mb-4">The Incident</h3>
                                <p className="text-gray-600 mb-4">
                                    During a retail theft incident, the business owner reviewed footage from multiple camera systems:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700">Traditional CCTV: Blurry, unusable footage</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-kn-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700">Our AI System: Crystal clear facial details</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-kn-green/10 to-blue-500/10 p-6 rounded-xl">
                                <h4 className="font-semibold text-kn-navy mb-3">System Performance</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Image Clarity:</span>
                                        <span className="font-semibold text-kn-green">Excellent</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Face Detection:</span>
                                        <span className="font-semibold text-kn-green">Successful</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Evidence Quality:</span>
                                        <span className="font-semibold text-kn-green">Usable</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Overview */}
            <section className="py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Our Solution</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            AI-powered security system with edge processing that delivers clear evidence when it matters most.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <SolutionCard key={index} {...solution} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Features */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">System Features</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Advanced AI capabilities running on cost-effective hardware for maximum security effectiveness.
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
                            Proven effectiveness in real-world security incidents with superior detection capabilities.
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
                            Cutting-edge AI and edge computing technologies for maximum effectiveness and privacy.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: "Raspberry Pi", description: "Edge Computing" },
                            { name: "MediaPipe", description: "AI Detection" },
                            { name: "Laravel", description: "Backend System" },
                            { name: "Cloudflare R2", description: "Storage Solution" }
                        ].map((tech, index) => (
                            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h3 className="text-xl font-semibold text-kn-navy mb-2">{tech.name}</h3>
                                <p className="text-gray-600 text-sm">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-kn-navy to-kn-green text-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Business?</h2>
                    <p className="text-lg mb-8">
                        Contact us today to learn how our AI security solutions can protect your assets and provide peace of mind.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-kn-navy px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Get in Touch
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}