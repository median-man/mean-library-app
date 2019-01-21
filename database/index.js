const mongoose = require('mongoose')

const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/mean-library'

const defaultConnectionOptions = { useCreateIndex: true, useNewUrlParser: true }

function connect(options = defaultConnectionOptions) {
  return mongoose.connect(
    mongodbUri,
    options
  )
}

module.exports = { connect }
