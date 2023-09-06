const cartLocalStorage = window.localStorage.getItem('cart')
export const CART_INITIAL_STATE = cartLocalStorage !== null ? JSON.parse(cartLocalStorage) : []
