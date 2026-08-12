import HeroBackground from '../../../components/HeroBackground'
import PageWrapper from '../../../components/PageWrapper'

export default function RooftopUnits() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <HeroBackground src="/pic/roof top unit.jpg" alt="Commercial rooftop units" priority imageClassName="opacity-50 md:opacity-40" />
        <div className="hero-overlay" />
        <div className="page-hero-content">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Rooftop Units (RTU)</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100">
              Commercial HVAC solutions for businesses, restaurants, and industrial facilities
            </p>
            <a href="tel:647-929-1730" className="btn-primary bg-white text-primary hover:bg-gray-100">Call 647-929-1730</a>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Installation */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">RTU Installation</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Commercial Installation</h3>
                  <p className="text-gray-600 mb-4">
                    Professional installation of commercial rooftop units for offices, retail spaces, restaurants, and industrial buildings.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Site assessment and load calculations</li>
                    <li>Structural requirements evaluation</li>
                    <li>Electrical and gas connections</li>
                    <li>Ductwork design and installation</li>
                    <li>Permit acquisition and inspections</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Replacement Services</h3>
                  <p className="text-gray-600 mb-4">
                    Upgrade your old, inefficient RTU with modern energy-efficient systems. We handle removal and disposal of old units.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Energy efficiency analysis</li>
                    <li>Cost-benefit calculations</li>
                    <li>Minimal business disruption</li>
                    <li>Rebates and incentives assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Maintenance & Repair */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Maintenance & Repair</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Preventive Maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Regular maintenance to keep your RTU running efficiently and prevent costly breakdowns.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Quarterly maintenance plans</li>
                    <li>Coil cleaning and inspection</li>
                    <li>Filter replacement</li>
                    <li>Belt and bearing lubrication</li>
                    <li>Refrigerant level checks</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Emergency Repairs</h3>
                  <p className="text-gray-600 mb-4">
                    24/7 emergency repair services for commercial RTU systems. Fast response to minimize business downtime.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Rapid response team</li>
                    <li>Common parts in stock</li>
                    <li>Temporary cooling solutions</li>
                    <li>Priority service for maintenance customers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RTU Types */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">RTU Types We Service</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-3">Single Zone RTU</h4>
                <p className="text-gray-600">Ideal for small commercial spaces with uniform cooling/heating needs.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-3">Multi-Zone RTU</h4>
                <p className="text-gray-600">Perfect for larger buildings requiring different temperature zones.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-3">Heat Pump RTU</h4>
                <p className="text-gray-600">Energy-efficient solution providing both heating and cooling.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Commercial RTU Services Needed?</h3>
            <p className="text-lg mb-6">Get expert installation, maintenance, or repair for your commercial HVAC system</p>
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
