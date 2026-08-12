import GalleryCarouselCard from './GalleryCarouselCard'
import { galleryCarouselProjects } from '../data/galleryProjects'

export default function Gallery() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">Explore Our HVAC Project Gallery</h2>
          <p className="section-subtitle">
            Take a closer look at our HVAC work! From flawless heating and cooling installations to expert HVAC repairs, our project gallery showcases how Musa Comfort Systems delivers excellence and comfort to Ontario homes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryCarouselProjects.map((project) => (
            <GalleryCarouselCard key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a href="/gallery" className="btn-primary text-lg hover:scale-105">
            Show More Projects
          </a>
        </div>
      </div>
    </section>
  )
}
