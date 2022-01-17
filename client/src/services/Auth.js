import Client from './api'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  }
  catch (err) {
    throw err
  }
}

export const LogInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}