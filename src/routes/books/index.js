const express = require('express')
const bookController = require('../../controllers/book.controller')
const { authenticate } = require('../../middleware/authMiddleware')
const router = express.Router()

router.get('/', bookController.getListOfAllBooks)

router.get('/search', bookController.searchBooksByDifferentParameters)

router.post('/', authenticate, bookController.createBook)

router.put('/:id', authenticate, bookController.updateBook)

router.delete('/:id', authenticate, bookController.deleteBook)

module.exports = router;