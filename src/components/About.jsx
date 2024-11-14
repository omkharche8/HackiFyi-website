import React from 'react'
import { Animation } from '@hemant0621/animation'

function About() {
    return (
        <div className='relative mt-10 lg:mt-20 w-screen pb-24 pt-10'>
            <div className=" bg-[#161b22] mt-10 mx-6 rounded-[15px] lg:mx-60 lg:mt-20">
                <div className="absolute top-0 right-0 -z-10 transform -rotate-90">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs">
                        <g clipPath="url(#clip0_105_560)">
                            <path fill="#b21335" fillRule="evenodd" d="M200 100.671 100 0 0 100.671h98.667L0 200h200l-98.667-99.329H200Z" clipRule="evenodd"></path>
                        </g>
                    </svg>
                </div>
                <svg className=" absolute bottom-0 left-0 -z-10 transform rotate-90" xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs">
                    <g clipPath="url(#clip0_105_560)">
                        <path fill="#b21335" fillRule="evenodd" d="M200 100.671 100 0 0 100.671h98.667L0 200h200l-98.667-99.329H200Z" clipRule="evenodd"></path>
                    </g>
                </svg>
                <div>
                    <h1 className='text-[#f0f8ff] font-extrabold text-3xl mx-5 mt-2 lg:text-5xl lg:mx-10 pt-8' ref={Animation("top", "40px", 200)}>WHAT IS </h1>
                    <h1 className=" text-[#b21335] font-extrabold text-3xl mx-5 mt-1 lg:text-5xl lg:mx-10 lg:mt-2" ref={Animation("top", "40px", 200)}>#F.E.I.N. <span className='text-white'>??</span> </h1>
                    <h4 className=' font-medium text-lg text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mx-10 lg:mt-2' ref={Animation("left", "40px", 400)}>WELCOME TO THE LARGEST HACKATHON OF VIT CHENNAI</h4>
                    <h3 className='font-SourceCodePro font-light text-sm text-[#f0f8ff] mx-5 mt-5 lg:text-2xl lg:mx-10 lg:mt-8 mb-4' ref={Animation("left", "40px", 600)}>FE!N is an AI-based project designed to generate videos from satellite images using frame interpolation, addressing the challenge of capturing cloud dynamics in weather forecasting and climate studies. It integrates real environmental data such as wind speed, direction, temperature, and pressure to enhance the accuracy of cloud movement predictions. This approach improves upon existing models that rely on estimations rather than incorporating real-time variables. FE!N helps predict cloud patterns even in extreme weather conditions like cyclones and reduces the need for continuous high-frequency satellite imagery, making it both resource-efficient and cost-effective.</h3>
                    <div className='w-full flex justify-end px-3 lg:px-10'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About