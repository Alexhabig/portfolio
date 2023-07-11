import React from "react"       
import * as go from'react-icons/go'
import * as bi from'react-icons/bi'
import * as bs from'react-icons/bs'
import '../index.css'

interface INavbarProps{
    classname?: string,
    children?: React.ReactNode
}

const Navbar = (props:INavbarProps)=>{
    return(
        <div className={`${props.classname} w-full fixed herobg z-10`}>
            <div className="gap-4 flex items-center justify-center py-5 text-red-600 text-lg">

                <a href="#home" className="flex items-center gap-1"> <go.GoHomeFill/> HOME</a>

                <p className="text-xl">|</p>

                <a href="#about" className="flex items-center gap-1"> <bi.BiSolidUser/> ABOUT</a>

                <p className="text-xl">|</p>

                <a href="#skill" className="flex items-center gap-1"> <bs.BsClipboard2DataFill/> SKILLS</a>

                <p className="text-xl">|</p>

                <a href="#project" className="flex items-center gap-1"> <bi.BiSolidBriefcase/> PROJECT</a>


            </div>
            
        </div>
    )
}

export default Navbar