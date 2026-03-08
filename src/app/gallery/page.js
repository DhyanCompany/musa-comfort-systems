import Image from 'next/image'

export default function Gallery() {
  const projects = [
    {
      title: "Commercial Furnace Installation",
      image: "https://images.unsplash.com/photo-1605281317010-fe0b331db992?w=800&h=600&fit=crop",
      category: "Heating",
      description: "High-efficiency furnace installation for commercial building in Toronto"
    },
    {
      title: "Central AC Installation",
      image: "https://images.unsplash.com/photo-1580137189272-2799b5bba3a8?w=800&h=600&fit=crop",
      category: "Cooling",
      description: "Complete central air conditioning system installation"
    },
    {
      title: "Heat Pump Setup",
      image: "https://images.unsplash.com/photo-1584308796739-7c1e8a208dfc?w=800&h=600&fit=crop",
      category: "Heat Pumps",
      description: "Ductless heat pump installation for residential property"
    },
    {
      title: "Water Heater Replacement",
      image: "https://images.unsplash.com/photo-1616491024446-5d2d5ab8e8e2?w=800&h=600&fit=crop",
      category: "Water Systems",
      description: "Tankless water heater installation with gas line upgrade"
    },
    {
      title: "Rooftop Unit Installation",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      category: "Commercial",
      description: "Large commercial RTU installation for office building"
    },
    {
      title: "Gas Line Installation",
      image: "https://images.unsplash.com/photo-1621905251189-48b8e399b5aa?w=800&h=600&fit=crop",
      category: "Gas Services",
      description: "Professional gas line installation for restaurant equipment"
    },
    {
      title: "HRV System Installation",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      category: "Ventilation",
      description: "Heat recovery ventilation system for improved air quality"
    },
    {
      title: "Water Softener Installation",
      image: "https://images.unsplash.com/photo-1584370848013-615926d1c40e?w=800&h=600&fit=crop",
      category: "Water Treatment",
      description: "Complete water softening and filtration system setup"
    },
    {
      title: "Restaurant HVAC",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
      category: "Commercial",
      description: "Restaurant kitchen ventilation and HVAC installation"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=600&fit=crop"
            alt="HVAC projects gallery"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container-custom">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our HVAC Project Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Take a closer look at our HVAC work! From flawless heating and cooling installations to expert HVAC repairs, our project gallery showcases how Musa Comfort Systems delivers excellence and comfort to Ontario homes.
            </p>
            <a href="tel:647-929-1730" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Call 647-929-1730
            </a>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Heating', 'Cooling', 'Heat Pumps', 'Commercial', 'Water Systems', 'Gas Services'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow font-semibold text-secondary hover:text-primary"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-80 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-secondary">{project.category}</span>
                    <button className="text-primary font-semibold hover:text-primary/90 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary text-lg">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your HVAC Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our TSSA certified technicians bring the same quality and expertise to your home or business. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:647-929-1730" className="btn-secondary bg-white text-primary hover:bg-gray-100">
              Call 647-929-1730
            </a>
            <a href="#contact" className="btn-secondary border-2 border-white hover:bg-white hover:text-primary">
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
