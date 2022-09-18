import './index.css';

import aboutDecorate from '@/assets/about_decorate.png';
import { ABOUT_DESC, ABOUT_TITLE } from '@/constants';
import { DESC_CLASS, PART_MARGIN_CLASS, TITLE_CLASS } from '@/styles';

const About = () => {
  return (
    <div id='about' className={`${PART_MARGIN_CLASS} relative`}>
      <div
        id='about_desktop'
        className='md:flex md:justify-between md:items-center hidden'
      >
        <div className='2xl:mr-48 xl:mr-40 lg:mr-25 md:mr-20'>
          <div className={`${TITLE_CLASS} mb-12`}>{ABOUT_TITLE}</div>
          <span className={`${DESC_CLASS}`}>{ABOUT_DESC}</span>
        </div>
        <div className='decorate'>
          <img src={aboutDecorate}></img>
        </div>
      </div>
      <div id='about_mobile' className='md:hidden'>
        <div className={`${TITLE_CLASS} mb-8 text-center`}>{ABOUT_TITLE}</div>
        <div className='wrapper'>
          <div className={`${DESC_CLASS}`}>
            <div>
              <img
                src={aboutDecorate}
                style={{ float: 'right', width: '100px' }}
              ></img>
            </div>
            {ABOUT_DESC}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
