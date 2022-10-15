const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const Progress = require('./models/progress')
const Exercise = require('./models/exercise')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

// create a temporary api to upload the sample exercises
// create an axios library in the frontend

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('connected to MongoDB')
}).catch((err) => console.log(err))

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/exercises/:dayOfWeek', (request, response) => {
  Exercise.find({dayOfWeek: request.params.id}).then(exercise => {
    response.json(exercise)
  }).catch(error => next(error))
})

app.post('/api/exerciseCompletion/', (request, response) => {
  const body = request.body
  
  if (!body.name || !body.dayOfWeek) {
    return response.status(400).json({
      error: `missing name or dayOfWeek`
    })
  }

  const exercise = new Exercise({
    'name': body.name,
    'categories': body.categories,
    'dayOfWeek': body.dayOfWeek,
    'isCompleted': body.isCompleted
  })

  exercise.save().then(savedExercise => {
    response.json(savedExercise)
  }).catch(error => next(error))
})

// use %20 for space instead
app.get('/api/progress/:name', (request, response) => {
  Progress.findOne({name: request.params.name}).then(progress => {
    response.json(progress)
  })
})

app.post('/api/progress', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: `missing name`
    })
  }

  const progress = new Progress({
    'name': body.name,
    'value': body.value,
    'level': body.level,
    'max_value': body.max_value
  })

  progress.save().then(savedProgress => {
    response.json(savedProgress)
  }).catch(error => next(error))
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})