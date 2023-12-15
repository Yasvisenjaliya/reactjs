import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'

function Contact() {
  return (
    <>
    <Navbar />
    <Hero 
    cName="hero-mid"
    heroImg="./assets/2.jpg"
    title="Contact"
     
    btnClass="hide"
    />
    </>
  )
}

export default Contact