import {
  BsBarChartSteps,
  BsFingerprint,
  BsFire,
  BsGem,
  BsXDiamondFill,
} from 'react-icons/bs';

export const navItems = [
  {
    id: 1,
    label: 'Home',
    path: '/',
  },
  {
    id: 4,
    label: 'About us',
    path: '/about',
  },
  {
    id: 2,
    label: 'Our Impact',
    path: '/our-impact',
  },
  {
    id: 3,
    label: 'Get in touch',
    path: '/contact',
  },
];

export const contacts = [
  { id: 1, label: `Elyon plaza 1st Avenue, Gwarimpa suit 301`, path: null },
  { id: 2, label: `(+234)9032761877`, path: `tel:+2349032761877` },
  {
    id: 3,
    label: `contact@dfetfoundation.org`,
    path: `mailto:contact@dfetfoundation.org`,
  },
];

export const values = [
  {
    id: 1,
    title: 'transparency',
    description: `Through the power of blockchain technology, we provide an entirely traceable, accountable and comprehensive platform.`,
    icon: <BsFingerprint />,
  },
  {
    id: 2,
    title: 'diversity',
    description: `Diversity is more than color. We understand we are different, through teamwork and respect we see our individual differences as strength. Together is better.`,
    icon: <BsXDiamondFill />,
  },
  {
    id: 3,
    title: 'passion',
    description: `With this innovation we can wholeheartedly fulfill our dream of impacting the lives of many, without glitches.`,
    icon: <BsFire />,
  },
];

import one from '@/app/assests/impact/1.jpg';
import two from '@/app/assests/impact/2.jpg';
import three from '@/app/assests/impact/3.jpg';
import four from '@/app/assests/impact/4.jpg';
import five from '@/app/assests/impact/5.jpg';
import six from '@/app/assests/impact/6.jpg';
import seven from '@/app/assests/impact/7.jpg';
import eight from '@/app/assests/impact/8.jpg';
import nine from '@/app/assests/impact/9.jpg';
import ten from '@/app/assests/impact/10.jpg';

export const impacts = [
  { id: 1, image: one },
  { id: 2, image: two },
  { id: 3, image: three },
  { id: 4, image: four },
  { id: 5, image: five },
  { id: 6, image: six },
  { id: 7, image: seven },
  { id: 8, image: eight },
  { id: 9, image: nine },
  { id: 10, image: ten },
];
