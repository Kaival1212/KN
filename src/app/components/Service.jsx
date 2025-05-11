
import React from 'react'
import Link from 'next/link'
import { Monitor, Smartphone, Cog, Search, Headphones, ArrowRight } from 'lucide-react'

const services = [
    {
        icon: <Monitor size={24} />,
        title: 'Custom Web Development',
        description:
            'Bespoke websites and web applications built with modern technologies to meet your specific business requirements.',
        href: '/services#web-development',
    },
    {
        icon: <Smartphone size={24} />,
        title: 'Mobile App Development',
        description:
            'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
        href: '/services#app-development',
    },
    {
        icon: <Cog size={24} />,
        title: 'Business Automation',
        description:
            'Streamline your operations with custom automation solutions that reduce manual tasks and increase efficiency.',
        href: '/services#automation',
    },
    {
        icon: <Search size={24} />,
        title: 'Digital Growth Strategies',
        description:
            'Data-driven SEO and digital marketing strategies that help you attract and convert more customers.',
        href: '/services#digital-marketing',
    },
    {
        icon: <Headphones size={24} />,
        title: 'Ongoing Support',
        description:
            'Reliable maintenance and support services to ensure your digital solutions continue to perform optimally.',
        href: '/services#maintenance',
    },
]

function ServiceCard({ icon, title, description, href }) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow hover-scale group">
            <div className="mb-4 p-3 bg-kn-green/10 rounded-full w-14 h-14 flex items-center justify-center text-kn-green group-hover:bg-kn-green group-hover:text-white transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link
                href={href}
                className="inline-flex items-center text-kn-navy font-medium hover:text-kn-green transition-colors"
                aria-label={`Learn more about ${title}`}
            >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    )
}

export default function Service() {
    return (
        <section id="services" className="py-20 bg-gray-50" aria-labelledby="services-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide end-to-end technical solutions that help businesses streamline operations and accelerate growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((svc) => (
                        <ServiceCard
                            key={svc.title}
                            icon={svc.icon}
                            title={svc.title}
                            description={svc.description}
                            href={svc.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
