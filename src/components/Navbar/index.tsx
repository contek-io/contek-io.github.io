import { useState } from 'react';

import './index.css';

import { ReactComponent as Logo } from '@/assets/logo.svg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        id='nav-menu-desktop'
        aria-label='Navigation for Desktop'
        className='flex w-full bg-black md:px-20 md:py-6 justify-between items-center px-6 py-4 md:fixed md:top-0 md:z-10'
      >
        <div className='flex items-center'>
          <a
            href='#top'
            className='flex font-bold md:text-2xl text-sm items-center'
          >
            <Logo className='md:mr-2 mr-1' />
            CONTEK
          </a>
          <div id='anchor-links' className='hidden md:flex text-xl font-medium'>
            <a href='#about'>About</a>
            <a href='#team'>Team</a>
            <a href='#find'>Find us</a>
          </div>
        </div>
        <button id='careers' className='hidden md:block font-medium text-xl'>
          careers
        </button>
        <div
          id='menu-link'
          onClick={() => {
            toggleMenu();
          }}
          className='md:hidden justify-self-end'
        >
          {isOpen ? 'Close' : 'Menu'}
        </div>
      </nav>
      <nav
        id='nav-menu-mobile'
        aria-label='Navigation for mobile'
        className={isOpen ? 'menu-open' : 'menu-closed'}
      >
        <a href='#top'>About</a>
        <a href='#team'>Team</a>
        <a href='#find'>Find us</a>
      </nav>
    </>
  );
};

export default Navbar;
