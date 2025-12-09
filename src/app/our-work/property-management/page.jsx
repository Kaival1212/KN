import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Home, Users, FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react'

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

export default function PropertyCaseStudy() {
  const challenges = [
    {
      icon: <FileText className="w-5 h-5 text-red-600" />,
      title: "Manual Record Keeping",
      description: "Paper-based tenant records, rent tracking, and maintenance requests creating inefficiencies and errors."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-red-600" />,
      title: "Communication Gaps",
      description: "Scattered communications across phone, email, and text making tenant management chaotic."
    },
    {
      icon: <Clock className="w-5 h-5 text-red-600" />,
      title: "Time-Consuming Tasks",
      description: "Hours spent on administrative tasks that could be automated, reducing focus on business growth."
    }
  ];

  const solutions = [
    {
      icon: <Home className="w-5 h-5" />,
      title: "Centralized Management",
      description: "Single platform for all property management tasks including tenant records and rent tracking."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Automated Communications",
      description: "Streamlined tenant communications with automated notifications and updates."
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Workflow Automation",
      description: "Automated maintenance requests, rent reminders, and administrative processes."
    }
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Tenant Management",
      description: "Complete tenant lifecycle management system",
      details: [
        "Digital tenant profiles and documents",
        "Lease agreement tracking",
        "Contact information management",
        "Tenant communication history"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Rent Tracking",
      description: "Automated rent collection and financial management",
      details: [
        "Monthly rent tracking and reminders",
        "Payment history and reporting",
        "Overdue payment notifications",
        "Financial dashboard and analytics"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Maintenance Requests",
      description: "Streamlined maintenance and repair management",
      details: [
        "Online maintenance request submission",
        "Priority-based request handling",
        "Contractor management system",
        "Maintenance history tracking"
      ]
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Property Portfolio",
      description: "Multi-property management capabilities",
      details: [
        "Property details and documentation",
        "Portfolio overview dashboard",
        "Property-specific reporting",
        "Scalable multi-property support"
      ]
    }
  ];

  const expectedResults = [
    { metric: "50%", description: "Time Savings", color: "text-blue-600" },
    { metric: "100%", description: "Digital Records", color: "text-green-600" },
    { metric: "Automated", description: "Communications", color: "text-purple-600" },
    { metric: "Real-time", description: "Updates", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link
              href="/our-work"
              className="inline-flex items-center text-kn-navy hover:text-kn-green transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                In Development
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-kn-navy mb-6">
                Property Management System
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Custom tenant management, rent tracking, and automated communications system currently being developed for multi-property portfolio management.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {['Property Management', 'Tenant Portal', 'Automated Workflows', 'Financial Tracking'].map((tag) => (
                  <span key={tag} className="bg-kn-green/10 text-kn-green px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1471&auto=format&fit=crop"
                alt="Modern property management system interface"
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
              Managing multiple properties with manual processes leads to inefficiencies, communication gaps, and administrative overhead.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} {...challenge} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Development Progress</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Currently building a comprehensive property management solution with close client collaboration to ensure every feature meets real-world needs.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-kn-navy mb-6">Development Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Requirements Analysis</h4>
                      <p className="text-gray-600 text-sm">Understanding specific property management workflows and pain points</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom Development</h4>
                      <p className="text-gray-600 text-sm">Building tailored features for multi-property management needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-500">Testing & Refinement</h4>
                      <p className="text-gray-500 text-sm">Comprehensive testing with real property management scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-500">Launch & Support</h4>
                      <p className="text-gray-500 text-sm">System deployment with ongoing support and feature additions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-kn-green/10 to-blue-500/10 p-6 rounded-xl">
                <h4 className="font-semibold text-kn-navy mb-4">Current Status</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Planning:</span>
                    <span className="font-semibold text-kn-green">Complete</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Development:</span>
                    <span className="font-semibold text-orange-500">In Progress</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Testing:</span>
                    <span className="font-semibold text-gray-400">Pending</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Launch:</span>
                    <span className="font-semibold text-gray-400">Scheduled</span>
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
              A comprehensive property management system designed to automate administrative tasks and streamline tenant communications.
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
              Comprehensive property management tools designed for efficiency and scalability across multiple properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-20 bg-gradient-to-r from-kn-navy to-kn-green">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Expected Results</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Anticipated improvements in efficiency, organization, and tenant satisfaction upon system completion.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {expectedResults.map((result, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern, reliable technologies chosen for scalability and long-term maintainability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Laravel", description: "Backend Framework" },
              { name: "Database", description: "Data Management" },
              { name: "Notifications", description: "Communications" },
              { name: "Dashboard", description: "Admin Interface" }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-kn-navy mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-6">
            Need Property Management Automation?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            See how we can streamline your property management operations with custom automation systems. Pay only when you're completely satisfied.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-kn-green text-white font-semibold rounded-lg hover:bg-kn-green/90 transition-colors"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center px-8 py-4 border border-kn-navy text-kn-navy font-semibold rounded-lg hover:bg-kn-navy/5 transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}