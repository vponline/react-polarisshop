import React, { useState } from "react"
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

const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      title
      price
      category
      image
    }
  }
`

const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: String!) {
    getProduct(id: $id) {
      id
      title
      price
      category
      image
    }
  }
`

const GET_PRODUCT_BY_CATEGORY = gql`
  query getProductById($category: String!) {
    getProduct(category: $category) {
      id
      title
      price
      category
      image
    }
  }
`

export const Products = () => {
  const dispatch = useProductDispatch()
  const { products, selectedCategory } = useProductState()

  const { loading } = useQuery(GET_PRODUCTS, {
    onCompleted: (data) =>
      dispatch({ type: "SET_PRODUCTS", payload: data.getProducts }),
    onError: (err) => console.log(err),
  })

  /////product by Id
  const selectedProduct = products?.find((p) => p.selected === true)
  const { loadingById } = useQuery(GET_PRODUCT_BY_ID, {
    onCompleted: (data) => console.log(data),
    onError: (err) => console.log(err),
  })

  ///

  const { loadingByCategory } = useQuery(GET_PRODUCT_BY_CATEGORY, {
    onCompleted: (data) =>
      dispatch({
        type: "SET_PRODUCTS_BY_CATEGORY",
        payload: data.getProductsByCategory,
      }),
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
              content: "Add to cart",
              onAction: () => {
                alert("Product added to cart!")
              },
            }}
            secondaryAction={{
              content: "Add to wishlist",
              onAction: () => {
                alert("Added to wishlist!")
              },
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
              content: "Add to cart",
              onAction: () => {
                alert("Product added to cart!")
              },
            }}
            secondaryAction={{
              content: "Add to wishlist",
              onAction: () => {
                alert("Added to wishlist!")
              },
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
