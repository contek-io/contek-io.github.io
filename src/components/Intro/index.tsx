import './index.css';

import introBg from '@/assets/intro_bg.png';
const Intro = () => {
  return (
    <div
      id='intro'
      className='md:w-screen md:h-screen flex justify-center items-center font-bold w-full relative'
    >
      <img
        src={introBg}
        alt='introduction background'
        className='w-full object-cover h-full'
      />
      <span className='absolute z-1'>
        <strong>CONTEK</strong> is a leading quantitative trading firm
      </span>
    </div>
  );
};

export default Intro;
