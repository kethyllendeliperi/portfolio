import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import GlobalStyle, { Container } from './styles'
import lightTheme from './Themes/light'
import darkTheme from './Themes/dark'
import { useState } from 'react'

function App() {
  const [darkThemeOn, setDarkThemeOn] = useState(false)

  function changeTheme() {
    setDarkThemeOn(!darkThemeOn)
  }

  return (
    <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
