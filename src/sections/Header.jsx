import { path } from 'framer-motion/client';
import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import {Link} from 'react-scroll'
import logo from '../assets/newMasanLogo.png'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [
    {
      link: 'Home', path: 'hero'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Projects', path: 'projects'
    },
    {
      link: 'Contact', path: 'contact'
    }
  ]


  return (
    <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
      <img src={logo} alt="" className='' />
      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {
          navItems.map(({link, path})=>(
            <Link 
              key={path} 
              className='group text-black uppercase font-bold cursor-pointer p-3 rounded-full text-[15px]'     
              to={path} spy={true} offset={-100} smooth={true}
            >
              <p>{link}</p>
              <hr className='w-0 h-[4px] bg-yellow-500 group-hover:w-2/4 group-hover:mx-auto transition-all duration-300 ease-in-out'/>
            </Link>
          ))
        }
      </ul>

      <a href='#contact'><button className='bg-yellow-500 hover:bg-black hover:text-white text-black px-10 py-3 rounded-full font-semibbold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'>BOOK US</button></a>

      {/* ----------MOBILE MENU------------------------------------------------ */}
      <div 
        className='flex justify-between items-center lg:hidden mt-3'
        onClick={toggleMenu}
      >
        <div>
          {
            isMenuOpen ? <FaXmark className='text-yellow-500 text-3xl cursor-pointer' /> : <FaBars className='text-yellow-500 text-3xl cursor-pointer' />
          }
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} h-fit w-full bg-yellow-500 p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {
            navItems.map(({link, path})=>(
              <Link key={path} className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
            ))
          }

        </ul>

      </div>



    </nav>
  )
}

export default Header