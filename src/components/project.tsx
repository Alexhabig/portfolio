import { motion } from "framer-motion";
import Images from "../assets";
import { fadeIn } from "../varient";

const Project = () => {
  const openInNewtab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="px-5 py-10 sm:px-20 transition-all duration-150 ease-in-out"
      id="project"
    >
      <div className="flex justify-center flex-col gap-5">
        <div className="flex flex-col justify-center gap-2">
          <div className="text-center">
            <h1 className="text-gray-600 text-2xl sm:text-3xl">
              <strong>PROJECT'S</strong>
            </h1>
          </div>
          <div className="w-48 h-1 bg-line place-self-center" />
          <div className="w-56 h-1 bg-line place-self-center" />
        </div>

        {/* image */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          // flex justify-center gap-5 sm:flex-row flex-col
          className=" grid grid-cols-1 gap-5 sm:grid-cols-2 "
        >
          <div
            className="group relative overflow-hidden"
            onClick={() =>
              openInNewtab("https://github.com/markaeroltomarse/onems")
            }
          >
            {/* overlay */}
            <div className="group-hover:bg-gray-500/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Images.capstone}
              alt=""
            />
            {/* title */}
            <div className="absolute  -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50">
              <span className="text-white">Capstone Project</span>
            </div>
            {/* desc */}
            <div className="absolute  -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50">
              <span className="text-white text-2xl">
                Online Enrollment System{" "}
              </span>
            </div>
          </div>

          <div
            className="group relative overflow-hidden"
            onClick={() =>
              openInNewtab("https://todo-list-beta-ten.vercel.app/")
            }
          >
            {/* overlay */}
            <div className="group-hover:bg-gray-500/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Images.todo}
              alt=""
            />
            {/* title */}
            <div className="absolute  -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50">
              <span className="text-white">Todo-List</span>
            </div>
            {/* desc */}
            <div className="absolute text-2xl  -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 flex gap-2 z-50">
              <span className="text-white ">Tech Stack:</span>
              <p className="text-green-50">
                React, Typescript, MongoDB, Node Express
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
