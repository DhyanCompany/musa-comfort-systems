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
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">Why Choose Musa Comfort Systems?</h2>
          <p className="section-subtitle">
            TSSA Approved Licensed Technician providing quality work and honest service. Over 10+ years of experience delivering reliable residential & commercial HVAC solutions across Ontario.
          </p>
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
