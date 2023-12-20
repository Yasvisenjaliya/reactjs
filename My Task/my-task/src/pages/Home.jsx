import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeStyles.css";




const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='top'>
          <h1 className='first'>Where idea <br />turns into <br /> Reality</h1>
          <h3 className='text'>
            Deliver superior customer
            experince by upgrading your
            business processes <br /> through
            Website & Mobile Application.
          </h3>
          <Link to="/contact us"><button className='btn1'>Contact Us</button></Link>
          <Link to="/aboutus"><button className='btn2'>About US</button></Link>
        </div>
        <div className='img'>
          <img className='img1' src='./assets/team.png' />
          <img className='img2' src='./assets/support.webp'/>
          <img className='img3' src='./assets/cost.png'/>
        </div>
      </div>
    </>
  )
}
export default Home