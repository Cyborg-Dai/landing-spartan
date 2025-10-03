import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'

const navbarlinks = [
    {
        id: 1,
        title: 'Home',
        link: '#home'
    },
    {
        id: 2,
        title: 'About',
        link: '#about'
    },
    {
        id: 3,
        title: 'Contact',
        link: '#contact'
    }
]

const navbarRedes = [
    {
        id: 1,
        title: 'twitter',
        link: 'https://www.twitter.com/..',
        icon: 'bi bi-twitter-x'
    },
    {
        id: 2,
        title: 'Instagram',
        link: 'https://www.instagram.com/..',
        icon: 'bi bi-instagram'
    }
]


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <nav className='fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50'>
      <div className='grid grid-cols-2 md:grid-cols-3 items-center sm:px-8 px-4 py-2 sm:py-3'>


    {/*Logo navbar */}
        <div className='flex items-center'>
            <a
              href="#home"
              aria-label='Ir al inicio'
              onClick={() => setIsOpen(false)}
              className='inline-flex items-center focus:outline-none focus:ring-2 focus:ring-[#AFFF00] rounded'
            >
              <img src={Logo} alt='Logo del sitio' className='h-10 sm:h-12 w-auto'/> {/* logo más compacto por altura */}
            </a>
        </div>

    {/*Navegacion Links navbar (columna central) */}
        <div className='hidden md:flex justify-center'>
            <ul className = 'flex sm:space-x-6 space-x-3'>
                {navbarlinks.map((link) => (
                    <li key={link.id}>
                      <a 
                      className='text-[#AFFF00] hover:text-[#7FFF00] text-xs sm:text-base transition-transform hover:scale-110 transform inline-block duration-300'
                      href={link.link}>
                           {link.title}
                       </a>
                    </li>
                ))}
            </ul>
        </div>

    {/*Redes + botón hamburguesa (columna derecha) */}
        <div className='flex justify-end items-center space-x-4'>
            <ul className = 'hidden md:flex space-x-4'>
                {navbarRedes.map((link) => (
                    <li key={link.id}>
                      <a 
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block transition-transform duration-300 transform hover:scale-125'
                      href={link.link}>
                        <i
                          className={`${link.icon} sm:text-2xl text-lg text-[#AFFF00] hover:text-[#7FFF00] transition-all duration-300`}
                        >
                        </i>
                      </a>
                      </li>
                ))}
            </ul>
            {/*Botón de hamburguesa  */}
            <button onClick={toggleMenu} className='md:hidden text-[#AFFF00]'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  {/*Si esta abierto mostrame un estado, si no, mostrame otro*/}
                  {isOpen ? (<path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />) : (<path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                  )}
                </svg>
            </button>
        </div>
      </div>

                {/*Menú movil */}
        <div className={`md:hidden absolute w-full bg-black/80 backdrop-blur-md transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <ul className='flex flex-col px-4 py-2'>
                {navbarlinks.map((link) => (
                    <li key={link.id} className='py-2 text-center'>
                      <a 
                      className='text-[#AFFF00] hover:text-[#7FFF00]'
                      href={link.link} 
                      onClick={() => setIsOpen(false)}>
                           {link.title}
                       </a>
                    </li>
                ))}
            </ul>

            <ul className = 'flex space-x-4 px-4 py-2 border-t border-[#AFFF00] justify-center'>
                {navbarRedes.map((link) => (
                    <li key={link.id}>
                      <a 
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block'
                      href={link.link}
                      onClick={() => setIsOpen(false)}>
                        <i
                          className={`${link.icon} text-lg text-[#AFFF00] hover:text-[#7FFF00] transition-all duration-300`}
                        >
                        </i>
                      </a>
                      </li>
                ))}
            </ul>
        </div>
               

    </nav>
  )
}

export default Navbar
