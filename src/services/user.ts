import axios from 'axios'

import { type Token, type ProductData, type User, type ApiMPresponse } from '../types'

// const baseUrl = 'http://localhost:3000/user'
const baseUrl = 'https://tiendaeos-dev.fl0.io/user'

let token: Token = null

const setToken = (newToken: Token): void => {
  token = newToken !== null ? `Bearer ${newToken}` : null
}

const login = async ({ email, password }: { email: string, password: string }): Promise<User> => {
  const { data } = await axios.post(`${baseUrl}/${'login'}`, { email, password })
  return data
}

const create = async ({ name, email, password }: { name: string, email: string, password: string }): Promise<User> => {
  const { data } = await axios.post(baseUrl, { name, email, password })
  return data
}

const payment = async (cart: ProductData[]): Promise<ApiMPresponse> => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const response = await axios.post(`${baseUrl}/payment`, cart, config)
  return response.data
}

export default { login, create, payment, setToken }
