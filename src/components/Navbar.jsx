import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick= () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-gray-300 ...'>
            <img src={Logo} alt="name" className='w-[70px]'/>
            {/* menu */}
            <div className='hidden md:flex'> 
                <ul className='hidden md:flex items-center *:text-lg *:m-4 p-0 *:tracking-widest *:px-0' >
                    <li className='hover:text-purple-600 hover:border-b-4 hover:py-1  duration-300'>
                        <Link to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li className='hover:text-purple-600 hover:border-b-4 hover:py-1 duration-300'>
                        <Link to="about" smooth={true} duration={500} >
                            About
                        </Link>
                    </li>
                    <li className='hover:text-purple-600 hover:border-b-4 hover:py-1 duration-300'>
                        <Link to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                    </li>
                    <li className='hover:text-purple-600 hover:border-b-4 hover:py-1 duration-300'>
                        <Link to="work" smooth={true} duration={500} >
                            Work
                        </Link>
                    </li>
                    <li className='hover:text-purple-600 hover:border-b-4 hover:py-1 duration-300'>
                        <Link to="contact" smooth={true} duration={500} >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            {/* humberger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            {/* Mobile menu */}
            <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center *:py-6 *:text-xl'}>
                <li>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                            Home
                    </Link>
                </li>
                <li>
                        <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}   onClick={handleClick}>
                            Contact
                        </Link>
                    </li>
            </ul>
            {/* Social icons */}
            <div className='lg:flex fixed flex-col top-[35%] left-0'>
                <ul className='*:z-50'>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEpi__YBh5UfdJP-uL4my1GJquUihrfdJoI&keywords=angelo%20ramarovahoaka&origin=RICH_QUERY_SUGGESTION&position=0&searchId=5ff14703-9c0b-46c7-8ab4-00cedd36c5d1&sid=MO8&spellCorrectionEnabled=false">
                        Linkedin < FaLinkedin className='w-[30px] h-[30px]'/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2d2d2b]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/Angelo-Ramarovahoaka">
                        GitHub < FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#76b5a6]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="mailto:angeloramarovahoaka@gmail.com?subject=Sujet%20de%20l'email&body=Contenu%20de%20l'email">
                        E-mail < HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4b535f]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                        Resume < BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar 