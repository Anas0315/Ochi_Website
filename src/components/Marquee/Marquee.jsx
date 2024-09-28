import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <>
      <div  data-scroll data-scroll-section data-scroll-speed =".2"  className="bg-[#004D43] w-full py-16 rounded-tl-3xl rounded-tr-3xl">
        <div className="border-t-[1px] border-b-[1px]  border-zinc-400 overflow-hidden whitespace-nowrap   flex   ">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease:"linear", duration: 10 }}
            className="text-[17vw] font-bold pr-10 pt-10 text-white tracking-tighter leading-none -mt-[10vw] md:-mt-[5vw]   "
          >
            WE OUR OCHI
          </motion.h1>
          <motion.h1
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease:"linear", duration:10 }}
            className="text-[17vw] pt-10 font-bold  text-white  leading-none tracking-tighter -mt-[10vw]  md:-mt-[5vw]"
          >
            WE OUR OCHI
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default Marquee;
