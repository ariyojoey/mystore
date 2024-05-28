const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/auth')
const productRoutes = require('./routes/products')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()


dotenv.config()

app.use(bodyParser.json({
    limit: "30mb",
    extended:true
}))

app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}))

//Cors should be above your middleware
app.use(cors())

app.get('/', (req, res) => {
    res.send("APP IS RUNNING")
})

app.use('/api/auth', userRoutes)
app.use('/api/products', productRoutes)

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000


mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, console.log(`Server running on port ${PORT}...`)))
.catch((err) => {console.error(err.message)})