import Top from 'components/pages/Top';
import NotFound from 'components/pages/NotFound';
import { InteractiveCubesOrtho } from 'containers/interactive/InteractiveCubesOrtho';
import { TexturedBox } from 'containers/geometry/TexturedBox';
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
    path: '/TexturedBox',
    exact: true,
    gnavi: true,
    title: 'TexturedBox',
    category: 'faq_log',
    component: TexturedBox,
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
