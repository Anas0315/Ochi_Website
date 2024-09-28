import { motion } from 'framer-motion';
import React from 'react'
import { ImArrowUpRight2 } from "react-icons/im";
function LandingPage() {
  return (
   <>
   <div  data-scroll data-scroll-section data-scroll-speed ="-.3" className=' w-full md:h-[70vh] lg:h-[85vh] h-[80vh] sm:h-[90vh] bg-[#F1F1F1] '>
    <div className="textStructure md:mt-10 px-7   md:px-10">
    {["WE-create" , "eye-opening","presentation"].map((item,index) => (<div className="masker">
      <div className='w-fit flex  '>
        {index === 1 && (
        <motion.div
         initial ={{width:0}}
         animate ={{width:"7vw"}}
         transition={{ease:[0.76,0,0.24,1],duration:"1"}}
        className=' h-[4.5vh] md:w-[7vw] -bottom-2 md:h-[7vh] md:-bottom-2 sm:h-[7.5vh] sm:-bottom-4  lg:h-[10vh] lg:-bottom-5 relative '>
          <img className='w-full h-full md:rounded-lg rounded-md' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
        </motion.div>
        )}
  <h1 key={index} className='uppercase font-bold font-mono  text-[#212121] text-[11vw] md:text-[9vw] md:leading-[7vw] leading-[11vw] tracking-tight'>{item}</h1>
      </div>
</div>))}
       </div>

     <div className='md:flex md:items-center md:justify-between w-full md:px-10 px-2 py-4   border-t border-gray-400 mt-28 text-lg font-medium'>
         <h1 className=' md:mt-0 mt-5 '>For public and private companies</h1>
         <h1 className='md:mt-0 mt-5 ' >from the first pitch to IPO</h1>
         <div className='flex items-center  mt-5 md:mt-0 md:justify-center  gap-4'>
        <button className='border-[1px] border-black rounded-3xl px-3 py-1 '>START THE PROJECT</button>
        <div className='border-[1px] border-black p-[5px] rounded-[50%]' >
        <ImArrowUpRight2 />
        </div>
        </div>
     </div>
     </div>
   </>
  )
}

export default LandingPage