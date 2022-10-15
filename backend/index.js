const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const progressSchema = new mongoose.Schema({
  name: String,
  value: Number,
  level: Number,
  max_val: Number
})

const exerciseSchema = new mongoose.Schema({
  name: String,
  categories: [String],
  day_of_week: String
})

const Progress = mongoose.model('Progress', progressSchema)
const Exercise = mongoose.model('Exercise', exerciseSchema)
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI).then((result) => {
  console.log('connected')

  const progress = new Progress({
    name: "upper body",
    value: 34,
    level: 2,
    max_val: 100
  })

  const exercise = new Exercise({
    name: "Bench Press",
    categories: ['Upper Body'],
    day_of_week: 'Tuesday'
  })

  progress.save()
  exercise.save()
}).then(() => {
  console.log('progress saved!')
  return mongoose.connection.close()
}).catch((err) => console.log(err))

let notes = [
  "test1", "test2", "test3"
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})