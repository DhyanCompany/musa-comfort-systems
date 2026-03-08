import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: "Furnaces & Air Conditioners",
      image: "/WhatsApp Image 2026-03-07 at 22.14.02.jpeg",
      description: "Expert furnace and AC installation, repair & maintenance"
    },
    {
      title: "Rooftop Units (RTU)", 
      image: "/WhatsApp Image 2026-03-07 at 22.14.10 (1).jpeg",
      description: "Commercial rooftop unit installation and service"
    },
    {
      title: "Heat Pumps",
      image: "/WhatsApp Image 2026-03-07 at 22.14.03 (1).jpeg", 
      description: "Energy-efficient heat pump solutions"
    },
    {
      title: "Hot Water Tanks",
      image: "/WhatsApp Image 2026-03-07 at 22.14.04.jpeg",
      description: "Water tank installation and repair services"
    },
    {
      title: "Gas Line Installation",
      image: "/WhatsApp Image 2026-03-07 at 22.14.04 (1).jpeg",
      description: "Professional gas line installation services"
    },
    {
      title: "Commercial Restaurant Equipment",
      image: "/WhatsApp Image 2026-03-07 at 22.14.05.jpeg",
      description: "Restaurant HVAC equipment installation & repair"
    },
    {
      title: "HRV Systems",
      image: "/WhatsApp Image 2026-03-07 at 22.14.05 (1).jpeg",
      description: "Heat Recovery Ventilation systems"
    },
    {
      title: "Water Softeners & RO Systems",
      image: "/WhatsApp Image 2026-03-07 at 22.14.06.jpeg",
      description: "Water treatment and purification systems"
    },
    {
      title: "Carbon Filters & Humidifiers",
      image: "/WhatsApp Image 2026-03-07 at 22.14.06 (1).jpeg",
      description: "Indoor air quality solutions"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our Professional HVAC Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            TSSA Approved Licensed Technician providing reliable residential & commercial HVAC services. Quality work and honest service with over 10+ years of experience serving Ontario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href={
                  service.title === "Rooftop Units (RTU)" ? "/services/rooftop-units-rtu" :
                  service.title === "Heat Pumps" ? "/services/heat-pumps" :
                  "/services/furnaces-air-conditioners"
                } className="text-primary font-semibold hover:text-primary/90 transition-colors">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
