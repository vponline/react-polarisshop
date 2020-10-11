import React from "react"
import { Card, Image, Button } from "@shopify/polaris"

const Product = ({ products }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.price}</p>
    </Card>
  )
}

export default Product
