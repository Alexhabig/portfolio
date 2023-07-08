

const About = () =>{
    return(
        <div className="p-20 flex align items-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 786 795" fill="none">
                <path d="M114.335 51.8808C115.869 42.1597 124.248 35 134.09 35H701.594C713.884 35 723.266 45.98 721.35 58.1193L607.665 778.119C606.13 787.84 597.752 795 587.91 795H20.4056C8.11596 795 -1.26636 784.02 0.650361 771.881L114.335 51.8808Z" fill="url(#paint0_linear_165_94)"/>
                
                <path d="M178.335 16.8808C179.869 7.15974 188.248 0 198.09 0H765.594C777.884 0 787.266 10.98 785.35 23.1193L671.665 743.119C670.13 752.84 661.752 760 651.91 760H84.4056C72.116 760 62.7336 749.02 64.6504 736.881L178.335 16.8808Z" fill="#C8D6E5"/>
                
                <defs>
                    <linearGradient id="paint0_linear_165_94" x1="393" y1="0" x2="393" y2="795" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C8D6E5"/>
                    <stop offset="1" stop-color="#8395A7"/>
                    </linearGradient>
                </defs>
                </svg>
            </div>

            <div className=" flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <h1 className="text-gray-600 text-3xl"><strong>ABOUT ME</strong></h1>
                    <div className="w-48 h-1 bg-line"/>
                    <div className="w-56 h-1 bg-line"/>
                </div>
                <h1 className="text-gray-600 text-2xl"><strong>Hello, I'm Alexander Habig</strong></h1>
                <p className="">A passionate Designer and developer with a drive for creating impactful design solutions. 
                Throughout my career, I have had the privilege of collaborating with diverse clients and teams, delivering successful projects that align with business objectives and user needs. I am dedicated to crafting intuitive and visually compelling experiences that captivate users and drive measurable results.
                </p>
            </div>
        </div>
    )
}

export default About