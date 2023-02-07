import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <motion.div
      animate={{
        y: -980,
      }}
      transition={{
        duration: 1,
        delay: 3,
      }}
      className="w-[100vw] border-2 border-purple-600 rounded-b-xl h-[100vh] text-white absolute top-0 left-0 right-0 bottom-0 bg-black flex justify-center items-center z-50"
    >
      <motion.div
        animate={{
          rotate: 720,
        }}
        transition={{ duration: 3.4, repeat: 1000 }}
      >
        <HiDotsHorizontal size={500} />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
