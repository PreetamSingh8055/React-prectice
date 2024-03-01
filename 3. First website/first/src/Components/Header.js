import React, { useState } from 'react'
import {TfiMenu} from 'react-icons/tfi'
import { CgClose } from "react-icons/cg";

function Header() {

    const[toggle, setToggle]=useState(false);
  return (
    <div className='bg-[#2699fb] p-4 text-white px-10'>
        <div className='max-w-[1240px]  flex mx-auto justify-between items-center '>
           
            <div className='text-3xl font-bold'>
            <h1>LEGEND</h1>
            </div>
            {
                toggle ?
                <CgClose onClick={()=>setToggle(!toggle)} className='text-2xl md:hidden block' />
                :
                <TfiMenu onClick={()=>setToggle(!toggle)} className='text-2xl md:hidden block' />

            }
           
      <ul className=' hidden md:flex gap-5'>
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* responsive menu */}
      <ul className={` duration-500  md:hidden  fixed bg-black ${ toggle ? 'left-0' : 'left-[-100%]' } top-[68px] w-full h-screen `}>
        <li className='p-5'>Home</li>
        <li className='p-5'>Company</li>
        <li className='p-5'>Resources</li>
        <li className='p-5'>About</li>
        <li className='p-5'>Contact</li>
      </ul>

      </div>
    </div>
  )
}

export default Header
