import HeroBackground from '../../components/HeroBackground'
import PageWrapper from '../../components/PageWrapper'
import WhyChoose from '../../components/WhyChoose'

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <HeroBackground
          src="/WhatsApp Image 2026-03-07 at 22.14.05.jpeg"
          alt="About Musa Comfort Systems"
          priority
          imageClassName="opacity-50 md:opacity-40"
        />
        <div className="hero-overlay" />
        <div className="page-hero-content">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100">
              Your Comfort. Our Commitment.
            </p>
          </div>
        </div>
      </section>

      <WhyChoose />
    </PageWrapper>
  )
}
