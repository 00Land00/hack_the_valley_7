const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  name: String,
  categories: [String],
  dayOfWeek: String,
  isCompleted: Boolean
})

exerciseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Exercise', exerciseSchema)