import Image from 'next/image'

export default function Promotions() {
  const promotions = [
    {
      title: "Furnace Installation Special",
      discount: "15% OFF",
      description: "Complete furnace installation with free thermostat",
      image: "/WhatsApp Image 2026-03-07 at 22.14.10.jpeg"
    },
    {
      title: "AC Tune-Up Deal",
      discount: "$99",
      description: "Professional AC maintenance service",
      image: "/WhatsApp Image 2026-03-07 at 22.14.07.jpeg"
    },
    {
      title: "Water Heater Package",
      discount: "$500 OFF",
      description: "Tankless water heater installation",
      image: "/WhatsApp Image 2026-03-07 at 22.14.08.jpeg"
    },
    {
      title: "Emergency Service",
      discount: "24/7 Support",
      description: "Round-the-clock HVAC emergency repairs",
      image: "/WhatsApp Image 2026-03-07 at 22.14.09 (1).jpeg"
    }
  ]

  return (
    <section id="promotions" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Special HVAC Promotions and Heating & Cooling Offers
          </h2>
          <p className="text-xl text-gray-600">
            Check our website frequently for promotions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-3">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <a href="#contact" className="btn-primary">
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary text-lg">
            View All Promotions
          </a>
        </div>
      </div>
    </section>
  )
}
