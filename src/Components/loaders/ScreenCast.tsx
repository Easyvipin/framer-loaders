import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { useAnimate, stagger } from "framer-motion";

interface IScreenCastProps {}

const staggerDelayForWifi = 0.5;

const svgVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const pathScreenVariants = {
  rest: {
    x: 4,
  },
  slide: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      delay: 0.2,
      repeat: Infinity,
    },
  },
};

const pathWifiVariantsOne = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      delay: staggerDelayForWifi,
      repeat: Infinity,
    },
  },
};

const pathWifiVariantsTwo = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      repeat: Infinity,
      type: "spring",
      stiffness: 400,
      delay: 2 * staggerDelayForWifi,
    },
  },
};

const pathWifiVariantsThree = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      repeat: Infinity,
      type: "spring",
      stiffness: 400,
      delay: 3 * staggerDelayForWifi,
    },
  },
};

const ScreenCast: React.FC<IScreenCastProps> = (props) => {
  return (
    <div className="h-full flex flex-col items-center justify-between text-white">
      <motion.svg
        variants={svgVariants}
        initial="hidden"
        animate="show"
        width="100px"
        height="100px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={pathScreenVariants}
          initial="rest"
          animate="slide"
          d="M4 10V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V17C20 17.5523 19.5523 18 19 18H12"
          stroke="#3b82f6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={pathWifiVariantsOne}
          initial="hide"
          animate="show"
          d="M6 18C6 16.8954 5.10457 16 4 16"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={pathWifiVariantsTwo}
          initial="hide"
          animate="show"
          d="M8 18C8 15.7909 6.20914 14 4 14"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={pathWifiVariantsThree}
          initial="hide"
          animate="show"
          d="M4 12C7.31371 12 10 14.6863 10 18"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </motion.svg>
      <div className="">
        <button className="text-pink-500 font-mono   rounded outline-none border-green-400 border-none font-bold first-letter: font-sans text-xs">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default ScreenCast;
