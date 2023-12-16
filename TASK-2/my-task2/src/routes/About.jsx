import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import AboutUs from '../component/AboutUs'




function About() {
  return (
   <>
   <Navbar />
    <Hero 
    cName="hero-mid"
    heroImg="./assets/night.jpg"
    title="About"
     
    btnClass="hide"
    />
<AboutUs />
    <Footer />
   </>
  )
}

export default About