import HeroBackground from '../../../components/HeroBackground'
import PageWrapper from '../../../components/PageWrapper'

export default function FurnacesAirConditioners() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <HeroBackground src="/pic/furance.jpg" alt="Furnace and AC installation" priority imageClassName="opacity-50 md:opacity-40" />
        <div className="hero-overlay" />
        <div className="page-hero-content">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Furnaces & Air Conditioners</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100">
              Expert installation, repair, and maintenance services for all major furnace and AC brands
            </p>
            <a href="tel:647-929-1730" className="btn-primary bg-white text-primary hover:bg-gray-100">Call 647-929-1730</a>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Furnaces */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Furnace Services</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Installation</h3>
                  <p className="text-gray-600 mb-4">
                    Professional installation of high-efficiency gas furnaces from leading brands like Lennox, Goodman, and Carrier. We ensure proper sizing, ductwork connection, and safety compliance.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Free home heating assessment</li>
                    <li>Professional sizing calculations</li>
                    <li>Permit handling and inspections</li>
                    <li>1-year labor warranty</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Repair & Maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Fast, reliable repair services for all furnace types. Our TSSA certified technicians diagnose and fix issues quickly to restore your heat.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>24/7 emergency service</li>
                    <li>Common parts stocked in trucks</li>
                    <li>Safety inspections included</li>
                    <li>Maintenance plans available</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Air Conditioners */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Air Conditioner Services</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Installation</h3>
                  <p className="text-gray-600 mb-4">
                    Complete AC installation services including central air, ductless mini-splits, and heat pumps. Energy-efficient solutions for every home.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Load calculation and sizing</li>
                    <li>Electrical upgrades if needed</li>
                    <li>Thermostat integration</li>
                    <li>Manufacturer warranties</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Repair & Maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Expert AC repair services to keep you cool all summer. From refrigerant leaks to compressor issues, we fix it all.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Same-day service available</li>
                    <li>Refrigerant recovery and recharge</li>
                    <li>Coil cleaning and maintenance</li>
                    <li>Seasonal tune-ups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Brands We Work With */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Brands We Service & Install</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Lennox', 'Goodman', 'Carrier', 'Trane', 'Rheem', 'Bryant', 'York', 'American Standard'].map((brand) => (
                <div key={brand} className="bg-gray-50 p-4 rounded-lg text-center font-semibold text-secondary">
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Need Furnace or AC Service?</h3>
            <p className="text-lg mb-6">Get a free quote from our TSSA certified technicians</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:647-929-1730" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Call 647-929-1730
              </a>
              <a href="/contact" className="btn-secondary border-2 border-white hover:bg-white hover:text-primary">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
