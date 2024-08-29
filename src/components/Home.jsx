import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'
import Bg from '../assets/bg.png'
// import Navbar from './Navbar';

const Home = () => {
  return (
    <div name='home' className='w-full bg-[#0a192f] '>
      {/* container */}
      <div className='flex justify-center '>
        <div className='grid sm:grid-cols-2 max-w-[1000px] w-full py-[10%] gap-5'>
          <img src={Bg} alt="Bg image" className='p-4'/>
          <div className=' mx-auto px-8 h-full p-4'>
            <p className='text-purple-600'>Hi, My name is</p>
            <h1 className='text-2xl sm:text-4xl font-bold text-[white]'>Angelo Ramarovahoaka</h1>
            <h2 className='text-4xl sm:text4xl font-bold text-[#737d91]'>I'm a Full Stack Developer</h2>
            <p className='text-[#c2cee7]'>I'm a full-stack developper specializing in building (and occasionally designing) exceptional digital experience. Currently, I'm focused on building reqponsive full-stack applications.</p>
            <div>
            <Link to='work' smooth='true' duration={500}>
              <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600'>
                  view works
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3'/>
                </span>
              </button>
              </Link> 
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Home