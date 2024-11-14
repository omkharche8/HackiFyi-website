import React from 'react'
import { Animation } from '@hemant0621/animation'

function About() {
    return (
        <div className="flex justify-between items-center p-5  bg-slate-100">
            <div>
                <img className= "ml-4 h-28 w-28" src="Hlogo.png"></img>
            </div>
            <div className="flex align-middle px-5" >
                <a className='transition-transform transform hover:scale-110 duration-300 mx-3' href="https://www.instagram.com/fyivitc/"><img src="insta.png"></img></a>
                <a className='transition-transform transform hover:scale-110 duration-300 mx-3' href="https://www.linkedin.com/company/fraternity-of-young-innovators/"><img src="l.png"></img></a>
                <a className='transition-transform transform hover:scale-110 duration-300 mx-3' href="mailto:hackifyi24@gmail.com"><img src="gmail.png"></img></a>
                <a className='transition-transform transform hover:scale-110 duration-300 mx-3' href="https://www.semrush.com/blog/ahref-link/"><img src="twitter.png"></img></a>
            </div>
        </div>
    )
}

export default About