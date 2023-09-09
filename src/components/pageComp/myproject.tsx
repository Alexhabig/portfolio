import React from "react";
import Images from "../../assets";
import Project from "./project";
import { project } from "../../types/projectData";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

const Myproject = () => {
  const openInNewtab = (url: string) => {
    window.open(url, "blank", "noopener,noreferrer");
  };

  return (
    <section
      className="laptop:px-36 tablet:px-10 phone:px-5 py-20 flex flex-col justify-center items-center bg-gray-100"
      id="project"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="flex justify-center flex-col gap-10 items-center "
      >
        <h1 className="text-2xl font-medium text-center border-b-4 rounded-full px-5 border-purple-200">
          Project's
        </h1>

        <div className="flex justify-center flex-wrap phone:gap-10 laptop:gap-10">
          {project.map((proj: any) => (
            <Project
              key={proj.id}
              link={proj.link}
              desc={proj.desc}
              title={proj.title}
              image={proj.img}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Myproject;
