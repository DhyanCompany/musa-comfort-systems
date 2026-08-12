'use client'

import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Linda T.',
    rating: 5,
    text: 'Excellent service! The technicians were professional, knowledgeable, and completed our furnace installation perfectly. Highly recommend!',
    time: '3 months ago',
  },
  {
    name: 'James R.',
    rating: 5,
    text: 'Outstanding experience from start to finish. They installed our new air conditioner and it works great. Very professional team.',
    time: '2 months ago',
  },
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Great customer service and competitive pricing. They repaired our water heater quickly and efficiently. Will definitely use again.',
    time: '1 month ago',
  },
  {
    name: 'David K.',
    rating: 5,
    text: 'Called for emergency heat pump repair and they arrived the same day. Honest pricing and quality work. Musa Comfort Systems is our go-to HVAC company.',
    time: '3 weeks ago',
  },
  {
    name: 'Priya S.',
    rating: 5,
    text: 'Very clean installation of our new AC unit. The team explained everything clearly and left the space tidy. Highly satisfied!',
    time: '2 weeks ago',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return undefined
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused])

  const goTo = (index) => setActive(index)
  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((i) => (i + 1) % testimonials.length)

  const current = testimonials[active]

  return (
    <section id="testimonials" className="section-spacing bg-surface">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Hear from satisfied homeowners who trust Musa Comfort Systems for prompt heating and cooling solutions.
          </p>
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-2xl shadow-card p-6 sm:p-8 md:p-10 min-h-[280px] sm:min-h-[260px] flex flex-col justify-center overflow-hidden">
            <div
              key={active}
              className="animate-testimonial-fade"
            >
              <div className="flex mb-4 justify-center sm:justify-start">
                {[...Array(current.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-base sm:text-lg leading-relaxed text-center sm:text-left">
                &ldquo;{current.text}&rdquo;
              </p>
              <div className="border-t pt-4 text-center sm:text-left">
                <div className="font-semibold text-secondary text-lg">{current.name}</div>
                <div className="text-sm text-gray-500">{current.time}</div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-4 w-10 h-10 rounded-full bg-white shadow-md text-secondary hover:text-primary hover:scale-110 transition-all flex items-center justify-center"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-4 w-10 h-10 rounded-full bg-white shadow-md text-secondary hover:text-primary hover:scale-110 transition-all flex items-center justify-center"
            aria-label="Next review"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to review ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === active ? 'w-8 bg-primary' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10 md:mt-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/contact" className="btn-primary hover:scale-105">
              Get In Touch
            </a>
            <a href="tel:647-929-1730" className="btn-secondary hover:scale-105">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
