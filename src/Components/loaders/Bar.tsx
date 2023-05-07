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
    <div className="w-full h-1/2 border flex flex-col justify-center items-center text-white">
      <svg
        version="1.0"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="800px"
        height="800px"
        viewBox="0 0 64 64"
        enable-background="new 0 0 64 64"
      >
        <g>
          <motion.path
            fill="none"
            stroke="blue"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
              transition: {
                duration: 6,
                ease: "easeInOut",
              },
            }}
            d="M63.934,31.645c-0.015-0.037-0.256-0.646-0.74-1.648C60.597,24.627,51.02,8.004,32,8.004
		c-22.568,0-31.842,23.404-31.934,23.641c-0.089,0.231-0.089,0.487,0,0.719C0.158,32.6,9.432,56.004,32,56.004
		c19.01,0,28.587-16.605,31.189-21.983c0.486-1.007,0.729-1.62,0.744-1.657C64.022,32.132,64.022,31.876,63.934,31.645z M32,54.004
		c-19.686,0-28.677-19.123-29.917-22.001C3.321,29.121,12.288,10.004,32,10.004c19.686,0,28.677,19.123,29.917,22.001
		C60.679,34.887,51.712,54.004,32,54.004z"
          />
          <motion.path
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                duration: 2,
                ease: "easeInOut",
              },
            }}
            fill="#16a34a"
            stroke="yellow"
            d="M32,16.008c-8.837,0-16,7.163-16,16s7.163,16,16,16s16-7.163,16-16S40.837,16.008,32,16.008z M32,46.008"
          />
          <motion.path
            fill="#231F20"
            d="M32,24.008c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S36.418,24.008,32,24.008z M32,38.008
		c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6S35.313,38.008,32,38.008z"
          />
          <motion.path
            fill="#fff"
            stroke="blue"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              pathLength: 1,
              transition: {
                duration: 2,
                ease: "easeInOut",
              },
            }}
            d="M32,28.004c-0.553,0-1,0.447-1,1s0.447,1,1,1c1.104,0,2,0.896,2,2c0,0.553,0.447,1,1,1s1-0.447,1-1
		C36,29.795,34.209,28.004,32,28.004z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Bar;
