import { createGlobalStyle, ThemeProvider } from 'styled-components'

import GlobalStyle from '../components/GlobalStyle'


const theme = {
  colors: {
    primary: '#0070f3',
  },
}
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
