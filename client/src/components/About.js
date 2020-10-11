import React from "react"
import { Page, Card, Button } from "@shopify/polaris"

const About = () => {
  return (
    <Page title="About Page">
      <Card sectioned>
        <Button onClick={() => alert("Button clicked!")}>Example button</Button>
      </Card>
    </Page>
  )
}

export default About
