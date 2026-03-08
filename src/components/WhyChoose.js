import Image from 'next/image'

export default function WhyChoose() {
  const reasons = [
    {
      title: "TSSA Approved Licensed Technician",
      description: "Fully licensed and certified technician with proper TSSA approval, ensuring all work meets Ontario safety standards and regulations.",
      image: "/WhatsApp Image 2026-03-07 at 22.14.04 (1).jpeg"
    },
    {
      title: "Over 10+ Years of Experience",
      description: "With more than a decade of hands-on experience in residential and commercial HVAC services, we deliver proven solutions for all your heating and cooling needs.",
      image: "/WhatsApp Image 2026-03-07 at 22.14.05.jpeg"
    },
    {
      title: "Quality Work & Honest Service",
      description: "Committed to delivering exceptional craftsmanship with transparent pricing and honest recommendations. No hidden fees, just reliable service.",
      image: "/WhatsApp Image 2026-03-07 at 22.14.06.jpeg"
    },
    {
      title: "Customer Satisfaction Guaranteed",
      description: "Your satisfaction is our top priority. We stand behind our work with professional service and ongoing support to ensure your complete satisfaction.",
      image: "/WhatsApp Image 2026-03-07 at 22.14.06 (1).jpeg"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Why Choose Musa Comfort Systems?
          </h2>
          <p className="text-xl text-gray-600">
            TSSA Approved Licensed Technician providing quality work and honest service. Over 10+ years of experience delivering reliable residential & commercial HVAC solutions across Ontario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative h-48">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    width={400}
                    height={300}
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-secondary mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary text-lg">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  )
}
