const { getListOfAllBooks, searchBooksByDifferentParameters, createBook, updateBook, deleteBook } = require('../repositories/book.repo')
const { getCategoryById } = require('../repositories/category.repo')
class BookService {
    //Ensure that the discount field is only present in books of the latest schema version.
    static async getListOfAllBooks({ limit = 100, sort = 'ctime' }){
        const books = await getListOfAllBooks({ limit, sort})
        return books
    }

    static async searchBooksByDifferentParameters({ title, isbn, author, category, priceRange }){
        const books = await searchBooksByDifferentParameters({ title, isbn, author, category, priceRange })
        return books
    }

    static async createBook(bookData){
        // const category = await getCategoryById(bookData.category);
        // if (!category) throw new Error('Invalid category');
        const book = await createBook(bookData)
        return book
    } 

    static async updateBook(id, bookData){
    // If the book already exists, ensure we don't downgrade the schema version
        const book = await updateBook( id, bookData)
        return book
    }

    static async deleteBook(id){
        await deleteBook(id)
    }
}

module.exports = BookService