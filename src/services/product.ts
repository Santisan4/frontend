import axios from 'axios'
import {
  type ApiResponseProducts,
  type ApiResponseProduct
} from '../types'

// const baseUrl = 'http://localhost:3000/products'
const baseUrl = 'https://backend-hqcs-dev.fl0.io/products'

const getProducts = async (): Promise<ApiResponseProducts> => {
  const request = axios.get(baseUrl)
  return await request.then(response => response.data)
}

const productDetail = async (id: number): Promise<ApiResponseProduct> => {
  const request = axios.get(`${baseUrl}/${id}`)
  return await request.then(response => response.data)
}

export default { getProducts, productDetail }
