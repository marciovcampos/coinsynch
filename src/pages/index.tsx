import AboutUs from 'components/AboutUs'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeaderCarousel from 'components/HeaderCarousel'
import Subscribe from 'components/Subscribe'

export default function Home() {
  return (
    <>
      <Header />
      <HeaderCarousel />
      <AboutUs />
      <Subscribe />
      <Footer />
    </>
  )
}
