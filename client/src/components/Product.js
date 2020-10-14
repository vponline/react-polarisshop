import React from "react"
import { Modal, Heading, TextContainer } from "@shopify/polaris"
import { useProductState } from "../context/product"
import LoadingComponent from "./LoadingComponent"

const Product = ({ handleChange, active, handleClose, selectedProduct }) => {
  const { products } = useProductState()

  let selectedProductContent
  if (!products) {
    selectedProductContent = <LoadingComponent />
  } else if (products.length === 0) {
    selectedProductContent = <p>No products available yet</p>
  } else if (products.length > 0) {
    selectedProductContent = products.map((product) => {
      if (product.id === selectedProduct) {
        return (
          <div key={product.id} style={{}}>
            <Modal
              // activator={activator}
              open={active}
              onClose={handleClose}
              title={product.title}
              primaryAction={{
                content: "Add to cart",
                onAction: handleChange,
              }}
              secondaryActions={[
                {
                  content: "Add to wishlist",
                  onAction: handleChange,
                },
              ]}>
              <Modal.Section>
                <TextContainer>
                  <img
                    alt={product.title}
                    width="auto"
                    height="200px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    src={product.image}
                  />
                  <div>
                    <Heading>Price: </Heading>
                    <span>
                      {product.price.toLocaleString("en-US", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      }) + " €"}
                    </span>
                  </div>
                  <div>
                    <Heading>Description</Heading>
                    <p>{product.description}</p>
                  </div>
                </TextContainer>
              </Modal.Section>
            </Modal>
          </div>
        )
      }
    })
  }

  return <>{selectedProductContent}</>
}

export default Product
