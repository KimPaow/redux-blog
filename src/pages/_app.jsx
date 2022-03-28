import { darkTheme, lightTheme } from '@/theme';
import { usePrefersDarkMode } from "@/helpers/hooks/usePrefersDarkMode"
import { globalStyles } from "@/stitches/globalStyles"

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = usePrefersDarkMode();

  globalStyles();

  return (
    <div data-app className={prefersDarkMode ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
