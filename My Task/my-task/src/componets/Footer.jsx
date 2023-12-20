import React from 'react'
import './FooterStyles.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div id='img'>
                <div className='logo'>
                <img className='image' src='./assets/nnngo.png' />
                <h1 className='hy'>Demaze <br/>Technologies</h1>
                </div>


                <div className='icon'>
                    <a href='/'>
                        <i className='fa-brands fa-facebook-square'></i>
                    </a>

                    <a className='fb' href='/'>
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a className='twit' href='/'>
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>
                </div>

            </div>
            <div className='company'>
                <h1>Company</h1>
                <h3>About Us<br />Services<br />Projects<br />Contact Us</h3>
            </div>
            <div className='services'>
                <h1>Services</h1>
                <h3>Mobile App Development<br />
                    Website Development<br />
                    AI Development<br />
                    Game Development</h3>
            </div>
            <div className='cus'>
                <h1>Contact Us</h1>
                <div>
                    <i className='fas fa-map-marker-alt'></i>
                    <h3>D-814, Ganesh Glory 11, Jagatpur Road, S.G. Highway, Gota, Ahmedabad, Gujarat, 382470</h3>
                </div>
                <div>
                    <i className='fas fa-envelope'></i>
                    <h3>info@demaze.in</h3>
                </div>

                <div>
                    <i className='fas fa-phone'></i>
                    <h3>+91-7016660537</h3>
                </div>
            </div>
        </div>
    )
}



