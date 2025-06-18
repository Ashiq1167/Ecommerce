
import './App.css'
import Carosel from './carosel/carosel'
import CategoryGrid from './Category/Category'
import { MyMarqueeComponent } from './Marquee/Marquee'
import Navbar from './Navbar/Navbar'
import Card from './Card/Card'

function App() {
  return (
    <>
    <Navbar/>
    <CategoryGrid/>
    <MyMarqueeComponent/>
    <Carosel/>
    <Card/>
    </>
  )
}

export default App
