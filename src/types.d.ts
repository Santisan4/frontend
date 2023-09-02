export interface Product {
  id: number
  title: string
  description: string
  price: number
  stock: number
  image: string
  category: string
}

export interface HookUseProducts {
  products: Product[]
}

export interface ResponseApi {
  data: Product[]
}

export interface User {
  id: number
  name: string
  email: string
  admin: number
  token: string
}

export type Token = string

export type ApiResponseProducts = Product[]
export type ApiResponseProduct = Product

export interface ProductForm {
  title: string
  description: string
  price: number | string
  image: string
  stock: number | string
  category: string
}

export interface UserData {
  name: string
  email: string
  role: number
  createdAt: string
}
