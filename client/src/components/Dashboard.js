import React, { useState, useEffect, useCallback } from "react"
import { gql, useQuery } from "@apollo/client"
import { useProductDispatch, useProductState } from "../context/product"
import { Page, Card, DataTable } from "@shopify/polaris"
import LoadingComponent from "./LoadingComponent"

const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      title
      price
      description
      category
      quantity
      image
    }
  }
`

const Dashboard = () => {
  const dispatch = useProductDispatch()
  const { products } = useProductState()
  const [sortedRows, setSortedRows] = useState(null)
  const initiallySortedRows = []
  const rows = sortedRows ? sortedRows : initiallySortedRows
  const productQuantities = []
  const totalSales = []

  const { loading } = useQuery(GET_PRODUCTS, {
    onCompleted: (data) =>
      dispatch({ type: "SET_PRODUCTS", payload: data.getProducts }),
    onError: (err) => console.log(err),
  })

  const handleSort = useCallback(
    (index, direction) => setSortedRows(sortCurrency(rows, index, direction)),
    [rows]
  )

  function sortCurrency(rows, index, direction) {
    return [...rows].sort((rowA, rowB) => {
      const amountA = parseFloat(rowA[index].slice(0, -1))
      const amountB = parseFloat(rowB[index].slice(0, -1))

      return direction === "descending" ? amountB - amountA : amountA - amountB
    })
  }

  let dashboardContent
  if (!products || loading) {
    dashboardContent = <LoadingComponent />
  } else if (products.length === 0) {
    dashboardContent = <p>No products available yet</p>
  } else if (products.length > 0) {
    // dashboardContent =
    products.map((product) => {
      initiallySortedRows.push([
        product.title,
        product.price.toLocaleString("en-US", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        }) + "€",
        product.id,
        product.quantity,
        (product.price * product.quantity).toLocaleString("en-US", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        }) + "€",
      ])

      productQuantities.push(product.quantity)
      totalSales.push(product.price * product.quantity)
    })
  }

  useEffect(() => {
    console.log(
      productQuantities.reduce(function (a, b) {
        return a + b
      }, 0)
    )
    console.log(
      totalSales.reduce(function (a, b) {
        return a + b
      }, 0)
    )
  }, [productQuantities, totalSales])

  return (
    <Page title="Merchant Dashboard" subtitle="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            "text",
            "numeric",
            "numeric",
            "numeric",
            "numeric",
          ]}
          headings={[
            "Product",
            "Price",
            "Product Id",
            "Net quantity",
            "Net sales",
          ]}
          rows={rows}
          totals={[
            "",
            "",
            "",
            productQuantities.reduce(function (a, b) {
              return a + b
            }, 0),
            totalSales
              .reduce(function (a, b) {
                return a + b
              }, 0)
              .toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              }) + "€",
          ]}
          sortable={[false, true, false, false, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          onSort={handleSort}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
        />
        {dashboardContent}
      </Card>
    </Page>
  )
}

export default Dashboard
