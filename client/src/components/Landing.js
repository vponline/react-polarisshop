import React, { useState } from "react"
import { gql, useQuery } from "@apollo/client"
import { Page, Layout, MediaCard } from "@shopify/polaris"
import LandingBanner from "./LandingBanner"
import LoadingComponent from "./LoadingComponent"
import { useHistory } from "react-router-dom"

const GET_LATEST_PRODUCTS = gql`
  query getLatestProducts {
    getLatestProducts {
      id
      title
      price
      description
      category
      image
    }
  }
`

const Landing = () => {
  const [landingProducts, setLandingProducts] = useState()
  const history = useHistory()

  const { loading } = useQuery(GET_LATEST_PRODUCTS, {
    onCompleted: (data) => {
      setLandingProducts(data.getLatestProducts)
    },
    onError: (err) => console.log(err),
  })

  let landingProductsContent
  if (!landingProducts || loading) {
    landingProductsContent = <LoadingComponent />
  } else if (landingProducts.length === 0) {
    landingProductsContent = <p>No products available yet</p>
  } else if (landingProducts.length > 0) {
    landingProductsContent = landingProducts.map((product) => (
      <Layout.Section key={product.id} oneThird>
        <MediaCard
          portrait
          title={product.title}
          primaryAction={{
            content: "Go to Products",
            onAction: () => history.push("/products"),
          }}
          description={product.price + " €"}>
          <img
            alt={product.title}
            width="auto"
            height="200px"
            style={{ objectFit: "cover", objectPosition: "center" }}
            src={product.image}
          />
        </MediaCard>
      </Layout.Section>
    ))
  }

  return (
    <>
      <LandingBanner />
      <Page title="New Products">
        <Layout>{landingProductsContent}</Layout>
      </Page>
    </>
  )
}

export default Landing
