import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className=' flex bg-gray-50 w-[96rem] h-16'>
            <div>
                <img className=' h-16' src='./assets/logo.png'/>
            </div>
           <ul className='flex mt-5 gap-4 pl-[40rem] text-2xl' >
                <li>Challenges</li>
                <li>Solution</li>
                <li>Articles</li>
                <li>Resources</li>
                <li>Unlock Pro</li>
            </ul>
            
        </nav>
    </div>
  )
}

export default Navbar