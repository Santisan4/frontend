export interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
  id_category: number
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
