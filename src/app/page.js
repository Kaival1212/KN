import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import Service from "@/app/components/Service";
import CaseStudiesSection from "./components/CaseStudiesSection";
import AboutSection from "./components/AboutSection";
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
    Results You Can Trust
  </div>
);

// Clean hero image
const HeroImage = () => (
  <div className="relative">
    <div className="relative rounded-2xl overflow-hidden shadow-xl">
      <Image
        src="/hero_image.avif"
        alt="Premium digital solutions for modern businesses"
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
      Trusted Digital Solutions Operating 24/7
    </div>

    {/* premium websites, apps, and automation systems that elevate your entire business */}
    {/* Clear, focused headline */}
    <h1 className="text-5xl md:text-6xl font-bold text-kn-navy leading-tight">
      We engineer{" "}
      <span className="text-kn-green">real-world systems</span>{" "}
      that elevate{" "}
      <span className="text-kn-green">your entire business  </span>
    </h1>

    {/* Simple, powerful subheading */}
    <p className="text-xl text-gray-600 leading-relaxed">
      We create high-performing websites, intuitive apps, and intelligent software that deliver measurable impact.{" "}
      Every system is engineered to reduce manual work, enhance customer experience, and drive revenue{" "}
      <span className="font-semibold text-kn-green">You invest only when the results meet our standard—and yours.</span>
    </p>

    {/* Clean CTA buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <ActionButton href="/contact" variant="primary">
        <Zap className="w-5 h-5" />
        Book a Free Consultation
        <ArrowRight className="w-5 h-5" />
      </ActionButton>

      <ActionButton href="/our-work" variant="outline">
        See Our Work
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
      {/* <TestimonialsSection /> */}

      {/* Consider removing these to reduce clutter */}
      <BlogSection />
      <AboutSection />

      <div className="elfsight-app-48d4cd78-4a23-4b5f-bcc1-4f9497937d4c" data-elfsight-app-lazy></div>

    </>
  );
}