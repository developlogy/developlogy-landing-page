import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project-imports
import ComponentsRoutes from './ComponentsRoutes';

import Loadable from 'components/Loadable';
import { SimpleLayoutType } from '../config';
import SimpleLayout from 'layout/Simple';
import ContactUs from '../pages/contact-us';
import AboutUs from '../pages/about-us';
import B2BSection from '../sections/services/B2BSection';
import CloudSolutionsSecton from '../sections/services/CloudSolutionsSection';
import CreativeAdvertisingSection from '../sections/services/CreativeAdvertisingSection';
import ITSolutionsSection from '../sections/services/ITSolutionsSection';
import SEOSection from '../sections/services/SEOSection';
import WikipediaServicesSection from '../sections/services/WikipediaServicesSection';

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
        },
        {
          path: '/services/cloud-solutions',
          element: <CloudSolutionsSecton />
        },
        {
          path: '/services/creative-advertising',
          element: <CreativeAdvertisingSection />
        },
        {
          path: '/services/it-solutions',
          element: <ITSolutionsSection />
        },
        {
          path: '/services/b2b-services',
          element: <B2BSection />
        },
        {
          path: '/services/seo-content',
          element: <SEOSection />
        },
        {
          path: '/services/wikipedia',
          element: <WikipediaServicesSection />
        }
      ]
    },
    ComponentsRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
