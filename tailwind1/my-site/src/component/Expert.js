import React from 'react'

function Expert() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 p-2 md:grid grid-cols-3'>
        <div className=' col-span-1 md:w-[80%] text-center'>
            <img src='./assets/laptop.jpg'/>
        </div>
        <div className=' col-span-2 flex flex-col justify-center pl-11'>
            <h1 className='text-[#68ed6f] font-bold my-2'>Lorem From Export</h1>
            <p className='my-2 text-justify'>
            “Our Mission is clear. We are building to train over 10 Crores Career Aspirants living in under-resourced demographics of Bharat. We are tirelessly working to empower you Career Seekers with Professional & Practical Tech/Non-tech Skills to help you compete for your dream career opportunities on Global Podium.

            </p>
            <button className=' w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
        </div>
    </div>
  )
}

export default Expert