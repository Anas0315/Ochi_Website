import React from 'react'

function Card() {
  return (
  <>
  <div className='w-full md:h-screen h-[200vh]   bg-[#F1F1F1] md:flex  md:items-center md:justify-center gap-5  px-10'>
    <div className=' md:w-1/2 md:h-[55vh] sm:w-[90vw]  w-[80vw] h-[60vh]  relative '>
       <div className='w-full h-full bg-[#004D43] rounded-lg flex justify-center items-center '>
        <img  className=' md:w-[8vw] w-[30vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute bottom-8 left-9 text-[#CDEA68] border-2 border-[#ceea68b4] px-4 py-1 rounded-2xl '> &copy;2019-2022</button>
       </div>
    </div>
    <div className='lg:w-1/2  md:flex md:items-center md:justify-center gap-5 md:h-[55vh] w-[80vw] h-[60vh] sm:w-[90vw] '>
      <div className='w-full my-3 relative h-full flex justify-center items-center rounded-lg bg-[#212121]'>
      <img  className='md:w-[8vw] w-[30vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute bottom-8 lg:left-9 text-white border-2 border-white lg:px-4 lg:py-1  rounded-2xl '>RATING 5.0 ON CLUTCH</button>
      </div>
      <div className='w-full h-full relative rounded-lg flex items-center justify-center bg-[#212121]'>
      <img  className='md:w-[8vw] w-[30vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute bottom-8  text-white border-2 border-white lg:px-3  rounded-2xl '>BUSSINESS BOOTCAPMP ALUMINI</button>
      </div>
      </div>

  </div>
  </>
  )
}

export default Card