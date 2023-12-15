import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'




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
   </>
  )
}

export default About