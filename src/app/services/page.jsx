import React from 'react'
import Link from 'next/link'
import { Shield, Cog, Smartphone, Users, Headphones, ArrowRight, Check, Clock, Zap, Eye, Lock, Cpu } from 'lucide-react'

// Service Detail Section Component
function ServiceDetail({ id, icon, title, description, features, benefits, process, pricing, examples }) {
    return (
        <section id={id} className="py-20 border-b border-gray-100 last:border-b-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Main Content */}
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

                        {/* Key Benefits */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">What You Get:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start">
                                        <Check className="w-5 h-5 text-kn-green mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Real Examples */}
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

                    {/* Right Column - Process & Pricing */}
                    <div className="lg:pl-8">
                        {/* How It Works */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                            <h3 className="text-xl font-semibold mb-6">How It Works:</h3>
                            <div className="space-y-4">
                                {process.map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
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

                        {/* Investment */}
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
        {
            id: 'automation',
            icon: <Cog size={28} />,
            title: 'Business Automation Systems',
            description: 'Complete automation solutions that eliminate manual processes and let your business run 24/7 without constant supervision. From smart locker systems to property management software, we build systems that work while you sleep.',
            benefits: [
                'Eliminate manual data entry and paperwork',
                'Reduce staff costs and human errors',
                'Enable 24/7 operations without supervision',
                'Automatic customer notifications and updates',
                'Real-time dashboard monitoring',
                'Integrated payment processing'
            ],
            process: [
                {
                    title: 'Understand Your Workflow',
                    description: 'We map out your current manual processes and identify automation opportunities.'
                },
                {
                    title: 'Build Custom Solution',
                    description: 'Develop the automation system tailored to your specific business needs.'
                },
                {
                    title: 'Train Your Team',
                    description: 'Comprehensive training ensures your team can use the system effectively.'
                },
                {
                    title: 'Go Live & Support',
                    description: 'Launch the system and provide ongoing support and improvements.'
                }
            ],
            pricing: {
                upfront: 'Only pay when satisfied',
                monthly: 'Monthly hosting & support available',
                note: 'No payment until you see the working system and are completely happy with it.'
            },
            examples: [
                {
                    title: 'Smart Locker System (Eurowash)',
                    description: 'Automated laundry service with customer drop-off/pickup, payment processing, and staff management panel.'
                },
                {
                    title: 'Property Management System',
                    description: 'Tenant management, rent tracking, maintenance requests, and automated communications.'
                }
            ]
        },
        {
            id: 'loyalty-programs',
            icon: <Shield size={28} />,
            title: 'Loyalty Programs & Customer Retention',

            // points 1) easy to use and register with apple and google wallet 2) tiered rewards 3) digital punch cards 4) referral programs 5) analytics dashboard
            description: 'Custom digital loyalty programs that keep your customers coming back. We build easy-to-use systems integrated with Apple Wallet and Google Pay, featuring tiered rewards, digital punch cards, referral tracking, and analytics dashboards to monitor engagement.',
            benefits: [
                'Seamless integration with Apple Wallet and Google Pay',
                'Tiered rewards to incentivize higher spending',
                'Digital punch cards for easy tracking',
                'Referral programs to grow your customer base',
                'Analytics dashboard to monitor engagement',
                'Automated customer notifications'
            ],
            process: [
                {
                    title: 'Design Loyalty Structure',
                    description: 'We work with you to design a loyalty program that fits your business model and customer base.'
                },
                {
                    title: 'Develop Digital System',
                    description: 'Build the digital loyalty program with all desired features and integrations.'
                },
                {
                    title: 'Launch & Promote',
                    description: 'Assist with launching the program and promoting it to your customers.'
                },
                {
                    title: 'Monitor & Optimize',
                    description: 'Provide analytics and suggestions for optimizing the program over time.'
                }
            ],
            pricing: {
                upfront: 'Custom pricing based on features',
                monthly: 'monthly support',
                note: 'Pricing varies based on the complexity and features of the loyalty program.'
            },
            // copper chimeny and happy london resturnt loyalty program
            examples: [
                {
                    title: 'Copper Chimney Restaurant',
                    description: 'Digital loyalty program with points system integrated with Apple Wallet.'
                },
                {
                    title: 'Happy London',
                    description: 'Points rewards system with referral tracking and analytics dashboard.'
                }

            ]
        },
        {
            id: 'partnerships',
            icon: <Users size={28} />,
            title: 'Startup Technical Partnerships',
            description: 'We become your technical co-founder, not just your developer. Reduced development rates in exchange for equity stake - we\'re invested in your success because we\'re part owners.',
            benefits: [
                'Co-founder level technical expertise',
                'Significantly reduced upfront costs',
                'Long-term partnership and support',
                'Shared risk and aligned incentives',
                'Technical strategy and planning',
                'Ongoing development and improvements'
            ],
            process: [
                {
                    title: 'Idea Evaluation',
                    description: 'We assess your business idea, market potential, and technical requirements.'
                },
                {
                    title: 'Partnership Agreement',
                    description: 'Define equity split, responsibilities, and development milestones.'
                },
                {
                    title: 'Build MVP',
                    description: 'Develop minimum viable product to validate the concept with real users.'
                },
                {
                    title: 'Scale Together',
                    description: 'Continuous development and growth as equal business partners.'
                }
            ],
            pricing: {
                upfront: 'Minimal upfront + equity stake',
                equity: 'Equity partnership available',
                note: 'We share the risk. Lower costs because we become part owners of your success.'
            },
            examples: [
                {
                    title: 'SaaS Platform Development',
                    description: 'Full-stack application development with ongoing feature additions and technical strategy.'
                },
                {
                    title: 'E-commerce Automation',
                    description: 'Custom online store with inventory management, automated fulfillment, and customer tracking.'
                }
            ]
        },
        {
            id: 'development',
            icon: <Smartphone size={28} />,
            title: 'Working Software Solutions',
            description: 'Interactive mobile applications and websites that your team actually uses daily - not static websites that collect dust. We build tools that become essential to your daily operations.',
            benefits: [
                'Software your team will actually use',
                'Training included for team adoption',
                'Real-time data and live updates',
                'Integration with existing tools',
                'Built for your specific workflow'
            ],
            process: [
                {
                    title: 'Workflow Analysis',
                    description: 'Understand how your team currently works and where software can help.'
                },
                {
                    title: 'User-Centered Design',
                    description: 'Build interfaces that match how your team thinks and works.'
                },
                {
                    title: 'Iterative Development',
                    description: 'Regular feedback sessions to ensure the software meets your needs.'
                },
                {
                    title: 'Team Training',
                    description: 'Comprehensive training to ensure successful adoption and daily use.'
                }
            ],
            pricing: {
                upfront: 'Only pay when satisfied',
                monthly: 'Monthly hosting & updates available',
                note: 'No payment until your team is actively using the software daily.'
            },
            examples: [
                {
                    title: 'Customer Management System',
                    description: 'Track customer interactions, bookings, and communications in one place.'
                },
                {
                    title: 'Inventory & Ordering System',
                    description: 'Real-time stock levels, automated reordering, and supplier management.'
                }
            ]
        },
        {
            id: 'maintenance',
            icon: <Headphones size={28} />,
            title: 'Ongoing Support & Maintenance',
            description: 'Reliable monthly support that keeps your systems running smoothly. Server hosting, security updates, bug fixes, and feature additions - we\'re your ongoing technical team.',
            benefits: [
                '24/7 system monitoring and uptime',
                'Regular security updates and patches',
                'Bug fixes and performance improvements',
                'Feature additions as your business grows',
                'Direct access to technical support',
                'Data backup and disaster recovery'
            ],
            process: [
                {
                    title: 'System Monitoring',
                    description: 'Continuous monitoring for uptime, performance, and security issues.'
                },
                {
                    title: 'Proactive Updates',
                    description: 'Regular updates and patches before problems occur.'
                },
                {
                    title: 'Direct Support',
                    description: 'WhatsApp/phone access for immediate technical assistance.'
                },
                {
                    title: 'Growth Planning',
                    description: 'Plan and implement new features as your business evolves.'
                }
            ],
            pricing: {
                monthly: 'Monthly support available',
                note: 'Ongoing support for existing systems. Includes hosting, monitoring, updates, and direct access.'
            },
            examples: [
                {
                    title: 'Server Management',
                    description: 'Hosting, SSL certificates, backups, and performance optimization.'
                },
                {
                    title: 'Feature Development',
                    description: 'Monthly feature additions and improvements based on your feedback.'
                }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-kn-navy">
                        Our Services
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We build working systems that solve real business problems. Every solution is designed to work from day one, not collect dust.
                    </p>
                </div>
            </section>

            {/* Service Details */}
            {services.map((service) => (
                <ServiceDetail key={service.id} {...service} />
            ))}

            {/* Bottom CTA */}
            <section className="py-20 bg-gradient-to-r from-kn-navy to-kn-green">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss your project and see how we can help automate your business operations.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-white text-kn-navy px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-sm"
                        aria-label="Contact us to start your project"
                        role="button"
                    >
                        Get in touch
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    )
}