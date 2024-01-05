import React from 'react'
import Navbar from './component/navbar/Navbar'
// import Upper from './component/up/Upper'
import Hero from './component/navbar/Hero/Hero'
import Product from './component/navbar/product/Product'
import Banner from './component/banner/Banner'
import Platform from './component/platform/Platform'
import Learn from './component/platform/Learn'
import Art from './component/platform/Art'
import Footer from './component/footer/Footer'


const App = () => {
  return (
    
    <div className=' bg-gray-900 overflow-x-hidden'>
      <Navbar/>
      {/* <Upper/> */}
      <Hero/>
     <Product/>
      <Banner/>
      <Platform/>
      <Learn/>
      <Art/>
      <Footer/>
    </div>
  )
}

export default App