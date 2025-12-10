import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Gift,
  Smartphone,
  Zap,
  CheckCircle,
  BarChart,
  QrCode,
  WalletCards
} from 'lucide-react'

const ChallengeCard = ({ icon, title, description }) => (
  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
    <div className="flex items-center mb-3">
      <div className="p-2 bg-red-100 rounded-lg mr-3">{icon}</div>
      <h3 className="font-semibold text-red-800">{title}</h3>
    </div>
    <p className="text-red-700 text-sm">{description}</p>
  </div>
)

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
)

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
)

export default function HappyLondonCaseStudy() {
  const challenges = [
    {
      icon: <Users className="w-5 h-5 text-red-600" />,
      title: 'Unpredictable Customer Retention',
      description:
        'Happy London struggled to encourage repeat visits, and had no clear understanding of customer loyalty behaviour.'
    },
    {
      icon: <QrCode className="w-5 h-5 text-red-600" />,
      title: 'No Centralised Loyalty Data',
      description:
        'There was no structured system to track customer visits, spending patterns, or reward progression.'
    },
    {
      icon: <Smartphone className="w-5 h-5 text-red-600" />,
      title: 'Friction in the Signup Journey',
      description:
        'Paper loyalty cards were easily lost and app downloads created unnecessary friction, leading to extremely low enrolment.'
    }
  ]

  const solutions = [
    {
      icon: <WalletCards className="w-5 h-5" />,
      title: 'A Fully Digital Wallet-Based Loyalty System',
      description:
        'A branded loyalty pass that lives inside Apple Wallet and Google Wallet, updating in real time as customers visit.'
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: 'Strategic Reward Structure',
      description:
        'A custom-designed reward ladder aligned with Happy London’s brand, encouraging frequent visits and higher spend.'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Frictionless 30-Second Signup',
      description:
        'No apps. No accounts. No waiting. Customers join the loyalty program with minimal effort, boosting participation.'
    }
  ]

  const features = [
    {
      icon: <WalletCards className="w-6 h-6" />,
      title: 'Apple & Google Wallet Integration',
      description: 'A seamless loyalty experience embedded directly into customer devices.',
      details: [
        'Instant pass installation with one tap',
        'Automatic points and rewards updates',
        'Push notifications via Wallet without apps',
        'Works across all modern iOS and Android devices'
      ]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Restaurant Insights Dashboard',
      description: 'A high-level operational dashboard to understand customer behaviour and reward impact.',
      details: [
        'Visit frequency and customer segmentation',
        'Reward performance analytics',
        'Campaign tools for targeted offers',
        'Exportable customer database for email marketing'
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Retention Engine',
      description: 'Smart reminders that pull customers back into the restaurant.',
      details: [
        'Visit confirmation messaging',
        'Reward unlocked notifications',
        'Lapsed customer win-back automation',
        'Seasonal or promotional message campaigns'
      ]
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Flexible Reward Engine',
      description: 'Designed to match the restaurant’s operational model and customer psychology.',
      details: [
        'Visit-based or spend-based rewards',
        'Tiered structures (Silver, Gold, VIP)',
        'Expiry rules for strategic urgency',
        'Auto-redeem via staff interface'
      ]
    }
  ]

  const results = [
    { metric: '3×', description: 'Increase in Repeat Visits', color: 'text-green-600' },
    { metric: '76%', description: 'Higher Signup Conversion', color: 'text-blue-600' },
    { metric: '0', description: 'Apps Required', color: 'text-purple-600' },
    { metric: 'Automated', description: 'Loyalty Tracking & Customer Updates', color: 'text-orange-600' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-kn-navy hover:text-kn-green transition-colors font-medium mb-10"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-kn-green text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Proven Results
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-kn-navy mb-6">
                Happy London – Digital Loyalty Transformation
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                KN Consulting designed and delivered a modern loyalty ecosystem for
                Happy London, driving stronger customer retention and giving the
                restaurant a structured understanding of customer behaviour for the
                first time.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {['Digital Loyalty', 'Customer Retention', 'Mobile Wallet Integration'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-kn-green/10 text-kn-green px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE */}
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

      {/* CHALLENGE */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">The Challenge</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Happy London lacked a modern loyalty experience and had no system to
              capture or activate customer behaviour data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} {...challenge} />
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">Our Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A fully digital loyalty system built around a frictionless mobile wallet
              experience, designed to strengthen customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">System Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A complete loyalty ecosystem designed for guest retention, brand
              engagement, and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT APPROACH */}
      <section className="py-10 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">
              Development Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A focused and efficient delivery process ensuring accuracy, speed, and a
              polished final system.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Requirements Analysis',
                    desc:
                      'Understanding customer behaviour, loyalty objectives, and operational needs.'
                  },
                  {
                    step: '2',
                    title: 'Custom Development',
                    desc:
                      'Designing and building a branded mobile wallet loyalty experience.'
                  },
                  {
                    step: '3',
                    title: 'Testing & Refinement',
                    desc: 'Ensuring seamless use across iOS, Android, and staff systems.'
                  },
                  {
                    step: '4',
                    title: 'Launch & Handover',
                    desc:
                      'Deploying the system and training staff for smooth daily operation.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-kn-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status */}
              <div className="bg-gradient-to-br from-kn-green/10 to-blue-500/10 p-6 rounded-xl">
                <h4 className="font-semibold text-kn-navy mb-4">Project Status</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Planning', value: 'Completed' },
                    { label: 'Development', value: 'Completed' },
                    { label: 'Testing', value: 'Completed' },
                    { label: 'Launch', value: 'Live' }
                  ].map((row, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-600">{row.label}:</span>
                      <span className="font-semibold text-kn-green">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-kn-navy mb-4">
            Technology Used
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Engineered with modern, scalable technology for maximum reliability.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Laravel', description: 'Backend API' },
              { name: 'Livewire', description: 'Admin Interface' },
              { name: 'Apple Wallet', description: 'Digital Pass' },
              { name: 'Google Wallet', description: 'Digital Pass' }
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-kn-navy mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 bg-gradient-to-r from-kn-navy to-kn-green">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Results
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              A measurable uplift in customer engagement and repeat visits.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {result.metric}
                </div>
                <div className="text-white/80 text-sm">{result.description}</div>
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
          Increase repeat visits and build customer loyalty with a fully digital,
          app-free system.
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
  )
}
