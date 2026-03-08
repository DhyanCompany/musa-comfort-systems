import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-secondary to-secondary/80 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/WhatsApp Image 2026-03-07 at 22.14.03.jpeg"
          alt="HVAC professional working"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative container-custom section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Musa Comfort Systems - TSSA Approved Licensed Technician
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Reliable Residential & Commercial HVAC Services - Over 10+ Years of Experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Get a Free Quote Now
            </a>
            <a href="#services" className="btn-secondary border-2 border-white hover:bg-white hover:text-secondary">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
