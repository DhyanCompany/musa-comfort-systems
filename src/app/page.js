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
