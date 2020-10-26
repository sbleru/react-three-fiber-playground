import Top from 'components/pages/Top';
import NotFound from 'components/pages/NotFound';
import { InteractiveCubesOrtho } from 'containers/interactive/InteractiveCubesOrtho';
import { InteractiveTextsOrtho } from 'containers/interactive/InteractiveTextsOrtho';
import { HelloText } from 'containers/gravity/TextWork01';
import { Montage } from 'containers/montage/Montage';
import { WonderfulChandrasekhar } from 'containers/Installations/WonderfulChandrasekhar';

export const ROUTES = [
  {
    path: '/',
    exact: true,
    gnavi: true,
    title: 'Top',
    category: 'log',
    component: Top,
  },
  // for github pages
  {
    path: '/react-three-fiber-playground',
    exact: true,
    gnavi: false,
    title: 'Top',
    category: 'log',
    component: Top,
    image: require('resources/InteractiveCubesOrtho.png'),
    imageGif: require('resources/InteractiveCubesOrtho.gif'),
  },
  {
    path: '/InteractiveCubesOrtho',
    exact: true,
    gnavi: true,
    title: 'InteractiveCubesOrtho',
    category: 'faq_log',
    component: InteractiveCubesOrtho,
    image: require('resources/InteractiveCubesOrtho.jpg'),
    imageGif: require('resources/InteractiveCubesOrtho.gif'),
  },
  {
    path: '/InteractiveTextsOrtho',
    exact: true,
    gnavi: true,
    title: 'InteractiveTextsOrtho',
    category: 'faq_log',
    component: InteractiveTextsOrtho,
    image: require('resources/InteractiveTextsOrtho.jpg'),
    imageGif: require('resources/InteractiveTextsOrtho.gif'),
  },
  {
    path: '/Montage',
    exact: true,
    gnavi: true,
    title: 'Montage',
    category: 'faq_log',
    component: Montage,
    image: require('resources/Montage.jpg'),
    imageGif: require('resources/Montage.gif'),
  },
  {
    path: '/HelloGravity',
    exact: true,
    gnavi: true,
    title: 'HelloGravity',
    category: 'faq_log',
    component: HelloText,
    image: require('resources/HelloGravity.jpg'),
    imageGif: require('resources/HelloGravity.gif'),
  },
  {
    path: '/WonderfulChandrasekhar',
    exact: true,
    gnavi: true,
    title: 'WonderfulChandrasekhar',
    category: 'faq_log',
    component: WonderfulChandrasekhar,
    image: require('resources/WonderfulChandrasekhar.jpg'),
    imageGif: require('resources/WonderfulChandrasekhar.gif'),
  },
  {
    path: '*',
    exact: false,
    gnavi: false,
    component: NotFound,
  },
];
