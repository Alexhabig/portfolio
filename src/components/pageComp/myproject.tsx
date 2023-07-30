import React from "react";
import Images from "../../assets";

const Myproject = () => {
  const openInNewtab = (url: string) => {
    window.open(url, "blank", "noopener,noreferrer");
  };
  return (
    <section
      className="laptop:px-36 tablet:px-10 phone:px-5 py-20 flex flex-col justify-center items-center bg-gray-100"
      id="project"
    >
      <div className="flex justify-center flex-col gap-10 items-center ">
        <h1 className="text-2xl font-medium text-center border-b-4 rounded-full px-5 border-purple-200">
          Project's
        </h1>

        <div className="flex justify-center flex-wrap phone:gap-10 laptop:gap-10 ">
          <div
            className="group overflow-hidden relative phone:w-[100%] tablet:w-[70%] laptop:w-[45%] border-4 rounded-md border-purple-500 drop-shadow-lg"
            onClick={() =>
              openInNewtab("https://github.com/markaeroltomarse/onems")
            }
          >
            {/* Overlay */}
            <div className=" h-full w-[80%] -skew-x-12 -translate-x-9 absolute z-20  group-hover:bg-purple-700/70 transition-all duration-500 -left-full group-hover:left-0"></div>
            {/* img */}
            <div className="flex">
              <img
                src={Images.capstone}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
            </div>
            {/* title */}
            <div className="absolute  -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50">
              <span className="text-white text-2xl">Capstone Project</span>
            </div>
            {/* desc */}
            <div className="absolute  -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50">
              <span className="text-white">Capstone Project</span>
            </div>
          </div>

          <div
            className="group overflow-hidden relative phone:w-[100%] tablet:w-[70%] laptop:w-[45%] border-4 rounded-md border-purple-500"
            onClick={() =>
              openInNewtab("https://todo-list-beta-ten.vercel.app/")
            }
          >
            {/* Overlay */}
            <div className=" h-full w-[80%] -skew-x-12 -translate-x-9 absolute z-20  group-hover:bg-purple-700/70 transition-all duration-500 -left-full group-hover:left-0"></div>
            {/* img */}
            <div className="flex">
              <img
                src={Images.todo}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
            </div>
            {/* title */}
            <div className="absolute  -bottom-full left-8 group-hover:bottom-16 transition-all duration-500 z-50">
              <span className="text-white text-2xl">Todo List</span>
            </div>
            {/* desc */}
            <div className="absolute  -bottom-full left-8 group-hover:bottom-3 transition-all duration-500 z-50">
              <span className="text-white">
                Tech: React, Typescript, <br /> MongoDB, Node Express
              </span>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myproject;
