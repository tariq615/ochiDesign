import React, { useEffect, useState } from 'react'

function Eyes() {

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
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.5" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        
          <div className='flex items-center justify-center gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                  <div className='w-[15vw] h-[15vw]  bg-zinc-100 rounded-full flex items-center justify-center'>
                        <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '> 
                              <div style={{transform: `translate(-50%, -50%) rotate(${Rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> 
                                    <div className='w-7 h-7 bg-zinc-100 rounded-full'>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className='w-[15vw] h-[15vw]  bg-zinc-100 rounded-full flex items-center justify-center'>
                  <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '> 
                  <div style={{transform: `translate(-50%, -50%) rotate(${Rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> 
                                    <div className='w-7 h-7 bg-zinc-100 rounded-full'>
                                    </div>
                              </div>
                        </div>
                  </div>
          </div>

        </div>
    </div>
  )
}

export default Eyes