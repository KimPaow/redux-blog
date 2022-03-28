import { darkTheme, lightTheme } from '@/theme';
import { usePrefersDarkMode } from "@/utils/hooks/usePrefersDarkMode"
import { globalStyles } from "@/stitches/globalStyles"
import { SWRConfig } from 'swr'
import { fetcher } from '@/utils/api';

const swrConfig = {
  fetcher
}

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = usePrefersDarkMode();

  globalStyles();

  return (
    <div data-app className={prefersDarkMode ? darkTheme : lightTheme}>
      <SWRConfig value={swrConfig}>
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  )
}

export default MyApp
