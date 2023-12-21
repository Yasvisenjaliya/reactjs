import React from 'react'
import '../componets/ServicesStyles.css'
import ServiceData from './ServiceData'

function Service1() {
    return (
        <div className='serv'>
            <div className='top'>
                <h2 >Services</h2>
                <h1 >We Provide For Your Brand</h1>
            </div>
            <div className='main'>
                <div className='div1'>
                    <ServiceData
                        image='./assets/web.png'
                        heading="Web Development"
                        text="We provide end-to-end web app
                        development services designed
                        exclusively to solve your unique business
                        challenges. At Demaze Technologies,
                        we offer custom web apps, portals,
                        e-commerce and SaaS development."
                    />
                    <ServiceData
                        image='./assets/application.png'
                        heading="App Development"
                        text="We deliver next-generation iOS,
                        Android and Flutter applications
                        to meet the most demanding customer
                        requirements. Our skilled team design
                        and develop custom feature-packed apps
                        across various business segments."
                    />
                    <ServiceData
                        image='./assets/game.png'
                        heading="Game Development"
                        text="We focus on expanding your imagination.
                        Our mobile game team offers art and design,
                        user experience design, and cross-platform mobile
                        game development services using Unity and Unreal
                        engines."
                    />

                </div>

                <div className='div2'>

                    <ServiceData
                        image='./assets/ai.png'
                        heading="Artificial Intelligence"
                        text="Demaze Technologies offers the
                        best AI development services per
                        the client's requirements. We are
                        experienced in AI development, Natural
                        language processing, computer vision and
                        deep learning to create accurate apps."
                    />

                    <ServiceData
                        image='./assets/social.png'
                        heading="Social Media Marketing"
                        text="A successful digital marketing
                        campaign attracts more customers
                        and generates conversions. We have
                        a complete digital marketing service
                        package that promises augmented
                        website traffic and a fruitful
                        customer base."
                    />

                    <ServiceData
                        image='./assets/graphic.png'
                        heading="Graphic Designing"
                        text="At Demaze, We offer graphic design
                        solutions to businesses of all types
                        like brochures, branding banners, social
                        media posts, creative portfolios, logos
                        and brand identity designs."
                    />



                </div>
            </div>
        </div >

    )
}

export default Service1