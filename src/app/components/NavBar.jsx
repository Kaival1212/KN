"use client"
import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown, X, Menu } from 'lucide-react'

const navLinks = [
  { name: 'Services', href: '/services' },
  {
    name: 'Products',
    submenu: [
      {
        name: 'KN Loyalty',
        href: '/products/kn-loyalty',
        description: 'Digital loyalty cards — no app required',
      },
    ],
  },
  { name: 'Our Work', href: '/our-work' },
  { name: 'About', href: '/about' },
]

// ── Desktop dropdown ─────────────────────────────────────────
function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)

  const enter = () => { clearTimeout(timer.current); setOpen(true) }
  const leave = () => { timer.current = setTimeout(() => setOpen(false), 120) }

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-kn-navy transition-colors duration-150"
        aria-expanded={open}
      >
        {item.name}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-900/8 overflow-hidden z-50 p-1.5">
          {item.submenu.map((sub) => (
            <Link
              key={sub.name}
              href={sub.href}
              className="flex flex-col px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <span className="text-sm font-semibold text-kn-navy group-hover:text-kn-green transition-colors">
                {sub.name}
              </span>
              <span className="text-xs text-gray-400 mt-0.5">{sub.description}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Mobile full-screen menu ──────────────────────────────────
function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-kn-navy">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link href="/" onClick={onClose}>
          <Image src="/logo-png.png" alt="KN Consulting" width={140} height={56} className="brightness-0 invert" />
        </Link>
        <button
          onClick={onClose}
          className="p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Links */}
      <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
        {navLinks.map((link) => (
          <div key={link.name}>
            {link.submenu ? (
              <>
                <button
                  onClick={() => setExpanded(expanded === link.name ? null : link.name)}
                  className="w-full flex items-center justify-between px-4 py-4 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all text-lg font-medium"
                >
                  {link.name}
                  <ChevronDown className={`w-5 h-5 transition-transform ${expanded === link.name ? 'rotate-180' : ''}`} />
                </button>
                {expanded === link.name && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={onClose}
                        className="block px-4 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all text-base"
                      >
                        {sub.name}
                        <span className="block text-xs text-white/30 mt-0.5">{sub.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={link.href}
                onClick={onClose}
                className="block px-4 py-4 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all text-lg font-medium"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* CTA */}
      <div className="px-6 py-6 border-t border-white/10">
        <Link
          href="/contact"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full bg-kn-green text-white py-4 rounded-xl font-semibold text-base hover:bg-kn-green/90 transition-all"
        >
          Start a Project <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

// ── NavBar ───────────────────────────────────────────────────
export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const open = useCallback(() => setMobileOpen(true), [])
  const close = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <header
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100"
        style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" aria-label="KN Consulting homepage" className="shrink-0">
              <Image
                src="/logo-png.png"
                alt="KN Consulting & Innovation Ltd"
                width={160}
                height={64}
                priority
                fetchPriority="high"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.submenu ? (
                  <DesktopDropdown key={link.name} item={link} />
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-gray-500 hover:text-kn-navy transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-kn-green text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-kn-green/90 transition-all shadow-sm shadow-kn-green/20 hover:-translate-y-px"
              >
                Start a Project <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-gray-500 hover:text-kn-navy hover:bg-gray-100 rounded-lg transition-colors"
              onClick={open}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={close} />
    </>
  )
}
