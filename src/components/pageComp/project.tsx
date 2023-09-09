import React from "react";
import Images from "../../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

interface Props {
  link: string;
  image: any;
  title: string;
  desc: string;
}

const Project = (props: Props) => {
  const openInNewtab = (url: string) => {
    window.open(url, "blank", "noopener,noreferrer");
  };
  return (
    <motion.div
      variants={fadeIn("up", 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="group overflow-hidden relative phone:w-[100%] tablet:w-[70%] laptop:w-[45%] border-4 rounded-md border-purple-500 drop-shadow-lg"
      onClick={() => openInNewtab(props.link)}
    >
      {/* Overlay */}
      <div className=" h-full w-[80%] -skew-x-12 -translate-x-9 absolute z-20  group-hover:bg-purple-700/70 transition-all duration-500 -left-full group-hover:left-0"></div>
      {/* img */}
      <div className="flex">
        <img
          src={props.image}
          alt=""
          className="group-hover:scale-125 transition-all duration-500"
        />
      </div>
      {/* title */}
      <div className="absolute  -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50">
        <span className="text-white text-2xl">{props.title}</span>
      </div>
      {/* desc */}
      <div className="absolute  -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50">
        <span className="text-white">{props.desc}</span>
      </div>
    </motion.div>
  );
};

export default Project;
