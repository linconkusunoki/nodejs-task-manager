import api from './api'

export const usersLogin = async data => {
  const resp = await api.post('/users/login', data)
  return resp
}

export const usersNewAccount = async data => {
  const resp = await api.post('/users', data)
  return resp
}
