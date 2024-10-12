import { useAnimation, motion } from "framer-motion";
import React from "react";

function Feature() {
  const cards = [useAnimation(), useAnimation(),useAnimation(),useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: 0, opacity: 1 });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "-100%", opacity: 0 });
  };

  return (
    <div className="w-full bg-zinc-100 overflow-hidden">
      <div className="text-zinc-900 text-[3.5vw] pt-28 pl-14 font-semibold border-b-[1px] border-zinc-400 pb-10">
        <h1>Featured projects</h1>
      </div>
      <div className="cards flex gap-5 w-full h-[98vh] px-14 py-12 overflow-hidden">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="card1 relative w-1/2"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-900"></div>
            <h1 className="text-[1.1vw]">FYDE</h1>
          </div>
          <h1 className="absolute left-full top-1/2 -translate-x-1/2 text-[#CDEA68] text-8xl tracking-tighter leading-none z-[9]">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "-100%", opacity: 0 }}
                animate={cards[0]}
                transition={{ duration: ".5" }}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="">
            <img
              className="w-full h-full rounded-lg"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="relative card2 w-1/2"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-900"></div>
            <h1 className="text-[1.1vw]">VISE</h1>
          </div>
          <h1 className="absolute right-full top-1/2 translate-x-1/2 text-[#CDEA68] text-8xl tracking-tighter leading-none z-[9]">
            {"VISE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "-100%", opacity: 0 }}
                animate={cards[1]}
                transition={{ duration: ".5" }}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="">
            <img
              className="w-full h-full rounded-lg"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
      <div className="cards2 flex gap-5 w-full h-[98vh] px-14 py-12 overflow-hidden">
        <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
          className="card1 relative w-1/2"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-900"></div>
            <h1 className="text-[1.1vw]">TRAWA</h1>
          </div>
          <h1 className="absolute left-full top-1/2 -translate-x-1/2 text-[#CDEA68] text-8xl tracking-tighter leading-none z-[9]">
            {"TRAWA".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "-100%", opacity: 0 }}
                animate={cards[2]}
                transition={{ duration: ".5" }}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="">
            <img
              className="w-full h-full rounded-lg"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(3)}
          onHoverEnd={() => handleHoverEnd(3)}
          className="relative card2 w-1/2"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-900"></div>
            <h1 className="text-[1.1vw]">PREMIUM</h1>
          </div>
          <h1 className="absolute right-full top-1/2 translate-x-1/2 text-[#CDEA68] text-8xl tracking-tighter leading-none z-[9]">
            {"PREMIUM".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "-100%", opacity: 0 }}
                animate={cards[3]}
                transition={{ duration: ".5" }}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="">
            <img
              className="w-full h-full rounded-lg"
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Feature;
