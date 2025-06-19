
import './App.css'
import Carosel from './carosel/carosel'
import CategoryGrid from './Category/Category'
import { MyMarqueeComponent } from './Marquee/Marquee'
import Navbar from './Navbar/Navbar'
import Card from './Card/Card'
import MultiCardCarousel from './Product/MultiCardCorousal'
import { MarqueeComponent } from './Marquee1/Marquee1'
import Footer from './Footer/FooterData'
import DualFastMarquee from './MultiCardLoop/MultiCardLoop'

function App() {
  return (
    <>
    <Navbar/>
    <CategoryGrid/>
    <MyMarqueeComponent/>
    <Carosel/>
    <MultiCardCarousel/>
    <Card/>
     <MarqueeComponent/>
     <DualFastMarquee/>
     <Footer/>
    </>
  )
}

export default App
