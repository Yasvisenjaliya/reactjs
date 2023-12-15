import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'

function Service() {
  return (
    <>
    <Navbar />
    <Hero 
    cName="hero-mid"
    heroImg="./assets/night.jpg"
    title="Service"
     
    btnClass="hide"
    />
    </>
  )
}

export default Service