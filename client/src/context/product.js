import React, { createContext, useReducer, useContext } from "react"

const ProductStateContext = createContext()
const ProductDispatchContext = createContext()

const productReducer = (state, action) => {
  // const { id, title, price, description, category, image } = action.payload

  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      }
    case "SET_PRODUCT_BY_ID":
      return {
        ...state,
        product: action.payoad,
      }
    case "SET_PRODUCTS_BY_CATEGORY":
      return {
        ...state,
        products: action.payload,
      }
    case "SET_SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: null,
    selectedCategory: "all products",
  })

  return (
    <ProductDispatchContext.Provider value={dispatch}>
      <ProductStateContext.Provider value={state}>
        {children}
      </ProductStateContext.Provider>
    </ProductDispatchContext.Provider>
  )
}

export const useProductState = () => useContext(ProductStateContext)
export const useProductDispatch = () => useContext(ProductDispatchContext)
