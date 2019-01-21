const { Book } = require('./Book')
const { Author } = require('../authors')

async function getBooks(req, res) {
  const books = await Book.find({})
  res.json(books)
}

async function addBook(req, res, next) {
  const { title, authorId } = req.body
  const author = await Author.findById(authorId)

  if (!author) {
    return res.status(400).send('Invalid authorId or author does not exist.')
  }

  const book = new Book({ title, author })
  await book.save()

  return res.json(book)
}

module.exports = { getBooks, addBook, Book }
