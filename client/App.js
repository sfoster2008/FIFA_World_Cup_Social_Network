import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {pink, orange} from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#52c7b8',
    main: '#0f4583',
    dark: '#00675b',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ffd95b',
    main: '#0f4583',
    dark: '#c77800',
    contrastText: '#000',
  },
    openTitle: pink['#1A237E'],
    protectedTitle: orange['700'],
    type: 'light'
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
