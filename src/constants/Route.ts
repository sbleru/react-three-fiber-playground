import Top from 'components/pages/Top';
import NotFound from 'components/pages/NotFound';
import { InteractiveCubesOrtho } from 'containers/interactive/InteractiveCubesOrtho';
import { InteractiveTextsOrtho } from 'containers/interactive/InteractiveTextsOrtho';
import { HelloText } from 'containers/gravity/TextWork01';

export const ROUTES = [
  {
    path: '/',
    exact: true,
    gnavi: true,
    title: 'Top',
    category: 'log',
    component: Top,
  },
  {
    path: '/InteractiveCubesOrtho',
    exact: true,
    gnavi: true,
    title: 'InteractiveCubesOrtho',
    category: 'faq_log',
    component: InteractiveCubesOrtho,
  },
  {
    path: '/InteractiveTextsOrtho',
    exact: true,
    gnavi: true,
    title: 'InteractiveTextsOrtho',
    category: 'faq_log',
    component: InteractiveTextsOrtho,
  },
  {
    path: '/HelloGravity',
    exact: true,
    gnavi: true,
    title: 'HelloGravity',
    category: 'faq_log',
    component: HelloText,
  },
  {
    path: '*',
    exact: false,
    gnavi: false,
    component: NotFound,
  },
];
