var express = require('express')
var router = express.Router()

const authors = require('../authors')
const books = require('../books')

router.use('/authors', authors.routes)
router.use('/books', books.routes)

module.exports = router
