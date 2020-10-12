import React, { useState, useCallback } from "react"
import { Modal, Button, TextContainer } from "@shopify/polaris"
import { useProductState } from "../context/product"

const Product = ({ handleChange, active, handleClose, selectedProduct }) => {
  const { products } = useProductState()
  //   const activator = (
  //     <Button style={{ display: "none" }} onClick={handleChange}>
  //       Open
  //     </Button>
  //   )

  let selectedProductContent
  if (!products) {
    selectedProductContent = <p>Loading...</p>
  } else if (products.length === 0) {
    selectedProductContent = <p>No products available yet</p>
  } else if (products.length > 0) {
    selectedProductContent = products.map((product) => {
      if (product.id === selectedProduct) {
        return (
          <div style={{}}>
            <Modal
              // activator={activator}
              open={active}
              onClose={handleClose}
              title={product.title}
              primaryAction={{
                content: "Add Instagram",
                onAction: handleChange,
              }}
              secondaryActions={[
                {
                  content: "Learn more",
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
                  <p>{product.description}</p>
                </TextContainer>
              </Modal.Section>
            </Modal>
          </div>
        )
      }
    })
  }

  return <>{selectedProductContent}</>
  // <div style={{}}>
  //   <Modal
  //     // activator={activator}
  //     open={active}
  //     onClose={handleClose}
  //     title={"hello"}
  //     primaryAction={{
  //       content: "Add Instagram",
  //       onAction: handleChange,
  //     }}
  //     secondaryActions={[
  //       {
  //         content: "Learn more",
  //         onAction: handleChange,
  //       },
  //     ]}>
  //     <Modal.Section>
  //       <TextContainer>
  //         <p>
  //           Use Instagram posts to share your products with millions of
  //           people. Let shoppers buy from your store without leaving
  //           Instagram.
  //         </p>
  //       </TextContainer>
  //     </Modal.Section>
  //   </Modal>
  // </div>
}

export default Product
