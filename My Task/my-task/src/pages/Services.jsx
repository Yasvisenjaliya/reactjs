import React from 'react'
import '../componets/ServicesStyles.css'

export const Services = () => {
  return (
    <>
      <div>
        <h2 className='sr'>Services</h2>
        <h1 className='title'>We Provide For Your Brand</h1>
        <div >
          <div className='div1'>
            <div className='aaa'>
            <h2>Web Development</h2>
            <p>We provide end-to-end web app
              development services designed
              exclusively to solve your unique business
              challenges. At Demaze Technologies,
              we offer custom web apps, portals,
              e-commerce and SaaS development.
            </p>
            </div>

           <div className='bbb'>
           <h2>App Development</h2>
            <p>We deliver next-generation iOS,
              Android and Flutter applications
              to meet the most demanding customer
              requirements. Our skilled team design
              and develop custom feature-packed apps
              across various business segments.
            </p>
           </div>


            <div className='ccc'>
            <h2>Game Development</h2>
            <p>We focus on expanding your imagination.
              Our mobile game team offers art and design,
              user experience design, and cross-platform mobile
              game development services using Unity and Unreal
              engines.
            </p>
            </div>
          </div>

          <div className='div2'>

            <h2>Artificial Intelligence</h2>
            <p>Demaze Technologies offers the
              best AI development services per
              the client's requirements. We are
              experienced in AI development, Natural
              language processing, computer vision and
              deep learning to create accurate apps.
            </p>

            <h2>Social Media Marketing</h2>
            <p>
              A successful digital marketing
              campaign attracts more customers
              and generates conversions. We have
              a complete digital marketing service
              package that promises augmented
              website traffic and a fruitful
              customer base.
            </p>
            <h2>Graphic Designing</h2>
            <p>At Demaze, We offer graphic design
              solutions to businesses of all types
              like brochures, branding banners, social
              media posts, creative portfolios, logos
              and brand identity designs.
            </p>

          </div>
        </div>
      </div >


    </>
  )
}
