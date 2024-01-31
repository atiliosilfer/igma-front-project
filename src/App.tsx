import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Avatar } from './components/Avatar'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>Assinar Newsletter</Button>
      <br />
      <Button variant="lg">Assinar Newsletter</Button>
      <br />
      <Button disabled>Assinar Newsletter</Button>

      <br />
      <Input placeholder="Label" />
      <br />
      <Input variant="lg" placeholder="Label" />
      <br />
      <Input variant="lg" placeholder="Label" disabled />

      <br />
      <Avatar variant="lg" />
      <br />
      <Avatar />
      <br />
      <Avatar disabled />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
