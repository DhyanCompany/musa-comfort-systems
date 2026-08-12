'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What areas do you service?',
    answer:
      'We proudly serve Toronto, Brampton, Mississauga, Oakville, Burlington, Hamilton, Richmond Hill, Guelph, Kitchener, Waterloo, Cambridge, Newmarket, and many more communities across Ontario with comprehensive HVAC services and heating and cooling solutions.',
  },
  {
    question: 'How can I schedule HVAC services?',
    answer:
      'You can schedule HVAC services by contacting us through our website, emailing info@musacomfort.com, or calling our customer support line at 647-929-1730 for prompt heating and cooling service appointments.',
  },
  {
    question: 'What makes Musa Comfort Systems different?',
    answer:
      'Our commitment to customer satisfaction, TSSA approved licensed technician status, 10+ years of heating and cooling expertise, quality work, and honest service set us apart from other contractors.',
  },
  {
    question: 'Are your technicians certified and licensed?',
    answer:
      'Yes, all our HVAC contractor technicians are TSSA certified, licensed, and extensively trained in heating and cooling systems to provide expert HVAC services.',
  },
  {
    question: 'What HVAC services do you offer?',
    answer:
      'We offer comprehensive HVAC services including heating and cooling installation, repair, maintenance, water heater services, gas line installation, commercial restaurant equipment, HRV systems, water softeners, RO systems, and indoor air quality solutions throughout Ontario.',
  },
  {
    question: 'Do you provide emergency HVAC services?',
    answer:
      'Yes, we provide 24/7 emergency HVAC services for urgent heating and cooling system failures, ensuring your home comfort is quickly restored by our certified technicians.',
  },
  {
    question: 'What is Musa Comfort Systems?',
    answer:
      'Musa Comfort Systems is a trusted provider of expert HVAC and home comfort solutions, dedicated to delivering reliable, energy-efficient services tailored to your needs with quality work and honest service.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers about our HVAC installations, repairs, maintenance, and service areas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-primary/40 shadow-md bg-white'
                    : 'border-gray-200 bg-surface hover:border-primary/20 hover:shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left min-h-[56px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-secondary pr-2">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-primary text-white rotate-180' : 'bg-primary/10 text-primary'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/contact" className="btn-primary hover:scale-105">
              Still Have Questions? Contact Us
            </a>
            <a href="tel:647-929-1730" className="btn-secondary hover:scale-105">
              Call 647-929-1730
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
