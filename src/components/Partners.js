'use client'

import OptimizedImage from './OptimizedImage'

const partners = [
  {
    name: 'Lennox',
    logo: '/OIP (9).webp',
  },
  {
    name: 'Goodman',
    logo: '/OIP (10).webp',
  },
  {
    name: 'Carrier',
    logo: '/OIP (11).webp',
  },
  {
    name: 'Trane',
    logo: '/OIP (12).webp',
  },
  {
    name: 'Rheem',
    logo: '/OIP (13).webp',
  },
  {
    name: 'Bryant',
    logo: '/Bryant-Products.webp',
  },
]

function LogoItem({ partner }) {
  return (
    <div className="flex-shrink-0 w-40 sm:w-48 mx-3 sm:mx-4">
      <div className="h-24 sm:h-28 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center px-4 py-3 transition-transform duration-300 hover:scale-105 hover:shadow-md">
        <OptimizedImage
          src={partner.logo}
          alt={partner.name}
          fill={false}
          width={80}
          height={56}
          className="object-contain mb-2 max-h-12 sm:max-h-14"
          sizes="80px"
          quality={85}
        />
        <span className="text-sm font-semibold text-secondary">{partner.name}</span>
      </div>
    </div>
  )
}

export default function Partners() {
  const loop = [...partners, ...partners]

  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">Trusted HVAC Brand Partnerships</h2>
          <p className="section-subtitle">
            We collaborate with industry-leading brands to bring you reliable, efficient heating and cooling solutions.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-track flex w-max">
          {loop.map((partner, index) => (
            <LogoItem key={`${partner.name}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  )
}
