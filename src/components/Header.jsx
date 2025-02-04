import React, { useState } from 'react'
import Resume from '../assets/AswiniPS.pdf'

const Header = () => {

  const [isMenuOpen,setISMenuOpen] = useState(false)

  return (
    <>
      <div id='skills'  style={{background:'#0b1121'}}  className='py-3 relative   text-lg '>
        <div className=' flex justify-between sm:justify-between   '>
          <div className='p-3 '>
          <a className=' cursor-pointer' href='#header-part'><img className='w-12' src="as.png" alt="" /></a>
          </div>
          <ul className="xl:flex hidden  items-center gap-5  align-center">
            <li className='py-2 px-4 hover:bg-sky-400 hover:text-black text-white rounded-3xl transition-all cursor-pointer'>
            <a href='#about'>About Me</a>
            </li>
            <li className='py-2 px-4 hover:bg-sky-400 hover:text-black rounded-3xl transition-all cursor-pointer'>
            <a href='#skill'>Skills</a>
            </li>
            <li className='py-2 px-4 hover:bg-sky-400 hover:text-black rounded-3xl transition-all cursor-pointer'>   
                         <a href="#projects">Projects</a>
            </li>
            <li className='py-2 px-4 hover:bg-sky-400 hover:text-black rounded-3xl transition-all cursor-pointer'>       
                     <a href='#contact'>Contact Me</a>
            </li>
          </ul>
          <ul className='xl:flex hidden'>
            <li className='me-10'><a target='_blank' className='text-xl font-bold cursor-none    pt-5 relative  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-sky-400 before:transition-all before:duration-300 hover:before:w-full' href={Resume}>Resume</a></li>
          </ul>
          <i onClick={()=>setISMenuOpen(!isMenuOpen)} className="menu overflow-hidden z-50 xl:hidden  block text-4xl fa-solid fa-bars  cursor-pointer px-10 "></i>
          <div className={` xl:hidden   absolute z-40   top-0 left-0 right-0 h-full w-full text-white flex flex-col items-center gap-6 text-lg transform transition-transform ${isMenuOpen? "opacity-100": "opacity-0"}`} style={{transition:"transform 0.3s ease, opacity 0.3s ease,zIndex:'100"}}>
          <div style={{borderRadius:'0 20px 0 20px'}} className='bg-sky-400  shadow-md mt-20 w-9/12  '>
              <li style={{borderRadius:'0 20px 0 20px'}} className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white text-black transition-all cursor-pointer"><a href='#about'>About Me</a></li>
              <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white text-black transition-all cursor-pointer"><a href='#skill'>Skills</a></li>
              <li className="list-none w-full text-center p-4  hover:text-white text-black transition-all cursor-pointer "><a href='#projects'>Projects</a></li>
              <li style={{borderRadius:'0 20px 0 20px'}} className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white text-black transition-all cursor-pointer"><a href='#contact'>Contact</a></li>
          </div>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Header
