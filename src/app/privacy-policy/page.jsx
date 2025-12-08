"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'

const PrivacyPolicyPage = () => {
    return (

        <div className="min-h-screen bg-white">
            <script id="CookieDeclaration" src="https://consent.cookiebot.com/646bffc5-94ca-49dd-9203-74e3ed314193/cd.js" type="text/javascript" async></Script>
            {/* Header */}
            <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center text-kn-navy hover:text-kn-green transition-colors font-medium"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Home
                        </Link>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-kn-navy mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            At KN Consulting, we respect your privacy and are committed to protecting your personal data.
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">

                    {/* Information Collection */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">1. Information We Collect</h2>
                        <p className="text-gray-600">
                            We may collect personal information when you fill out our contact forms or interact with our services, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number (if provided)</li>
                            <li>Company name</li>
                            <li>Details about your business idea or project</li>
                        </ul>
                    </div>

                    {/* How We Use Information */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">2. How We Use Your Information</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>To respond to your inquiries and provide a free consultation</li>
                            <li>To deliver our services and support</li>
                            <li>To improve our website and offerings</li>
                            <li>To send updates about our services (if you opt-in)</li>
                        </ul>
                    </div>

                    {/* Sharing Information */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">3. Sharing Your Information</h2>
                        <p className="text-gray-600">
                            We do not sell or rent your personal data. We may share your information with trusted service providers who help us operate our business or if required by law.
                        </p>
                    </div>

                    {/* Data Security */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">4. Data Security</h2>
                        <p className="text-gray-600">
                            We implement appropriate technical and organizational measures to safeguard your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </div>

                    {/* Your Rights */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">5. Your Rights</h2>
                        <p className="text-gray-600">
                            Under UK GDPR, you have the right to access, correct, or request deletion of your personal data. You may also object to how your data is used and withdraw consent at any time by contacting us at
                            <span className="font-semibold text-kn-green"> kaival@knconsulting.uk</span>.
                        </p>
                    </div>

                    {/* Data Retention */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">6. Data Retention</h2>
                        <p className="text-gray-600">
                            We retain personal data only for as long as necessary to fulfill the purpose it was collected for or as required by law.
                        </p>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">7. Contact Us</h2>
                        <p className="text-gray-600">
                            If you have questions about this Privacy Policy or your data, please reach out:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Email: <span className="font-semibold text-kn-green">kaival@knconsulting.uk</span></li>
                            <li>Phone: +44 7377 297077</li>
                        </ul>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-500 mt-8">
                        <CheckCircle className="w-5 h-5 text-kn-green" />
                        <span>KN Consulting is committed to protecting your privacy and providing transparent data handling.</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicyPage
