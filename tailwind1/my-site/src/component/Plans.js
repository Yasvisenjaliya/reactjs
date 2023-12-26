import React from 'react'

function Plans() {
  return (
    <div className='py-[100px] px-9'>
      <div className='mx-auto md:grid grid-cols-3 gap-5'>
        <div className='shadow-xl h-[450px] my-9 hover:scale-75 p-16 duration-400 font-bold'>
          <h1 className=' text-center text-2xl'>Web Develpoment</h1>
          <h1 className=' ml-36 text-3xl mt-5'>$149</h1>
          <p className='shadow-xl mt-10 pl-14'>Lorem ipsum is simply</p>
          <p className='shadow-xl mt-10'>Lorem ipusm is simply dummy text of the printing</p>
          <p className='shadow-xl mt-10 pl-14'>Lorem ipsum is simply dumm.</p>
          <br/>
          <button className=' text-white ml-32 pl-2 pr-2 rounded bg-pink-900 hover:bg-amber-900'>Start Trial</button>
        </div>
        <div className='shadow-xl h-[450px] my-9 bg-gray-100 hover:scale-75 p-16 duration-400 font-bold'>
        <h1 className=' text-center text-2xl'>Digital Marketing</h1>
          <h1 className=' text-center text-3xl mt-5'>$149</h1>
          <p className='shadow-xl mt-10 pl-14'>Lorem ipsum is simply</p>
          <p className='shadow-xl mt-10'>Lorem ipusm is simply dummy text of the printing</p>
          <p className='shadow-xl mt-10 pl-14'>Lorem ipsum is simply dumm.</p>
          <br/>
          <button className=' text-white ml-32 pl-2 pr-2 rounded bg-pink-900 hover:bg-amber-900'>Start Trial</button>
        </div>
        <div className='shadow-xl h-[450px] my-9 hover:scale-75 p-16 duration-400 font-bold'>
        <h1 className=' text-center text-2xl'>App Develpoment</h1>
          <h1 className=' text-center text-3xl mt-5'>$149</h1>
          <p className='shadow-xl mt-10 pl-14'>Lorem ipsum is simply</p>
          <p className='shadow-xl mt-10'>Lorem ipusm is simply dummy text of the printing</p>
          <p className='shadow-xl mt-10 pl-14'>Lorem ipsum is simply dumm.</p>
          <br/>
          <button className=' text-white ml-32 pl-2 pr-2 rounded bg-pink-900 hover:bg-amber-900'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Plans    