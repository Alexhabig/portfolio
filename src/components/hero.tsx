import Images from '../assets';
import Hero from '../assets/svg/hero.svg'
import Iconbtn from './iconbtn'
import * as fa from "react-icons/fa";
import * as ri from "react-icons/ri";
import {motion} from 'framer-motion';
import {fadeIn} from '../varient';

const Heropage = () =>{
    const openInNewtab = (url:string)=>{
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    
    return(
        <div className="flex px-5 min-h-[100vh] items-center herobg sm:px-20" id="home"
        style={{
            backgroundImage: `url(${Hero})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
        }}>
            <motion.div 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:true, amount:0.7}}
            className="flex flex-col gap-5 min-w-[50%] ">
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

            </motion.div>

            <motion.div 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:true, amount:0.7}}
            className="sm:block hidden">
                <img src={Images.prof} alt="Profile" />
            </motion.div>

        </div>
    )
}

export default Heropage