const { ApolloServer, gql } = require("apollo-server")

const resolvers = require("./graphql/resolvers")
const typeDefs = require("./graphql/typeDefs")

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server running on port ${url}`)
})
