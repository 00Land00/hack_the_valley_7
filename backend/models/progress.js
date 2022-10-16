const mongoose = require('mongoose')

const progressSchema = new mongoose.Schema({
  name: String,
  value: Number,
  level: Number,
  max_value: Number
})

module.exports = mongoose.model('Progress', progressSchema)