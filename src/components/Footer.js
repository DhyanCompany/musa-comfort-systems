import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block bg-white rounded-lg px-4 py-2.5 mb-4">
              <Image
                src="/musa-comfort-systems-logo.png"
                alt="Musa Comfort Systems"
                width={280}
                height={72}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              TSSA Approved Licensed Technician providing quality HVAC work and honest service with over 10+ years of experience serving Ontario.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/promotions" className="text-gray-300 hover:text-white">Promotions</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white">Gallery</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link href="/services" className="text-gray-300 hover:text-white">All Services</Link></li>
              <li><Link href="/services/heat-pumps" className="text-gray-300 hover:text-white">Heat Pumps</Link></li>
              <li><Link href="/services/furnaces-air-conditioners" className="text-gray-300 hover:text-white">Furnaces & AC</Link></li>
              <li><Link href="/services/rooftop-units-rtu" className="text-gray-300 hover:text-white">Rooftop Units</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <a href="tel:647-929-1730" className="flex items-center gap-3 text-gray-300 hover:text-white">
                <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                647-929-1730
              </a>
              <a href="mailto:info@musacomfort.com" className="flex items-start gap-3 text-gray-300 hover:text-white break-all">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                info@musacomfort.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Musa Comfort Systems. All rights reserved. | TSSA Approved Licensed Technician
          </p>
          <p>
            Designed by{' '}
            <a
              href="https://codenzatech.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white font-semibold transition-colors"
            >
              Codenza Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
