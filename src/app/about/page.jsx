import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "About KN Consulting & Innovation Ltd | Digital Engineering, Automation & Software Development",
  description:
    "Learn how KN Consulting builds high-performance websites, apps, software platforms, and automation systems. Founded by Kaival Patel, a hands-on engineer solving real business problems.",
};

export default function AboutPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ====================== HERO SECTION ======================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-kn-navy leading-tight mb-6">
              The Story Behind KN Consulting
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              KN Consulting & Innovation Ltd is a digital engineering studio
              building high-performance websites, mobile apps, automation
              systems, and custom software. Our focus is simple: create systems
              businesses actually rely on every single day.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              What started as one founder trying to solve real-world problems
              for local businesses has grown into a results-driven studio
              delivering technology used across the UK — from 24/7 automation
              platforms to complete digital loyalty ecosystems.
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden shadow-lg h-80 relative">
            <Image
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop"
              alt="Software engineering and digital systems team working together"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ====================== FOUNDER STORY ======================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          
          {/* Founder Photos */}
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-lg h-72 relative">
              <Image
                src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1600&auto=format&fit=crop"
                alt="Founder building early-stage digital product"
                fill
                className="object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-72 relative">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                alt="Startup collaboration and software planning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Story Text */}
          <div>
            <h2 className="text-3xl font-bold text-kn-navy mb-6">
              How It Started — The Founder’s Journey
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              KN Consulting was founded by <strong>Kaival Patel</strong>, a
              developer who saw first-hand how small and growing businesses were
              slowed down by outdated processes, manual work, and unreliable
              digital tools.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Instead of taking the traditional agency approach, Kaival took a
              hands-on, engineering-first path — visiting businesses, studying
              their operations, understanding their customers, and building
              systems that solved real problems with measurable impact.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Today, KN Consulting builds digital products used across
              laundrettes, restaurants, property firms, service companies, and
              early-stage startups. The mission remains the same: engineer
              systems that work in the real world, not just on a portfolio page.
            </p>
          </div>
        </div>

        {/* ====================== WHAT WE BUILD ======================= */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-kn-navy mb-8 text-center">
            What We Build
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <ul className="space-y-6">
                {[
                  {
                    title: "Websites",
                    desc: "Fast, SEO-optimised, conversion-focused websites built for real business use.",
                  },
                  {
                    title: "Mobile Apps",
                    desc: "Clean, modern iOS and Android apps with excellent performance and user experience.",
                  },
                  {
                    title: "Custom Software",
                    desc: "Operational dashboards, internal tools, portals, and fully bespoke platforms.",
                  },
                ].map(({ title, desc }) => (
                  <li key={title}>
                    <h3 className="font-semibold text-xl text-kn-navy">
                      {title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-6">
                {[
                  {
                    title: "Automation Systems",
                    desc: "24/7 workflows, smart lockers, payment systems, and staff-free operations.",
                  },
                  {
                    title: "Digital Loyalty Systems",
                    desc: "Apple Wallet & Google Wallet loyalty passes that increase customer retention.",
                  },
                  {
                    title: "Technical Partnerships",
                    desc: "Equity-based or long-term development partnerships with early-stage startups.",
                  },
                ].map(({ title, desc }) => (
                  <li key={title}>
                    <h3 className="font-semibold text-xl text-kn-navy">
                      {title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ====================== CTA ======================= */}
        <div className="text-center mt-20">
          <Link
            href="/contact"
            className="inline-block bg-kn-navy hover:bg-kn-navy/90 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-200"
          >
            Speak With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
