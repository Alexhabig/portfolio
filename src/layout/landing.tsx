import '../index.css'

interface IHomeProps{
    children:React.ReactNode
}

const Landing = ({children}: IHomeProps)=>{
    return(
        // bg-gray-900
        <main className="linearbg min-h-[100vh] text-gray-500 flex justify-center flex-auto">
            <div className="w-full flex flex-col ">
                {children}
            </div>
        </main>
    )
}

export default Landing
