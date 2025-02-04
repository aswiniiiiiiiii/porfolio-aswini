import React, { useEffect } from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/js.png'
import BT from '../assets/bootstrap.png'
import TC from '../assets/tcss.png'
import RJ from '../assets/reactjs.png'
import Ang from '../assets/ang.png'
import Ex from '../assets/ex.png'
import NODE from '../assets/nodejs.svg'
import MONGO from '../assets/mg.png'


const Skills = () => {
   useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div id='skill' style={{background:"#0b1121"}} className='px-10 py-10 md:px-40 xl:px-40 lg:px-40'>
        <h3  className="text-2xl mb-2 text-sky-400">02.Skills</h3>
        <a data-aos="fade-right" className="font-bold cursor-pointer  text-3xl md:text-5xl my-3 py-2 relative  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-sky-400 before:transition-all before:duration-300 hover:before:w-full ">Skills</a>      
      <div
   
       className="grid my-10 xl:grid-cols-5 grid-cols-2 sm:gap-10 md:grid-cols-3  gap-3  md:gap-20">
        {/* card */}
        <div data-aos="flip-left" className=' rounded-lg p-2 py-3 bg-white/5 relative backdrop-blur-md border-sky-400 flex justify-center'>
        <img style={{ filter: "drop-shadow(1px 1px 3px #38BDF8)" }} className='p-2' width={'100px'} src={HTML} alt="" />
        </div>
        <div data-aos="flip-left" className='  rounded-lg p-2 bg-white/5 relative backdrop-blur-md border-sky-400 flex justify-center'>
        <img style={{ filter: "drop-shadow(1px 1px 2px #38BDF8)" }} className='p-2'  width={'150px'} src={CSS} alt="" />
        </div> 
        <div data-aos="flip-left" className=' rounded-lg p-2 bg-white/5 relative backdrop-blur-md border-sky-400 flex justify-center'>
        <img style={{ filter: "drop-shadow(1px 1px 2px #38BDF8)" }} className='p-2' width={'150px'} src={JS} alt="" />
        </div> 
        <div data-aos="flip-left" className=' rounded-lg p-2 bg-white/5 relative backdrop-blur-md border-sky-400 flex flex-col items-center justify-center'>
        <img style={{ filter: "drop-shadow(1px 1px 2px #38BDF8)" }} className='p-2'  width={'100px'} src={BT} alt="" />
        <h2 className='font-bolder md:text-2xl text-xl'>Bootstrap</h2>

        </div> 
        <div data-aos="flip-left" className=' rounded-lg p-2  bg-white/5 relative backdrop-blur-md border-sky-400 flex flex-col justify-center items-center text-center'>
        <img style={{ filter: "drop-shadow(1px 1px 2px #38BDF8)" }} className='p-2' width={'100px'} src={TC} alt="" />
        <h2 className='font-bolder md:text-2xl text-xl'>Tailwind CSS</h2>
        </div> 
        <div  data-aos="flip-left" className=' rounded-lg p-2 bg-white/5 relative backdrop-blur-md border-sky-400 flex justify-center'>
        <img style={{ filter: "drop-shadow(1px 1px 2px #38BDF8)" }} className='p-2' width={'150px'} src={RJ} alt="" />
        </div> 
        <div data-aos="flip-left" className=' rounded-lg p-2  bg-white/5 relative backdrop-blur-md border-sky-400 flex flex-col justify-center items-center'>
        <img style={{ filter: "drop-shadow(1px 1px 2px #38BDF8)" }}  className='p-1' width={'100px'} src={Ang} alt="" />
        <h2 className='font-bolder md:text-2xl text-xl'>Angular</h2>

        </div>
         <div  data-aos="flip-left" className=' rounded-lg p-2  bg-white/5 relative backdrop-blur-md border-sky-400 flex justify-center items-center'>
        <img style={{ filter: "drop-shadow(1px 1px 2px #38BDF8)" }}  className='p-2'  width={'200px'} src={NODE} alt="" />
        </div>
         <div data-aos="flip-left" className=' rounded-lg p-2  bg-white/5 relative backdrop-blur-md border-sky-400 flex justify-center'>
        <img style={{ filter: "drop-shadow(1px 1px 2px #38BDF8)" }}  className='p-1' width={'150px'} src={Ex} alt="" />
        </div>
         <div data-aos="flip-left"  className=' rounded-lg p-2  bg-white/5 relative backdrop-blur-md border-sky-400 flex justify-center'>
        <img style={{ filter: "drop-shadow(1px 1px 2px #38BDF8 )" }} width={'200px'} src={MONGO} alt="" />
        </div>
       
      </div>
    </div>
  )
}

export default Skills
