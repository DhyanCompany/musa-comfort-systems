import Image from 'next/image'

export default function Gallery() {
  const projects = [
    {
      title: "Furnace Installation",
      image: "/WhatsApp Image 2026-03-07 at 22.14.06 (2).jpeg",
      category: "Heating"
    },
    {
      title: "AC Installation",
      image: "/WhatsApp Image 2026-03-07 at 22.14.07.jpeg",
      category: "Cooling"
    },
    {
      title: "Heat Pump Setup",
      image: "/WhatsApp Image 2026-03-07 at 22.14.08 (1).jpeg",
      category: "Heat Pumps"
    },
    {
      title: "Water Heater",
      image: "/WhatsApp Image 2026-03-07 at 22.14.08.jpeg",
      category: "Water Systems"
    },
    {
      title: "Commercial RTU",
      image: "/WhatsApp Image 2026-03-07 at 22.14.09 (1).jpeg",
      category: "Commercial"
    },
    {
      title: "Gas Line Work",
      image: "/WhatsApp Image 2026-03-07 at 22.14.09.jpeg",
      category: "Gas Services"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Explore Our HVAC Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Take a closer look at our HVAC work! From flawless heating and cooling installations to expert HVAC repairs, our project gallery showcases how Musa Comfort Systems delivers excellence and comfort to Ontario homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                  <div className="text-lg font-bold">{project.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/gallery" className="btn-primary text-lg">
            Show More Projects
          </a>
        </div>
      </div>
    </section>
  )
}
