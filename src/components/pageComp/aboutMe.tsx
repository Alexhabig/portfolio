import React from "react";
import Images from "../../assets";
import Iconbtn from "../iconbtn";
import * as fa from "react-icons/fa";
import * as tb from "react-icons//tb";
import * as bi from "react-icons//bi";
import * as si from "react-icons//si";
import { skills } from "../../types/skillData";
import SkillItem from "./skillItem";

const AboutMe = () => {
  return (
    <section
      // bg-purple-20
      className="laptop:px-36 phone:px-5 flex flex-col justify-center py-20 gap-20 bg-gray-100"
      id="about"
    >
      <div className="flex justify-center gap-10 items-center boder border-b-4 phone:rounded-3xl tablet:rounded-full border-purple-600 phone:pb-10 laptop:pb-20">
        <div className="w-[20%] laptop:block phone:hidden">
          <img src={Images.ab} alt="" className="rounded-md" />
        </div>
        <div className="laptop:w-[50%] flex flex-col justify-center items-center laptop:gap-3 phone:gap-10">
          <h1 className="text-2xl font-medium text-center border-b-4 rounded-full px-5 border-purple-200 bh-">
            About Me
          </h1>
          <p className="text-center">
            A passionate Designer and developer with a drive for creating
            impactful design solutions. Throughout my career, I have had the
            privilege of collaborating with diverse clients and teams,
            delivering successful projects that align with business objectives
            and user needs. I am dedicated to crafting intuitive and visually
            compelling experiences that captivate users and drive measurable
            results.
          </p>
          <div className="flex gap-4 text-5xl flex-wrap justify-center">
            {skills.map((skill) => (
              <SkillItem
                icon={skill.icon}
                iconColor={skill.iconColor}
                key={skill.id}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-10 phone:flex-col tablet:flex-row">
        {/* Education */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium flex items-center gap-3 ">
            <fa.FaGraduationCap className="text-3xl" />
            Education
          </h1>
          <ol className="relative border-l border-purple-400 flex flex-col gap-5">
            <li className="ml-4 ">
              <div>
                <div className="absolute w-3 h-3 bg-purple-800 rounded-full  -left-1.5 mt-8 "></div>
                <strong className="text-lg">BS Information Technology</strong>
                <p>STI College Caloocan</p>
                <small className="flex items-center gap-2 text-sm">
                  <bi.BiCalendar /> 2018 - 2022
                </small>
              </div>
            </li>
            <li className="ml-4 ">
              <div>
                <div className="absolute w-3 h-3 bg-purple-800 rounded-full  -left-1.5 mt-10 "></div>
                <strong className="text-lg">Sr & Jr HighSchool</strong>
                <p>Kaunlaran High School</p>
                <p>Information and Communication Technology (ICT)</p>
                <small className="flex items-center gap-2 text-base">
                  <bi.BiCalendar /> 2015 - 2018
                </small>
              </div>
            </li>
          </ol>
        </div>

        {/* experience */}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium flex items-center gap-3">
            <fa.FaBriefcase className="text-3xl" />
            Experience
          </h1>
          <ol className="relative border-l border-purple-400 flex flex-col gap-5">
            <li className="ml-4 ">
              <div>
                <div className="absolute w-3 h-3 bg-purple-800 rounded-full  -left-1.5 mt-8 "></div>
                <strong className="text-lg">Web Designer</strong>
                <p>ISSO Inc.</p>
                <small className="flex items-center gap-2 text-sm">
                  <bi.BiCalendar /> November 2022 - April 2023
                </small>
              </div>
            </li>
            <li className="ml-4 ">
              <div>
                <div className="absolute w-3 h-3 bg-purple-800 rounded-full  -left-1.5 mt-10 "></div>
                <strong className="text-lg">On The Job Training</strong>
                <p>ALA - Alternative Learning Activity </p>
                <p>STI COllege Caloocan</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
