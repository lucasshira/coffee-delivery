import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Outlet } from "react-router-dom"
import { CartContextProvider } from "./contexts/CartProvider"
import Footer from "./components/Footer"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        
      <CartContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
