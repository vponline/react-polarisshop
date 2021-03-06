import React from "react"
import "@shopify/polaris/dist/styles.css"
import "./App.scss"
import { BrowserRouter, Switch } from "react-router-dom"
import enTranslations from "@shopify/polaris/locales/en.json"
import { AppProvider } from "@shopify/polaris"

import ApolloProvider from "./ApolloProvider"
import { ProductProvider } from "./context/product"
import AppRoute from "./routing/AppRoute"

// import FrameContainer from "./components/FrameContainer"
import TopBarComponent from "./components/TopBarComponent"
import NavigationComponent from "./components/NavigationComponent"
import Products from "./components/Products"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"
import About from "./components/About"
import Logo from "./components/img/logo_horizontal_transparent.png"

function App() {
  const theme = {
    colors: {
      topBar: {
        //background: "#ffffffff",
      },
    },
    logo: {
      width: 150,
      topBarSource: Logo,
      url: "/",
      accessibilityLabel: "Polaris Shop",
    },
  }
  return (
    <ApolloProvider>
      <ProductProvider>
        <BrowserRouter>
          <Switch>
            <AppProvider theme={theme} i18n={enTranslations}>
              {/* <FrameContainer> */}
              <TopBarComponent />
              <NavigationComponent />
              <AppRoute exact path="/" component={Landing} />
              <AppRoute path="/products" component={Products} />
              <AppRoute path="/dashboard" component={Dashboard} />
              <AppRoute path="/about" component={About} />
              {/* </FrameContainer> */}
            </AppProvider>
          </Switch>
        </BrowserRouter>
      </ProductProvider>
    </ApolloProvider>
  )
}

export default App
