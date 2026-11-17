import OptimizedImage from './OptimizedImage'

export default function Services() {
  const services = [
    {
      title: 'Furnaces',
      image: '/services/product-bryant.jpg',
      imageClass: 'object-cover object-[12%_28%]',
      description: 'Expert furnace installation, repair and maintenance for all major brands',
      href: '/services/furnaces-air-conditioners',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      title: 'Air Conditioners',
      image: '/services/product-ac-service.jpg',
      imageClass: 'object-cover object-center',
      description: 'Central AC installation and service for residential and commercial properties',
      href: '/services/furnaces-air-conditioners',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: 'Rooftop Units (RTU)',
      image: '/services/product-rooftop.jpg',
      imageClass: 'object-cover object-center',
      description: 'Commercial rooftop unit installation and service',
      href: '/services/rooftop-units-rtu',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Heat Pumps',
      image: '/services/product-heat-pump.jpg',
      imageClass: 'object-cover object-center',
      description: 'Energy-efficient heat pump solutions',
      href: '/services/heat-pumps',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Hot Water Tanks',
      image: '/services/product-hot-water.jpg',
      imageClass: 'object-cover object-center',
      description: 'Tankless and traditional water heater installation and repair',
      href: '/services/furnaces-air-conditioners',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Gas Line Installation',
      image: '/services/product-gas-line.jpg',
      imageClass: 'object-cover object-center',
      description: 'Professional gas line installation services',
      href: '/services/furnaces-air-conditioners',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Commercial Restaurant Equipment',
      image: '/services/product-restaurant.jpg',
      imageClass: 'object-cover object-center',
      description: 'Restaurant HVAC equipment installation & repair',
      href: '/services/furnaces-air-conditioners',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'HRV Systems',
      image: '/services/product-bryant.jpg',
      imageClass: 'object-cover object-[78%_18%]',
      description: 'Heat Recovery Ventilation systems',
      href: '/services/furnaces-air-conditioners',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Water Softeners & RO Systems',
      image: '/services/product-hot-water.jpg',
      imageClass: 'object-cover object-[75%_center]',
      description: 'Water treatment and purification systems',
      href: '/services/furnaces-air-conditioners',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Carbon Filters & Humidifiers',
      image: '/services/product-bryant.jpg',
      imageClass: 'object-cover object-left',
      description: 'Indoor air quality solutions',
      href: '/services/furnaces-air-conditioners',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="section-spacing bg-surface relative z-10">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <p className="section-kicker eyebrow mb-3">Our Services</p>
          <h2 className="section-title">Complete HVAC Services</h2>
          <p className="section-subtitle">
            From home comfort to commercial solutions, we provide reliable HVAC services for all your heating, cooling and ventilation needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="group block rounded-lg border border-blue-100 bg-white p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover"
            >
              <span className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#e7f5fe] text-primary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-110">
                {service.icon}
              </span>
              <h3 className="text-sm sm:text-base font-bold leading-tight text-secondary group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <span className="mt-2 block text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">Learn More →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
