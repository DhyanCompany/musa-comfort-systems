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
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-end sm:items-center text-white overflow-hidden"
    >
      {/* Full-bleed background slider */}
      <div className="absolute inset-0 overflow-hidden bg-secondary">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              index === active ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== active}
          >
            <div
              className={`absolute inset-0 ${
                index === active ? 'animate-kenburns' : ''
              }`}
            >
              <OptimizedImage
                src={slide.src}
                alt={slide.alt}
                priority={index === 0}
                sizes="100vw"
                quality={82}
                className="hero-bg-image"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Atmospheric overlays — readable text, photo still visible */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-secondary/90 via-secondary/55 to-secondary/25" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-secondary via-transparent to-black/35" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative container-custom w-full z-10 px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-32 sm:pb-28 md:pt-36 md:pb-32">
        <div className="max-w-2xl lg:max-w-3xl">
          <p className="animate-fade-up text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 sm:mb-5">
            TSSA Approved Licensed Technician
          </p>

          <h1 className="animate-fade-up animation-delay-100 font-bold leading-[1.05] tracking-tight mb-5 sm:mb-6">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Musa Comfort
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mt-1">
              Systems
            </span>
          </h1>

          <p className="animate-fade-up animation-delay-200 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8 sm:mb-10">
            Reliable residential &amp; commercial HVAC — 10+ years of honest service across Ontario.
          </p>

          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:647-929-1730"
              className="btn-primary bg-primary hover:bg-primary-dark text-white hover:scale-[1.03] shadow-lg shadow-primary/30"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="btn-outline border-white/80 hover:bg-white hover:text-secondary hover:scale-[1.03]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div
        className="absolute bottom-14 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        role="tablist"
        aria-label="Hero slides"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === active
                ? 'w-9 bg-primary'
                : 'w-2 bg-white/45 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
