import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <Link>
                    <h1 className='title'>Demaze</h1>
                </Link>
                <ul>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="aboutus">Aboutus</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
