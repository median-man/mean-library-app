var express = require('express')
var router = express.Router()

const {getAuthors, addAuthor } = require('./controller')

router.get('/', getAuthors)
router.post('/', addAuthor)

module.exports = router
