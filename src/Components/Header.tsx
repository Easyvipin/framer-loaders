import * as React from "react";

import { motion } from "framer-motion";
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div>
      <motion.h3
        className=" border-2 border-violet-700 px-2 rounded-full font-semibold text-[1rem]"
        initial={{
          opacity: 0,
          rotateX: 180,
        }}
        animate={{
          opacity: 1,
          rotateX: 0,
          color: ["#2563eb", "#6d28d9", "#a21caf", "#d97706", "#9f1239"],
          borderColor: ["#2563eb", "#6d28d9", "#a21caf", "#d97706", "#9f1239"],
          transition: {
            color: {
              repeat: Infinity,
              duration: 0.7,
              ease: "easeIn",
            },
            borderColor: {
              repeat: Infinity,
              duration: 0.7,
              ease: "easeIn",
            },
            rotateX: {
              duration: 1,
            },
            duration: 0.7,
          },
        }}
      >
        FRAMER
      </motion.h3>
      <motion.h1
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        className="font-semibold text-[4rem] -mt-4 text-rose-500"
      >
        Loaders.
      </motion.h1>
    </div>
  );
};

export default Header;
