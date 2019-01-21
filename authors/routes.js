var express = require('express')
var router = express.Router()

const { getAuthors, addAuthor, findAuthorById } = require('./controller')

router.get('/', getAuthors)
router.post('/', addAuthor)
router.get('/:id', findAuthorById)

module.exports = router
