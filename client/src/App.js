import React from 'react'
import Router from './Routes'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router />
    </React.Fragment>
  )
}

export default App
