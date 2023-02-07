import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsPhoneFill,
} from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import WorkCard from "../components/WorkCard";
import MobileNavbar from "../components/MobileNavbar";
import { Typewriter } from "react-simple-typewriter";
import { BsWhatsapp } from "react-icons/bs";

import Loader from "../components/Loader";

let openGithub = () => {
  window.open("https://github.com/uddeshya2475");
};

const Home: NextPage = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <MobileNavbar />

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="w-full md:w-[80%] mx-auto  h-[300vh] my-[10rem]  "
      >
        <div className="w-full md:w-[80%] mx-auto  flex gap-10">
          <div className="h-[650vh] w-[2px] bg-purple-600 hidden md:block  mt-10 text-purple-600 overflow-hidden">
            1
          </div>
          <div className="text-white w-full">
            {/* heading */}
            <motion.div className=" pb-[14rem] ">
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                whileInView={{
                  opacity: 1,
                }}
              >
                <h1 className="text-[5rem]  font-bold pt-[4rem] pl-[3rem] underline decoration-white underline-offset-[1.5rem]">
                  UD.S
                </h1>
              </motion.div>
              <motion.h2
                className="md:text-[2rem] text-[1.5rem] font-semibold pl-[3.5rem] pt-[3rem]"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{
                  opacity: 1,
                }}
              >
                user<span className="text-purple-600">.name</span> ={" "}
                <span className="text-purple-600">"</span>Uddeshya Singh
                <span className="text-purple-600">"</span>
              </motion.h2>
              <motion.h3
                className="py-8 md:text-[2rem] text-[1.5rem] font-semibold pl-[3.5rem] "
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{
                  opacity: 1,
                }}
              >
                user<span className="text-purple-600">.define</span>
                <span className="mx-[5px]">=</span>
                <span className="text-purple-600">"</span>Front End and{" "}
                <br className="md:hidden" /> Back End Developer
                <span className="text-purple-600">"</span>
              </motion.h3>
              <div className="md:flex justify-between px-10 mt-[2rem] w-full gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.1,
                    cursor: "pointer",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  onClick={openGithub}
                  className="w-[90%] mx-auto md:mx-0 my-4 md:my-0 md:w-[30%] h-[10rem] rounded-xl   bg-white flex justify-center items-center text-purple-700"
                >
                  <BsGithub size={50} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.1,
                    cursor: "pointer",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="w-[90%] md:w-[30%] mx-auto md:mx-0 my-4 md:my-0 h-[10rem] bg-white rounded-xl flex justify-center items-center border-2 border-white text-purple-700"
                >
                  <BsLinkedin size={50} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.1,
                    cursor: "pointer",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="w-[90%] mx-auto md:w-[30%] md:mx-0 my-4 md:my-0 h-[10rem] bg-white rounded-xl flex justify-center items-center text-purple-700"
                >
                  <BsInstagram size={50} />
                </motion.div>
              </div>
            </motion.div>
            <div
              className=" md:mt-[12rem]
            "
            >
              <h1 className="md:text-[3rem] text-[2.5rem] font-bold md:text-left text-center">
                <span className="text-purple-600">&lt;</span>WorkShowcase
                <span className="text-purple-600">&gt;</span>
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className=" mt-[4rem] grid md:grid-cols-2 grid-cols-1 
"
              >
                <WorkCard
                  name="Student Management System"
                  image="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  link="https://github.com/"
                />
                <WorkCard
                  name="Flutter Calculator"
                  image="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  link="https://github.com/"
                />
                <WorkCard
                  name="Weather WebApp"
                  link="https://github.com/"
                  image="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <WorkCard
                  name="Flutter Calculator"
                  link="https://google.com"
                  image="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <WorkCard
                  name="Student Management System"
                  link="https://github.com/"
                  image="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <WorkCard
                  name="Flutter Calculator"
                  link="https://github.com/"
                  image="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </motion.div>
              <h1 className="md:text-[3rem] text-[2.5rem] font-bold mt-[14rem] md:text-left text-center">
                <span className="text-purple-600">&lt;</span>WorkShowcase /
                <span className="text-purple-600">&gt;</span>
              </h1>
              <div className="">
                <h1 className="md:text-[3rem] text-[2.5rem] font-bold mt-[14rem] md:text-left text-center">
                  <span className="text-purple-600">&lt;</span>Technologies
                  <span className="text-purple-600">&gt;</span>
                </h1>
                <div className="ml-4 md:ml-0 flex justify-center items-center font-bold text-white md:text-[4rem] text-[3rem] pt-[5rem] ">
                  <Typewriter
                    words={[
                      "Python",
                      "C/C++",
                      "Java",
                      "React.js",
                      "Next.js",
                      "Tailwind CSS",
                      "Framer Motion",
                    ]}
                    loop={100}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
                <div className="md:flex justify-around px-[3rem] mt-[8em] grid grid-cols-2 gap-5 ">
                  <h1 className="font-bold hover:scale-110 text-2xl text-center bg-white py-4 px-4 rounded-xl text-purple-600 transition-all duration-300">
                    React.js
                  </h1>
                  <h1 className="font-bold hover:scale-110 text-2xl text-center text-purple-600 py-4 px-4 bg-white rounded-xl transition-all duration-300">
                    Next.js
                  </h1>
                  <h1 className="font-bold hover:scale-110 text-2xl text-center text-purple-600 py-4 px-4 rounded-xl bg-white transition-all duration-300">
                    Tailwind CSS
                  </h1>
                  <h1 className="font-bold hover:scale-110 text-center text-2xl text-purple-600 py-4 px-4 bg-white rounded-xl transition-all duration-300">
                    Framer Motion
                  </h1>
                  <h1 className="font-bold hover:scale-110 text-center text-2xl text-purple-600 py-4 px-4 bg-white rounded-xl transition-all duration-300">
                    Bootstrap
                  </h1>
                </div>
                <div className="md:flex justify-around px-[3rem] mt-[8em] grid grid-cols-3 gap-5">
                  <h1 className="font-bold text-2xl text-purple-600 hover:scale-110 transition-all duration-300 py-4 px-4 rounded-xl bg-white">
                    C/C++
                  </h1>
                  <h1 className="font-bold text-2xl text-center text-purple-600 hover:scale-110  transition-all duration-300 py-4 px-2 rounded-xl bg-white">
                    Python
                  </h1>
                  <h1 className="font-bold text-2xl text-center text-purple-600 hover:scale-110 transition-all duration-300 py-4 px-4 rounded-xl bg-white">
                    Java
                  </h1>
                  <h1 className="font-bold text-2xl text-center text-purple-600 hover:scale-110 transition-all duration-300 py-4 px-4 rounded-xl bg-white">
                    Rust
                  </h1>
                  <h1 className="font-bold text-2xl text-center text-purple-600 hover:scale-110 transition-all duration-300 py-4 px-2 rounded-xl bg-white">
                    MySQL
                  </h1>
                </div>
                <h1 className="md:text-[3rem] text-[2.5rem] font-bold mt-[8rem] md:text-left text-center">
                  <span className="text-purple-600">&lt;</span>Technologies /
                  <span className="text-purple-600">&gt;</span>
                </h1>
              </div>
              <h1 className="md:text-[3rem] text-[2.5rem] font-bold mt-[8rem] md:text-left text-center">
                <span className="text-purple-600">&lt;</span>About
                <span className="text-purple-600">&gt;</span>
              </h1>
              <div className="w-full md:flex mt-10">
                <div className="md:h-[15rem] w-[90%] mx-auto m-[2rem] rounded-xl hover:w-[80%] transition-all duration-300 hover:flex hover:justify-center hover:items-center bg-white md:w-[20%]"></div>
                <div className="md:w-full w-[90%] border-[2px] border-white hover:border-0 hover:bg-white hover:text-purple-600 transition-all duration-300 hover:cursor-pointer hover:scale-110 text-left md:h-[15rem] rounded-xl md:m-[2rem] mx-auto  font-bold p-6">
                  I Uddeshya Singh is a full-stack developer based in Punjab,
                  India. I specialize in front end, ui and UI/UX devlopement.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit quibusdam vitae error minima asperiores rem nostrum
                  ullam doloribus eius! Praesentium excepturi suscipit saepe
                  maxime accusamus. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Assumenda nesciunt reiciendis quasi ducimus
                  impedit illo exercitationem rerum et optio cum?
                </div>
              </div>
              <div className=" p-6 md:flex justify-start gap-9 px-8 ">
                <h1 className="font-bold md:my-0 my-3 text-2xl text-center md:text-left text-purple-600 hover:scale-110 transition-all duration-300 py-4 px-4 rounded-xl bg-white">
                  #frontend
                </h1>
                <h1 className="font-bold md:my-0 my-3 text-2xl text-purple-600 text-center md:text-left hover:scale-110 transition-all duration-300 py-4 px-4 rounded-xl bg-white">
                  #ui/ux
                </h1>
                <h1 className="font-bold md:my-0 my-3 text-2xl text-purple-600 text-center md:text-left hover:scale-110 transition-all duration-300 py-4 px-4 rounded-xl bg-white">
                  #fullstack
                </h1>
              </div>
              <h1 className="md:text-[3rem] text-[2.5rem] font-bold mt-[6rem] md:text-left text-center">
                <span className="text-purple-600">&lt;</span>About /
                <span className="text-purple-600">&gt;</span>
              </h1>
              <h1 className="md:text-[3rem] text-[2.5rem] font-bold mt-[10rem] md:text-left text-center">
                <span className="text-purple-600">&lt;</span>Contacts
                <span className="text-purple-600">&gt;</span>
              </h1>
              <div>
                <div className=" flex md:block justify-center">
                  <input
                    placeholder="Enter name."
                    className="border-[0.5px] mt-[10rem]  hover:border-white px-4 text-gray-700 focus:text-white border-gray-700 transition-all duration-300 text-xl bg-black py-4 rounded-xl m-10 md:w-[60%] w-[80%]  "
                  />
                </div>
                <div className="flex md:block justify-center">
                  <input
                    placeholder="Enter email."
                    className="border-[0.5px] hover:border-white px-4 text-gray-700 focus:text-white border-gray-700 transition-all duration-300 text-xl bg-black py-4 rounded-xl m-10 md:w-[60%] w-[80%]"
                  />
                </div>
              </div>
              <div className="flex md:block justify-center">
                <textarea
                  placeholder="Tell me what you think."
                  className="border-[0.5px] hover:border-white bg-black rounded-xl text-gray-700 focus:text-white m-10 md:w-[60%] h-[20rem] py-4 px-4 text-xl transition-all duration-300 border-gray-700  w-[80%]"
                />
              </div>
              <div className="bg-white md:w-[60%] w-[80%] m-10 text-xl flex justify-center items-center font-bold text-purple-600 border-2 border-white hover:text-white transition-all duration-300 hover:cursor-pointer hover:bg-black rounded-xl py-4">
                Submit
              </div>
              <h1 className="md:text-[3rem] text-[2.5rem] font-bold mt-[10rem] md:text-left text-center">
                <span className="text-purple-600">&lt;</span>Contacts /
                <span className="text-purple-600">&gt;</span>
              </h1>
              <h1 className="text-white  py-[5rem] mt-[8rem] flex justify-center items-center font-bold text-xl"></h1>
            </div>
          </div>
        </div>
        <div className=" w-full rounded-xl md:flex justify-between md:gap-0 gap-[4rem] py-[1rem] px-[1rem] border-2 border-purple-600 ">
          <div className="mb-[4rem] ">
            <h1 className="text-[5rem] font-bold pt-[4rem] text-white pl-[3rem]   ">
              UD.S
            </h1>
            <p className="text-white mx-[3rem] font-bold">
              © copyright 2023 Uddeshya Singh.
            </p>
            <hr className="ml-[3rem] my-6" />
            <p className="text-white font-bold mx-[3rem] flex justify-start items-center gap-4">
              Contact No: 9875660105
              <BsWhatsapp size={20} className="text-green-400 " />
            </p>
          </div>
          <div className=" text-blue-400 md:w-[70%]  md:grid gap-6 p-4 grid-cols-4">
            <div className="text-purple-600 text-xl my-6 md:my-0 hover:text-white transition-all hover:cursor-pointer py-8 md:py-0 duration-200 hover:cursor-poi drop-shadow-2xl bg-white border-2 border-white hover:bg-black hover:border-purple-600 rounded-xl flex justify-center items-center font-bold ">
              <BsInstagram size={40} />
            </div>
            <div className="text-purple-600 text-xl hover:text-white my-6 md:my-0 transition-all hover:cursor-pointer py-8 md:py-0 duration-200 drop-shadow-2xl bg-white border-2 border-white hover:bg-black hover:border-purple-600 rounded-xl flex justify-center items-center font-bold ">
              <BsWhatsapp size={40} />
            </div>
            <div className="text-purple-600 text-xl hover:text-white transition-all my-6 md:my-0 hover:cursor-pointer py-8 md:py-0 duration-200 drop-shadow-2xl bg-white border-2 border-white hover:bg-black hover:border-purple-600 rounded-xl flex justify-center items-center font-bold ">
              <BsFacebook size={40} />
            </div>
            <div className="text-purple-600 text-xl hover:text-white transition-all my-6 md:my-0 hover:cursor-pointer py-8 md:py-0 duration-200 drop-shadow-2xl bg-white border-2 border-white hover:bg-black hover:border-purple-600 rounded-xl flex justify-center items-center font-bold ">
              <BsLinkedin size={40} />
            </div>
            <div className="text-purple-600 text-xl hover:text-white transition-all  my-6 md:my-0 hover:cursor-pointer py-8 md:py-0 duration-200 drop-shadow-2xl bg-white border-2 border-white hover:bg-black hover:border-purple-600 rounded-xl flex justify-center items-center font-bold ">
              <BsPhoneFill size={40} />
            </div>
            <div className="text-purple-600 text-xl hover:text-white transition-all my-6 md:my-0 hover:cursor-pointer py-8 md:py-0 duration-200 drop-shadow-2xl bg-white border-2 border-white hover:bg-black hover:border-purple-600 rounded-xl flex justify-center items-center font-bold ">
              <AiFillMail size={40} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
