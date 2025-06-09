"use client"
import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/', ariaLabel: 'Go to homepage' },
  { name: 'Services', href: '/services', ariaLabel: 'View our services' },
  { name: 'Case Studies', href: '/case-studies', ariaLabel: 'Explore our case studies' },
  { name: 'About Us', href: '/about', ariaLabel: 'Learn about our company' },
  { name: 'Insights', href: '/blog', ariaLabel: 'Read our latest insights' }
];

const NavLink = ({ href, children, ariaLabel }) => (
  <Link
    href={href}
    className="text-lg text-kn-navy hover:text-kn-green font-medium transition-colors duration-200"
    aria-label={ariaLabel}
    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
  >
    {children}
  </Link>
);

// CTA Button component with improved accessibility
const CtaButton = () => (
  <Link
    href="/contact"
    aria-label="Contact us"
    className="bg-kn-green text-white font-semibold px-4 py-2 rounded-md hover:bg-kn-green/90 transition duration-200 shadow-sm inline-block"
    role="button"
  >
    Get in touch
  </Link>
);

// Logo component with semantic and SEO improvements
const Logo = () => (
  <Link href="/" className="flex items-center space-x-2" aria-label="KN Consulting homepage">
    <Image
      src="/logo-png.png"
      alt="KN Consulting Logo"
      width={350}
      height={40}
      priority
      fetchPriority="high"
    />
  </Link>
);

// Mobile menu component with accessibility and semantic improvements
const MobileMenu = ({ isOpen, links }) => {
  if (!isOpen) return null;

  return (
    <nav
      className="absolute top-16 right-0 bg-white shadow-lg rounded-md p-4 w-48"
      aria-label="Mobile navigation"
      role="navigation"
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="block text-lg text-kn-navy hover:text-kn-green font-medium py-2"
          aria-label={link.ariaLabel}
        >
          {link.name}
        </Link>
      ))}
      <Link
        href="/contact"
        className="bg-kn-green text-white font-semibold px-4 py-2 rounded-md hover:bg-kn-green/90 transition duration-200 shadow-sm w-full inline-block text-center mt-2"
        aria-label="Contact us"
        role="button"
      >
        Get in touch
      </Link>
    </nav>
  );
};

// Hamburger icon component with accessibility improvements
const HamburgerIcon = ({ onClick, isOpen }) => (
  <button
    className="text-kn-navy focus:outline-none focus:ring-2 focus:ring-kn-green rounded-md p-2"
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  return (
    <>

      <header className="bg-white shadow-sm" itemScope itemType="http://schema.org/SiteNavigationElement">
        <nav
          className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
          aria-label="Main navigation"
          role="navigation"
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6" role="menubar">
            {navLinks.map((link) => (
              <div key={link.name} role="menuitem">
                <NavLink
                  href={link.href}
                  ariaLabel={link.ariaLabel}
                >
                  {link.name}
                </NavLink>
              </div>
            ))}

            {/* CTA Button */}
            <div role="menuitem">
              <CtaButton />
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <HamburgerIcon onClick={toggleMenu} isOpen={isOpen} />

            {/* Mobile Menu */}
            <MobileMenu isOpen={isOpen} links={navLinks} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;