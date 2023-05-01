import React from "react";
import { motion } from "framer-motion";

interface IBarProps {}

const Bar: React.FC<IBarProps> = (props) => {
  return (
    <div className="w-full h-1/2 border flex flex-col justify-center items-center">
      <div className="relative">
        <motion.div
          initial={{
            x: -20,
            scale: -1.5,
          }}
          animate={{
            x: 0,
            scale: 1.5,
            transition: {
              duration: 1,
              repeat: Infinity,
            },
          }}
          className="w-10 h-1 bg-white"
        ></motion.div>
        <motion.div
          initial={{
            x: -20,
            scale: -1.5,
          }}
          animate={{
            x: 0,
            scale: 1.5,
            transition: {
              duration: 0.8,
              repeat: Infinity,
            },
          }}
          className="w-10 h-1 mt-4 bg-white"
        ></motion.div>
        <motion.div
          initial={{
            x: -20,
            scale: -1.5,
          }}
          animate={{
            x: 0,
            scale: 1.5,
            transition: {
              duration: 0.6,
              repeat: Infinity,
            },
          }}
          className="w-10 h-1 mt-2 bg-white"
        ></motion.div>
      </div>
    </div>
  );
};

export default Bar;
