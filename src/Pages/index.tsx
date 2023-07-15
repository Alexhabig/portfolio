import Navbar from "../components/navbar"
import Landing from "../layout/landing"
import * as si from "react-icons/si";
import * as fa from "react-icons/fa";
import { ISkills } from "../types";
import { useState } from "react";
import '../index.css'
import About from "../components/about";
import Footer from "../components/footer";
import Heropage from "../components/hero";
import Project from "../components/project";
import Skill from "../components/skill";

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

                {/* Skill */}
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
                        
                        {/* skill */}
                        <div className="grid grid-cols-2 gap-5 transition-all duration-1000 justify-center text-center items-center md:grid-cols-5">
                        {
                            skills.map((skill:ISkills)=>(
                                <Skill skill={skill}/>
                            ))
                        }
                        </div>
                        
                    </div>
                </div>
                
                <Project/>

                {/* get in touch */}
                {/* <div className="px-5 py-10 sm:px-20">
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
                </div> */}

                {/* Footer */}
                <Footer/>

            </Landing>
                   
        </main>
    )
}

export default Home