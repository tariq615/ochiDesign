import React from "react";

function Cards() {
  return (
    <div className=" w-full h-screen bg-zinc-100 flex items-center justify-center px-14 gap-5">
      <div className="relative rounded-xl w-1/2 h-[60vh] bg-[#004D43] flex items-center justify-center">
        <img className="w-[10vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
        <button className="py-1 px-3 border-[1px] border-[#CDEA68] rounded-full text-[#CDEA68] absolute left-10 bottom-10 font-semibold">&copy;2019-2022</button>
      </div>
      <div className="w-1/2 h-[60vh] flex gap-5">
        <div className="relative rounded-xl w-1/2 h-full bg-[#000000] flex items-center justify-center">
        <img className="w-[10vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className="py-1 px-3 border-[1px] border-zinc-100 rounded-full text-zinc-100 absolute left-10 bottom-10 font-semibold">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
        <img className="w-[7vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className="py-1 px-3 border-[1px] border-zinc-100 rounded-full text-zinc-100 absolute left-10 bottom-10 font-semibold">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
