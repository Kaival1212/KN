import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Service from "@/app/components/Service";
import CaseStudiesSection from "./components/CaseStudiesSection";

// Button component for consistent styling and accessibility
const ActionButton = ({ href, variant = "primary", children }) => {
  const baseClasses = "px-8 py-4 rounded-md inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200";
  const variantClasses = {
    primary: "bg-kn-navy hover:bg-kn-navy/90 text-white",
    outline: "border border-kn-navy text-kn-navy hover:bg-kn-navy/5"
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
      role="button"
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </Link>
  );
};


// Trust Badge component
const TrustBadge = () => (
  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-fade-in" aria-label="Client testimonials">
    <p className="text-sm font-medium text-kn-navy">Trusted by businesses across the UK</p>
    <div className="flex items-center mt-2">
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">S</div>
        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">C</div>
        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">T</div>
      </div>
      <p className="ml-3 text-xs text-gray-500">and many more</p>
    </div>
  </div>
);

// Hero Image component with blur effects
const HeroImage = () => (
  <div className="relative circuit-bg pt-24 pb-16 ">
    <div className="absolute -top-8 -right-8 w-72 h-72 bg-kn-green/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-kn-navy/20 rounded-full blur-3xl"></div>
    <div className="relative">
      <Image
        src="/hero_image.avif"
        alt="Technology solutions for modern businesses"
        width={800}
        height={600}
        className="rounded-2xl shadow-2xl relative animate-scale-in "
        priority
        fetchPriority="high"
      />
      <TrustBadge />
    </div>
  </div>
);

// Hero Text component
const HeroText = () => (

  <div className="space-y-8">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
      We build <span className="bg-gradient-to-r from-kn-navy to-kn-green bg-clip-text text-transparent">smarter systems</span> for modern businesses
    </h1>

    <p className="text-lg md:text-xl text-gray-700">
      Custom software development, business automation, and digital growth strategies that streamline your operations and drive real results.
    </p>

    <div className="flex flex-col sm:flex-row gap-4">
      <ActionButton href="/contact" variant="primary">

        Get Started
        <ArrowRight className=" h-5 w-5" />
      </ActionButton>

      <ActionButton href="/case-studies" variant="outline">

        View Our Work
      </ActionButton>

    </div>
  </div>
);


export default function Home() {
  return (
    <>
      <section
        className="relative flex items-center height-auto pt-10 circuit-bg"
        aria-label="Business solutions hero section"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <HeroText />

            <div className="hidden lg:block">
              <HeroImage />

            </div>
          </div>
        </div>
      </section>
      <Service />
      <CaseStudiesSection />
    </>
  );
}