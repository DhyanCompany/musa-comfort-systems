'use client'

import { useEffect, useState } from 'react'
import OptimizedImage from './OptimizedImage'

const slides = [
  {
    src: '/WhatsApp Image 2026-03-07 at 22.14.03.jpeg',
    alt: 'HVAC professional working',
  },
  {
    src: '/pic/furance.jpg',
    alt: 'Furnace installation service',
  },
  {
    src: '/pic/ac  air  conditioner.jpg',
    alt: 'Air conditioner service',
  },
  {
    src: '/pic/heat pump.jpg',
    alt: 'Heat pump installation',
  },
  {
    src: '/pic/roof top unit.jpg',
    alt: 'Commercial rooftop unit',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] sm:min-h-[85vh] flex items-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden bg-secondary">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === active
                ? 'opacity-100 scale-100 translate-x-0'
                : index === (active - 1 + slides.length) % slides.length
                  ? 'opacity-0 scale-105 -translate-x-8'
                  : 'opacity-0 scale-105 translate-x-8'
            }`}
            aria-hidden={index !== active}
          >
            <OptimizedImage
              src={slide.src}
              alt={slide.alt}
              priority={index === 0}
              sizes="100vw"
              quality={80}
              className="hero-bg-image"
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="relative container-custom px-4 sm:px-6 lg:px-8 w-full z-10 pb-16 sm:pb-20 pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
            TSSA Approved Licensed Technician
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Musa Comfort Systems
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 leading-relaxed">
            Reliable Residential & Commercial HVAC Services — Over 10+ Years of Experience
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="tel:647-929-1730" className="btn-primary bg-white text-primary hover:bg-gray-100 hover:scale-105">
              Call Now
            </a>
            <a href="/contact" className="btn-outline hover:scale-105">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20" role="tablist" aria-label="Hero slides">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === active ? 'w-8 bg-primary' : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
