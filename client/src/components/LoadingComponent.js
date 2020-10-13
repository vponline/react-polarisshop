import React from "react"
import {
  Layout,
  Card,
  TextContainer,
  SkeletonPage,
  SkeletonBodyText,
  SkeletonDisplayText,
} from "@shopify/polaris"

const LoadingComponent = () => {
  return (
    <SkeletonPage primaryAction secondaryActions={2}>
      <Layout>
        <Layout.Section secondary>
          <Card>
            <Card.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={1} />
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  )
}

export default LoadingComponent
