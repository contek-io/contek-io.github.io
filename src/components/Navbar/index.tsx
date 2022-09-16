import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav id='nav-menu-desktop' aria-label='Navigation for Desktop'>
        <img alt='contek logo'></img>
        <div id='anchor-links' className='nav-links'>
          <a href='#top'>About</a>
          <a href='#team'>Team</a>
          <a href='#find'>Find us</a>
        </div>
        <button id='careers'>careers</button>
      </nav>
      <nav id='nav-menu-mobile' aria-label='Navigation for mobile'>
        <img alt='contek logo'></img>
        <div
          id='menu-link'
          onClick={() => {
            toggleMenu();
          }}
        >
          {isOpen ? 'Close' : 'Menu'}
        </div>
        <div className={isOpen ? 'menu-open' : 'menu-close'}>
          <a href='#top'>About</a>
          <a href='#team'>Team</a>
          <a href='#find'>Find us</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
