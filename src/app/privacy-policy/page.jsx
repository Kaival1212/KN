"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <script
                id="CookieDeclaration"
                src="https://consent.cookiebot.com/646bffc5-94ca-49dd-9203-74e3ed314193/cd.js"
                type="text/javascript"
                async
            ></script>

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
                            KN Consulting & Innovation Ltd is committed to safeguarding your privacy and ensuring complete transparency in how we collect, use, and protect your personal information.
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
                            We collect personal information when you interact with our website or submit a project enquiry. This may include:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Your name</li>
                            <li>Email address</li>
                            <li>Phone number (optional)</li>
                            <li>Company or business name</li>
                            <li>Project details or business requirements</li>
                        </ul>
                    </div>

                    {/* How We Use Information */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">2. How We Use Your Information</h2>
                        <p className="text-gray-600">We process your information to:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Respond to your enquiries and provide professional consultation</li>
                            <li>Deliver our services, proposals, and project updates</li>
                            <li>Improve our website performance and user experience</li>
                            <li>Send service-related updates or communications (only with consent)</li>
                        </ul>
                    </div>

                    {/* Sharing Information */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">3. Sharing Your Information</h2>
                        <p className="text-gray-600">
                            We do not sell, trade, or rent your data. Your information may be shared only with trusted service providers who assist in delivering our services (e.g., hosting, email providers), and strictly under confidentiality agreements. We may also disclose information if required by UK law or regulation.
                        </p>
                    </div>

                    {/* Data Security */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">4. Data Security</h2>
                        <p className="text-gray-600">
                            KN Consulting & Innovation Ltd implements robust technical and organisational measures to protect your personal data against loss, misuse, or unauthorised access. Your information is encrypted where possible and stored securely.
                        </p>
                    </div>

                    {/* Your Rights */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">5. Your Data Rights (UK GDPR)</h2>
                        <p className="text-gray-600">
                            As a UK-based individual, you have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Request access to your personal data</li>
                            <li>Request corrections or updates</li>
                            <li>Request deletion of your data</li>
                            <li>Withdraw consent at any time</li>
                            <li>Object to certain types of processing</li>
                        </ul>
                        <p className="text-gray-600">
                            To exercise your rights, contact us at
                            <span className="font-semibold text-kn-green"> support@knconsulting.uk</span>.
                        </p>
                    </div>

                    {/* Data Retention */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">6. Data Retention</h2>
                        <p className="text-gray-600">
                            We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by UK law, tax, or regulatory obligations.
                        </p>
                    </div>

                    {/* Cookies */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">7. Cookies & Tracking Technologies</h2>
                        <p className="text-gray-600">
                            Our website uses Cookiebot to manage compliance for cookies and tracking technologies. You can manage or withdraw your consent at any time using the cookie banner displayed on our website.
                        </p>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-kn-navy">8. Contact Us</h2>
                        <p className="text-gray-600">
                            For questions about this Privacy Policy or how we use your data, please contact:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Email: <span className="font-semibold text-kn-green">support@knconsulting.uk</span></li>
                            <li>Phone: +44 7377 297077</li>
                            <li>Business Name: KN Consulting & Innovation Ltd</li>
                            <li>Location: Twickenham, London, United Kingdom</li>
                        </ul>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-500 mt-8">
                        <CheckCircle className="w-5 h-5 text-kn-green" />
                        <span>Your privacy is important to us. We are committed to transparency and responsible data management.</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicyPage
