import React from "react";
import Images from "../../assets";
import Iconbtn from "../iconbtn";
import * as fa from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

const HeroSection = () => {
  const openInNewtab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section
      className="flex items-center h-screen w-full laptop:px-36 phone:px-5"
      id="home"
    >
      <div className="flex justify-center items-center gap-4  w-full ">
        <div className="flex flex-col gap-5 ">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-4xl font-bold">Hi, I'm Alexander</h1>
            <strong className="text-xl text-purple-500">
              Designer/Developer
            </strong>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            I'm a self-taught programmer and designer, I take great pride in my
            journey of continuous learning and growth in the ever-evolving
            fields of technology and design.
            {/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. */}
          </motion.div>

          <motion.div
            variants={fadeIn("up", 1.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex gap-3 text-3xl text-purple-500 "
          >
            <Iconbtn
              icon={<fa.FaFacebook />}
              classname="hover:text-purple-700"
              onClick={() =>
                openInNewtab("https://www.facebook.com/alex.habig19")
              }
            />
            <Iconbtn
              icon={<fa.FaInstagramSquare />}
              classname="hover:text-purple-700"
              onClick={() => openInNewtab("https://www.instagram.com/alx_hbg/")}
            />
            <Iconbtn
              icon={<fa.FaGithub />}
              classname="hover:text-purple-700"
              onClick={() => openInNewtab("https://github.com/Alexhabig")}
            />
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="w-[80%] laptop:block phone:hidden"
        >
          <img src={Images.group} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
