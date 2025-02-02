import React, { useEffect } from 'react'
import Resume from '../assets/Aswini P.S.pdf'


const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
  
    <>
      <div id='about' style={{background:'#0b1121'}} className=' px-10 md:px-40 pb-40 pt-10 overflow-x-hidden'>
        <div
        
        data-aos="fade-right" className='grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 text-justify  '>
          <div className=''>
            <h2 style={{color:"#4CC9FE"}} className='text-2xl mb-2'>01 Intro</h2>
            <a  className="font-bold cursor-none text-5xl my-3 py-2 relative  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-sky-400 before:transition-all before:duration-300 hover:before:w-full ">About</a>
            <p className="mt-5 text-xl ">
              Hello there! My name is Aswini P S , a passionate Full Stack Developer with expertise in building dynamic and user-friendly web applications.  
              
            </p>
            <p className='mt-5 text-xl'>
                I thrive on continuous learning and enjoy turning ideas into impactful digital experiences. I'm always on the look out for opportunities that could broaden and enhance my skillset. I enjoy working on challenging projects and love collaborating with others to bring their ideas to life.
              
              </p>   
              <div>
              <div  className='my-7'><a target='_blank' style={{borderRadius:'0 20px 0 20px'}} className='md:text-xl text-lg  text-white hover:text-black hover:bg-sky-400  border-2  border-sky-400 p-2 cursor-pointer relative' href={Resume}>Download My Resume</a>
              </div>
            </div>  
              <div  data-aos="fade-left" className="flex justify-start mt-4 items-start w-full ">
            <div className='flex justify-evenly gap-3 items-center '>
              <a target="_blank" aria-label="Check Out My GitHub" className='  ' href="https://github.com/aswiniiiiiiiii">
                <i className="cursor-pointer fa-brands fa-github  rounded-full border-1   py-2  hover:bg-sky-400  hover:text-black px-3 text-sky-400 text:2xl md:text-4xl"></i>
              </a>
              <a target="_blank"  aria-label="Check Out My Linkedin" href="www.linkedin.com/in/aswinips">
                <i className="cursor-pointer fa-brands fa-linkedin px-3 border-1  rounded-full py-2    hover:bg-sky-400  hover:text-black text-sky-400 text:2xl md:text-4xl"></i>
              </a>
              <a target="_blank"   href="aswinips787@gmail.com">
                <i className="cursor-pointer fa-regular fa-envelope px-3  border-1  rounded-full py-2  hover:bg-sky-400  hover:text-black  text-sky-400 text:3xl md:text-4xl"></i>
              </a>
            </div>
          </div>     
          </div>
          <div className="">
            
          </div>
          </div>
          
      </div>
      
    </>
  )
}

export default About
