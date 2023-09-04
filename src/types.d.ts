export interface ProductData {
  id: number
  title: string
  description: string
  price: number
  stock: number
  image: string
  category: string
  quantity?: number
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

export interface FormCreateProductType {
  title: string
  description: string
  price: string
  category: string
  image: File | null
}

export interface ProductForm {
  title: string
  description: string
  price: string | number
  stock: number | null
  category: string
  image: File | null
}

export interface EditForm {
  title: string
  description: string
  price: number
  stock: number
  category: string
  image: string
}

export interface UserData {
  name: string
  email: string
  role: number
  createdAt: string
}

export interface CartContextType {
  cart: ProductData[]
  addToCart: (product: ProductData) => void
  removeFromCart: (product: ProductData) => void
  decrementQuantity: (product: ProductData) => void
}

// export type Filters = 'All' | 'Pantalones' | 'Bermudas' | 'Gorros' | 'Remeras' | 'Zapatos' | 'Accesorios' | 'Palos' | 'Pelotas' | 'Guantes' | 'Bolsos' | 'Otros'

export interface Filers {
  category: string
  minPrice: number
}

export interface FitlersContextType {
  filters: Filters
  setFilters: (filter: Filers) => void
}
