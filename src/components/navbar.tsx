import React from "react"       
import * as go from'react-icons/go'
import * as bi from'react-icons/bi'
import * as bs from'react-icons/bs'
import '../index.css'
import { Link, animateScroll as scroll } from "react-scroll";
interface INavbarProps{
    classname?: string,
    children?: React.ReactNode
}

const Navbar = (props:INavbarProps)=>{
    return(
        <nav className={`${props.classname} w-full fixed herobg z-10 `}>
            <div className="gap-4 flex items-center justify-center py-2 sm:py-5 text-red-400 text-lg ">
                <Link
                className="cursor-pointer flex items-center gap-1"
                activeClass="active"
                smooth={true}
                spy={true}
                to="home">
                    <go.GoHomeFill/> <p className="sm:block hidden">HOME</p>
                </Link>

                <p className="text-xl">|</p>

                <Link
                className="cursor-pointer flex items-center gap-1"
                activeClass="active"
                smooth={true}
                spy={true}
                to="about">
                    <bi.BiSolidUser/> <p className="sm:block hidden">ABOUT</p>
                </Link>

                <p className="text-xl">|</p>

                <Link
                className="cursor-pointer flex items-center gap-1"
                activeClass="active"
                smooth={true}
                spy={true}
                to="skill">
                    <bs.BsClipboard2DataFill/> <p className="sm:block hidden">SKILLS</p>
                </Link>

                <p className="text-xl">|</p>
                
                <Link
                className="cursor-pointer flex items-center gap-1"
                activeClass="active"
                smooth={true}
                spy={true}
                to="project">
                    <bi.BiSolidBriefcase/> <p className="sm:block hidden">PROJECT</p>
                </Link>
            </div>
        </nav>
        // <div className={`${props.classname} w-full fixed herobg z-10`}>
        //     <div className="gap-4 flex items-center justify-center py-5 text-red-600 text-lg" >

        //         <a href="#home" className="flex items-center gap-1"> <go.GoHomeFill/> HOME</a>

        //         <p className="text-xl">|</p>

        //         <a href="#about" className="flex items-center gap-1"> <bi.BiSolidUser/> ABOUT</a>

        //         <p className="text-xl">|</p>

        //         <a href="#skill" className="flex items-center gap-1"> <bs.BsClipboard2DataFill/> SKILLS</a>

        //         <p className="text-xl">|</p>

        //         <a href="#project" className="flex items-center gap-1"> <bi.BiSolidBriefcase/> PROJECT</a>


        //     </div>
            
        // </div>
    )
}

export default Navbar