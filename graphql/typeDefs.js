const { gql } = require("apollo-server")

module.exports = gql`
  type Product {
    id: String!
    title: String!
    price: String!
    description: String!
    category: String!
    image: String!
  }
  type Query {
    getProducts: [Product]!
    getLatestProducts: [Product]!
    getProductById(id: String!): Product!
    getProductByCategory(category: String!): [Product]!
  }
`
