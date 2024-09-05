const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv').config()
const bookRoutes = require('./src/routes/books/index.js')
const authRoutes = require('./src/routes/auth/index.js')
const categoryRoutes = require('./src/routes/category/index.js')
const app = express()

app.use(bodyParser.json())

app.use('/api/books', bookRoutes)
app.use('/auth', authRoutes)
app.use('/api/categories', categoryRoutes)

app.use((error, req, res, next) => {
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status:'error',
        code:statusCode,
        stack: error.stack,
        message: error.message || 'Internal server error'
    })
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
    .catch(err => console.log(err))