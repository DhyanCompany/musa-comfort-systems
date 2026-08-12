'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#promotions', label: 'Promotions' },
  { href: '/#about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const solid = scrolled || isMenuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/95 shadow-md backdrop-blur-md border-b border-gray-100'
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-2.5 sm:py-3 md:py-4 gap-3">
          <Link
            href="/"
            className="flex items-center min-w-0 shrink max-w-[78%] sm:max-w-none"
            onClick={closeMenu}
          >
            <Image
              src="/musa-comfort-systems-logo.png"
              alt="Musa Comfort Systems - TSSA Approved"
              width={420}
              height={108}
              className="h-11 sm:h-12 md:h-14 w-auto object-contain object-left rounded-md"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 text-sm font-medium whitespace-nowrap relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                  solid ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:647-929-1730"
            className="hidden md:inline-flex btn-primary text-sm shrink-0 hover:scale-105"
          >
            Call Now
          </a>

          <button
            type="button"
            className={`lg:hidden p-2.5 rounded-lg shrink-0 z-[60] transition-colors ${
              solid
                ? 'text-gray-800 hover:text-primary bg-transparent'
                : 'text-white hover:text-white bg-black/25'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black/45 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        className={`lg:hidden fixed top-0 right-0 h-full w-[min(86vw,320px)] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="font-bold text-secondary">Menu</span>
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 text-gray-600 hover:text-primary"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-1 overflow-y-auto h-[calc(100%-72px)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-3.5 px-3 rounded-lg text-gray-700 hover:text-primary hover:bg-surface font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:647-929-1730"
            onClick={closeMenu}
            className="btn-primary text-center mt-4 hover:scale-105"
          >
            Call Now: 647-929-1730
          </a>
          <a
            href="mailto:info@musacomfort.com"
            onClick={closeMenu}
            className="btn-secondary text-center mt-2 text-sm"
          >
            info@musacomfort.com
          </a>
        </nav>
      </aside>
    </header>
  )
}
