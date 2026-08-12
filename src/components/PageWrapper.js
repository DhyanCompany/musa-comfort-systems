import Header from './Header'
import Footer from './Footer'
import MobileCallBar from './MobileCallBar'

export default function PageWrapper({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
