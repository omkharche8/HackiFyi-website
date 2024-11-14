import React, { useState } from 'react'
import cross from "/images/cross.gif"
import { direction } from '@hemant0621/animation'
function Navbar() {

    const [visible, setvisible] = useState(false)

    return (
        <nav id='Home'  className="w-screen box-border p-2 lg:p-8 flex items-center justify-between mb-10 overflow-x-hidden">
            <div ref={direction("top")} className="logo leading-5 uppercase">
                <img className= "ml-4 h-28 w-28" src="Hlogo.png"></img>
            </div>
            <div ref={direction("top")} className="hamburger z-20" >
                <img onClick={(e) => setvisible(!visible)} src={`${!visible ? "/images/hamburger.svg" : cross}`} alt="Close" className="h-12 w-auto block lg:hidden" />
            </div>
            <div className="links hidden lg:flex  ">
                <div ref={direction("top")} className="flex gap-8 items-center justify-around w-full ">
                    <a href="./Leaflet.jsx" className="flex flex-col after:h-[1px] after:w-0 after:bg-[#f0f8ff] after:transition-all after:hover:w-full ">
                        Map
                    </a>
                    <a href="#sponsors" className="flex flex-col after:h-[1px] after:w-0 after:bg-[#f0f8ff] after:transition-all after:hover:w-full ">
                        About The Project
                    </a>
                    <a href="#faq_and_rules" className="flex flex-col after:h-[1px] after:w-0 after:bg-[#f0f8ff] after:transition-all after:hover:w-full ">
                        Output Video
                    </a>
                    <a href="#" className="flex flex-col after:h-[1px] after:w-0 after:bg-[#f0f8ff] after:transition-all after:hover:w-full ">About Us</a>
                    <a href="#" className="py-3 px-4  font-semibold rounded-md bg-[#f0f8ff] text-black hover:bg-[#dc143ccb] hover:text-[#f0f8ff]">Photo Gallery</a>
                    <a href="/sponsor" className="py-3 px-4 font-semibold rounded-md bg-[#f0f8ff] text-black hover:bg-[#dc143ccb] hover:text-[#f0f8ff]">FAQ</a>
                </div>
            </div>

            {visible ? <div className="z-10 text-2xl absolute flex flex-col lg:hidden w-full top-0 left-0 h-full bg-[#161b22] bg-dotted-spacing-4 bg-dotted-gray-700">
                
                <div className="flex flex-col  items-center gap-6 m-auto ">
                    <a onClick={(e) => setvisible(!visible)} href="#prizes" className="text-[#dc143c] ">
                        Map
                    </a>
                    <a onClick={(e) => setvisible(!visible)} href="./Leaflet.jsx" className="text-[#dc143c]  ">
                        Output videos
                    </a>
                    <a onClick={(e) => setvisible(!visible)} href="#faq_and_rules" className="text-[#dc143c] ">
                        About the Project
                    </a>
                    <a onClick={(e) => setvisible(!visible)} href="#" className="text-[#dc143c]">
                        About Us
                    </a>
                    <a onClick={(e) => setvisible(!visible)} href="#" className="py-4 px-6 text-base font-semibold rounded-md bg-white text-black  hover:bg-[#dc143ccb] hover:text-[#f0f8ff]">
                        Photo Gallery
                    </a>
                    <a onClick={(e) => setvisible(!visible)} href="sponsorship.html" className="py-4 px-6 text-base font-semibold rounded-md bg-white text-black  hover:bg-[#dc143ccb] hover:text-[#f0f8ff]">
                        FAQ's
                    </a>
                </div>
            </div> : ""}
        </nav>

    )
}

export default Navbar