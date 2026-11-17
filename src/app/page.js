import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Promotions from '../components/Promotions'
import Process from '../components/Process'
import WhyChoose from '../components/WhyChoose'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import Gallery from '../components/Gallery'
import Partners from '../components/Partners'
import ServiceArea from '../components/ServiceArea'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import MobileCallBar from '../components/MobileCallBar'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <div className="bg-secondary text-white">
          <div className="container-custom grid grid-cols-2 md:grid-cols-5 divide-x divide-white/20">
            {[
              ['10+', 'Years Experience'],
              ['✓', 'TSSA Approved Technician'],
              ['⌂', 'Residential & Commercial'],
              ['●', 'Serving Ontario'],
              ['★', 'Quality Work & Honest Service'],
            ].map(([mark, label]) => (
              <div key={label} className="flex items-center justify-center gap-3 py-5 px-3 text-center">
                <span className="text-2xl font-black text-accent">{mark}</span>
                <span className="text-xs sm:text-sm font-bold leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <Promotions />
        <Process />
        <WhyChoose />
        <Testimonials />
        <Blog />
        <Gallery />
        <Partners />
        <ServiceArea />
        <FAQ />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
