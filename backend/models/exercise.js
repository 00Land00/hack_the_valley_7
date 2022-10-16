const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  name: String,
  categories: [String],
  dayOfWeek: String,
  isCompleted: Boolean
})

module.exports = mongoose.model('Exercise', exerciseSchema)