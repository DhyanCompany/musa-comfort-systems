import HeroBackground from '../../../components/HeroBackground'
import PageWrapper from '../../../components/PageWrapper'

export default function HeatPumps() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <HeroBackground src="/pic/heat pump.jpg" alt="Heat pump installation" priority imageClassName="opacity-50 md:opacity-40" />
        <div className="hero-overlay" />
        <div className="page-hero-content">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Heat Pumps</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100">
              Energy-efficient heating and cooling solutions for year-round comfort
            </p>
            <a href="tel:647-929-1730" className="btn-primary bg-white text-primary hover:bg-gray-100">Call 647-929-1730</a>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Types of Heat Pumps */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Heat Pump Types</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Air Source Heat Pumps</h3>
                  <p className="text-gray-600 mb-4">
                    The most common type, extracting heat from outdoor air. Perfect for moderate climates with excellent efficiency ratings.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Up to 300% efficiency</li>
                    <li>Both heating and cooling</li>
                    <li>Lower operating costs</li>
                    <li>Environmentally friendly</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Ductless Mini-Split Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Ideal for homes without ductwork or room additions. Provides zoned heating and cooling with individual room control.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>No ductwork required</li>
                    <li>Individual room control</li>
                    <li>Easy installation</li>
                    <li>Quiet operation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Heat Pump Services</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
                  <p className="text-gray-600 mb-4">
                    Expert installation of all major heat pump brands with proper sizing, electrical work, and system configuration.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Heat load calculations</li>
                    <li>Optimal placement planning</li>
                    <li>Electrical upgrades if needed</li>
                    <li>Thermostat integration</li>
                    <li>Manufacturer warranties</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Repair & Maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive repair and maintenance services to keep your heat pump running efficiently year-round.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Refrigerant leak detection</li>
                    <li>Compressor repair/replacement</li>
                    <li>Coil cleaning and maintenance</li>
                    <li>Annual tune-ups</li>
                    <li>24/7 emergency service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Why Choose Heat Pumps?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-3 text-primary">Energy Efficiency</h4>
                <p className="text-gray-600">Heat pumps can achieve 300-400% efficiency, significantly reducing your energy bills compared to traditional heating systems.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-3 text-primary">Year-Round Comfort</h4>
                <p className="text-gray-600">One system provides both heating in winter and cooling in summer, eliminating the need for separate furnace and AC.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-3 text-primary">Environmental Benefits</h4>
                <p className="text-gray-600">Lower carbon footprint with reduced energy consumption and no direct emissions at your home.</p>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Heat Pump Brands We Install</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Lennox', 'Goodman', 'Carrier', 'Trane', 'Mitsubishi', 'Daikin', 'Bryant', 'Rheem'].map((brand) => (
                <div key={brand} className="bg-gray-50 p-4 rounded-lg text-center font-semibold text-secondary">
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for Efficient Heating & Cooling?</h3>
            <p className="text-lg mb-6">Get a free heat pump consultation and quote from our certified technicians</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:647-929-1730" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Call 647-929-1730
              </a>
              <a href="#contact" className="btn-secondary border-2 border-white hover:bg-white hover:text-primary">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
