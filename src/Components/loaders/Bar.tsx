import React from "react";
import { motion } from "framer-motion";

interface IBarProps {}

const svgVariants = {
  rotating: {
    rotate: -180,
  },
  rest: {
    rotate: 0,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Bar: React.FC<IBarProps> = (props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center  text-white">
      <div className="grow">
        <motion.svg
          width="100px"
          height="100px"
          viewBox="0 0 64 64"
          id="icons"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="rotating"
          animate="rest"
        >
          <motion.path
            fill="#fff"
            d="M32,22A10,10,0,1,0,42,32,10,10,0,0,0,32,22Zm0,16a6,6,0,1,1,6-6A6,6,0,0,1,32,38Z"
          />
          <path
            fill="#fff"
            d="M57.85,28,47.78,11.65A7.69,7.69,0,0,0,41.22,8H22.78a7.69,7.69,0,0,0-6.56,3.65L6.15,28a7.68,7.68,0,0,0,0,8.1l10.07,16.3A7.69,7.69,0,0,0,22.78,56H41.22a7.69,7.69,0,0,0,6.56-3.65l10.07-16.3A7.68,7.68,0,0,0,57.85,28Zm-3.4,6L44.37,50.24A3.67,3.67,0,0,1,41.22,52H22.78a3.67,3.67,0,0,1-3.15-1.76L9.55,34a3.7,3.7,0,0,1,0-3.9L19.63,13.76A3.67,3.67,0,0,1,22.78,12H41.22a3.67,3.67,0,0,1,3.15,1.76L54.45,30.05A3.7,3.7,0,0,1,54.45,34Z"
          />
        </motion.svg>
      </div>
      <div className="grow-[2]">
        <button className="text-pink-500 font-mono   rounded outline-none border-green-400 border-none font-bold first-letter: font-sans text-xs">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default Bar;
