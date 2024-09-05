const Book = require('../models/book.model')
const { NotFoundError } = require('../core/error.response')

const getListOfAllBooks = async({ limit, sort }) => {
    const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
    const books = await Book.find()
    .limit(limit)
    .sort(sortBy)
    .populate('category')

    return books
}

const searchBooksByDifferentParameters = async ({ title, isbn, author, category, priceRange }) => {
    const filter = {}
    if(title) filter.title = { $regex: title, $options: 'i'}
    if(isbn) filter.isbn = isbn
    if(author) filter.author = { $regex: author, $options: 'i' };
    if(category) filter.category = { $regex: category, $options: 'i' };
    if(priceRange ) filter.price = { $gte: priceRange.min, $lte: priceRange.max}

    const books = await Book.find(filter).populate('category')
    return books
}

const createBook = async (payload) => {
    const { title, isbn, author, category, price } = payload
    const book = new Book({
        title: title,
        isbn: isbn,
        author: author,
        category: category,
        price: price
    })

    return await book.save()
}

const updateBook = async ( id, bookData ) => {
   /* const { title, isbn, price, author, category, review } = bookData

     const book = await Book.findById(id)
    if(!book) throw new NotFoundError('Book not found')

    if (title) book.title = title;
    if (isbn) book.isbn = isbn;
    if (price) book.price = price;
    if (author) book.author = author;
    if (category) book.category = category;
    if (review) book.review = review;

    await book.save()
    return book */
    const book = await Book.findByIdAndUpdate(id, bookData, { new: true });
    await book.save()
    return book
}

const deleteBook = async (id) => {
    const book = await Book.findByIdAndDelete(id)
    if(!book) throw new NotFoundError('Book not found')
}

module.exports = {
    getListOfAllBooks,
    searchBooksByDifferentParameters,
    createBook,
    updateBook,
    deleteBook
}