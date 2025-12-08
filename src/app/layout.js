import "./globals.css";
import NavBar from "@/app/components/NavBar"
import Script from "next/script";


export const metadata = {
  title: {
    default: 'KN Consulting',
    template: '%s | KN Consulting',
  },
  description: 'Empowering small businesses with tailored technology solutions — from automation to digital transformation.',
  keywords: [
    'KN Consulting',
    'business automation',
    'digital transformation',
    'custom software',
    'London tech consulting',
    'small business solutions',     
    'web development',
    'mobile apps',
    'Raspberry Pi projects',
  ],
  metadataBase: new URL('https://knconsulting.uk'),
  openGraph: {
    title: 'KN Consulting',
    description: 'Empowering small businesses with tailored technology solutions — from automation to digital transformation.',
    url: 'https://knconsulting.uk',
    siteName: 'KN Consulting',
    images: [
      {
        url: 'https://knconsulting.uk/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KN Consulting – Technology Solutions for Small Businesses',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KN Consulting',
    description: 'Empowering small businesses with tailored technology solutions — from automation to digital transformation.',
    creator: '@knconsulting',
    images: ['https://knconsulting.uk/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  applicationName: 'KN Consulting',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Kaival Patel', url: 'https://knconsulting.uk/about' }],
  creator: 'Kaival Patel',
  publisher: 'KN Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/',
    },
  },
  category: 'technology',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="CookieDeclaration" src="https://consent.cookiebot.com/646bffc5-94ca-49dd-9203-74e3ed314193/cd.js" type="text/javascript" async></Script>
        <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="646bffc5-94ca-49dd-9203-74e3ed314193" type="text/javascript"></Script>
      </head>
      <body
        className="antialiased"
      >
        <NavBar />
        <main className="min-h-screen bg-white" aria-label="Hero Section">
          {children}
        </main>
      </body>
    </html>
  );
}
