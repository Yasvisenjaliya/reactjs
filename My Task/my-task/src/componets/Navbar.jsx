import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'

const Navbar = () => {
    return (
        <>
            <nav>

                <h1 className='title'>Demaze</h1>

                <ul>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">Aboutus</Link>
                    </li>
                    
                </ul>
                
                    <Link to="/contactus">
                    <button className='btn'>Contact Us</button>
                </Link>
                   

                
            </nav>
        </>
    )
}

export default Navbar
