import OptimizedImage from './OptimizedImage'

export default function WhyChoose() {
  const reasons = [
    {
      title: 'TSSA Approved Licensed Technician',
      description:
        'Fully licensed and certified technician with proper TSSA approval, ensuring all work meets Ontario safety standards and regulations.',
      image: '/WhatsApp Image 2026-03-07 at 22.14.04 (1).jpeg',
    },
    {
      title: 'Over 10+ Years of Experience',
      description:
        'With more than a decade of hands-on experience in residential and commercial HVAC services, we deliver proven solutions for all your heating and cooling needs.',
      image: '/WhatsApp Image 2026-03-07 at 22.14.05.jpeg',
    },
    {
      title: 'Quality Work & Honest Service',
      description:
        'Committed to delivering exceptional craftsmanship with transparent pricing and honest recommendations. No hidden fees, just reliable service.',
      image: '/WhatsApp Image 2026-03-07 at 22.14.06.jpeg',
    },
    {
      title: 'Customer Satisfaction Guaranteed',
      description:
        'Your satisfaction is our top priority. We stand behind our work with professional service and ongoing support to ensure your complete satisfaction.',
      image: '/WhatsApp Image 2026-03-07 at 22.14.06 (1).jpeg',
    },
  ]

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] mb-3">
            About Us
          </p>
          <h2 className="section-title">About Musa Comfort Systems</h2>
          <div className="space-y-4 sm:space-y-5 text-left sm:text-center mt-6">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              At Musa Comfort Systems, we are dedicated to providing reliable, professional, and affordable heating, cooling, ventilation, and mechanical solutions for residential and commercial customers across the Greater Toronto Area and Ontario. With 10+ years of hands-on HVAC and mechanical experience, our team has extensive expertise in furnace and air conditioner installation and repair, heat pumps, rooftop units, water heaters, gas lines, ventilation systems, indoor air quality, and complete HVAC system installations.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              We are committed to delivering quality workmanship, safe and code-compliant installations, honest recommendations, transparent pricing, and dependable customer service on every project. Whether you need a new HVAC system, emergency repair, seasonal maintenance, or a customized comfort solution, Musa Comfort Systems works closely with every customer to understand their needs and provide the right solution for their home or business.
            </p>
            <p className="text-secondary font-bold text-lg sm:text-xl md:text-2xl pt-2">
              Your Comfort. Our Commitment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-4 sm:p-5 rounded-xl border border-transparent hover:border-primary/20 hover:shadow-card hover:-translate-y-1 transition-all duration-300 bg-surface/50 hover:bg-white"
            >
              <div className="w-full sm:w-1/3 shrink-0">
                <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden bg-gray-200">
                  <OptimizedImage
                    src={reason.image}
                    alt={reason.title}
                    quality={70}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full sm:w-2/3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a href="/contact" className="btn-primary text-lg hover:scale-105">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
