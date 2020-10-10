import React from "react"
import { gql, useQuery } from "@apollo/client"

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

export const Products = () => {
  const { loading } = useQuery(GET_PRODUCTS, {
    onCompleted: (data) => console.log(data),
    onError: (err) => console.log(err),
  })

  // const { loading } = useQuery(GET_PRODUCT_BY_ID, {
  //   onCompleted: (data) => console.log(data),
  //   onError: (err) => console.log(err),
  // })

  return <div>product component</div>
}

export default Products
