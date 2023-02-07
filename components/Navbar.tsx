import React from "react";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <motion.nav
      className="bg-black navbar hidden md:block w-full "
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 4, duration: 1 }}
    >
      <div className="w-[80%] mx-auto  flex justify-between ">
        <motion.h1
          whileHover={{
            cursor: "pointer",
          }}
          className="text-white pt-10 px-8 hover:text-purple-600 font-bold text-3xl  transition-all duration-500 hover:font-bold  "
        >
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-purple-600 hover:text-white transition-all duration-300">
              class
            </h1>
            <h1 className="">
              UD.S(
              <span className="text-purple-600 hover:text-white transition-all duration-500">
                void
              </span>
              )
            </h1>
          </div>
        </motion.h1>
        <ul className="flex text-white py-6 gap-8 text-xl font-bold ">
          <motion.li className="hover:cursor-pointer heading hover:text-purple-600 hover:shadow-xl transition-all duration-[600] py-2 px-2 rounded-xl">
            .home()
          </motion.li>
          <motion.li className="hover:cursor-pointer heading hover:text-purple-600 hover:shadow-xl transition-all duration-[600] py-2 px-2 rounded-xl ">
            .contacts()
          </motion.li>
          <motion.li className="hover:cursor-pointer heading hover:text-purple-600 hover:shadow-xl transition-all duration-[600] py-2 px-2 rounded-xl">
            .projects()
          </motion.li>
          <motion.li className="hover:cursor-pointer heading hover:text-purple-600 hover:shadow-xl transition-all duration-[600] py-2 px-2 rounded-xl">
            .about_me()
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
