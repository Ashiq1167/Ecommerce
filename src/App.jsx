
import './App.css'
import React from 'react';
import Carosel from './carosel/carosel'
import CategoryGrid from './Category/Category'
import { MyMarqueeComponent } from './Marquee/Marquee'
import Navbar from './Navbar/Navbar'
import Card from './Card/Card'
import MultiCardCarousel from './Product/MultiCardCorousal'
import { MarqueeComponent } from './Marquee1/Marquee1'
import Footer from './Footer/FooterData'
import DualFastMarquee from './MultiCardLoop/MultiCardLoop'
import ChristmasSale from './ChristmasSale/ChristmasSale'
import BestChoiceSection from './ProductChoice/BestChoiceSection';

function App() {
  return (
    <>
    <Navbar/>
    <CategoryGrid/>
    <MyMarqueeComponent/>
    <Carosel/>
    <MultiCardCarousel/>
    <Card/>
    <ChristmasSale/>
    <BestChoiceSection/>
    <MarqueeComponent/>
    <DualFastMarquee/>
    <Footer/>
    </>
  )
}

export default App