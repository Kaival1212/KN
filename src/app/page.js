import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import Service from "@/app/components/Service";
import CaseStudiesSection from "./components/CaseStudiesSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";

// Simple, clean button component
const ActionButton = ({ href, variant = "primary", children }) => {
  const baseClasses = "inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-200";
  const variantClasses = {
    primary: "bg-kn-navy hover:bg-kn-navy/90 text-white",
    outline: "border-2 border-kn-navy text-kn-navy hover:bg-kn-navy hover:text-white"
  };

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </Link>
  );
};

// Simple trust badge
const TrustBadge = () => (
  <div className="absolute -top-4 -right-4 bg-kn-green text-white px-4 py-2 rounded-lg text-sm font-medium">
    Pay When Satisfied
  </div>
);

// Clean hero image
const HeroImage = () => (
  <div className="relative">
    <div className="relative rounded-2xl overflow-hidden shadow-xl">
      <Image
        src="/hero_image.avif"
        alt="Business automation systems"
        width={600}
        height={400}
        className="object-cover w-full h-full"
        priority
      />
    </div>
    <TrustBadge />
  </div>
);

// Focused hero text
const HeroText = () => (
  <div className="space-y-8">
    {/* Simple status badge */}
    <div className="inline-flex items-center gap-2 bg-kn-green/10 text-kn-green px-4 py-2 rounded-full text-sm font-medium">
      <div className="w-2 h-2 bg-kn-green rounded-full"></div>
      Live systems operating 24/7
    </div>

    {/* Clear, focused headline */}
    <h1 className="text-5xl md:text-6xl font-bold text-kn-navy leading-tight">
      We build{" "}
      <span className="text-kn-green">working systems</span>{" "}
      that actually{" "}
      <span className="text-kn-green">run your business</span>
    </h1>

    {/* Simple, powerful subheading */}
    <p className="text-xl text-gray-600 leading-relaxed">
      Not websites that collect dust. Not apps nobody uses.
      Real automation systems that work while you sleep.{" "}
      <span className="font-semibold text-kn-green">Pay only when you&apos;re completely satisfied.</span>
    </p>

    {/* Clean CTA buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <ActionButton href="/contact" variant="primary">
        <Zap className="w-5 h-5" />
        Start Automating Now
        <ArrowRight className="w-5 h-5" />
      </ActionButton>

      <ActionButton href="/case-studies" variant="outline">
        See Live Systems
      </ActionButton>
    </div>
  </div>
);

// Clean hero section
const CleanHeroSection = () => (
  <section className="py-20 bg-white">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <HeroText />
        <div className="hidden lg:block">
          <HeroImage />
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      {/* Clean, Focused Hero */}
      <CleanHeroSection />

      {/* Core Services */}
      <Service />

      {/* Social Proof */}
      <CaseStudiesSection />

      {/* Trust Building - Remove this if still too much */}
      <TestimonialsSection />

      {/* Consider removing these to reduce clutter */}
      <BlogSection />
      <AboutSection />
    </>
  );
}