import memberPng from '@/assets/member_example.png';
interface Member {
  img: string;
  name: string;
}
interface Feature {
  title: string;
  desc: string;
}

const ABOUT_TITLE = 'What We Do';
const ABOUT_DESC =
  'We’re a small tech business run by programmers. We partner sophisticated data with powerful technology to trade in a way that’s impossible for humans. Our trading is entirely automated, and we look to bring automation to everything we do.';
const TEAM_TITLE = 'World Class Team';
const VALUE_TITLE = 'Our Values';
const VALUE_DESC =
  'Our Values provide the foundation upon which our business is built. They support our vision, shape our culture and reflect the personality of our people. They are the behavioural traits that are inherent in our business - the traits that are special to us, critical to our success and must be kept at all costs. We created these values to describe what was important to us, but you can also look at them through another lens and see them as opposites of the things we try to avoid.';
const JOIN_US_TITLE = 'Join Us';
const JOIN_US_DESC = 'Visit our careers page to see current job openings';
const MEMBER_LIST: Member[] = [
  { img: memberPng, name: 'Cauliflower J.' },
  { img: memberPng, name: 'Cauliflower J.Cauliflower J.Cauliflower J.' },
  { img: memberPng, name: 'Cauliflower J.' },
  {
    img: memberPng,
    name: 'Cauliflower J.Cauliflower J.Cauliflower J.Cauliflower J.',
  },
  { img: memberPng, name: 'Cauliflower J.' },
  { img: memberPng, name: 'Cauliflower J.Cauliflower J.Cauliflower J.' },
  { img: memberPng, name: 'Cauliflower J.' },
  {
    img: memberPng,
    name: 'Cauliflower J.Cauliflower J.Cauliflower J.Cauliflower J.',
  },
];
const FEATURES: Feature[] = [
  {
    title: 'Entrepreneurial',
    desc: 'We’re passionate about the business, care deeply about its health and success, and treat it as our own.',
  },
  {
    title: 'Humble',
    desc: 'We’re passionate about the business, care deeply about its health and success, and treat it as our own.',
  },
  {
    title: 'No BS',
    desc: 'The key to success isn’t just the work itself, it’s the way in which people collaborate in order to do the work. ',
  },
];
export {
  ABOUT_DESC,
  ABOUT_TITLE,
  FEATURES,
  JOIN_US_DESC,
  JOIN_US_TITLE,
  MEMBER_LIST,
  TEAM_TITLE,
  VALUE_DESC,
  VALUE_TITLE,
};
