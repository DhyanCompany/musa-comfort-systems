import HeroBackground from '../../components/HeroBackground'
import PageWrapper from '../../components/PageWrapper'
import Services from '../../components/Services'

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <HeroBackground
          src="/pic/furance.jpg"
          alt="Musa Comfort Systems HVAC services"
          priority
          imageClassName="opacity-50 md:opacity-40"
        />
        <div className="hero-overlay" />
        <div className="page-hero-content">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Our HVAC Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100">
              Professional residential and commercial heating, cooling, and mechanical solutions across Ontario
            </p>
          </div>
        </div>
      </section>

      <Services />
    </PageWrapper>
  )
}
