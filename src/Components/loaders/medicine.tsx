import React from "react";
import { motion } from "framer-motion";

interface IMedicineProps {}

const pathVariants = {
  rest: {
    x: 10,
    y: -10,
    opacity: 0,
  },
  slide: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Medicine: React.FC<IMedicineProps> = (props) => {
  return (
    <div className="h-full border flex flex-col items-center justify-between text-white p-4">
      <svg
        version="1.0"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="150px"
        height="150px"
        viewBox="0 0 64 64"
        enable-background="0 0 64 64"
      >
        <motion.path
          fill="#fff"
          variants={pathVariants}
          initial="rest"
          animate="slide"
          d="M56.969,35.312l1.172-1.172C61.762,30.523,64,25.523,64,20C64,8.953,55.047,0,44,0
		c-5.523,0-10.523,2.238-14.141,5.859l-1.172,1.172L56.969,35.312z"
        />
        <motion.path
          fill="#fff"
          d="M7.031,28.688l-1.172,1.172C2.238,33.477,0,38.477,0,44c0,11.047,8.953,20,20,20
		c5.523,0,10.523-2.238,14.141-5.859l1.172-1.172L7.031,28.688z"
        />

        <motion.rect
          x="24.686"
          y="12.002"
          transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 77.2548 32)"
          fill="#fff  "
          width="14.628"
          height="39.996"
        />
      </svg>
      <div className="border">
        <button className="text-pink-500 p-2 rounded outline-none border-green-400 border-none font-bold first-letter: font-sans text-xs">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default Medicine;
