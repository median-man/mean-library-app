const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = { Book }
