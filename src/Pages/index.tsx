import Navbar from "../components/navbar"
import Landing from "../layout/landing"
import * as si from "react-icons/si";
import * as fa from "react-icons/fa";
import * as md from "react-icons/md";
import { ISkills } from "../types";
import { useState } from "react";
import Images from "../assets"
import '../index.css'
import About from "../components/about";
import Input from "../components/input";
import Button from "../components/button";
import Footer from "../components/footer";
import Heropage from "../components/hero";
import { motion } from "framer-motion";
import { fadeIn } from "../varient";

const Home = () =>{

    const [skills,] = useState<ISkills[]>([
        {
            id: 1,
            icon: si.SiNuxtdotjs,
            title: "Nuxt Js",
            createdAt: new Date(),
        },
        {
            id: 2,
            icon: si.SiVuetify,
            title: "Veutify",
            createdAt: new Date(),
        },
        {
            id: 3,
            icon: si.SiHtml5,
            title: "HTML",
            createdAt: new Date(),
        },
        {
            
            id: 4,
            icon: si.SiCss3,
            title: "CSS",
            createdAt: new Date(),
        },
        {
            id: 5,
            icon: si.SiJavascript,
            title: "Java Script",
            createdAt: new Date(),
        },
        {
            id: 6,
            icon: si.SiBootstrap,
            title: "Bootstrap",
            createdAt: new Date(),
        },
        {
            id: 7,
            icon: si.SiTailwindcss,
            title: "Tailwind",
            createdAt: new Date(),
        },
        {
            id: 8,
            icon: si.SiReact,
            title: "React",
            createdAt: new Date(),
        },
        {
            id: 9,
            icon: si.SiPython,
            title: "Python",
            createdAt: new Date(),
        },
        {
            id: 10,
            icon: fa.FaJava,
            title: "Java",
            createdAt: new Date(),
        },
        {
            id: 11,
            icon: si.SiCsharp,
            title: "C#",
            createdAt: new Date(),
        },
        {
            id: 12,
            icon: si.SiGithub,
            title: "Github",
            createdAt: new Date(),
        },
        {
            id: 13,
            icon: si.SiFigma,
            title: "Figma",
            createdAt: new Date(),
        },
        {
            id: 14,
            icon: si.SiAdobephotoshop,
            title: "Adobe Photoshop",
            createdAt: new Date(),
        },
        {
            id: 15,
            icon: si.SiAdobeillustrator,
            title: "Illustrator",
            createdAt: new Date(),
        },
    ])
    

    return(
        <main>
            <Landing>

                <Navbar/>

                {/* Hero */}
                <Heropage/>

                {/* About Me */}
                <About/>
   
                {/* skills */}
                
                <div className="py-10 sm:px-20 px-5" id="skill">
                    <div className="flex justify-center flex-col gap-5 ">
                        <div className="flex flex-col justify-center gap-2">
                            <div className="text-center">
                                <h1 className="text-gray-600 text-2xl sm:text-3xl">
                                    <strong>MY SKILLS</strong>
                                </h1>
                            </div>
                            <div className="w-48 h-1 bg-line place-self-center"/>
                            <div className="w-56 h-1 bg-line place-self-center"/>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-5 transition-all duration-1000 justify-center text-center items-center md:grid-cols-5">
                            {
                                skills.map((skill:ISkills)=>(
                                    <motion.div
                                    variants={fadeIn('up',0.3)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once:false, amount:0.7}}
                                    className="bg-gray-500 p-4 gap-3 items-center flex flex-col hover:bg-gray-400 hover:text-txtHover transition-all duration-300  text-gray-50">  
                                        <skill.icon className="  text-4xl sm:text-7xl"/>
                                        <p className="sm:text-xl text-sm" >{skill.title}</p>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                    

                {/* Projects */}
                <div className="px-5 py-10 sm:px-20 transition-all duration-150 ease-in-out" id="project">
                    <div className="flex justify-center flex-col gap-5">
                        <div className="flex flex-col justify-center gap-2">
                            <div className="text-center">
                            <h1 className="text-gray-600 text-2xl sm:text-3xl">
                                <strong>PROJECT'S</strong>
                            </h1>
                            </div>
                            <div className="w-48 h-1 bg-line place-self-center"/>
                            <div className="w-56 h-1 bg-line place-self-center"/>
                        </div>
                        
                        {/* image */}
                        <div className="group relative overflow-hidden">
                            {/* overlay */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* img */}
                            <img src={Images.project} alt=""/>
                            {/* title */}
                            <div>
                                SAmple project
                            </div>
                            {/* desc */}
                            <div>
                                <span>Porject title</span>
                            </div>
                        </div>

                        {/* grid grid-cols-3 gap-5 sm:grid-flow-row */}
                        {/* <motion.div 
                        variants={fadeIn('up',0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount:0.7}}
                        className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                            <div className="flex flex-col border">
                                <img src={Images.project} alt="" sizes="100px"/>
                                <div className="absolute -b">
                                    <span>Porject Title</span>
                                </div>
                            </div>
                            <img src={Images.project} alt="" />
                            <img src={Images.project} alt="" />
                        </motion.div> */}
                    </div>
                </div>

                {/* get in touch */}
                <div className="px-5 py-10 sm:px-20">
                    <div className="flex items-center gap-11 justify-center sm:flex-row flex-col">
                        <div className="flex flex-col gap-3 sm:gap-0">
                            <div className="text-2xl sm:text-3xl flex items-center gap-3">
                                <h1>
                                    <strong>Love to hear from you</strong>
                                </h1>
                                <md.MdWavingHand className="text-4xl sm:text-6xl"/>
                                
                            </div>
                            <h1 className="text-6xl sm:text-8xl"><strong>GET IN <br />TOUCH !</strong></h1>
                        </div>
                        <div className="herobg w-[100%] sm:w-[45%]">
                            <form 
                            className="flex flex-col justify-center p-5 sm:p-10 gap-5"
                            action=""
                            onSubmit={(e)=>e.preventDefault()}>
                                <Input type={"text"} placeholder={""} text={"Name"} ></Input>
                                <Input type={"text"} placeholder={""} text={"Email"} ></Input>
                                <Input type={"text"} placeholder={""} text={"Message"} className="h-48" ></Input>
                                <Button classname="place-self-center " text="Submit" icon={<fa.FaArrowRight/>}></Button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer/>

            </Landing>
                   
        </main>
    )
}

export default Home