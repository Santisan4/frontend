const cartLocalStorage = window.localStorage.getItem('cart')

export const CART_INITIAL_STATE = cartLocalStorage !== null ? JSON.parse(cartLocalStorage) : []

export const CATEGORIES = ['Pantalones', 'Bermudas', 'Gorros', 'Remeras', 'Zapatos', 'Accesorios', 'Palos', 'Pelotas', 'Guantes', 'Bolsas', 'Otros', 'Todos']
