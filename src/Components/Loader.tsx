import React from "react";
import { motion } from "framer-motion";
interface LoaderProps {}

const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <div className="flex items-center justify-center rounded-xl w-full h-full">
      <motion.div
        animate={{
          scale: [-20, 0],
          color: ["#a21caf", "#be123c"],
          transition: {
            scale: {
              repeat: Infinity,
              duration: 0.25,
            },
            color: {
              repeat: Infinity,
              duration: 0.25,
            },
          },
        }}
      >
        .
      </motion.div>
    </div>
  );
};

export default Loader;
