import axios from 'axios'
const baseUrl = '/api/exercise'

const getExercisesOfTheDay = (dayOfTheWeek) => {
  const request = axios.get(`${baseUrl}s/${dayOfTheWeek}`)
  return request.then(response => response.data)
}

const updateExerciseCompletion = (exerciseObj) => {
  const request = axios.post(`${baseUrl}Completion`, exerciseObj)
  return request.then(response => response.data)
}

const exerciseEndpoint = {getExercisesOfTheDay, updateExerciseCompletion}

export default exerciseEndpoint