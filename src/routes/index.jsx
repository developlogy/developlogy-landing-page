import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project-imports
import ComponentsRoutes from './ComponentsRoutes';

import Loadable from 'components/Loadable';
import { SimpleLayoutType } from '../config';
import SimpleLayout from 'layout/Simple';
import ContactUs from '../pages/contact-us';
import AboutUs from '../pages/about-us';

// render - landing page
const PagesLanding = Loadable(lazy(() => import('pages/landing')));

// ==============================|| ROUTES RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.LANDING} />,
      children: [
        {
          index: true,
          element: <PagesLanding />
        },
        {
          path: '/contact-us',
          element: <ContactUs />
        },
        {
          path: '/about-us',
          element: <AboutUs />
        }
      ]
    },

    ComponentsRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
