import axios from 'axios'
import humps from 'humps'

const getBaseURL = () => {
  const env = {
    production: 'https://lk-task-manager.herokuapp.com',
    development: 'http://localhost:5000/api'
  }

  return env[process.env.NODE_ENV]
}

const api = axios.create({ baseURL: getBaseURL() })

api.interceptors.request.use(async config => {
  const token = localStorage.getItem('@company-token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  config.data = humps.decamelizeKeys(config.data)
  config.params = humps.decamelizeKeys(config.params)

  return config
})

api.interceptors.response.use(
  resp => {
    const response = humps.camelizeKeys(resp.data)
    return response
  },
  error => {
    if (error.response.status === 401) {
      // logout logic
      return
    }
    return Promise.reject(error.response.data)
  }
)

export default api
