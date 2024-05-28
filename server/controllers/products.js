const Products = require("../models/Products")


const fetchAllProducts = async (req, res) => {
    const {page} = req.query;
    
    try {
        let products = await Products.find();
        let data;

        if (products.length > 24) {
            const LIMIT = 24
            const startIndex = (Number(page) - 1) * LIMIT
            const totalProducts = await PostMessage.countDocuments();
            products = await Products.find().sort({_id: -1}).limit(LIMIT).skip(startIndex)
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error })
    }
} 


const getProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await Products.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product)
    } catch (error) {
        res.json(500).json({message: 'Error getting product', error})
    }
}


const createProduct = async (req, res) => {
    const product = req.body
    const image = req.file ? req.file.filename : ''
    try{
        const newProduct = new Products({...product, image, createdAt: new Date().toISOString()})
        const savedProduct = await newProduct.save()
        
        res.status(201).json({product:savedProduct, message: 'Product created!'})
    } catch (error) {
        res.json(500).json({message: 'Error creating product', error})
    }
}


const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {title, description, price} = req.body;
    const image = req.file ? req.file.filename : req.body.image; // Use the new image if uploaded, else keep the existing image

    try {
        // Check if the title already exists in another product
        const existingProductWithTitle = await Products.findOne({ title });
        if (existingProductWithTitle && existingProductWithTitle._id.toString() !== id) {
            return res.status(400).json({ message: "Title already exists" });
        }

        const updatedProduct = await Products.findByIdAndUpdate(id, { $set: { title, description, price, image } }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ product: updatedProduct, message: "Successfully Updated!" });
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};


const deleteProduct =  async (req, res) => {
    const {id} = req.params;
    
    try {
        const deletedProduct = await Products.findByIdAndDelete(id);
        
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.json(500).json({message: 'Error deleting product', error})
    }
    
}





module.exports = {fetchAllProducts, getProduct, createProduct, updateProduct, deleteProduct}