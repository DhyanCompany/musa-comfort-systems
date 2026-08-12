import HeroBackground from '../../components/HeroBackground'
import PageWrapper from '../../components/PageWrapper'

export default function ServiceArea() {
  const cities = [
    "Hamilton", "Burlington", "Oakville", "Guelph", "Cambridge", "Kitchener",
    "Waterloo", "Brantford", "Woodstock", "London", "Mississauga", "Brampton",
    "Toronto", "Vaughan", "Markham", "Richmond Hill", "Collingwood", "Barrie",
    "Innisfil", "Newmarket", "Aurora", "Shelburne", "Orangeville", "Ajax",
    "Pickering", "Whitby", "Oshawa"
  ]

  return (
    <PageWrapper>
      <section className="page-hero">
        <HeroBackground src="/pic/1.jpg" alt="Ontario service areas" priority imageClassName="opacity-50 md:opacity-40" />
        <div className="hero-overlay" />
        <div className="page-hero-content">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">HVAC Services Across Ontario</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100">
              From Toronto to London, Musa Comfort Systems provides top-tier HVAC services across Ontario.
            </p>
            <a href="tel:647-929-1730" className="btn-primary bg-white text-primary hover:bg-gray-100">Call 647-929-1730</a>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Communities We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find out if we're in your area and experience exceptional heating and cooling solutions from our TSSA certified technicians.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {cities.map((city, index) => (
              <div key={index} className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">{city}</span>
              </div>
            ))}
          </div>

          {/* Service Coverage Info */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Don't See Your City Listed?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We're always expanding our service area! Contact us to check if we can service your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:647-929-1730" className="btn-primary">
                Call to Check Coverage
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Same Quality Service Across All Areas
            </h2>
            <p className="text-xl text-gray-600">
              No matter which community you're in, you get the same expert service and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Fast Response</h3>
              <p className="text-gray-600">
                Quick service response times across all our service areas with local technicians ready to help.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2a1 1 0 100-2 2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">TSSA Certified</h3>
              <p className="text-gray-600">
                All our technicians are fully licensed and certified to work in all Ontario municipalities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                We understand local building codes, weather patterns, and specific regional needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Schedule Service?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers across Ontario who trust Musa Comfort Systems for their heating and cooling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:647-929-1730" className="btn-secondary bg-white text-primary hover:bg-gray-100">
              Call 647-929-1730
            </a>
            <a href="/contact" className="btn-secondary border-2 border-white hover:bg-white hover:text-primary">
              Schedule Online
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
