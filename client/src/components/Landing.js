import React from "react"
import { Page, Layout, Card, Button, Image } from "@shopify/polaris"
import LandingBanner from "./LandingBanner"

const Landing = () => {
  return (
    <>
      <LandingBanner />
      <Page title="Landing Page">
        <Layout>
          <Layout.Section></Layout.Section>
          <Layout.Section>
            <Card sectioned>
              <Button onClick={() => alert("Button clicked!")}>
                Example button
              </Button>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card sectioned>
              <Button onClick={() => alert("Button clicked!")}>
                Example button
              </Button>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card sectioned>
              <Button onClick={() => alert("Button clicked!")}>
                Example button
              </Button>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  )
}

export default Landing
