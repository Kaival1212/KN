import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

const services = [
  { label: "Business Automation", href: "/services#automation" },
  { label: "Digital Loyalty Systems", href: "/services#loyalty-programs" },
  { label: "Websites & Mobile Apps", href: "/services#development" },
  { label: "Stack Management", href: "/services#stack-management" },
  { label: "Startup Partnership", href: "/services#partnerships" },
  { label: "Managed Support", href: "/services#maintenance" },
]

const products = [
  { label: "KN Loyalty", href: "/products/kn-loyalty" },
]

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

export default function Footer() {
  return (
    <footer className="bg-kn-navy" aria-label="Site footer">

      {/* Pre-footer CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-kn-green text-sm font-semibold uppercase tracking-widest mb-3">
                Let's work together
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Have a project in mind?
              </h2>
              <p className="text-white/50 mt-2 max-w-md">
                We respond within 2 hours. No commitment required for the first conversation.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-kn-green text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-kn-green/90 transition-all shadow-lg shadow-kn-green/20 hover:-translate-y-0.5"
            >
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link href="/" aria-label="KN Consulting homepage" className="inline-block mb-6">
              <span className="text-white font-extrabold text-2xl tracking-tight">
                KN <span className="text-kn-green">Consulting & Innovation</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              UK-based software engineering studio. We build websites, mobile apps, and custom software — powered by Laravel, React, Next.js, SwiftUI, Spring Boot, and more.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/40">
              <a href="mailto:sales@knconsulting.uk" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                sales@knconsulting.uk
              </a>
              <a href="tel:+447377297077" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +44 7377 297077
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 shrink-0" />
                Twickenham, London, UK
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">

            <div>
              <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Services</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} className="text-sm text-white/40 hover:text-white transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Products</h3>
              <ul className="space-y-3">
                {products.map((p) => (
                  <li key={p.label}>
                    <Link href={p.href} className="text-sm text-white/40 hover:text-white transition-colors">
                      {p.label}
                    </Link>
                  </li>
                ))}
                <li><span className="text-sm text-white/20 italic">More coming soon</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Company</h3>
              <ul className="space-y-3">
                {company.map((c) => (
                  <li key={c.label}>
                    <Link href={c.href} className="text-sm text-white/40 hover:text-white transition-colors">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} KN Consulting & Innovation Ltd. Company No. 16605561. Registered in England & Wales.
          </p>
          <p className="text-white/25 text-xs">Built in London.</p>
        </div>
      </div>

    </footer>
  )
}
