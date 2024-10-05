import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Outlet } from "react-router-dom"
import { QuantityProvider } from "./contexts/QuantityContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QuantityProvider>
        <GlobalStyle />
        
        <Header />
        <Outlet />
      </QuantityProvider>
    </ThemeProvider>
  )
}

export default App
