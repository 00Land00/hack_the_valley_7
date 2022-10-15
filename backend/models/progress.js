const mongoose = require('mongoose')

const progressSchema = new mongoose.Schema({
  name: String,
  value: Number,
  level: Number,
  max_value: Number
})

progressSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Progress', progressSchema)