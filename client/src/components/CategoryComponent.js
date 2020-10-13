import React, { useState, useCallback } from "react"
import { Card, Tabs } from "@shopify/polaris"
import { useProductDispatch } from "../context/product"

const CategoryComponent = () => {
  const dispatch = useProductDispatch()
  const [selected, setSelected] = useState()

  const handleTabChange = useCallback((selectedTabIndex) => {
    setSelected(selectedTabIndex)
    dispatch({
      type: "SET_SELECTED_CATEGORY",
      payload: tabs[selectedTabIndex].id,
    })
  }, [])

  const tabs = [
    {
      id: "all products",
      content: "All Products",
      accessibilityLabel: "All customers",
      panelID: "all-products-content",
    },
    {
      id: "women clothing",
      content: "Women's Clothing",
      panelID: "women-clothing-content",
    },
    {
      id: "men clothing",
      content: "Men's Clothing",
      panelID: "men-clothing-content",
    },
    {
      id: "electronics",
      content: "Electronics",
      panelID: "electronics-content",
    },
    {
      id: "jewelery",
      content: "Jewelery",
      panelID: "jewelery-content",
    },
  ]
  return (
    <Card>
      <Tabs
        tabs={tabs}
        selected={selected}
        onSelect={handleTabChange}
        fitted></Tabs>
    </Card>
  )
}

export default CategoryComponent
