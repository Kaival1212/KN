import "./globals.css";
import Fotter from "./components/Fotter";
import Script from "next/script";
import NavBar from './components/NavBar';
import { sfProDisplay } from "./fonts";
import { Suspense } from "react";
import GoogleAnalytics from "./components/GoogleAnalytics";

// ── SEO Metadata ─────────────────────────────────────────────
export const metadata = {
  title: {
    default: "KN Consulting & Innovation Ltd | Websites, Apps & Software — London, UK",
    template: "%s | KN Consulting & Innovation Ltd",
  },

  description:
    "KN Consulting & Innovation Ltd is a London-based software company that builds websites, mobile apps, and custom software for UK businesses. Fixed-price projects, transparent process, and dedicated ongoing support.",

  keywords: [
    // Core services
    "website development London",
    "mobile app development UK",
    "custom software development London",
    "bespoke software UK",
    "web app development London",
    // Agency/company searches
    "software company London",
    "software development agency UK",
    "tech company Twickenham",
    "digital agency London",
    "UK software engineers",
    // Specific capabilities
    "business automation software UK",
    "digital loyalty program",
    "loyalty card app",
    "Apple Wallet loyalty",
    "Google Wallet loyalty card",
    "smart locker software",
    "Laravel development UK",
    "Laravel developer London",
    "PHP development UK",
    "React developer UK",
    "stack management UK",
    "property management software UK",
    "startup technical partner UK",
    // Intent keywords
    "build a website UK",
    "build a mobile app UK",
    "hire software developer London",
    "software for small business UK",
    "custom website builder London",
    // Brand
    "KN Consulting",
    "KN Consulting & Innovation Ltd",
    "KN Loyalty",
    "knconsulting.uk",
  ],

  metadataBase: new URL("https://knconsulting.uk"),

  openGraph: {
    title: "KN Consulting & Innovation Ltd — Websites, Apps & Software",
    description:
      "London-based software engineering studio. We build websites, mobile apps, and custom software for UK businesses — fixed price, transparent process.",
    url: "https://knconsulting.uk",
    siteName: "KN Consulting & Innovation Ltd",
    images: [
      {
        url: "https://knconsulting.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "KN Consulting & Innovation Ltd — Websites, Apps & Custom Software, London UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KN Consulting & Innovation Ltd — Websites, Apps & Software",
    description:
      "London-based software engineering studio building websites, mobile apps, and custom software for UK businesses.",
    creator: "@knconsulting",
    images: ["https://knconsulting.uk/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
  applicationName: "KN Consulting & Innovation Ltd",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  authors: [
    { name: "KN Consulting & Innovation Ltd", url: "https://knconsulting.uk" },
  ],

  creator: "KN Consulting & Innovation Ltd",
  publisher: "KN Consulting & Innovation Ltd",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "https://knconsulting.uk",
    languages: { "en-GB": "https://knconsulting.uk" },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Software Engineering",
  classification: "Business & Technology",
};

// ── JSON-LD Structured Data ───────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://knconsulting.uk/#organization",
      name: "KN Consulting & Innovation Ltd",
      url: "https://knconsulting.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://knconsulting.uk/logo-png.png",
        width: 500,
        height: 200,
      },
      description:
        "UK-based software engineering studio building websites, mobile apps, and custom software for businesses across the United Kingdom.",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Twickenham",
        addressRegion: "London",
        addressCountry: "GB",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+44-7377-297077",
          email: "sales@knconsulting.uk",
          contactType: "customer service",
          areaServed: "GB",
          availableLanguage: "English",
        },
      ],
      sameAs: [],
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 10,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://knconsulting.uk/#website",
      url: "https://knconsulting.uk",
      name: "KN Consulting & Innovation Ltd",
      description: "Websites, apps and custom software for UK businesses",
      publisher: { "@id": "https://knconsulting.uk/#organization" },
      inLanguage: "en-GB",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://knconsulting.uk/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://knconsulting.uk/#service",
      name: "KN Consulting & Innovation Ltd",
      image: "https://knconsulting.uk/og-image.png",
      url: "https://knconsulting.uk",
      telephone: "+44-7377-297077",
      email: "sales@knconsulting.uk",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Twickenham",
        addressRegion: "London",
        addressCountry: "GB",
      },
      priceRange: "££",
      servesCuisine: null,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
              description: "Professional business websites, e-commerce stores, and web portals",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description: "iOS and Android apps built for real business use",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
              description: "Bespoke platforms, automation systems, and business software",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "KN Loyalty",
              description: "Digital loyalty card platform — no app required, Apple & Google Wallet integration",
            },
          },
        ],
      },
    },
  ],
}

// ── Root Layout ───────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="646bffc5-94ca-49dd-9203-74e3ed314193"
          type="text/javascript"
          strategy="beforeInteractive"
        />
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3ZQ50R9P5Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ZQ50R9P5Q', {
              page_path: window.location.pathname,
              send_page_view: true,
              allow_google_signals: true,
              allow_ad_personalization_signals: true,
              cookie_domain: 'knconsulting.uk',
              cookie_flags: 'max-age=7200;secure;samesite=none',
              link_attribution: true,
            });
          `}
        </Script>
        <Script src="https://elfsightcdn.com/platform.js" async />
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`antialiased ${sfProDisplay.variable}`}>
        <div id="cookie-declaration" className="cookie-declaration" />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <NavBar />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Fotter />
      </body>
    </html>
  )
}
