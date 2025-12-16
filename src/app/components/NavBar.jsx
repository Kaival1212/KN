"use client"
import React, { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/', ariaLabel: 'Visit KN Consulting homepage' },
  { name: 'Services', href: '/services', ariaLabel: 'Explore our digital services and solutions' },
  {
    name: 'Products',
    ariaLabel: 'View our products and solutions',
    submenu: [
      { name: 'Digital Wallet Cards', href: '/products/wallet-passes', ariaLabel: 'Apple & Google Wallet pass solutions' },
      { name: 'Loyalty Platforms', href: '/services#loyalty-programs', ariaLabel: 'Custom loyalty and rewards systems' },
      // { name: 'Custom Software', href: '/products/custom-software', ariaLabel: 'Bespoke software development' },
    ]
  },
  { name: 'Our Work', href: '/our-work', ariaLabel: 'View case studies and real client results' },
  { name: 'About', href: '/about', ariaLabel: 'Learn about KN Consulting and our founder' },
];

const NavLink = ({ href, children, ariaLabel, onClick }) => (
  <Link
    href={href}
    className="text-base font-medium transition-colors duration-200 hover:text-kn-green"
    style={{ color: '#131A2F' }}
    aria-label={ariaLabel}
    onClick={onClick}
    onMouseEnter={(e) => e.currentTarget.style.color = '#4CAF50'}
    onMouseLeave={(e) => e.currentTarget.style.color = '#131A2F'}
  >
    {children}
  </Link>
);

const CtaButton = () => (
  <Link
    href="/contact"
    aria-label="Contact us"
    className="font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm inline-block hover:shadow-md"
    style={{ backgroundColor: '#4CAF50', color: 'white' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#45a049'
      e.currentTarget.style.transform = 'translateY(-1px)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#4CAF50'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
    role="button"
  >
    Speak With Us
  </Link>
);

const Logo = () => (
  <Link href="/" className="flex items-center" aria-label="KN Consulting homepage">
    <Image
      src="/logo-png.png"
      alt="KN Consulting & Innovation Ltd Logo"
      width={250}
      height={100}
      priority
      fetchPriority="high"
    />
  </Link>
);

const DesktopDropdown = ({ item, isOpen, onMouseEnter, onMouseLeave }) => {
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      onMouseLeave();
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 text-base font-medium transition-colors duration-200"
        style={{ color: '#131A2F' }}
        aria-label={item.ariaLabel}
        aria-expanded={isOpen}
        onMouseEnter={(e) => e.currentTarget.style.color = '#4CAF50'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#131A2F'}
      >
        {item.name}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-64 rounded-xl shadow-xl border overflow-hidden z-50"
          style={{ backgroundColor: 'white', borderColor: '#e5e7eb' }}
        >
          {item.submenu.map((subitem, idx) => (
            <Link
              key={subitem.name}
              href={subitem.href}
              className="block px-5 py-3 text-sm font-medium transition-colors duration-150"
              style={{
                color: '#131A2F',
                borderBottom: idx < item.submenu.length - 1 ? '1px solid #f3f4f6' : 'none'
              }}
              aria-label={subitem.ariaLabel}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb'
                e.currentTarget.style.color = '#4CAF50'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#131A2F'
              }}
            >
              <div className="font-semibold">{subitem.name}</div>
              <div className="text-xs mt-0.5" style={{ color: '#8A898C' }}>
                {subitem.ariaLabel}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ isOpen, links, onClose }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <nav
        className="absolute top-0 right-0 h-full w-80 max-w-[85vw] shadow-2xl overflow-y-auto"
        style={{ backgroundColor: 'white' }}
        aria-label="Mobile menu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold" style={{ color: '#131A2F' }}>Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors"
              style={{ color: '#8A898C' }}
              aria-label="Close menu"
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-1">
            {links.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() => setExpandedItem(expandedItem === link.name ? null : link.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors"
                      style={{ color: '#131A2F' }}
                      aria-expanded={expandedItem === link.name}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      {link.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${expandedItem === link.name ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {expandedItem === link.name && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            onClick={onClose}
                            className="block px-4 py-2.5 rounded-lg text-sm"
                            style={{ color: '#8A898C' }}
                            aria-label={subitem.ariaLabel}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f9fafb'
                              e.currentTarget.style.color = '#4CAF50'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent'
                              e.currentTarget.style.color = '#8A898C'
                            }}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                    style={{ color: '#131A2F' }}
                    aria-label={link.ariaLabel}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f9fafb'
                      e.currentTarget.style.color = '#4CAF50'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = '#131A2F'
                    }}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t" style={{ borderColor: '#e5e7eb' }}>
            <Link
              href="/contact"
              onClick={onClose}
              className="block text-center font-semibold px-5 py-3 rounded-lg transition-all duration-200 shadow-sm"
              style={{ backgroundColor: '#4CAF50', color: 'white' }}
              aria-label="Contact us"
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
            >
              Speak With Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

const HamburgerIcon = ({ onClick }) => (
  <button
    className="p-2 rounded-lg transition-colors"
    style={{ color: '#131A2F' }}
    onClick={onClick}
    aria-label="Open menu"
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#f3f4f6'
      e.currentTarget.style.color = '#4CAF50'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'transparent'
      e.currentTarget.style.color = '#131A2F'
    }}
  >
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
);

const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40" itemScope itemType="http://schema.org/SiteNavigationElement">
      <nav
        className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
        aria-label="Main navigation"
        role="navigation"
      >
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.submenu ? (
                <DesktopDropdown
                  item={link}
                  isOpen={openDropdown === link.name}
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                />
              ) : (
                <NavLink href={link.href} ariaLabel={link.ariaLabel}>
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
          <CtaButton />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <HamburgerIcon onClick={toggleMobileMenu} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileOpen} links={navLinks} onClose={closeMobileMenu} />
    </header>
  );
};

export default NavBar;