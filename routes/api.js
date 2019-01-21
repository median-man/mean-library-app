var express = require('express')
var router = express.Router()

const authors = require('../authors')
const books = require('../books')

router.get('/authors', authors.getAuthors)
router.post('/authors', authors.addAuthor)

router.get('/books', books.getBooks)
router.post('/books', books.addBook)

module.exports = router
