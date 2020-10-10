const { ApolloServer, gql } = require("apollo-server")

const resolvers = require("./graphql/resolvers")
const typeDefs = require("./graphql/typeDefs")

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ port }) => {
  console.log(`Server running on port ${port}`)
})
