
import { Provider } from 'react-redux';
import { darkTheme, lightTheme } from '@/theme';
import { usePrefersDarkMode } from "@/utils/hooks/usePrefersDarkMode"
import { globalStyles } from "@/stitches/globalStyles"
import store from '@/store';
import { useEffect, useState } from 'react';
import Box from '@/components/dom/box';

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false)
  const prefersDarkMode = usePrefersDarkMode();

  useEffect(() => {
    setDark(prefersDarkMode)
  }, [prefersDarkMode])

  globalStyles();

  return (
    <Provider store={store}>
      <div data-app className={dark ? darkTheme : lightTheme}>
        <Box css={{ backgroundColor: '$bg_body', minHeight: '100vh' }}>
          <Component {...pageProps} />
        </Box>
      </div>
    </Provider>
  )
}

export default MyApp
