import React from 'react'
import '../componets/contactUsStyles.css'

export const ContactUs = () => {
  return (
    <div className='contact'>
      <div className='get'>
        <h2>Get In Touch</h2>
        <h4>Gurenteed response within one business day!</h4>
        <div className='visit'>
          <i className='fas fa-map-marker-alt'></i>
          <div>
            <h1>Visit Us</h1>
            <h3>D-814, Ganesh Glory 11, Jagatpur Road, S.G. Highway, Gota, Ahmedabad, Gujarat, 382470</h3>
          </div>
        </div>
        <div className='mail'>
          <i className='fas fa-envelope'></i>
          <div>
            <h1>Mail Us</h1>
            <h3>info@demaze.in</h3>
          </div>
        </div>
        <div className='phone'>
          <i className='fas fa-phone'></i>
          <div>
            <h1>Phone Us</h1>
            <h3>+91-7016660537</h3>
          </div>
        </div>
      </div>
      <div className='fm'>
        <h1>Let's discuss your project</h1>
        <form>
          <input className='in' placeholder='First Name'/>
          <input className='in' placeholder='Last Name'/>
          <input className='in' placeholder='Email'/>
          <input className='in' placeholder='phonenumber'/>
          <textarea className='in1' placeholder='Message' rows={3}/>
          <button className='btn3'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}
