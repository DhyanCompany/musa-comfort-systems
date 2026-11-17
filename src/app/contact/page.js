import HeroBackground from '../../components/HeroBackground'
import PageWrapper from '../../components/PageWrapper'
import QuoteForm from '../../components/QuoteForm'

export default function Contact() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <HeroBackground
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=600&fit=crop"
          alt="Contact Musa Comfort Systems"
          priority
          imageClassName="opacity-50 md:opacity-40"
        />
        <div className="hero-overlay" />
        <div className="page-hero-content">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Contact Musa Comfort Systems</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100">Get in touch for expert HVAC services, free quotes, and emergency support</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="group text-center p-6 rounded-xl border border-transparent hover:border-primary/25 hover:shadow-card hover:-translate-y-1 transition-all duration-300 bg-surface/40 hover:bg-white">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">For immediate service and emergencies</p>
              <a href="tel:647-929-1730" className="text-xl sm:text-2xl font-bold text-primary hover:text-primary/90">
                647-929-1730
              </a>
              <p className="text-sm text-gray-500 mt-2">24/7 Emergency Service Available</p>
            </div>

            <div className="group text-center p-6 rounded-xl border border-transparent hover:border-primary/25 hover:shadow-card hover:-translate-y-1 transition-all duration-300 bg-surface/40 hover:bg-white">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">For quotes and general inquiries</p>
              <a href="mailto:info@musacomfort.com" className="text-lg sm:text-xl font-semibold text-primary hover:text-primary/90 break-all">
                info@musacomfort.com
              </a>
              <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
            </div>

            <div className="group text-center p-6 rounded-xl border border-transparent hover:border-primary/25 hover:shadow-card hover:-translate-y-1 transition-all duration-300 bg-surface/40 hover:bg-white">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-3">Service Area</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Serving communities across Ontario</p>
              <div className="text-lg font-semibold text-secondary">
                Toronto, GTA & Beyond
              </div>
              <a href="/service-area" className="text-primary hover:text-primary/90 mt-2 inline-block">
                View All Service Areas →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Request a Free Quote</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you with a competitive quote
              </p>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            HVAC Emergency?
          </h2>
          <p className="text-xl mb-6">
            Don't wait! Our 24/7 emergency service team is ready to help
          </p>
          <a href="tel:647-929-1730" className="btn-secondary bg-white text-red-600 hover:bg-gray-100 text-lg">
            Emergency Hotline: 647-929-1730
          </a>
        </div>
      </section>
    </PageWrapper>
  )
}
