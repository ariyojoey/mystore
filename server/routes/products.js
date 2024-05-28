const express = require("express")
const {fetchAllProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/products")
const upload = require('../middlewares/upload');

const router = express.Router()




router.get('/', fetchAllProducts)

router.get('/:id', getProduct)

router.post('/', upload.single('image'), createProduct)


router.put('/:id', upload.single('image'), updateProduct)


router.delete('/:id', deleteProduct)



module.exports = router