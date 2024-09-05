const { getListOfAllBooks, searchBooksByDifferentParameters, createBook, updateBook, deleteBook } = require('../services/book.service')
const {  SuccessResponse } = require('../core/success.response')

class BookController {

    //GET /books - Retrieve a list of all books (limit 100)
    getListOfAllBooks = async (req, res, next) => {
        new SuccessResponse({
            message: 'get list all of books successfully',
            metadata: await getListOfAllBooks(req.query)

        }).send(res)
    }

    // GET /books/search (Search by ID/Title/ISBN/Author/Category)
    searchBooksByDifferentParameters = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get list books by filter successfully',
            metadata: await searchBooksByDifferentParameters(req.query)
        }).send(res)
    }

    // POST /books (Add a new book)
    createBook = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create book successfully',
            metadata: await createBook(req.body)
        }).send(res)
    }

    // PUT /books/:id - Update an existing book
    updateBook = async (req, res, next) => {   
        new SuccessResponse({
            message: 'Update book successfully',
            metadata: await updateBook(req.params.id, {
                ...req.body
            })
        }).send(res)
    }

    // DELETE /books/:id - Remove a book by ID
    deleteBook = async (req, res, next) => {
        new SuccessResponse({
            message: 'Deleted book successfully',
            metadata: await deleteBook(req.params.id)
        }).send(res)
    }
}

module.exports = new BookController()