import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Code2, Server, Smartphone, Globe } from "lucide-react";

export const metadata = {
  title: "About KN Consulting & Innovation Ltd | UK Software Engineering Studio",
  description:
    "KN Consulting builds high-performance websites, apps, automation systems, and custom software for UK businesses. Built on Laravel, React, Next.js, and SwiftUI — registered in England & Wales.",
};

const techStack = [
  { icon: <Server className="w-5 h-5" />, name: "Laravel & Livewire", desc: "Our primary backend — APIs, admin panels, automation, and full-stack apps" },
  { icon: <Globe className="w-5 h-5" />, name: "React & Next.js", desc: "Fast, SEO-optimised frontends, web apps, and server-rendered sites" },
  { icon: <Smartphone className="w-5 h-5" />, name: "SwiftUI & React Native", desc: "Native iOS with SwiftUI and cross-platform mobile with React Native" },
  { icon: <Code2 className="w-5 h-5" />, name: "Spring Boot & Node.js", desc: "Enterprise Java backends, microservices, and Node.js APIs" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-kn-navy leading-tight mb-6">
                A software studio that builds things that actually work.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KN Consulting & Innovation Ltd is a UK-based software engineering studio. We build high-performance websites, mobile apps, automation systems, and custom software for businesses across the United Kingdom.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We are not a generic agency. Every system we build is engineered from scratch around your specific workflow, built to scale, and supported long after launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-kn-green text-white px-8 py-4 rounded-xl font-bold hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20"
                >
                  Work With Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-kn-navy px-8 py-4 rounded-xl font-bold hover:border-kn-navy transition-all"
                >
                  See Our Work
                </Link>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-96 relative">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop"
                alt="Software engineering team working on websites, apps and custom software"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg h-72 relative">
                <Image
                  src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1600&auto=format&fit=crop"
                  alt="Founder building software products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-72 relative">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                  alt="Team collaboration and software planning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-4">The Founder</p>
              <h2 className="text-3xl font-extrabold text-kn-navy mb-6">
                Built by engineers, for businesses.
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                KN Consulting was founded by <strong className="text-kn-navy">Kaival Patel</strong> — a developer who saw first-hand how businesses were being slowed down by manual work, unreliable digital tools, and agencies that over-promised and under-delivered.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Instead of the standard agency approach, Kaival built KN Consulting on an engineering-first philosophy — visiting businesses, studying real operations, and building systems that solve actual problems with measurable impact.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Today, KN Consulting delivers technology for laundrettes, restaurants, property firms, service companies, and early-stage startups across the UK. The mission: engineer systems that work in the real world, not just on a portfolio page.
              </p>

              <ul className="space-y-3">
                {[
                  "Registered in England & Wales — Company No. 16605561",
                  "Based in Twickenham, London — serving clients across the UK",
                  "Engineering-first approach — no templates, no shortcuts",
                  "Long-term partners to our clients, not one-off vendors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-kn-green mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-3">Our Tech Stack</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-kn-navy mb-4">
              Built on modern, proven technology
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We use Laravel and Livewire as our primary stack, React and Next.js for frontends, SwiftUI and React Native for mobile, Spring Boot for enterprise backends — and we are comfortable managing and improving whatever stack you are already running.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-kn-green/10 rounded-xl flex items-center justify-center text-kn-green mb-4 group-hover:bg-kn-green group-hover:text-white transition-all">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-kn-navy mb-2">{tech.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            Already have an existing system?{" "}
            <Link href="/services#stack-management" className="text-kn-green font-semibold hover:underline">
              We can manage and improve your stack →
            </Link>
          </p>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-3">What We Build</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-kn-navy">Six things we are really good at</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Websites", desc: "Fast, SEO-optimised, conversion-focused websites built on Next.js for real business use." },
              { title: "Mobile Apps", desc: "Clean iOS and Android apps built on SwiftUI and React Native with excellent UX." },
              { title: "Custom Software", desc: "Operational dashboards, internal tools, portals, and fully bespoke Laravel platforms." },
              { title: "Automation Systems", desc: "24/7 workflows, smart lockers, payment systems, and staff-free operations." },
              { title: "Digital Loyalty (KN Loyalty)", desc: "Apple & Google Wallet loyalty cards with 10-second onboarding, CRM, and push notifications." },
              { title: "Stack Management", desc: "Take over, stabilise, and improve whatever system you are already running." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-kn-green/30 hover:bg-white transition-all">
                <CheckCircle className="h-5 w-5 text-kn-green mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-bold text-kn-navy mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-kn-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-4">Ready to work together?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Let's build something that moves your business forward.
          </h2>
          <p className="text-white/50 mb-10">
            Free consultation, fixed price, no commitment until you're happy with the proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-kn-green text-white px-10 py-4 rounded-xl font-bold hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-6 text-white/30 text-sm">
            Or email{" "}
            <a href="mailto:sales@knconsulting.uk" className="text-kn-green hover:underline">sales@knconsulting.uk</a>
          </p>
        </div>
      </section>

    </div>
  );
}
