import React from "react"
import "@shopify/polaris/dist/styles.css"
import "./App.css"

import ApolloProvider from "./ApolloProvider"
import Products from "./components/Products"

import { AppProvider, Page, Card, Button } from "@shopify/polaris"
import enTranslations from "@shopify/polaris/locales/en.json"

function App() {
  return (
    <ApolloProvider>
      <AppProvider i18n={enTranslations}>
        <Page title="Example app">
          <Card sectioned>
            <Products />
            <Button onClick={() => alert("Button clicked!")}>
              Example button
            </Button>
          </Card>
        </Page>
      </AppProvider>
    </ApolloProvider>
  )
}

export default App
