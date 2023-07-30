import React, { useState } from "react";
import * as fa from "react-icons/fa";
import * as bs from "react-icons/bs";
import Skillcard from "./skillcard";
import { skills } from "../../types/skillData";
const Skillset = () => {
  const FEskills = skills.filter((skill) => skill.category === "FE");

  const BEskills = skills.filter((skill) => skill.category === "BE");

  const WebDesignSkills = skills.filter(
    (skill) => skill.category === "WebDesign"
  );
  return (
    <section
      className=" laptop:px-36 flex flex-col justify-center py-20 gap-20"
      id="skill"
    >
      <div className="flex justify-center flex-col gap-10 items-center ">
        <h1 className="text-2xl font-medium text-center border-b-4 rounded-full px-5 border-purple-200">
          Skills
        </h1>
        <div className="flex flex-col px-5 gap-10">
          {/* Front End */}
          <div className="flex flex-col gap-5  p-10 rounded bg-purple-50 shadow-md shadow-purple-300">
            <div className="flex items-center text-xl font-medium gap-2 text-purple-600  ">
              <i>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </i>
              <h1>Front End </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {FEskills.map((skill) => (
                <div className="phone:w-[100%] laptop:w-[20%] tablet:w-[30%]">
                  <Skillcard
                    key={skill.id}
                    icon={skill.icon}
                    iconColor={skill.iconColor}
                    language={skill.lang}
                    skillbar={skill.barpercentage}
                    skillperc={skill.percentage}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Back End */}
          <div className="flex flex-col gap-5  p-10 rounded bg-purple-50 shadow-md shadow-purple-300">
            <div className="flex items-center text-xl font-medium gap-2 text-purple-600  ">
              <i>
                <bs.BsDatabaseGear />
              </i>
              <h1>Back End </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {BEskills.map((skill) => (
                <div className="phone:w-[100%] laptop:w-[20%] tablet:w-[30%]">
                  <Skillcard
                    key={skill.id}
                    icon={skill.icon}
                    iconColor={skill.iconColor}
                    language={skill.lang}
                    skillbar={skill.barpercentage}
                    skillperc={skill.percentage}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Web Design */}
          <div className="flex flex-col gap-5  p-10 rounded bg-purple-50 shadow-md shadow-purple-300">
            <div className="flex items-center text-xl font-medium gap-2 text-purple-600  ">
              <i>
                <fa.FaDesktop />
              </i>
              <h1>Web Design </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {WebDesignSkills.map((skill) => (
                <div className="phone:w-[100%] laptop:w-[20%] tablet:w-[30%]">
                  <Skillcard
                    key={skill.id}
                    icon={skill.icon}
                    iconColor={skill.iconColor}
                    language={skill.lang}
                    skillbar={skill.barpercentage}
                    skillperc={skill.percentage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
