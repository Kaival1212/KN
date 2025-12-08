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
        type: '', // 'success', 'error', 'loading'
        message: ''
    })

    const projectTypes = [
        'Business Automation System',
        'Loyalty Program Development',
        'Mobile App Development',
        'Custom Software Development',
        'Web Application Development',
        'Startup Development Services',
        'Not Sure - Need Consultation'
    ]

    const budgetRanges = [
        'Under £500',
        '£500 - £1,500',
        '£1,500 - £5,000',
        '£5,000 - £15,000',
        '£15,000+',
        'Let\'s discuss'
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
        setStatus({ type: 'loading', message: 'Sending your message...' })

        try {
            // Submit directly to Formspree
            const response = await fetch('https://formspree.io/f/xpwrdyrl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company || 'Not specified',
                    project_type: formData.project_type,
                    budget: formData.budget || 'Not specified',
                    urgency: formData.urgency,
                    message: formData.message,
                    _subject: `New Contact: ${formData.project_type} - ${formData.name}${formData.urgency === 'high' ? ' (URGENT)' : ''}`,
                    _replyto: formData.email
                })
            })

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
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
                throw new Error('Failed to send message')
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email us directly at support@knconsulting.uk'
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
                            Ready to automate your business? Let's discuss your project and see how we can help.
                            <span className="font-semibold text-kn-green"> Pay only when you're completely satisfied.</span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-kn-navy mb-8">Let's Start Your Project</h2>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-kn-green/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-kn-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-kn-navy">Email Us</h3>
                                        <p className="text-gray-600">support@knconsulting.uk</p>
                                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-kn-green/10 rounded-lg">
                                        <MapPin className="w-6 h-6 text-kn-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-kn-navy">Location</h3>
                                        <p className="text-gray-600">Twickenham, London, UK</p>
                                        <p className="text-sm text-gray-500">Serving businesses across the UK</p>
                                    </div>
                                </div>

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

                            {/* Why Choose Us */}
                            <div className="bg-gradient-to-br from-kn-navy to-kn-green p-8 rounded-2xl text-white">
                                <h3 className="text-2xl font-bold mb-6">Why Choose KN Consulting?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                        <span>Pay only when you're satisfied</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                        <span>Working systems, not websites that collect dust</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                        <span>Proven results with live systems</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                        <span>Local UK business with personal service</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-2xl font-bold text-kn-navy mb-6">Tell Us About Your Project</h2>

                                <StatusMessage />

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name and Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green focus:border-transparent"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green focus:border-transparent"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green focus:border-transparent"
                                            placeholder="Your Company Ltd"
                                        />
                                    </div>

                                    {/* Project Type and Budget */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="project_type" className="block text-sm font-medium text-gray-700 mb-2">
                                                Project Type *
                                            </label>
                                            <select
                                                id="project_type"
                                                name="project_type"
                                                required
                                                value={formData.project_type}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green focus:border-transparent"
                                            >
                                                <option value="">Select project type</option>
                                                {projectTypes.map((type) => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                                                Budget Range
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green focus:border-transparent"
                                            >
                                                <option value="">Select budget range</option>
                                                {budgetRanges.map((range) => (
                                                    <option key={range} value={range}>{range}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Urgency */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Project Urgency
                                        </label>
                                        <div className="flex space-x-4">
                                            {[
                                                { value: 'low', label: 'No Rush' },
                                                { value: 'normal', label: 'Normal' },
                                                { value: 'high', label: 'Urgent' }
                                            ].map((option) => (
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

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kn-green focus:border-transparent"
                                            placeholder="Tell us about your business and what you'd like to automate. What manual processes are taking up your time? What are your main pain points?"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={status.type === 'loading'}
                                        className="w-full bg-gradient-to-r from-kn-navy to-kn-green text-white py-4 px-6 rounded-lg font-semibold hover:from-kn-navy/90 hover:to-kn-green/90 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status.type === 'loading' ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                <span>Sending...</span>
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
                                    By submitting this form, you agree to receive communications from KN Consulting about your project.
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