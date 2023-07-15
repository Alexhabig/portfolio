import { motion } from "framer-motion";
import { ISkillsProps } from "../types"
import { fadeIn } from "../varient";



const Skill =({skill}:ISkillsProps) =>{
    
    return(
        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true, amount:0.7}}
        className="bg-gray-500 p-4 gap-3 items-center flex flex-col hover:bg-gray-400 hover:text-txtHover transition-all duration-300  text-gray-50">  
            <skill.icon className="  text-4xl sm:text-7xl"/>
            <p className="sm:text-xl text-sm" >{skill.title}</p>
        </motion.div>
    )
}

export default Skill