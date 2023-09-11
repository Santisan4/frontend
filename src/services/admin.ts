import axios from 'axios'

import {
  type ProductData,
  type ApiResponseProducts,
  type UserData,
  type ProductForm,
  type FormCreateProductType,
  type OrderType
} from '../types'

const baseUrl = 'http://localhost:3000/admin'
// const baseUrl = 'https://tiendaeos-dev.fl0.io/admin'

type Token = string | null

let token: Token = null

const setToken = (newToken: Token): Token => {
  token = newToken !== null ? `Bearer ${newToken}` : null
  return token
}

const getProducts = async (): Promise<ApiResponseProducts> => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.get(`${baseUrl}/products`, config)
  return await request.then(response => response.data)
}

const createProduct = async (newProduct: FormCreateProductType): Promise<ProductData> => {
  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data'
    }
  }

  const { data } = await axios.post<ProductData>(`${baseUrl}/products`, newProduct, config)
  return data
}

const getOneProduct = async (id: number): Promise<ProductData> => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const { data } = await axios.get(`${baseUrl}/products/${id}`, config)
  return data
}

const updateProduct = async (id: number, formData: ProductForm): Promise<ProductData> => {
  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data'
    }
  }

  const { data } = await axios.patch(`${baseUrl}/products/${id}`, formData, config)
  return data
}

const deleteProduct = async (id: number): Promise<void> => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const { data } = await axios.delete(`${baseUrl}/products/${id}`, config)
  return data
}

const getUsers = async (): Promise<UserData[]> => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const { data } = await axios.get(`${baseUrl}/users`, config)
  return data
}

const getOrders = async (): Promise<OrderType[]> => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const { data } = await axios.get(`${baseUrl}/orders`, config)
  return data
}

export default {
  getProducts,
  createProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getUsers,
  setToken,
  getOrders
}
