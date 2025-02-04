import React, { useEffect } from 'react'

const Contact = () => {
   useEffect(() => {
        AOS.init();
      }, [])
      
  return (
    <section   id='contact' style={{background:'#0b1121'}} className='px-10 pb-40 sm:px-10 md:px-40 py-20 '>
      <div data-aos="fade-right" className='flex flex-col text-center'>
       <div >
          <h4 className='text-2xl text-sky-400 py-5'>04 Contact</h4>
          <a  data-aos="fade-right" className="font-bold cursor-none text-3xl md:text-5xl my-3 py-2 relative  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-sky-400 before:transition-all before:duration-300 hover:before:w-full ">GET IN TOUCH</a>          <p className='text-lg md:text-xl  py-10 sm:text-lg md:text-1xl px-5 md:px-20'>Looking to collaborate or need some help with a project? Feel free to reach out.I’d love to chat, answer your questions, or simply say hello!</p>
          <a style={{}} href="www.linkedin.com/in/aswinips" target='_blank' className='text-xl  border-sky-400 border-2 py-2 px-8 rounded-3xl hover:bg-sky-400 hover:text-black'>Say Hello!</a>
          <div data-aos="fade-left" className="flex justify-center items-center w-full my-10">
            <div className='flex justify-evenly gap-7 items-center '>
              <a target="_blank" aria-label="Check Out My GitHub" className='  ' href="https://github.com/aswiniiiiiiiii">
                <i className="cursor-pointer fa-brands fa-github  rounded-full border-1   py-2  hover:bg-sky-400  hover:text-white px-3 text-sky-400 text-4xl"></i>
              </a>
              <a target="_blank"  aria-label="Check Out My Linkedin" href="www.linkedin.com/in/aswinips">
                <i className="cursor-pointer fa-brands fa-linkedin px-3 border-1  rounded-full py-2    hover:bg-sky-400  hover:text-white text-sky-400 text-4xl"></i>
              </a>
              <a target="_blank"   href="aswinips787@gmail.com">
                <i className="cursor-pointer fa-regular fa-envelope px-3  border-1  rounded-full py-2  hover:bg-sky-400  hover:text-white  text-sky-400 text-4xl"></i>
              </a>
            </div>
          </div>
       </div>
      </div>
    </section>
  )
}

export default Contact
