const mongoose = require("mongoose")

const productsSchema = mongoose.Schema({
    id: {
        type: Number
    },
    image: {
        type: String,
        required: true
    },
    price:  {
        type: Number,
        required: true
    },
    title:  {
        type: String,
        required: true,
        unique: true
    },
    description:  {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})


const Products = mongoose.model('Products', productsSchema)

module.exports = Products