import React, { useEffect } from 'react'

const Quote = () => {
     useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div style={{background:'#0b1121'}} className=' px-10 md:px-40  pb-10'>
      <div className='text-center'>
    <h2 data-aos="fade-left" className='text-sky-400 text-2xl md:text-3xl'>" Always Learning by buliding and failing   "</h2>
      </div>
    </div>
  )
}

export default Quote
