import React from "react";
import { motion } from "framer-motion";

interface ICartProps {}

const svgVariants = {
  rotating: {
    stroke: "red",
    rotate: -10,
    x: 0,
  },
  rest: {
    rotate: 10,
    x: 30,
    transition: {
      type: "spring",
      stiffness: 100,
      repeat: Infinity,
      repeatType: "mirror",
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const Cart: React.FC<ICartProps> = (props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center  text-white">
      <div className="grow">
        <motion.svg
          width="250px"
          height="250px"
          viewBox="0 0 64 64"
          id="icons"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="rotating"
          animate="rest"
        >
          <path
            fill="#fff"
            d="M13,38H53a2,2,0,0,0,1.93-1.47l6-22A2,2,0,0,0,59,12H12.75L12,7.65A2,2,0,0,0,10,6H5a2,2,0,0,0,0,4H8.33l4.28,24A7,7,0,0,0,13,48h1.68a7,7,0,1,0,12.64,0H37.68a7,7,0,1,0,12.64,0H56a2,2,0,0,0,0-4H13a3,3,0,0,1,0-6ZM56.38,16,51.47,34H16.67L13.46,16ZM24,51a3,3,0,1,1-3-3A3,3,0,0,1,24,51Zm23,0a3,3,0,1,1-3-3A3,3,0,0,1,47,51Z"
          />
        </motion.svg>
      </div>
      <div className="grow-[2]">
        <button className="text-pink-500 p-2 rounded outline-none border-green-400 border-none font-bold first-letter: font-sans text-xs">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default Cart;
