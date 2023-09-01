import axios from 'axios'
import { type User } from '../types'

// const baseUrl = 'http://localhost:3000/user'
const baseUrl = 'https://backend-hqcs-dev.fl0.io/user'

const login = async ({ email, password }: { email: string, password: string }): Promise<User> => {
  const { data } = await axios.post(`${baseUrl}/${'login'}`, { email, password })
  return data
}

const create = async ({ name, email, password }: { name: string, email: string, password: string }): Promise<User> => {
  const { data } = await axios.post(baseUrl, { name, email, password })
  return data
}

export default { login, create }
