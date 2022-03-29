
import { SWRConfig } from 'swr'
import { Provider } from 'react-redux';
import { darkTheme, lightTheme } from '@/theme';
import { usePrefersDarkMode } from "@/utils/hooks/usePrefersDarkMode"
import { globalStyles } from "@/stitches/globalStyles"
import { fetcher } from '@/utils/api';
import store from '@/store';

const swrConfig = {
  fetcher
}

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = usePrefersDarkMode();

  globalStyles();

  return (
    <Provider store={store}>
      <SWRConfig value={swrConfig}>
        <div data-app className={prefersDarkMode ? darkTheme : lightTheme}>
          <Component {...pageProps} />
        </div>
      </SWRConfig>
    </Provider>
  )
}

export default MyApp
