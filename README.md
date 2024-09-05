# OttoBookStore

# Auth
POST /auth/register: Register a new user.
POST /auth/login: Authenticate a user and receive a token.

# Category
POST [/api/categories] (Authenticated users only) (http://localhost:3000/api/categories)
GET [/api/categories] (Authenticated users only) (http://localhost:3000/api/categories)

# Books
GET [/api/books]: Fetch all books (limit 100)(http://localhost:3000/api/books)
GET [/api/books/search]
: Fetch book by ID, Title (partial), ISBN, Author, or Category.(http://localhost:3000/api/books/search?title=&author=...)
POST [/api/books]: Add a new book (Authenticated users only).(http://localhost:3000/api/books)
PUT [/api/books/bookId]
: Update book by ID (Authenticated users only). (http://localhost:3000/api/books/:bookId)
DELETE [/api/books/:bookId]
: Remove book by ID (Authenticated users only). (http://localhost:3000/api/books/bookId)

# .env
# Secret key used to sign and verify JWT tokens
JWT_SECRET=my_super_secret_key

# MongoDB connection string
MONGO_URI=mongodb://localhost:27017/bookstore