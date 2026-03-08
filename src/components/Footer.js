export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                MCS
              </div>
              <span className="ml-3 text-lg font-bold">Musa Comfort Systems</span>
            </div>
            <p className="text-gray-300">
              TSSA Approved Licensed Technician providing quality HVAC work and honest service with over 10+ years of experience serving Ontario.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#promotions" className="text-gray-300 hover:text-white transition-colors">Promotions</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Heat Pumps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Furnace Installation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Air Conditioning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Water Heaters</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smart Thermostats</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:647-929-1730" className="text-gray-300 hover:text-white transition-colors">
                  647-929-1730
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:info@musacomfortsystems.com" className="text-gray-300 hover:text-white transition-colors">
                  info@musacomfortsystems.com
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div className="text-gray-300">
                  Serving Ontario<br />
                  Canada
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Musa Comfort Systems. All rights reserved. | TSSA Approved Licensed Technician
          </p>
        </div>
      </div>
    </footer>
  )
}
