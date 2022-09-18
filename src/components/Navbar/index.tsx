import { useState } from 'react';

import './index.css';

import CareersButton from '@/components/CareersButton';

import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as MenuLogo } from '@/assets/menu.svg';
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
            <a href='#find_us'>Find us</a>
          </div>
        </div>
        <CareersButton className='hidden md:block font-medium text-xl sm-careers' />
        <div
          id='menu-link'
          onClick={() => {
            toggleMenu();
          }}
          className='md:hidden justify-self-end'
        >
          <MenuLogo />
        </div>
      </nav>
      <nav
        id='nav-menu-mobile'
        aria-label='Navigation for mobile'
        className={isOpen ? 'menu-open' : 'menu-closed'}
      >
        <a href='#about' onClick={toggleMenu}>
          About
        </a>
        <a href='#team' onClick={toggleMenu}>
          Team
        </a>
        <a href='#find_us' onClick={toggleMenu}>
          Find us
        </a>
        <a
          onClick={() => {
            window.open('https://baidu.com');
            toggleMenu();
          }}
        >
          Careers
        </a>
      </nav>
    </>
  );
};

export default Navbar;
