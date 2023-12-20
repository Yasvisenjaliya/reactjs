import React from 'react'

export const ContactUs = () => {
  return (
    <div>
      <div>
        <h1>Get In Touch</h1>
        <h2>Gurenteed response within one business day!</h2>
        <div>
          <i className='fas fa-map-marker-alt'></i>
          <div>
            <h1>Visit Us</h1>
            <h3>D-814, Ganesh Glory 11, Jagatpur Road, S.G. Highway, Gota, Ahmedabad, Gujarat, 382470</h3>
          </div>
        </div>
        <div>
          <i className='fas fa-envelope'></i>
          <div>
            <h1>Mail Us</h1>
            <h3>info@demaze.in</h3>
          </div>
        </div>
        <div>
          <i className='fas fa-phone'></i>
          <div>
            <h1>Phone Us</h1>
            <h3>+91-7016660537</h3>
          </div>
        </div>
      </div>
      <div>
        <h1>Let's discuss your project</h1>
        <form>
          <input placeholder='First Name'/>
          <input placeholder='Last Name'/>
          <input placeholder='Email'/>
          <input placeholder='phonenumber'/>
          <textarea placeholder='Message' rows={3}/>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}
