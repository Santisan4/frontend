import './App.css'
import { Header } from './components/Header.tsx'
import { Home } from './page/Home/Home.tsx'
import { Route, Routes } from 'react-router-dom'
import { Login } from './page/User/Login.tsx'
import { Register } from './page/User/Register.tsx'
import { Cart } from './page/Cart/Cart.tsx'
import { Checkout } from './page/Checkout/Checkout.tsx'
import { Products } from './page/Products/Products.tsx'
import { Product } from './page/Product/Product.tsx'
import { OrderSummary } from './page/OrderSumary/OrderSummary.tsx'
import { Review } from './page/Review/Review.tsx'

function App (): JSX.Element {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/1' element={<Product />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/checkout' element={<Checkout />} />
        <Route path='/cart/checkout/payment' element={<OrderSummary />} />
        <Route path='/cart/checkout/review' element={<Review />} />
      </Routes>
    </>
  )
}

export default App
