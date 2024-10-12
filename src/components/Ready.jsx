import React, { useEffect, useState } from 'react'

function Ready() {
    var [Rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (dets)=>{
          let mouseX = dets.clientX;
          let mouseY = dets.clientY; 
  
         let deltaX = mouseX - window.innerWidth/2;
         let deltaY = mouseY - window.innerHeight/2;
          
         var rad = Math.atan2(deltaY, deltaX);
  
         var angle = rad * (180/Math.PI)
  
         setRotate(angle -180)
        })
    })
  return (
    <div className='relative w-full h-[130vh] bg-[#CDEA68] flex items-center justify-center'>
        <div className='relative flex-col items-center justify-center leading-none'>
        <div className='flex flex-col items-center justify-center leading-[.85]'>
        <h1 className='uppercase text-[12vw] font-bold tracking-tighter'>Ready</h1>
        <h1 className='uppercase text-[12vw] font-bold tracking-tighter'>to start</h1>
        </div>
        <div className='-mt-40 flex items-center justify-center gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                  <div className='w-[12vw] h-[12vw]  bg-zinc-100 rounded-full flex items-center justify-center'>
                        <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '> 
                              <div style={{transform: `translate(-50%, -50%) rotate(${Rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> 
                                    <div className='w-5 h-5 bg-zinc-100 rounded-full'>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className='w-[12vw] h-[12vw]  bg-zinc-100 rounded-full flex items-center justify-center'>
                  <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '> 
                  <div style={{transform: `translate(-50%, -50%) rotate(${Rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> 
                                    <div className='w-5 h-5 bg-zinc-100 rounded-full'>
                                    </div>
                              </div>
                        </div>
                  </div>
          </div>
        <div className='flex items-center justify-center leading-[.60] gap-3'>
        <h1 className='uppercase text-[12vw] font-bold tracking-tighter'>the project</h1>
        <h1 className='uppercase text-[16vw] font-bold tracking-tighter'>?</h1>
        </div>
        <div className='flex flex-col items-center justify-center mt-20'>
        <button className='bg-zinc-900 text-zinc-100 flex items-center justify-center py-5 px-6 rounded-full text-lg gap-7 w-[16vw] mt-4'>START THE PROJECT <div className='w-3 h-3 bg-zinc-100 rounded-full'></div></button>
        <h1 className='font-semibold text-lg mt-6'>OR</h1>
        <button className='border-[1px] border-zinc-900 text-zinc-900 flex items-center justify-center py-5 px-6 rounded-full text-lg gap-7 w-[16vw] mt-4 font-semibold'>HELLO@OCHI.DESIGN <div className='w-3 h-3 bg-zinc-900  rounded-full'></div></button>
        </div>
        </div>
        
    </div>
  )
}

export default Ready