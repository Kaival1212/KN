import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star, Zap, Phone, Mail } from "lucide-react";
import Service from "./components/Service";
import CaseStudiesSection from "./components/CaseStudiesSection";
import AboutSection from "./components/AboutSection";
import FAQ from "./components/FAQ";

// ─── HERO ────────────────────────────────────────────────────
const Hero = () => (
  <section className="py-20 bg-white">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-kn-green/10 text-kn-green px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-kn-green rounded-full animate-pulse" />
            London-Based · UK Registered Company
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-kn-navy leading-[1.08] tracking-tight">
            We build software<br />
            that makes your<br />
            <span className="text-kn-green">business grow.</span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
            Websites, mobile apps, and custom software — engineered for UK businesses that want results, not just code. Fixed price. Dedicated team. Long-term support.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
            {["Fixed-Price Projects", "Transparent Process", "Ongoing Support", "Company No. 16605561"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-kn-green" />
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-kn-green text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20 hover:-translate-y-0.5"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-kn-navy px-8 py-4 rounded-xl font-bold text-base hover:border-kn-navy transition-all"
            >
              See Our Work
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hero_image.avif"
              alt="KN Consulting team building websites, apps and software"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <div className="absolute -top-4 -right-4 bg-kn-green text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
            Results You Can Trust
          </div>

          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-kn-navy">100% client satisfaction</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ─── HOW IT WORKS ─────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Free Discovery Call",
    description: "A focused 30-minute call — no commitment. We understand your requirements, ask the right questions, and give you an honest assessment of what to build and what it costs.",
    detail: "Book in under 2 hours",
  },
  {
    number: "02",
    title: "Fixed Proposal",
    description: "You receive a clear, written proposal with a fixed price, exact timeline, and full scope. No vague estimates. No hidden fees. No surprises.",
    detail: "Sent within 24 hours",
  },
  {
    number: "03",
    title: "We Design & Build",
    description: "Our engineers get to work. You're kept in the loop with regular updates and staged delivery. We build in Laravel, React, Swift, and more — or manage your existing stack.",
    detail: "Regular progress updates",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description: "Your product goes live fully tested and ready for real users. We offer ongoing support, hosting, and continuous improvements as your business scales.",
    detail: "Ongoing support available",
  },
];

const HowItWorks = () => (
  <section className="py-24 bg-kn-navy">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="mb-16 text-center">
        <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-3">Our process</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          How we work
        </h2>
        <p className="text-white/50 max-w-xl mx-auto">
          A simple, transparent process — from first conversation to live product. No agency runaround.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all">
            <div className="text-5xl font-extrabold text-kn-green/20 mb-6 leading-none">{step.number}</div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-white/50 leading-relaxed text-sm mb-6">{step.description}</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-kn-green">
              <Zap className="w-3.5 h-3.5" />
              {step.detail}
            </span>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/20" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-kn-green text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20 hover:-translate-y-0.5"
        >
          Book Your Free Discovery Call <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

// ─── CTA BANNER ───────────────────────────────────────────────
const CTABanner = () => (
  <section className="bg-gradient-to-br from-kn-navy to-kn-green/20 py-24">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
      <p className="text-kn-green font-semibold text-sm uppercase tracking-widest mb-5">Get started today</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        Have a project in mind?
      </h2>
      <p className="text-xl text-white/50 mb-10 max-w-xl mx-auto font-light">
        Tell us what you need. We'll respond within 2 hours with a clear plan and next steps. No commitment required.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-kn-green text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20 hover:-translate-y-0.5"
        >
          Start a Project <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="/our-work"
          className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/5 transition-all"
        >
          See Our Work
        </Link>
      </div>
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/30 text-sm">
        <a href="mailto:sales@knconsulting.uk" className="flex items-center gap-1.5 hover:text-white/60 transition-colors">
          <Mail className="w-4 h-4" /> sales@knconsulting.uk
        </a>
        <span className="hidden sm:block w-px h-4 bg-white/10" />
        <a href="tel:+447377297077" className="flex items-center gap-1.5 hover:text-white/60 transition-colors">
          <Phone className="w-4 h-4" /> +44 7377 297077
        </a>
        <span className="hidden sm:block w-px h-4 bg-white/10" />
        <span>Twickenham, London</span>
      </div>
    </div>
  </section>
);

// ─── PAGE ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <HowItWorks />
      <CaseStudiesSection />
      <FAQ />
      <CTABanner />
      <AboutSection />
      <div className="elfsight-app-48d4cd78-4a23-4b5f-bcc1-4f9497937d4c" data-elfsight-app-lazy />
    </>
  );
}
