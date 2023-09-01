import axios from 'axios'
import { type ApiResponseProducts } from '../types'

type Token = string | null

const baseUrl = 'http://localhost:3000/admin/'

let token: Token = null

const setToken = (newToken: Token): void => {
  if (newToken !== null) {
    token = `Bearer ${newToken}`
  }
}

const getProducts = async (): Promise<ApiResponseProducts> => {
  const config = {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem('token')}`
      Authorization: token
    }
  }
  const request = axios.get(`${baseUrl}/products`, config)
  return await request.then(response => response.data)
}

export default { getProducts, setToken }
