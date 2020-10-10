const db = require("../db.json")

module.exports = {
  Query: {
    getProducts: () => {
      try {
        const products = db.products
        return products
      } catch (err) {
        console.log(err)
      }
    },
    getProductById: (_, args) => {
      const { id } = args
      try {
        const product = db.products.find((product) => product.id === id)
        return product
      } catch (err) {
        console.log(err)
      }
    },
    getProductByCategory: (_, args) => {
      const { category } = args
      try {
        const product = db.products.filter(
          (product) => product.category === category
        )
        return product
      } catch (err) {
        console.log(err)
      }
    },
  },
}
