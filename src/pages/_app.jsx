import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import ErrorBoundary from '@/components/_common/error-boundary';
import { AppLayout } from '@/components/_common/layout/AppLayout';
import { darkTheme, lightTheme } from '@/theme/stitches.config';
import { globalStyles } from "@/theme/globalStyles"
import { usePrefersDarkMode } from "@/utils/hooks/usePrefersDarkMode"
import store from '@/redux/store';

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = usePrefersDarkMode();
  const router = useRouter();

  useEffect(() => {
    Fathom.load('YANNQPPK', {
      includedDomains: ['reduxblog.bjorkman.kim', 'wwww.reduxblog.bjorkman.kim', 'bjorkman.kim', 'www.bjorkman.kim'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (prefersDarkMode) {
      document.body.classList.remove(lightTheme)
      document.body.classList.add(darkTheme)
    } else {
      document.body.classList.remove(darkTheme)
      document.body.classList.add(lightTheme)
    }
  }, [prefersDarkMode])


  globalStyles();

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </ErrorBoundary>
  )
}

export default MyApp
