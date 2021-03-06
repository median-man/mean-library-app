const { Author } = require('./Author')

async function getAuthors(req, res) {
  const authors = await Author.find({})
  res.json(authors)
}

async function addAuthor(req, res, next) {
  try {
    const { name } = req.body
    const author = new Author({ name })
    await author.save()
    return res.json(author)
  } catch (error) {
    // #TODO - implement error handling
    return next(error)
  }
}

async function findAuthorById(req, res, next) {
  const { id } = req.params
  try {
    const author = await Author.findById(id)
    return res.json(author)
  } catch(error) {
    // #TODO - implement error handling
    return next(error)
  }
}

module.exports = { getAuthors, addAuthor, findAuthorById }
