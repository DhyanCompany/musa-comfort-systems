'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              MCS
            </div>
            <span className="ml-3 text-xl font-bold text-secondary">Musa Comfort Systems</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#promotions" className="text-gray-700 hover:text-primary transition-colors">Promotions</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
            <a href="#blog" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="tel:647-929-1730" className="btn-primary">
              Call Now: 647-929-1730
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#promotions" className="text-gray-700 hover:text-primary transition-colors">Promotions</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
              <a href="#blog" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
              <a href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <a href="tel:647-929-1730" className="btn-primary text-center">
                Call Now: 647-929-1730
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
