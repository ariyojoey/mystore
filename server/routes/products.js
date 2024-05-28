const express = require("express")
const {fetchAllProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/products")


const router = express.Router()




router.get('/', fetchAllProducts)

router.get('/:id', getProduct)

router.post('/', createProduct)


router.put('/:id', updateProduct)


router.delete('/:id', deleteProduct)



module.exports = router