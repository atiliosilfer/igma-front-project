import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
