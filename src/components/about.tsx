import Images from '../assets/index'
import {motion} from 'framer-motion'
import {fadeIn} from '../varient'

const About = () =>{
    return(
        <motion.div
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true, amount:0.7}} 
        className="py-10 scroll-smooth  flex align justify-center items-center sm:flex-row sm:px-20 px-5 flex-col gap-5" id='about'>
            <div className=' aboutImgBg rounded-sm min-w-[30%] -skew-x-6 mr-28 mt-5 sm:block hidden'>
                <img src={Images.ab} alt="" className='rounded-sm translate-x-5 -translate-y-5'/>
            </div>
            
            <div className='p-5 aboutImgBg rounded-sm -skew-y-3 sm:hidden block'>
                <img src={Images.ab} alt="" className='rounded-sm' />
            </div>
            <div className=" flex flex-col gap-3 ">
                <div className="flex flex-col gap-2">
                    <h1 className="text-gray-600 text-2xl sm:text-3xl"><strong>ABOUT ME</strong></h1>
                    <div className="w-48 h-1 bg-line"/>
                    <div className="w-56 h-1 bg-line"/>
                </div>
                <h1 className="text-gray-600 text-xl sm:text-2xl"><strong>Hello, I'm Alexander Habig</strong></h1>
                <p className=" text-base sm:text-xl">A passionate Designer and developer with a drive for creating impactful design solutions. 
                Throughout my career, I have had the privilege of collaborating with diverse clients and teams, delivering successful projects that align with business objectives and user needs. I am dedicated to crafting intuitive and visually compelling experiences that captivate users and drive measurable results.
                </p>
            </div>
        </motion.div>
    )
}

export default About