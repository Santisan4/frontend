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

export type Token = string | null

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

export interface FiltersType {
  category: string[]
  minPrice: number
}

export interface FiltersContextType {
  filters: Filters
  setFilters: (filter: Filers) => void
}

export interface UseFiltersHook {
  filters: Filters
  setFilters: (filter: Filers) => void
  filterProducts: (products: ProductData[], filters: FiltersType) => ProductData[]
}

// ORDERS
export interface OrderType {
  id: number
  user_id: number
  order_id: string
  order_type: string
  amount: number
  currency: string
  created_at: string
}

export interface ApiMPresponse {
  additional_info: string
  auto_return: string
  back_urls: Urls
  binary_mode: boolean
  client_id: string
  collector_id: number
  coupon_code: null
  coupon_labels: null
  date_created: Date
  date_of_expiration: null
  expiration_date_from: null
  expiration_date_to: null
  expires: boolean
  external_reference: string
  id: string
  init_point: string
  internal_metadata: null
  items: Item[]
  marketplace: string
  marketplace_fee: number
  metadata: Metadata
  notification_url: string
  operation_type: string
  payer: Payer
  payment_methods: PaymentMethods
  processing_modes: null
  product_id: null
  redirect_urls: Urls
  sandbox_init_point: string
  site_id: string
  shipments: Shipments
  total_amount: null
  last_updated: null
}
