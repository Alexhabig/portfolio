import { useEffect, useState } from 'react';
import '../index.css'



interface IHomeProps{
    children:React.ReactNode
}

const Landing = ({children}: IHomeProps)=>{
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 3000);
    },[]);

    return(
        <main className=" min-h-[100vh] text-gray-500 flex justify-center flex-auto">
            
            {
                loading?
                (
                    <div className='flex items-center'>
                        <div className='load'></div>
                    </div>
                )
                :(
                    <div className="w-full flex flex-col ">
                        {children}
                    </div>
                )
            }

        </main>
    )
}

export default Landing
