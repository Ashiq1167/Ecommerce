
import './App.css'
import Carosel from './carosel/carosel'
import CategoryGrid from './Category/Category'
import { MyMarqueeComponent } from './Marquee/Marquee'
import Navbar from './Navbar/Navbar'
import MultiCardCarousel from './Product/MultiCardCorousal'

function App() {
  return (
    <>
    <Navbar/>
    <CategoryGrid/>
    <MyMarqueeComponent/>
    <Carosel/>
    <MultiCardCarousel/>
    </>
  )
}

export default App
