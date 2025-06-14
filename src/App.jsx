import { RouterProvider } from 'react-router-dom';

// project-imports
import router from 'routes';
import ThemeCustomization from 'themes';

import Locales from 'components/Locales';
import RTLLayout from 'components/RTLLayout';
import ScrollTop from 'components/ScrollTop';
import Customization from 'components/Customization';
import Snackbar from 'components/@extended/Snackbar';
import Notistack from 'components/third-party/Notistack';
import Metrics from 'metrics';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

export default function App() {
  return (
    <>
      <ThemeCustomization>
        <RTLLayout>
          <Locales>
            <ScrollTop>
              <>
                <Notistack>
                  <RouterProvider router={router} />
                  <Customization />
                  <Snackbar />
                </Notistack>
              </>
            </ScrollTop>
          </Locales>
        </RTLLayout>
      </ThemeCustomization>
      <Metrics />
    </>
  );
}
