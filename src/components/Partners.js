import Image from 'next/image'

export default function Partners() {
  const partners = [
    {
      name: "Lennox",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lennox_International_logo.svg/200px-Lennox_International_logo.svg.png",
      description: "Premium heating and cooling systems"
    },
    {
      name: "Goodman",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Goodman_logo.svg/200px-Goodman_logo.svg.png",
      description: "Reliable and affordable HVAC solutions"
    },
    {
      name: "Carrier",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carrier_logo.svg/200px-Carrier_logo.svg.png",
      description: "Innovative climate control systems"
    },
    {
      name: "Trane",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Trane_logo.svg/200px-Trane_logo.svg.png",
      description: "Energy-efficient heating and cooling"
    },
    {
      name: "Rheem",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Rheem_logo.svg/200px-Rheem_logo.svg.png",
      description: "Water heating and HVAC solutions"
    },
    {
      name: "Bryant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Bryant_Heating_%26_Cooling_Systems_logo.svg/200px-Bryant_Heating_%26_Cooling_Systems_logo.svg.png",
      description: "Home comfort systems"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Trusted HVAC Partnerships for Quality Heating and Cooling Service
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We collaborate with industry-leading brands and partners to bring you the best HVAC technology, ensuring reliable and efficient heating and cooling solutions for your home comfort needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-secondary mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
