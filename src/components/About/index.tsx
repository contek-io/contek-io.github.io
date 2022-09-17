import './index.css';

import aboutDecorate from '@/assets/about_decorate.png';
const WHAT_WE_DO_DESC =
  'We’re a small tech business run by programmers. We partner sophisticated data with powerful technology to trade in a way that’s impossible for humans. Our trading is entirely automated, and we look to bring automation to everything we do.';
const WHAT_WE_DO = 'What We Do';
const About = () => {
  return (
    <div
      id='about'
      className='md:mt-36 xl:mt-56 mt-16 xl:mx-60 md:mx-40 mx-6 relative'
    >
      <div
        id='about_desktop'
        className='md:flex md:justify-between md:items-center hidden'
      >
        <p className='xl:mr-40 lg:mr-25 md:mr-20'>
          <div className='xl:text-6xl lg:text-5xl md:text-4xl mb-8'>
            {WHAT_WE_DO}
          </div>
          <span className='xl:text-2xl lg:text-xl md:text-lg'>
            {WHAT_WE_DO_DESC}
          </span>
        </p>
        <div className='decorate'>
          <img src={aboutDecorate}></img>
        </div>
      </div>
      <div id='about_mobile' className='md:hidden'></div>
    </div>
  );
};
export default About;
