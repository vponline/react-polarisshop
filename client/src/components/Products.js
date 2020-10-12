import React, { useState, useCallback } from "react"
import { gql, useQuery } from "@apollo/client"
import { useProductDispatch, useProductState } from "../context/product"
import {
  Layout,
  Page,
  Card,
  MediaCard,
  Thumbnail,
  Button,
  Image,
} from "@shopify/polaris"
import CategoryComponent from "./CategoryComponent"
import Product from "./Product"

const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      title
      price
      description
      category
      image
    }
  }
`

// const GET_PRODUCT_BY_ID = gql`
//   query getProductById($id: String!) {
//     getProduct(id: $id) {
//       id
//       title
//       price
//       category
//       image
//     }
//   }
// `

// const GET_PRODUCT_BY_CATEGORY = gql`
//   query getProductById($category: String!) {
//     getProduct(category: $category) {
//       id
//       title
//       price
//       category
//       image
//     }
//   }
// `

export const Products = () => {
  const dispatch = useProductDispatch()
  const { products, selectedCategory } = useProductState()
  const [selectedProduct, setSelectedProduct] = useState()

  const [active, setActive] = useState(false)
  const handleChange = useCallback((id) => {
    setActive(!active)
    setSelectedProduct(id)
  }, [])
  const handleClose = useCallback(() => setActive(!active), [active])

  const { loading } = useQuery(GET_PRODUCTS, {
    onCompleted: (data) =>
      dispatch({ type: "SET_PRODUCTS", payload: data.getProducts }),
    onError: (err) => console.log(err),
  })

  let productContent
  if (!products || loading) {
    productContent = <p>Loading...</p>
  } else if (products.length === 0) {
    productContent = <p>No products available yet</p>
  } else if (products.length > 0) {
    productContent = products.map((product) => {
      if (selectedCategory === "all products") {
        return (
          <MediaCard
            title={product.title}
            primaryAction={{
              content: "View Details",
              onAction: () => handleChange(product.id),
            }}
            secondaryAction={{
              content: "Add to wishlist",
              // onAction: handleChange,
            }}
            description={product.price + " €"}
            popoverActions={[{ content: "Help", onAction: () => {} }]}>
            <img
              alt={product.title}
              width="auto"
              height="200px"
              style={{ objectFit: "cover", objectPosition: "center" }}
              src={product.image}
            />
          </MediaCard>
        )
      }
      if (product.category === selectedCategory) {
        return (
          <MediaCard
            title={product.title}
            primaryAction={{
              content: "View Details",
              onAction: handleChange,
            }}
            secondaryAction={{
              content: "Add to wishlist",
              // onAction:
            }}
            description={product.price + " €"}
            popoverActions={[{ content: "Help", onAction: () => {} }]}>
            <img
              alt={product.title}
              width="auto"
              height="200px"
              style={{ objectFit: "cover", objectPosition: "center" }}
              src={product.image}
            />
          </MediaCard>
        )
      }
    })
  }

  return (
    <Page title="Products Page">
      <Layout>
        <Layout.Section>
          <CategoryComponent />
          <Product
            active={active}
            selectedProduct={selectedProduct}
            handleClose={handleClose}
          />
        </Layout.Section>
        <Layout.Section>
          {/* <Card sectioned> */}
          {productContent}
          {/* </Card> */}
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default Products
