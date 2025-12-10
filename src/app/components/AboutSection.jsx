import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';


const AboutSection = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                            Who We Are
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            KN Consulting & Innovation Ltd is a digital solutions firm specialising in the design and development of high-performance websites, mobile apps, custom software, and automation systems. Our work is grounded in engineering precision, operational efficiency, and long-term scalability—ensuring every solution delivers meaningful business impact from the moment it goes live.                 </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                'Agile, high-skill team with deep technical expertise across modern frameworks',
                                'Focused on building systems that improve operations, reduce manual work, and scale with your business',
                                'Engineering expertise across Laravel, SwiftUI, React, automation workflows, and custom software development',
                                'Long-term support and continuous improvement to keep your systems performing at the highest level',
                            ].map((item) => (
                                <li key={item} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-kn-green mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/about">
                            <button
                                type="button"
                                className="inline-block bg-kn-navy hover:bg-kn-navy/90 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
                            >
                                Learn More About Us
                            </button>
                        </Link>
                    </div>

                    {/* Images Grid */}
                    <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-lg overflow-hidden h-48 md:h-64 shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=870&auto=format&fit=crop"
                                        alt="Team collaboration"
                                        className="h-full w-full object-cover transform hover:scale-105 transition"
                                    />
                                </div>
                                <div className="rounded-lg overflow-hidden h-48 md:h-64 shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=870&auto=format&fit=crop"
                                        alt="Team working together"
                                        className="h-full w-full object-cover transform hover:scale-105 transition"
                                    />
                                </div>
                            </div>
                            <div className="rounded-lg overflow-hidden h-full shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=871&auto=format&fit=crop"
                                    alt="Team meeting"
                                    className="h-full w-full object-cover transform hover:scale-105 transition"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
