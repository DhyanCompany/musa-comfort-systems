import HeroBackground from '../../components/HeroBackground'
import PageWrapper from '../../components/PageWrapper'
import Promotions from '../../components/Promotions'

export default function PromotionsPage() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <HeroBackground
          src="/OIP (5).webp"
          alt="HVAC promotions and special offers"
          priority
          imageClassName="opacity-50 md:opacity-40"
        />
        <div className="hero-overlay" />
        <div className="page-hero-content">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Promotions & Offers
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100">
              Current HVAC specials, tune-up deals, and installation packages
            </p>
          </div>
        </div>
      </section>

      <Promotions />
    </PageWrapper>
  )
}
