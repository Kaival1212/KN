"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        project_type: '',
        budget: '',
        message: '',
        urgency: 'normal'
    })

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const projectTypes = [
        'Business Automation System',
        'Digital Loyalty Program',
        'Mobile App Development',
        'Custom Software Development',
        'Web Application Development',
        'Startup Development & Technical Strategy',
        'Not Sure – Need Consultation'
    ]

    const budgetRanges = [
        'Under £500',
        '£500 – £1,500',
        '£1,500 – £5,000',
        '£5,000 – £15,000',
        '£15,000+',
        'Let’s Discuss'
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = document.querySelector("[name='cf-turnstile-response']")?.value;

        if (!token) {
            setStatus({
                type: 'error',
                message: 'Verification failed. Please try again.'
            });
            return;
        }
        setStatus({ type: 'loading', message: 'Sending your message…' })

        try {
            const response = await fetch('https://formspree.io/f/xpwrdyrl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    company: formData.company || 'Not specified',
                    budget: formData.budget || 'Not specified',
                    _subject: `New Inquiry: ${formData.project_type} — ${formData.name}${formData.urgency === 'high' ? ' (URGENT)' : ''}`,
                    _replyto: formData.email,
                    "cf-turnstile-response": token,
                })
            })

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Thank you — your message has been received. We’ll respond within 24 hours.'
                })
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    project_type: '',
                    budget: '',
                    message: '',
                    urgency: 'normal'
                })
            } else {
                throw new Error()
            }
        } catch {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or email us directly at kaival@knconsulting.uk.'
            })
        }
    }

    const StatusMessage = () => {
        if (!status.type) return null

        const icons = {
            success: <CheckCircle className="w-5 h-5" />,
            error: <AlertCircle className="w-5 h-5" />,
            loading: <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        }

        const colors = {
            success: 'bg-green-500',
            error: 'bg-red-500',
            loading: 'bg-blue-500'
        }

        return (
            <div className={`${colors[status.type]} text-white p-4 rounded-lg mb-6 flex items-center gap-3`}>
                {icons[status.type]}
                <span>{status.message}</span>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">

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
                            Get In Touch
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Whether you’re looking to automate your operations, build a custom system,
                            or explore digital transformation — we’re here to help.
                            <span className="font-semibold text-kn-green">
                                {' '}No upfront payment required until you’re fully satisfied.
                            </span>
                        </p>
                    </div>

                </div>
            </section>

            {/* Main Section */}
            <section className="py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* LEFT SIDE: Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-kn-navy mb-8">Let’s Start Your Project</h2>

                            <div className="space-y-6 mb-8">

                                {/* EMAIL */}
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-kn-green/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-kn-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-kn-navy">Email</h3>
                                        <p className="text-gray-600">support@knconsulting.uk</p>
                                        <p className="text-sm text-gray-500">Guaranteed reply within 24 hours</p>
                                    </div>
                                </div>

                                {/* LOCATION */}
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-kn-green/10 rounded-lg">
                                        <MapPin className="w-6 h-6 text-kn-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-kn-navy">Location</h3>
                                        <p className="text-gray-600">Twickenham, London</p>
                                        <p className="text-sm text-gray-500">Supporting businesses across the UK</p>
                                    </div>
                                </div>

                                {/* RESPONSE TIME */}
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-kn-green/10 rounded-lg">
                                        <Clock className="w-6 h-6 text-kn-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-kn-navy">Response Time</h3>
                                        <p className="text-gray-600">Within 24 hours</p>
                                        <p className="text-sm text-gray-500">Free consultation included</p>
                                    </div>
                                </div>

                            </div>

                            {/* WHY CHOOSE US */}
                            <div className="bg-gradient-to-br from-kn-navy to-kn-green p-8 rounded-2xl text-white">
                                <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>No upfront payment unless satisfied</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>We build working systems, not just websites</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>Proven results across multiple industries</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>Local UK team with personal support</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: FORM */}
                        <div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-kn-navy mb-6">
                                    Tell Us About Your Project
                                </h2>

                                <StatusMessage />

                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* NAME + EMAIL */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green"
                                                placeholder="John Smith"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    {/* COMPANY */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green"
                                            placeholder="Your Company Ltd"
                                        />
                                    </div>

                                    {/* PROJECT TYPE + BUDGET */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Project Type *
                                            </label>
                                            <select
                                                name="project_type"
                                                required
                                                value={formData.project_type}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green"
                                            >
                                                <option value="">Select project type</option>
                                                {projectTypes.map(t => <option key={t}>{t}</option>)}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Budget Range
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green"
                                            >
                                                <option value="">Select budget range</option>
                                                {budgetRanges.map(b => <option key={b}>{b}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    {/* URGENCY */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Urgency
                                        </label>

                                        <div className="flex space-x-4">
                                            {[
                                                { value: 'low', label: 'No Rush' },
                                                { value: 'normal', label: 'Normal' },
                                                { value: 'high', label: 'Urgent' }
                                            ].map(option => (
                                                <label key={option.value} className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="urgency"
                                                        value={option.value}
                                                        checked={formData.urgency === option.value}
                                                        onChange={handleInputChange}
                                                        className="text-kn-green focus:ring-kn-green"
                                                    />
                                                    <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* MESSAGE */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Details *
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green"
                                            placeholder="Tell us what you want to build, automate, or improve. The more detail, the better."
                                        />
                                    </div>
                                    <div className="cf-turnstile" data-sitekey="0x4AAAAAACFzZSz9cLYWihQk"></div>
                                    {/* SUBMIT */}
                                    <button
                                        type="submit"
                                        disabled={status.type === 'loading'}
                                        className="w-full bg-gradient-to-r from-kn-navy to-kn-green text-white py-4 px-6 rounded-lg font-semibold hover:from-kn-navy/90 hover:to-kn-green/90 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                                    >
                                        {status.type === 'loading' ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                <span>Sending…</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>

                                <p className="text-sm text-gray-500 mt-4 text-center">
                                    By submitting this form, you agree to be contacted regarding your project.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactPage
