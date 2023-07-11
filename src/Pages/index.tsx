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
import Footer from "../components/footer";
import Hero from "../assets/svg/hero.svg";

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
    
    const openInNewtab = (url:string)=>{
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return(
        <main>
            <Landing>

                <Navbar/>
                <div className="flex px-5 min-h-[100vh] items-center herobg sm:px-20" id="home"
                style={{
                    backgroundImage: `url(${Hero})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize:"cover",
                }}>
                    <div className="flex flex-col gap-5 min-w-[50%] ">
                        <div className="text-2xl sm:text-3xl">
                            <h1>
                                <strong>
                                Hi, I’m
                                <span className="text-red-400"> Alexander Habig</span>
                                </strong>
                            </h1>
                            <h1>Web Designer</h1>
                        </div>

                        <div className="sm:text-xl text-base">
                            <p>Thanks for visiting!</p>
                            <p>Feel free to explore the site and learn more about me.</p>
                        </div>

                        <div className="flex gap-4 text-white text-lg sm:text-3xl">
                            <Iconbtn icon={<fa.FaFacebookF/>} classname=" bg-red-500 p-3 hover:bg-red-400" 
                            onClick={()=> openInNewtab('https://www.facebook.com/alex.habig19')}
                            ></Iconbtn>

                            <Iconbtn icon={<ri.RiInstagramFill/>} classname=" bg-red-500 p-3 hover:bg-red-400"
                            onClick={()=> openInNewtab('https://www.instagram.com/alx_hbg/')}
                            ></Iconbtn>
                            
                            <Iconbtn icon={<fa.FaGithub/>} classname=" bg-red-500 p-3 hover:bg-red-400"
                            onClick={()=> openInNewtab('https://github.com/Alexhabig')}
                            ></Iconbtn>
                        </div>

                    </div>

                    <div className="sm:block hidden">
                        <img src={Images.prof} alt="Profile" />
                    </div>

                </div>

                {/* About Me */}
                <About/>
   
                {/* skills */}
                
                <div className="py-10 sm:px-20 px-5" id="skill">
                    <div className="flex justify-center flex-col gap-5 ">
                        <div className="flex flex-col justify-center gap-2">
                            <div className="text-center">
                                <h1 className="text-gray-600 text-2xl sm:text-3xl">
                                    {/* <strong>MY SKILLS</strong> */}
                                </h1>
                            </div>
                            <div className="w-48 h-1 bg-line place-self-center"/>
                            <div className="w-56 h-1 bg-line place-self-center"/>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-5 justify-center text-center items-center md:grid-cols-5">
                            {
                                skills.map((skill:ISkills)=>(
                                    <div className="bg-gray-500 p-4 gap-3 items-center flex flex-col hover:bg-gray-400 hover:text-txtHover  text-gray-50">  
                                        <skill.icon className="  text-4xl sm:text-7xl"/>
                                        <p className="sm:text-xl text-sm" >{skill.title}</p>
                                    </div>
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
                        {/* grid grid-cols-3 gap-5 sm:grid-flow-row */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                            <img src={Images.project} alt="" sizes="200px" />
                            <img src={Images.project} alt="" />
                            <img src={Images.project} alt="" />
                        </div>
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