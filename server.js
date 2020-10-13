const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")

const resolvers = require("./graphql/resolvers")
const typeDefs = require("./graphql/typeDefs")

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const app = express()
server.applyMiddleware({ app })

if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

//Apollo server without middleware
// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`Server running on port ${url}`)
// })

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)
