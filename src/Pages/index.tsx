import Navbar from "../components/navbar"
import Landing from "../layout/landing"
import * as si from "react-icons/si";
import * as fa from "react-icons/fa";
import * as ri from "react-icons/ri";
import * as md from "react-icons/md";
import { ISkills } from "../types";
import { useState } from "react";
import Images from "../assets"
import '../index.css'
import Iconbtn from "../components/iconbtn";
import About from "../components/about";
import Input from "../components/input";
import Button from "../components/button";

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
               {/* hero section */}
               {/* flex sm:flex-row justify-center items-center flex-col min-h-[100%] */}
               <div className="flex justify-evenly items-center min-h-[100vh] herobg ">
                    
                    <div className="text-left flex flex-col gap-4 px-20 min-w-[50%] ">
                        <div className="flex flex-col gap-y-2 text-3xl">
                            <h1>
                                <strong>
                                Hi, I’m
                                <span className="text-red-400"> Alexander Habig</span>
                                </strong>
                            </h1>
                            <h1>Web Designer</h1>
                        </div>
                        <div>
                            <p>Thanks for visiting!</p>
                            <p>Feel free to explore the site and learn more about me.</p>
                        </div>
                        <div className="flex gap-4">
                            <Iconbtn icon={<fa.FaFacebookF/>} classname="text-white bg-red-500 text-3xl p-3"></Iconbtn>
                            <Iconbtn icon={<ri.RiInstagramFill/>} classname="text-white bg-red-500 text-3xl p-3"></Iconbtn>
                            <Iconbtn icon={<fa.FaFacebookF/>} classname="text-white bg-red-500 text-3xl p-3"></Iconbtn>
                        </div>
                        
                    </div>

                    <div className="">
                        <img src={Images.prof} alt="Profile" />
                    </div>

                    
                </div>

                {/* About Me */}
                <About/>
   
                {/* skills */}
                
                <div className=" px-20 ">
                    <div className="flex justify-center flex-col gap-5 ">
                        <div className="flex flex-col justify-center gap-2">
                            <div className="text-center">
                                <h1 className="text-gray-600 text-3xl">
                                    <strong>MY SKILLS</strong>
                                </h1>
                            </div>
                            <div className="w-48 h-1 bg-line place-self-center"/>
                            <div className="w-56 h-1 bg-line place-self-center"/>
                        </div>
                        
                        <div className="grid grid-cols-5 gap-5 justify-center">
                            {
                                skills.map((skill:ISkills)=>(
                                    <div className="bg-gray-400 p-4 items-center flex flex-col">  
                                        <skill.icon className="text-gray-50 text-7xl"/>
                                        <p>{skill.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                    {/* <h1 className="text-gray-600 text-3xl text-center"><strong>ABOUT ME</strong></h1>
                    <div className="w-full ">
                        <div className="grid grid-cols-5 gap-5 justify-center">
                            {
                                skills.map((skill:ISkills)=>(
                                <div className="items-center flex flex-col justify-center py-4 gap-y-3 rounded-md bg-gray-800 hover:bg-gray-700">

                                    <skill.icon className="text-green-400 text-7xl"/>
                                    <p>{skill.title}</p>

                                </div>
                                ))
                            }
                        </div>
                    </div> */}
                

                {/* Projects */}
                <div className="p-20">
                    <div className="flex justify-center flex-col gap-5">
                        <div className="flex flex-col justify-center gap-2">
                            <div className="text-center">
                            <h1 className="text-gray-600 text-3xl">
                                <strong>PROJECT'S</strong>
                            </h1>
                            </div>
                            <div className="w-48 h-1 bg-line place-self-center"/>
                            <div className="w-56 h-1 bg-line place-self-center"/>
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            <img src={Images.project} alt="" sizes="200px" />
                            <img src={Images.project} alt="" />
                            <img src={Images.project} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className="border py-5">
                    <h1 className="text-3xl text-center">Project's</h1>
                    <div className="w-full px-20">
                        <div className="flex justify-center p-3">
                            <div className="p-4 bg-gray-700 rounded-lg gap-y-2 flex flex-col">
                                <img src={Images.web} alt="" className="rounded-md" />
                                <strong>Name of Project</strong>
                                <p>dsc</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/*  */}

                {/* get in touch */}
                <div className="px-20">
                    <div className="flex items-center gap-11 justify-center">
                        <div>
                            <div className="text-3xl flex items-center gap-3">
                                <h1>
                                    <strong>Love to hear from you</strong>
                                </h1>
                                <md.MdWavingHand className="text-6xl "/>
                                
                            </div>
                            <h1 className="text-8xl"><strong>GET IN <br />TOUCH !</strong></h1>
                        </div>
                        <div className="herobg">
                            <form 
                            className="flex flex-col justify-center p-10 w-[38rem] gap-5"
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



            </Landing>
                   
        </main>
    )
}

export default Home