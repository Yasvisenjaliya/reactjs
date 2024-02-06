import React from 'react'
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
   <div className=' bg-slate-50 border-b-2 '>
     <div className=' flex mr-8'>
        <img src='./assets/navlogo.jpg' className=' w-10 h-14 mt-3 mb-3 ml-4'/>
        <CgProfile className=' ml-[93%] w-10 h-10 mt-5' />
    </div>
   </div>
  )
}

export default Navbar