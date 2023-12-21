import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'

const Navbar = () => {
    return (
        <>
            <nav>
                {/* <img className='imge' src='./assets/nnngo.png' />
                <h1 className='title'>Demaze<br/><p>Teachnologies</p></h1> */}

                <img className='imge' src='./assets/dLogo.jpg' />
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
