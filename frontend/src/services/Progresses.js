import axios from 'axios'
const baseUrl = '/api/progress'

const getProgress = (progressName) => {
  const request = axios.get(`${baseUrl}/${progressName}`)
  return request.then(response => response.data)
}

const updateProgress = (progressObj) => {
  const request = axios.post(`${baseUrl}Completion`, progressObj)
  return request.then(response => response.data)
}

const progressEndpoint = {getProgress, updateProgress}

export default progressEndpoint