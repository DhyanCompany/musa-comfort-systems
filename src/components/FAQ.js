export default function FAQ() {
  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We proudly serve Toronto, Brampton, Mississauga, Oakville, Burlington, Hamilton, Richmond Hill, Guelph, Kitchener, Waterloo, Cambridge, Newmarket, and many more communities across Ontario with comprehensive HVAC services and heating and cooling solutions."
    },
    {
      question: "How can I schedule HVAC services?",
      answer: "You can schedule HVAC services by contacting us through our website or calling our customer support line at 647-929-1730 for prompt heating and cooling service appointments."
    },
    {
      question: "What makes Musa Comfort Systems different?",
      answer: "Our commitment to customer satisfaction, TSSA approved licensed technician status, 10+ years of heating and cooling expertise, quality work, and honest service set us apart from other contractors."
    },
    {
      question: "Are your technicians certified and licensed?",
      answer: "Yes, all our HVAC contractor technicians are TSSA certified, licensed, and extensively trained in heating and cooling systems to provide expert HVAC services."
    },
    {
      question: "What HVAC services do you offer?",
      answer: "We offer comprehensive HVAC services including heating and cooling installation, repair, maintenance, water heater services, gas line installation, commercial restaurant equipment, HRV systems, water softeners, RO systems, and indoor air quality solutions throughout Ontario."
    },
    {
      question: "Do you provide emergency HVAC services?",
      answer: "Yes, we provide 24/7 emergency HVAC services for urgent heating and cooling system failures, ensuring your home comfort is quickly restored by our certified technicians."
    },
    {
      question: "What is Musa Comfort Systems?",
      answer: "Musa Comfort Systems is a trusted provider of expert HVAC and home comfort solutions, dedicated to delivering reliable, energy-efficient services tailored to your needs with quality work and honest service."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Have questions about our HVAC services? Explore our FAQs for quick answers to common inquiries about heating and cooling installations, HVAC repairs, maintenance, and more. We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary mb-3 flex items-start">
                    <svg className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                    </svg>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Still Have Questions? Contact Us
            </a>
            <a href="tel:647-929-1730" className="btn-secondary">
              Call 647-929-1730
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
