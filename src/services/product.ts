import axios from 'axios'
import {
  type ApiResponseProducts,
  type ApiResponseProduct
} from '../types'

// const baseUrl = 'http://localhost:3000/products'
const baseUrl = 'https://tiendaeos-dev.fl0.io/products' // remote server

const getProducts = async (): Promise<ApiResponseProducts> => {
  const { data } = await axios.get(baseUrl)
  return data
}

const productDetail = async (id: number): Promise<ApiResponseProduct> => {
  const request = axios.get(`${baseUrl}/${id}`)
  return await request.then(response => response.data)
}

export default { getProducts, productDetail }
