import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".03" className='w-full bg-[#004D43] py-28 rounded-tl-3xl rounded-tr-3xl text-white'>
        <div className='overflow-hidden border-t-[1px] border-b-[1px] border-zinc-300 flex uppercase text-[24vw] whitespace-nowrap font-semibold -tracking-[.080em]    leading-none box-border'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat: Infinity ,ease: "linear" , duration: "9"}} className='px-10 leading-[.68] mb-[3vw]'>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat: Infinity ,ease: "linear" , duration: "9"}} className='px-10 leading-[.68] mb-[3vw]'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee