import React from 'react'
import { Animation, direction } from '@hemant0621/animation'

function Track() {
    return (
        <div>
            <div ref={direction("top")} className='text-[#f0f8ff] font-extrabold text-4xl mx-5 mt-4 lg:text-7xl lg:mx-10 pt-8'>The<span className='text-[#b21335] mx-2'>Tracks</span></div>
            <div className='my-10 lg:h-[50rem] mx-5 lg:mx-20 bg-[#161b22] rounded-xl transition-all hover:py-10  lg:py-10'>
                <div className=' w-full p-1 lg:p-5 flex flex-col lg:gap-0 pointer-events-none  items-center h-full'>
                    <div className=' flex flex-col lg:flex-row lg:gap-0 gap-4 w-full pointer-events-none transition-none lg:transition-all duration-700 hover:my-5 items-center lg:justify-around lg:h-1/2 h-[70rem] p-5 lg:p-0'>
                        <div className=' shadow-md shadow-[#b21335] pointer-events-auto  w-full lg:w-1/5 h-1/6 lg:h-2/3 flex flex-col group justify-between  transition-all transform duration-700 lg:hover:scale-125 hover:h-2/6 lg:hover:h-full bg-white rounded-xl'>
                            <img className='h-full transition-all transform duration-700  hover:h-2/3 w-full object-cover rounded-xl hover:rounded-b-none z-10' src='/images/astronaut-4106766_1280.jpg' />
                            <div className='h-1/3 w-full px-1 transition-opacity duration-1000 opacity-0 group-hover:opacity-100'>
                                <h1 className='font-bold text-xl  text-black'>Title</h1>
                                <p className='w-full break-words  text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod?</p>
                            </div>
                        </div>
                        <div className='shadow-md shadow-[#b21335] pointer-events-auto  w-full lg:w-1/5 h-1/6 lg:h-2/3 flex flex-col group justify-between  transition-all transform duration-700 lg:hover:scale-125 hover:h-2/6 lg:hover:h-full bg-white rounded-xl'>
                            <img className='h-full transition-all transform duration-700  hover:h-2/3 w-full object-cover rounded-xl hover:rounded-b-none z-10' src='/images/astronaut-4106766_1280.jpg' />
                            <div className='h-1/3 w-full px-1 transition-opacity duration-1000 opacity-0 group-hover:opacity-100'>
                                <h1 className='font-bold text-xl  text-black'>Title</h1>
                                <p className='w-full break-words  text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod?</p>
                            </div>
                        </div>
                        <div className='shadow-md shadow-[#b21335] pointer-events-auto  w-full lg:w-1/5 h-1/6 lg:h-2/3 flex flex-col group justify-between  transition-all transform duration-700 lg:hover:scale-125 hover:h-2/6 lg:hover:h-full bg-white rounded-xl'>
                            <img className='h-full transition-all transform duration-700  hover:h-2/3 w-full object-cover rounded-xl hover:rounded-b-none z-10' src='/images/astronaut-4106766_1280.jpg' />
                            <div className='h-1/3 w-full px-1 pointer-events-none transition-opacity duration-1000 opacity-0 group-hover:opacity-100'>
                                <h1 className='font-bold text-xl  text-black'>Title</h1>
                                <p className='w-full break-words  text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod?</p>
                            </div>
                        </div>
                        <div className='shadow-md lg:hidden shadow-[#b21335] pointer-events-auto  w-full lg:w-1/5 h-1/6 lg:h-2/3 flex flex-col group justify-between  transition-all transform duration-700 lg:hover:scale-125 hover:h-2/6 lg:hover:h-full bg-white rounded-xl'>
                            <img className='h-full transition-all transform duration-700  hover:h-2/3 w-full object-cover rounded-xl hover:rounded-b-none z-10' src='/images/astronaut-4106766_1280.jpg' />
                            <div className='h-1/3 w-full px-1 pointer-events-none transition-opacity duration-1000 opacity-0 group-hover:opacity-100'>
                                <h1 className='font-bold text-xl  text-black'>Title</h1>
                                <p className='w-full break-words  text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod?</p>
                            </div>
                        </div>
                        <div className=' shadow-md lg:hidden shadow-[#b21335] pointer-events-auto  w-full lg:w-1/5 h-1/6 lg:h-2/3 flex flex-col group justify-between  transition-all transform duration-700 lg:hover:scale-125 hover:h-2/6 lg:hover:h-full bg-white rounded-xl'>
                            <img className='h-full transition-all transform duration-700  hover:h-2/3 w-full object-cover rounded-xl hover:rounded-b-none z-10' src='/images/astronaut-4106766_1280.jpg' />
                            <div className='h-1/3 w-full px-1 pointer-events-none transition-opacity duration-1000 opacity-0 group-hover:opacity-100'>
                                <h1 className='font-bold text-xl  text-black'>Title</h1>
                                <p className='w-full break-words  text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod?</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex lg:flex-row flex-col  gap-4 items-center w-full lg:justify-center lg:gap-48 h-[20rem] lg:h-1/2'>
                        <div className='shadow-md shadow-[#b21335] pointer-events-auto w-full lg:w-1/5 h-1/2 lg:h-2/3 flex flex-col group justify-between  transition-all transform duration-700 lg:hover:scale-125 hover:h-full bg-white rounded-xl'>
                            <img className='h-full transition-all transform duration-700 hover:h-2/3 w-full object-cover rounded-xl hover:rounded-b-none z-10' src='/images/astronaut-4106766_1280.jpg' />
                            <div className='h-1/3 w-full px-1 pointer-events-none transition-opacity duration-1000 opacity-0 group-hover:opacity-100'>
                                <h1 className='font-bold text-xl  text-black'>Title</h1>
                                <p className='w-full break-words  text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod?</p>
                            </div>
                        </div>
                        <div className='shadow-md shadow-[#b21335] pointer-events-auto  w-full lg:w-1/5 h-1/2 lg:h-2/3 flex flex-col group justify-between  transition-all transform duration-700 lg:hover:scale-125 hover:h-full bg-white rounded-xl'>
                            <img className='h-full transition-all transform duration-700 hover:h-2/3 w-full object-cover rounded-xl hover:rounded-b-none z-10' src='/images/astronaut-4106766_1280.jpg' />
                            <div className='h-1/3 w-full px-1 pointer-events-none transition-opacity duration-1000 opacity-0 group-hover:opacity-100'>
                                <h1 className='font-bold text-xl  text-black'>Title</h1>
                                <p className='w-full break-words  text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track