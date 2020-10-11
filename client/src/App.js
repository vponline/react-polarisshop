import React from "react"
import "@shopify/polaris/dist/styles.css"
import "./App.scss"
import { BrowserRouter, Switch } from "react-router-dom"
import enTranslations from "@shopify/polaris/locales/en.json"
import { AppProvider } from "@shopify/polaris"

import ApolloProvider from "./ApolloProvider"
import { ProductProvider } from "./context/product"
import AppRoute from "./routing/AppRoute"

import FrameContainer from "./components/FrameContainer"
import TopBarComponent from "./components/TopBarComponent"
import Products from "./components/Products"
import Landing from "./components/Landing"
import About from "./components/About"

function App() {
  return (
    <ApolloProvider>
      <ProductProvider>
        <BrowserRouter>
          <Switch>
            <AppProvider i18n={enTranslations}>
              {/* <FrameContainer> */}
              <TopBarComponent />
              <AppRoute exact path="/" component={Landing} />
              <AppRoute path="/products" component={Products} />
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
