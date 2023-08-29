export interface Product {
  id: number
  name: string
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
