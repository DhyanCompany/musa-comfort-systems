import OptimizedImage from './OptimizedImage'

export default function Promotions() {
  const promotions = [
    {
      title: 'Furnace Installation Special',
      discount: '15% OFF',
      description: 'Complete furnace installation with free thermostat',
      image: '/OIP (5).webp',
    },
    {
      title: 'AC Tune-Up Deal',
      discount: '$99',
      description: 'Professional AC maintenance service',
      image: '/R.jpg',
    },
    {
      title: 'Water Heater Package',
      discount: '$500 OFF',
      description: 'Tankless water heater installation',
      image: '/OIP (6).webp',
    },
    {
      title: 'Emergency Service',
      discount: '24/7 Support',
      description: 'Round-the-clock HVAC emergency repairs',
      image: '/OIP (7).webp',
    },
  ]

  return (
    <section id="promotions" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">Special HVAC Promotions and Offers</h2>
          <p className="section-subtitle">Check our website frequently for promotions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {promotions.map((promo, index) => (
            <div key={index} className="group card service-card">
              <div className="h-44 sm:h-48 relative bg-gray-200 overflow-hidden">
                <OptimizedImage
                  src={promo.image}
                  alt={promo.title}
                  quality={70}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 right-3 bg-primary text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
                  {promo.discount}
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {promo.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{promo.description}</p>
                <a href="/contact" className="btn-primary hover:scale-105">
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a href="tel:647-929-1730" className="btn-secondary text-lg hover:scale-105">
            Call Now for Current Offers
          </a>
        </div>
      </div>
    </section>
  )
}
