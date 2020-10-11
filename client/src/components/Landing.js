import React from "react"
import { Page, Card, Button } from "@shopify/polaris"

const Landing = () => {
  return (
    <Page title="Landing Page">
      <Card sectioned>
        <Button onClick={() => alert("Button clicked!")}>Example button</Button>
      </Card>
    </Page>
  )
}

export default Landing
