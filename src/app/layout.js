import "./globals.css";
import NavBar from "@/app/components/NavBar"
import Fotter from "@/app/components/Fotter";
import Script from "next/script";


export const metadata = {
  title: {
    default: "KN Consulting & Innovation Ltd",
    template: "%s | KN Consulting & Innovation Ltd",
  },

  description:
    "KN Consulting & Innovation Ltd builds high-performance software, automation systems, digital loyalty programs, and bespoke technology solutions for growth-focused businesses across the UK.",

  keywords: [
    "KN Consulting & Innovation Ltd",
    "business automation UK",
    "digital loyalty systems",
    "custom software development London",
    "mobile apps UK",
    "web development agency",
    "automation consultancy",
    "software for small businesses",
    "digital transformation partner",
    "Laravel agency UK",
    "Next.js development UK",
  ],

  metadataBase: new URL("https://knconsulting.uk"),

  openGraph: {
    title: "KN Consulting & Innovation Ltd",
    description:
      "A London-based consulting and technology studio helping businesses streamline operations through automation, loyalty systems, custom software, and powerful digital solutions.",
    url: "https://knconsulting.uk",
    siteName: "KN Consulting & Innovation Ltd",
    images: [
      {
        url: "https://knconsulting.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "KN Consulting & Innovation Ltd – Custom Software, Automation & Digital Loyalty Systems",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KN Consulting & Innovation Ltd",
    description:
      "Custom software, automation, loyalty systems and digital transformation solutions for UK businesses.",
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
    { name: "Kaival Patel", url: "https://knconsulting.uk/about" },
  ],

  creator: "KN Consulting & Innovation Ltd",
  publisher: "KN Consulting & Innovation Ltd",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
    languages: { "en-GB": "/" },
  },

  category: "Technology Consulting",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="646bffc5-94ca-49dd-9203-74e3ed314193" type="text/javascript" strategy="beforeInteractive"></Script>
        <Script src="https://elfsightcdn.com/platform.js" async></Script>
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

      </head>
      <body
        className="antialiased"
      >
        <div id="cookie-declaration" className="cookie-declaration"></div>

        <NavBar />

        <main className="min-h-screen bg-white" aria-label="Hero Section">
          {children}
        </main>

        <Fotter />
      </body>
    </html>
  );
}
