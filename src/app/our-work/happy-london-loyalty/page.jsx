import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Users, Gift, Smartphone, Zap, CheckCircle, BarChart, QrCode, WalletCards } from 'lucide-react'

const ChallengeCard = ({ icon, title, description }) => (
    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
        <div className="flex items-center mb-3">
            <div className="p-2 bg-red-100 rounded-lg mr-3">{icon}</div>
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
            <div className="p-3 bg-kn-green/10 rounded-lg mr-4 text-kn-green">{icon}</div>
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

export default function HappyLondonCaseStudy() {

    const challenges = [
        {
            icon: <Users className="w-5 h-5 text-red-600" />,
            title: "Low Customer Retention",
            description: "Customers visited once but rarely returned due to lack of incentives or engagement."
        },
        {
            icon: <QrCode className="w-5 h-5 text-red-600" />,
            title: "No Loyalty Tracking",
            description: "Restaurant had no digital system to track visits, spending, or reward progress."
        },
        {
            icon: <Smartphone className="w-5 h-5 text-red-600" />,
            title: "High Friction Signup",
            description: "Paper cards were lost and app downloads created friction—leading to low participation."
        }
    ];

    const solutions = [
        {
            icon: <WalletCards className="w-5 h-5" />,
            title: "Digital Wallet Loyalty",
            description: "Apple Wallet & Google Wallet pass that automatically tracks visits and rewards."
        },
        {
            icon: <Gift className="w-5 h-5" />,
            title: "Custom Reward System",
            description: "Fully personalised points, tiers, and reward structures designed for the restaurant."
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Frictionless Signup",
            description: "Customers register in under 30 seconds with no app download required."
        }
    ];

    const features = [
        {
            icon: <WalletCards className="w-6 h-6" />,
            title: "Apple & Google Wallet Integration",
            description: "Loyalty cards that live inside customers’ phones",
            details: [
                "Instant digital pass installation",
                "Automatic point updates on the card",
                "Push updates without app installation",
                "Works across all iOS and Android devices"
            ]
        },
        {
            icon: <BarChart className="w-6 h-6" />,
            title: "Restaurant Dashboard",
            description: "Complete control over customer loyalty data",
            details: [
                "Customer insights and visit behaviour",
                "Reward configuration and campaign tools",
                "Visit/spend analytics",
                "Email-ready customer export"
            ]
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Automated Marketing",
            description: "Messaging designed to increase repeat visits",
            details: [
                "Visit confirmation messages",
                "Reward unlocked notifications",
                "Lapsed customer reminders",
                "Seasonal promotional campaigns"
            ]
        },
        {
            icon: <Gift className="w-6 h-6" />,
            title: "Reward Engine",
            description: "Flexible reward system for high engagement",
            details: [
                "Points-based and visit-based rewards",
                "Tiered loyalty (Silver / Gold / VIP)",
                "Custom expiry rules",
                "Auto-redeem via staff interface"
            ]
        }
    ];

    const results = [
        { metric: "3×", description: "Increase in Return Visits", color: "text-green-600" },
        { metric: "76%", description: "Signup Rate Improvement", color: "text-blue-600" },
        { metric: "0", description: "Apps Required", color: "text-purple-600" },
        { metric: "Automated", description: "Loyalty Tracking & Updates", color: "text-orange-600" }
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* Header */}
            <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center text-kn-navy hover:text-kn-green transition-colors font-medium mb-10"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Case Studies
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT */}
                        <div>
                            <div className="inline-flex items-center bg-kn-green text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                Proven Results
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-kn-navy mb-6">
                                Happy London Restaurant Loyalty Program
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                A fully digital loyalty system integrated into Apple Wallet and Google Wallet,
                                increasing repeat customer visits and building long-term retention.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-6">
                                {['Digital Loyalty', 'Customer Retention', 'Mobile Integration'].map((tag) => (
                                    <span key={tag} className="bg-kn-green/10 text-kn-green px-3 py-1 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative">
                            <Image
                                src="https://happyrestaurants.com/files/images/398/fit_1236_432_0f5ffa4df0ecda885629751e976071d0.jpg"
                                alt="Happy London Restaurant Loyalty Program"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-xl object-cover"
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
                            Before partnering with KN Consulting, Happy London lacked a modern loyalty system and struggled to keep customers returning.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {challenges.map((challenge, index) => (
                            <ChallengeCard key={index} {...challenge} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Solution */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Our Solution</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A modern digital loyalty system built for ease of use, high engagement, and measurable customer retention.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {solutions.map((solution, index) => (
                            <SolutionCard key={index} {...solution} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">System Features</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A powerful digital loyalty ecosystem designed specifically for restaurants.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

{/* Development Approach */}
<section className="py-10 bg-gray-50">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Development Approach</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        A structured process ensuring accurate requirements, fast delivery, and a polished final system for Happy London.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT: Steps */}
        <div>
          <div className="space-y-6">

            <div className="flex items-start">
              <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Requirements Analysis</h4>
                <p className="text-gray-600 text-sm">
                  Understanding customer behaviour, reward goals, and operational challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Custom Development</h4>
                <p className="text-gray-600 text-sm">
                  Building a fully branded wallet-based loyalty experience designed for Happy London.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Testing & Refinement</h4>
                <p className="text-gray-600 text-sm">
                  End-to-end testing across iOS, Android, and staff workflows to ensure seamless customer use.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Launch & Handover</h4>
                <p className="text-gray-600 text-sm">
                  Full deployment, staff training, and delivery of a ready-to-use loyalty system.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT: Status (project completed) */}
        <div className="bg-gradient-to-br from-kn-green/10 to-blue-500/10 p-6 rounded-xl">
          <h4 className="font-semibold text-kn-navy mb-4">Project Status</h4>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Planning:</span>
              <span className="font-semibold text-kn-green">Completed</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Development:</span>
              <span className="font-semibold text-kn-green">Completed</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Testing:</span>
              <span className="font-semibold text-kn-green">Completed</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Launch:</span>
              <span className="font-semibold text-kn-green">Live</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>




            {/* Technology */}
            <section className="py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Technology Used</h2>
                    <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
                        Built using reliable technologies to ensure a seamless customer experience.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: "Laravel", description: "Backend API" },
                            { name: "Livewire", description: "Admin Interface" },
                            { name: "Apple Wallet", description: "Digital Loyalty" },
                            { name: "Google Wallet", description: "Digital Loyalty" }
                        ].map((tech, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-kn-navy mb-2">{tech.name}</h3>
                                <p className="text-sm text-gray-600">{tech.description}</p>
                            </div>
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
                            Meaningful improvements in customer retention and business performance.
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

            {/* CTA */}
            <section className="py-20 bg-gray-50 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-6">
                    Want a Loyalty System for Your Restaurant?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Boost repeat visits and build lasting customer relationships with a custom loyalty solution.
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
            </section>

        </div>
    );
}
