import React from 'react';
import Html from '../assets/html.png';
import Bootstrap from '../assets/bootstrap.png';
import Cpp from '../assets/cpp.png';
import Figma from '../assets/figma.png';
import Git from '../assets/git.png';
import Javascript from '../assets/javascript.png';
import Mysql from '../assets/Mysql.png';
import php from '../assets/php.png';
import GitHub from '../assets/gitHub.png'
import Css from '../assets/css.png'
import Reeact from '../assets/react.png'
import Python from '../assets/python.png'
import Tailwind from '../assets/tailwind.png'
import Linux from '../assets/linux.png'
const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
            <div>
                <p className='text-2xl text-gray-300 py-4 font-bold inline border-b-4 border-purple-600'>Experience</p>
                <p className='py-8'>// These are the techonlogie I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={Html} alt="Html icon" className='py-2 w-14 mx-auto '/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={Css} alt="css icon" className='w-20 mx-auto '/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={Bootstrap} alt="Bootstrap icon" className='w-20 mx-auto '/>
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={Javascript} alt="Javascript icon" className='w-20 mx-auto '/>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={Tailwind} alt="Tailwind icon" className='w-20 mx-auto '/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={Reeact} alt="React icon" className='w-20 mx-auto '/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={php} alt="php icon" className='w-20 mx-auto '/>
                    <p className='my-4'>php</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={Mysql} alt="Mysql icon" className='w-20 mx-auto '/>
                    <p className='my-4'>Mysql</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={GitHub} alt="GitHub icon" className='w-20 mx-auto '/>
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={Figma} alt="Figma icon" className='w-20 mx-auto '/>
                    <p className='my-4'>Figma</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={Cpp} alt="Cpp icon" className='w-20 mx-auto '/>
                    <p className='my-4'>Cpp</p>
                </div>
                <div className='shadow-md shadow-[#0a0b0d] hover:scale-110 duration-500'>
                    <img src={Python} alt="Python icon" className='w-20 mx-auto '/>
                    <p className='my-4'>Python</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills