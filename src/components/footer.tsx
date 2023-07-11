import Footerbg from '../assets/svg/footer.svg'
import Iconbtn from './iconbtn'
import * as fa from "react-icons/fa";
import * as ri from "react-icons/ri";

const Footer = () =>{
    const openInNewtab = (url:string)=>{
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return(
        <div className="px-5 py-10 sm:px-20" id="about"style={{
            backgroundImage: `url(${Footerbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            }}>
            
            <div className='flex justify-center items-center flex-col gap-5 text-white'>
                <div className='flex gap-4 text-base sm:text-xl'>
                    <Iconbtn icon={<fa.FaFacebookF/>} classname=" rounded-full border hover:bg-slate-400 border-teal-50 p-3"
                    onClick={()=>openInNewtab('https://www.facebook.com/alex.habig19')}
                    ></Iconbtn>

                    <Iconbtn icon={<ri.RiInstagramFill/>} classname=" rounded-full border hover:bg-slate-400 border-teal-50 p-3"
                    onClick={()=> openInNewtab('https://www.instagram.com/alx_hbg/')}
                    ></Iconbtn>

                    <Iconbtn icon={<fa.FaLinkedin/>} classname=" rounded-full border hover:bg-slate-400 border-teal-50  p-3"
                    onClick={()=> openInNewtab('https://www.linkedin.com/in/alexander-habig-b683aa149/')}
                    ></Iconbtn>

                    <Iconbtn icon={<fa.FaGithub/>} classname=" rounded-full border hover:bg-slate-400 border-teal-50 p-3"
                    onClick={()=> openInNewtab('https://github.com/Alexhabig')}
                    ></Iconbtn>
                </div>
                <div className='h-[2px] w-[80%] bg-line sm:h-[3px]'/>
                <div className='h-[2px] w-[100%] bg-line sm:h-[3px]'/>
                <div>
                    <p className='text-sm text-center   '>Copyright © Alexander Habig 2023-2024. All Rights Reserve</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer