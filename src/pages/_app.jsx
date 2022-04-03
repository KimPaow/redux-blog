
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import ErrorBoundary from '@/components/dom/error-boundary';
import { darkTheme, lightTheme } from '@/theme/stitches.config';
import { globalStyles } from "@/theme/globalStyles"
import { usePrefersDarkMode } from "@/utils/hooks/usePrefersDarkMode"
import Box from '@/components/dom/box';
import store from '@/store';

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false)
  const prefersDarkMode = usePrefersDarkMode();

  useEffect(() => {
    setDark(prefersDarkMode)
  }, [prefersDarkMode])

  globalStyles();

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div data-app className={dark ? darkTheme : lightTheme}>
          <Box css={{ backgroundColor: '$bg_body', minHeight: '100vh' }}>
            <Component {...pageProps} />
          </Box>
        </div>
      </Provider>
    </ErrorBoundary>
  )
}

export default MyApp
