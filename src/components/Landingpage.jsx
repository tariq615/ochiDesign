import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=  "bg-zinc-100 w-full h-screen pt-1">
        <div className='textstructure mt-48 px-16'>
            {["we create", "Eye-Opening", "Presentations"].map((item, index)=>{
                return(
                    <div className='masker'>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (
                                < motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration: 1}} className='mr-4 w-[8vw] h-[4.5vw] rounded-md relative'><img className='w-full h-full rounded-lg object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>
                            )}
                            <h1 className='tracking-tight leading-[.9] font-bold text-[6vw] uppercase '>{item}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
            <div className='border-t-[1px] border-zinc-400 mt-36 flex justify-between items-center py-5 px-16'>
                {["For public and pricate companies", "From the first pitch to IPO"].map((item,index)=><p className='text-lg leading-none'>{item}</p>)}
                <div className='start flex items-center justify-center gap-2'>
                        <h1 className='uppercase border-[1px] border-zinc-800 rounded-full py-1 px-4 text-lg'>Start the project</h1>
                        <span className='w-10 h-10 border-[1px] border-zinc-800 rounded-full flex items-center justify-center text-xl rotate-[45deg]'>
                            <FaArrowUp />
                        </span>
                </div>
            </div>

    </div>
  )
}

export default Landingpage