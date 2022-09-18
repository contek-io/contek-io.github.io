import './index.css';

import { FEATURES, VALUE_DESC, VALUE_TITLE } from '@/constants';
import { DESC_CLASS, PART_MARGIN_CLASS, TITLE_CLASS } from '@/styles';

const Values = () => {
  return (
    <div className={`${PART_MARGIN_CLASS} relative`}>
      {/* desktop */}
      <div
        className={`${TITLE_CLASS} mb-8 xl:mb-10 2xl:mb-12 text-center md:text-left`}
      >
        {VALUE_TITLE}
      </div>
      <div className='md:flex md:justify-between hidden'>
        <p className='2xl:mr-52 xl:mr-30 lg:mr-20 md:mr-10'>
          <span className={`${DESC_CLASS}  whitespace-pre-line`}>
            {VALUE_DESC}
          </span>
        </p>
        <div className='features mb-16 md:mb-20 xl:mb-32 2xl:mb-40'>
          {FEATURES.map((feature, index) => {
            return (
              <div key={`feature_${index}`} className='mb-10'>
                <span className={`${DESC_CLASS} block font-bold mb-4`}>
                  {feature.title}
                </span>
                <span className={`${DESC_CLASS}`}>{feature.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* mobile */}
      <div className='md:hidden pb-10'>
        <div className={`${DESC_CLASS} whitespace-pre-line mb-8`}>
          {VALUE_DESC}
        </div>
        {FEATURES.map((feature, index) => {
          return (
            <div key={`feature_${index}`} className='mb-6'>
              <span className={`${DESC_CLASS} block font-bold mb-4`}>
                <div className='w-2 h-2 mr-2 feature_decorate'></div>
                {feature.title}
              </span>
              <span className={`${DESC_CLASS}`}>{feature.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Values;
