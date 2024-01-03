import React from 'react'
import Navbar from './component/navbar/Navbar'
import Upper from './component/up/Upper'
import Hero from './component/navbar/Hero/Hero'
import Product from './component/navbar/product/Product'
import Banner from './component/banner/Banner'
import Platform from './component/platform/Platform'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Upper/>
      <Hero/>
      <Product/>
      <Banner/>
      <Platform/>
    </div>
  )
}

export default App