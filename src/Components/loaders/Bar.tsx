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
    <div className="w-full h-1/2 border flex flex-col justify-center items-center">
      <svg
        fill="#fff"
        height="70px"
        width="70px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 490.667 490.667"
      >
        <g>
          <g>
            <motion.path
              initial={{
                opacity: 0,
                pathLength: 0,
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              d="M480,0H10.667C4.779,0,0,4.779,0,10.667V480c0,5.888,4.779,10.667,10.667,10.667H480c5.888,0,10.667-4.779,10.667-10.667
			V10.667C490.667,4.779,485.888,0,480,0z M21.333,21.333h124.395C90.475,46.016,46.016,90.475,21.333,145.728V21.333z
			 M227.115,22.251L50.624,355.648c-18.56-32.597-29.291-70.187-29.291-110.315C21.333,127.957,112.107,31.573,227.115,22.251z
			 M245.333,33.472l174.272,329.195H71.061L245.333,33.472z M21.333,469.333V344.939c24.683,55.275,69.141,99.733,124.395,124.395
			H21.333z M69.739,384h351.189c-41.067,51.883-104.427,85.333-175.595,85.333C174.187,469.333,110.805,435.883,69.739,384z
			 M469.333,469.333H344.939c55.275-24.683,99.733-69.141,124.395-124.395V469.333z M440.043,355.648L263.552,22.251
			c115.008,9.323,205.781,105.707,205.781,223.083C469.333,285.461,458.603,323.051,440.043,355.648z M469.333,145.728
			c-24.683-55.253-69.141-99.712-124.395-124.395h124.395V145.728z"
            />
          </g>
        </g>
      </svg>

      <motion.svg
        className="pizza-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        variants={svgVariants}
        initial="rotating"
        animate="rest"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          fill="none"
          d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          fill="none"
          d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
        />
      </motion.svg>
    </div>
  );
};

export default Bar;
