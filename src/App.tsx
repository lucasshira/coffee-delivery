import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
