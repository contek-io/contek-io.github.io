import { Fragment } from 'react';

import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ALL_RIGHTS_RESERVED, FOOTER_LINKS } from '@/constants';
import { DESC_CLASS } from '@/styles';
const Footer = () => {
  return (
    <footer className='md:pb-28 pb-12'>
      <div className='flex w-full px-6 xl:px-60 lg:px-40 md:px-20 justify-between'>
        {/* logo */}
        <div className='hidden md:block 2xl:mr-80 xl:mr-52 lg:mr-40 md:mr-16'>
          <span className='flex font-bold md:text-2xl text-sm items-center mb-24'>
            <Logo className='md:mr-2 mr-1' />
            CONTEK
          </span>
          <span className='whitespace-pre text-sm'>{ALL_RIGHTS_RESERVED}</span>
        </div>
        <div className='md:grid md:grid-cols-3 gap-0 w-full md:w-auto flex justify-between md:flex-auto'>
          {FOOTER_LINKS.map((links, index) => {
            return (
              <div key={`links-${index}`}>
                <div className={`${DESC_CLASS} font-bold mb-4 md:mb-10`}>
                  {links.title}
                </div>
                {links.details.map((link, lIndex) => {
                  return (
                    <Fragment key={`link-${index}-${lIndex}`}>
                      {link.name && (
                        <div
                          className={`xl:text-lg lg:text-base md:text-sm text-xs  mb-2 md:mb-4`}
                        >
                          {link.name}
                        </div>
                      )}
                      {link.icon ? (
                        <div className={`${DESC_CLASS}  mb-2 md:mb-4`}>
                          {link.icon}
                        </div>
                      ) : null}
                    </Fragment>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className='md:hidden block w-full px-6 xl:px-60 lg:px-40 md:px-20 mt-8'>
        <span className='flex font-bold md:text-2xl text-sm items-center mb-2'>
          <Logo className='md:mr-2 mr-1' />
          CONTEK
        </span>
        <span className='text-sm'>{ALL_RIGHTS_RESERVED}</span>
      </div>
    </footer>
  );
};
export default Footer;
