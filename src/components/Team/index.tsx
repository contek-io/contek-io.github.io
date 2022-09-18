import './index.css';

import { MEMBER_LIST, TEAM_TITLE } from '@/constants';
import { PART_MARGIN_CLASS, TITLE_CLASS } from '@/styles';
const Team = () => {
  return (
    <div id='team' className={`${PART_MARGIN_CLASS} relative`}>
      <div
        className={`${TITLE_CLASS} md:mb-12 lg:mb-16 xl:mb-20 mb-10 text-center w-full`}
      >
        {TEAM_TITLE}
      </div>
      <div className='grid grid-cols-4 2xl:gap-y-20 xl:gap-y-16 lg:gap-y-12 md:gap-y-8 gap-y-4'>
        {MEMBER_LIST.map((member, index) => {
          return (
            <div key={index} className='flex flex-col items-center'>
              <img
                className='member_avatar'
                src={member.img}
                alt={member.name}
              />
              <span className='font-bold xl:text-2xl lg:text-xl md:text-base text-xs text-center'>
                {member.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
