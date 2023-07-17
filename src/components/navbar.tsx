import React, { useEffect, useState } from "react"       
import * as go from'react-icons/go'
import * as bi from'react-icons/bi'
import * as pi from'react-icons/pi'
import * as bs from'react-icons/bs'
import '../index.css'
import { Link } from "react-scroll";
import logo from '../assets/svg/logo.svg'

interface INavbarProps{
    classname?: string,
    children?: React.ReactNode
}

const Navbar = (props:INavbarProps)=>{

    useEffect(() => {
    // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    const [isNavExpand,setIsNavExpand] = useState(false)
    
    const toggleNav = () =>{
        setIsNavExpand(false);
    }
    const goTop = ()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setIsNavExpand(false)
    }

    return(
        <nav className={`${props.classname} w-full fixed herobg z-50 `}>
            <div className="gap-4 flex flex-col sm:flex-row items-center justify-between py-2 px-5 sm:py-5 sm:px-20 text-red-400 text-base font-semibold">
                <div className="flex items-center justify-center sm:relative absolute top-2 left-5">
                    <img src={logo} alt="Logo" className="cursor-pointer" onClick={()=>goTop()}/>
                </div>

                <pi.PiHamburgerBold className="text-4xl sm:hidden block place-self-end" onClick={()=>{setIsNavExpand(!isNavExpand)}}/>

                
                {/* className={`transition-all ${isNavExpand ? 'w-[100%] max-h-screen ease-in duration-700': 'w-[100%] max-h-0 overflow-hidden duration-500'}`} */}
                {/* {`flex items-center justify-center gap-4 sm:flex-row flex-col transition-all duration-1000 ${isNavExpand ? 'block':'sm:flex hidden'}`} */}
                <div className={`flex items-center justify-center transition-all duration-300 ease-in-out ${isNavExpand ? 'block max-h-screen ':'sm:overflow-visible overflow-hidden max-h-0'}`}
                // style={{
                //     height: isNavExpand?'200px':'0px'
                // }}
                >
                    <div className="transition-all duration-300 ease-in-out py-6 sm:py-0 flex items-center justify-center gap-4 sm:flex-row flex-col">
                        <Link
                        className="cursor-pointer flex items-center gap-1"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        to="home"
                        onClick={toggleNav}>
                            <go.GoHomeFill/> <p>HOME</p>
                        </Link>

                        <p className="text-xl sm:block hidden">|</p>

                        <Link
                        className="cursor-pointer flex items-center gap-1"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        to="about"
                        onClick={toggleNav}>
                            <bi.BiSolidUser/> <p>ABOUT</p>
                        </Link>

                        <p className="text-xl sm:block hidden">|</p>

                        <Link
                        className="cursor-pointer flex items-center gap-1"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        to="skill"
                        onClick={toggleNav}>
                            <bs.BsClipboard2DataFill/> <p>SKILLS</p>
                        </Link>

                        <p className="text-xl sm:block hidden">|</p>
                        
                        <Link
                        className="cursor-pointer flex items-center gap-1"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        to="project"
                        onClick={toggleNav}>
                            <bi.BiSolidBriefcase/> <p>PROJECT</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar