import React from 'react'
import '../componets/AboutUsStyles.css'
import { Link } from 'react-router-dom'
import Navbar from '../componets/Navbar'

export const AboutUs = () => {
  return (
    <>
      <div className='aboutus'>
        <h1 className='me'>About us</h1>
        <div className='about'>
          <div className='about1'>
            <div>
              <img className='imag' src='./assets/about.jpg' />
              <div className='up1'>
                <h2 >Your Product Partner</h2>
                <p>Let's build strategy and your<br /> product together</p>
              </div>
            </div>
            <div className='who'>
              <h1>Who Are We?</h1>
              <p id='p1'>We are a group of brilliant
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
          </div>
          <div>
            <hr />
          </div>
          <div className='about2'>
            <div>
              <img className='imag' src='./assets/digitrans.jpg' />
              <div className='up2'>
                <h3 className='h3'>Value Addition</h3>
                <p>
                  Reduction in your cost and efforts <br />by addition of value
                </p>
              </div>
            </div>
            <div className='who1'>
              <h1>What We Do Best</h1>
              <p>
                We add the value to your idea's execution
              </p>
              <h3>Learn More<Link to='/Services'><i class="fas fa-arrow-right"></i></Link></h3>
              <p className='p1'>We start by listening to the ideas, issues, requirements, challenges and objectives. The process continues with an effort to understand the business, market sector and competitors to develop information which is combined with our technical knowledge, expertise and research in order to provide the best solution at the lowest cost.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
