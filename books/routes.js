var express = require('express')
var router = express.Router()

const { getBooks, addBook } = require('./controller')

router.get('/', getBooks)
router.post('/', addBook)

module.exports = router
