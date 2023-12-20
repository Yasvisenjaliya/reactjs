import React from 'react'
import { Link } from 'react-router-dom'

export const AboutUs = () => {
  return (
    <>
      <h1>About us</h1>
      <div>
        <img src='./assets/about.jpg' />
        <div>
        <h2 >Your Product Partner</h2>
        <p>Let's build strategy and your product together</p>
        </div>
        <div>
          <h1>Who Are We?</h1>
          <p>We are a group of brilliant
            & helpful minds and exceptional
            talents who promote the value of
            effective communication and
            process transparency.
          </p>
          <h3>Learn More<Link to="/services"><i class="fas fa-arrow-right"></i></Link></h3>
          <p>We are believers in change! A change is 
            driven by technology and innovation. We 
            help individuals, start-ups, businesses, 
            and enterprises adapt and adopt digital 
            transformation. We aim to change people's 
            lives and improve businesses with our 
            progressive, value-adding, innovative 
            technology solutions.
            </p>
        </div>
        <div>
          <img src='./assets/digitrans.jpg'/>
          <div>
            <h3>Value Addition</h3>
            <p>
            Reduction in your cost and efforts by addition of value
            </p>
            <div>
              <h1>What We Do Best</h1>
              <p>
              We add the value to your idea's execution
              </p>
              <h3>Learn More<Link to='/Services'><i class="fas fa-arrow-right"></i></Link></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
