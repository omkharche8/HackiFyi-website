import React from 'react'
import { Animation, direction } from '@hemant0621/animation'

function Prizes1() {


    return (
        <div id ="prizes" className='mt-20'>
            <div ref={direction("top")} className='text-[#f0f8ff] font-extrabold text-4xl mx-5 mt-4 lg:text-7xl lg:mx-10 pt-8'>The<span className='text-[#b21335] mx-2'> Prizes!!</span></div>
            <div className=' transition-transform transform hover:scale-105 duration-800'>
                <div class="text-center relative  bg-[#161b22]  m-10  pt-10 lg:mt-10 rounded-[15px] lg:mx-44 lg:p-10 p-6" ref={Animation("top", "40px", 200)}>
                    <div className='absolute z-10 bg-[#b21335] right-5 top-[-1rem] p-3 lg:p-5 rounded-md text-lg lg:text-4xl font-SourceCodePro font-extrabold'>1</div>
                    <div className='relative flex justify-center'>
                        <img className=' w-28 lg:w-40 pl-1' src='/images/first.png' />
                        <span className='absolute top-7 text-3xl lg:top-9 text-white lg:text-5xl font-extrabold font-Clash'>1</span>
                    </div>
                    <p className="text-center text-[#b21335] font-extrabold text-3xl mx-5 mt-2 lg:text-6xl lg:mx-10 lg:mt-10">GRAND PRIZE</p>
                    <p className='font-SourceCodePro font-light text-sm text-[#f0f8ff] mx-5 mt-2 lg:text-xl lg:mx-10 lg:mt-3 '>This year Grand Winner will be celebrated for their outstanding achievement. to claim the top spot, your performance shpould impress the judges and stand out among fellow participants</p>
                    <p className="text-center font-SourceCodePro font-extrabold text-lg text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mt-2 lg:mx-10">To be announced</p>
                </div>
            </div>


            <div class="lg:flex" ref={Animation("top", "40px", 200)}>
                <div class="lg:w-1/2 bg-[#161b22] mb-10 mr-10 ml-10 pt-10  rounded-[15px] lg:ml-44 lg:p-10 p-4 transition-transform transform hover:scale-105 duration-800">
                    <div className='absolute z-10 bg-[#b21335] right-5 top-[-1rem] p-3 lg:p-5 rounded-md text-lg lg:text-4xl font-SourceCodePro font-extrabold'>2</div>
                    <p className="text-center text-[#b21335] font-extrabold text-xl mx-5 mt-2 lg:text-4xl lg:mx-10 lg:mt-20">FIRST RUNNER UP</p>
                    <p className='font-SourceCodePro font-light text-sm text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mx-10 lg:mt-2 ' >You might have missed top honors, but you are still taking home valuable prizes</p>
                    <p className="text-center font-SourceCodePro font-extrabold text-lg text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mt-2 lg:mx-10">To be announced</p>

                </div>

                <div class="lg:w-1/2 bg-[#161b22]  mb-10 mr-10 ml-10 pt-10  rounded-[15px] lg:mr-44 lg:p-10 p-8 transition-transform transform hover:scale-105 duration-800">
                    <div className='absolute z-10 bg-[#b21335] right-5 top-[-1rem] p-3 lg:p-5 rounded-md text-lg lg:text-4xl font-SourceCodePro font-extrabold'>3</div>
                    <p className="text-center text-[#b21335] font-extrabold text-xl mx-5 lg:text-4xl lg:mx-10 lg:mt-20">SECOND RUNNER UP</p>
                    <p className='font-SourceCodePro font-light text-sm text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mx-10 lg:mt-2 '> Nothing to be ashamed of here. Securing the third place position is a commendable achievement and you are walking away with well deserved recognition</p>
                    <p className="text-center font-SourceCodePro font-extrabold text-lg text-[#f0f8ff] my-5 mt-2 lg:text-2xl lg:mt-2 lg:mx-10">To be announced</p>
                </div>
            </div>

            <div class="lg:flex" ref={Animation("top", "40px", 200)}>
                <div class="lg:w-1/2 bg-[#161b22] mb-10 mr-10 ml-10 pt-10  rounded-[15px] lg:ml-44 lg:p-10 p-8 transition-transform transform hover:scale-105 duration-800">
                    <p className="text-center text-[#b21335] font-extrabold text-xl mx-5 mt-2 lg:text-4xl lg:mx-8 lg:mt-20">BEST FRESHER TEAM</p>
                    <p className='font-SourceCodePro font-light text-sm text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mx-10 lg:mt-2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptates doloremque rem possimus nobis. Eum?</p>
                    <p className="text-center font-SourceCodePro font-extrabold text-lg text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mt-2 lg:mx-10">To be announced</p>

                </div>

                <div class="lg:w-1/2 bg-[#161b22] mb-10 mr-10 ml-10 pt-10  rounded-[15px] lg:mr-44 lg:p-10 p-8 transition-transform transform hover:scale-105 duration-800">
                    <p className="text-center text-[#b21335] font-extrabold text-xl mx-5 mt-2 lg:text-4xl lg:mx-10 lg:mt-20">BEST FEMALE TEAM</p>
                    <p className='font-SourceCodePro font-light text-sm text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mx-10 lg:mt-2 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, aspernatur harum quae eos vel animi!</p>
                    <p className="text-center font-SourceCodePro font-extrabold text-lg text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mt-2 lg:mx-10">To be announced</p>

                </div>
            </div>

        </div>


    )
}

export default Prizes1