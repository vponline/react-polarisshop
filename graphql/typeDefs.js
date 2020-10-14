const { gql } = require("apollo-server")

module.exports = gql`
  type Product {
    id: String!
    title: String!
    price: Float!
    description: String!
    category: String!
    quantity: Float!
    image: String!
  }
  type Query {
    getProducts: [Product]!
    getLatestProducts: [Product]!
    getProductById(id: String!): Product!
    getProductByCategory(category: String!): [Product]!
  }
`
