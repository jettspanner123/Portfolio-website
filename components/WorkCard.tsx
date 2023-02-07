import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
const WorkCard = (props: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{}}
      className="w-[20rem] md:w-[25rem] rounded-xl m-[3rem] h-[20rem] py-1  overflow-hidden bg-white hover:cursor-pointer hover:scale-105 transition-all duration-300 mx-auto"
    >
      <div className="h-[80%]  flex justify-center items-center text-purple-600 w-[97%] mx-auto rounded-xl overflow-hidden">
        <Image
          src={props.image}
          width={300}
          height={300}
          layout="responsive"
          alt=""
        />
      </div>
      <Link href={props.link}>
        <div className="h-[20%] hover:cursor-pointer my-1 hover:bg-white transition-all duration-300  hover:text-purple-600 bg-black border-2 font-bold  border-white rounded-xl flex justify-center items-center">
          {props.name}
        </div>
      </Link>
    </motion.div>
  );
};

interface CardProps {
  name: string;
  link: string;
  image: string;
  children?: React.ReactNode;
}

export default WorkCard;
