import React from "react"
import { Page, Card } from "@shopify/polaris"
import openVideo from "./img/open-video.mp4"

const About = () => {
  return (
    <>
      <video className="videoTag" autoPlay loop muted>
        <source src={openVideo} type="video/mp4" />
      </video>
      <Page title="About Page">
        <Card title="About Polaris Shop">
          <Card.Section title="Our Story">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Card.Section>
        </Card>
      </Page>
    </>
  )
}

export default About
