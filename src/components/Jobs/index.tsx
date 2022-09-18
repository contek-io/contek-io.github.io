import './index.css';

import CareersButton from '@/components/CareersButton';

import { JOIN_US_DESC, JOIN_US_TITLE } from '@/constants';
import { DESC_CLASS, TITLE_CLASS } from '@/styles';
const Jobs = () => {
  return (
    <p
      id='find_us'
      className='md:py-32 px-20 py-16 w-full flex flex-col items-center'
    >
      <p className={`${TITLE_CLASS} mb-8 text-center`}>{JOIN_US_TITLE}</p>
      <p className={`${DESC_CLASS} mb-12 md:mb-12 xl:mb-16 text-center`}>
        {JOIN_US_DESC}
      </p>
      <CareersButton className='jobs_careers' />
    </p>
  );
};

export default Jobs;
