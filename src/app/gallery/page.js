import HeroBackground from '../../components/HeroBackground'
import PageWrapper from '../../components/PageWrapper'
import GalleryCarouselCard from '../../components/GalleryCarouselCard'
import { galleryCarouselProjects } from '../../data/galleryProjects'

export default function Gallery() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <HeroBackground src="/pic/furance.jpg" alt="HVAC projects gallery" priority imageClassName="opacity-50 md:opacity-40" />
        <div className="hero-overlay" />
        <div className="page-hero-content">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Our HVAC Project Gallery
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100">
              Take a closer look at our HVAC work! From flawless heating and cooling installations to expert HVAC repairs, our project gallery showcases how Musa Comfort Systems delivers excellence and comfort to Ontario homes.
            </p>
            <a href="tel:647-929-1730" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Call 647-929-1730
            </a>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 bg-surface">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {['All', 'Heating', 'Cooling', 'Heat Pumps', 'Commercial', 'Water Systems', 'Gas Services'].map((category) => (
              <button key={category} type="button" className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-white rounded-full shadow-card font-semibold text-secondary hover:text-primary">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryCarouselProjects.map((project) => (
              <GalleryCarouselCard key={project.title} {...project} imageHeight="h-56 sm:h-64 md:h-72" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Start Your HVAC Project?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-white/90">
            Let our TSSA certified technicians bring the same quality and expertise to your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="tel:647-929-1730" className="btn-primary bg-white text-primary hover:bg-gray-100">Call 647-929-1730</a>
            <a href="/contact" className="btn-outline">Get Free Quote</a>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
