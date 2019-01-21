var express = require('express');
var router = express.Router();

const authors = require('../authors')

router.get('/authors', authors.getAuthors);
router.post('/authors', authors.addAuthor)

module.exports = router;
