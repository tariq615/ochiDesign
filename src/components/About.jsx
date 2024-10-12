import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed="-0.1" className='reltive w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl -mt-6'>
      <div className='w-full  font-[NeueMontreal] pt-32 px-16'>
        <div  className='w-[80vw] h-[14vw] '>
        <h1 className='text-[4vw] leading-none font-light text-zinc-800 '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        </div>
      </div>
      <div className='w-full border-t-[1px] border-[#859547] px-16 flex pb-12 mt-14'>
            <div className='w-1/2 '>
                    <h1 className='text-[3.5vw] text-zinc-900'>Our approach:</h1>
                    <button className='bg-zinc-900 text-zinc-100 flex items-center justify-center py-5 px-6 rounded-full text-lg gap-7 w-[12vw] mt-4'>READ MORE <div className='w-3 h-3 bg-zinc-100 rounded-full'></div></button>
            </div>
            <div className='w-1/2 h-[32vw] bg-[#859547] mt-5 rounded-xl overflow-hidden object-cover'>
                        <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default About