import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-kn-navy text-white pt-20 pb-10">
            <div className="mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">

                    {/* BRAND + SHORT MISSION */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">KN Consulting & Innovation Ltd</h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                            We design and build high-performance software, websites, apps and
                            automation systems for customer-focused businesses across the UK.
                        </p>

                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-flex items-center text-kn-green hover:text-white text-sm font-medium transition-all"
                            >
                                Start Your Project <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-3 text-white/80 text-sm">
                            <li><Link href="/services#automation" className="hover:text-white transition-colors">Business Automation</Link></li>
                            <li><Link href="/services#loyalty-programs" className="hover:text-white transition-colors">Digital Loyalty Systems</Link></li>
                            <li><Link href="/services#development" className="hover:text-white transition-colors">Websites & Mobile Apps</Link></li>
                            <li><Link href="/services#partnerships" className="hover:text-white transition-colors">Startup Technical Partnership</Link></li>
                            <li><Link href="/services#maintenance" className="hover:text-white transition-colors">Ongoing Support</Link></li>
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-white/80 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/our-work" className="hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-4 text-white/80 text-sm">
                            <li className="flex items-start">
                                <MapPin className="w-4 h-4 mt-1 mr-3" />
                                Twickenham, London, United Kingdom
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-4 h-4 mt-1 mr-3" />
                                <a href="mailto:support@knconsulting.uk">
                                    support@knconsulting.uk
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Phone className="w-4 h-4 mt-1 mr-3" />
                                <a href="tel:+447539283203">+44 7539 283203</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-white/50 text-xs">
                    <p>
                        © {new Date().getFullYear()} KN Consulting & Innovation Ltd.
                        company number 16605561.
                        Registered in England & Wales. All rights reserved.
                    </p>

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
