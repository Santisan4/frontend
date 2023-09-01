import './App.css'
import { Header } from './components/Header.tsx'
import { Home } from './page/Home/Home.tsx'
import { Route, Routes } from 'react-router-dom'
import { Login } from './page/User/Login.tsx'
import { Register } from './page/User/Register.tsx'
import { Cart } from './page/Cart/Cart.tsx'
import { Checkout } from './page/Checkout/Checkout.tsx'
import { Products } from './page/Products/Products.tsx'
import { ProductDetail } from './page/ProductDetail/ProductDetail.tsx'
import { OrderSummary } from './page/OrderSumary/OrderSummary.tsx'
import { Review } from './page/Review/Review.tsx'
import { Dashboard } from './page/Dashboard/Dashboard.tsx'
import { NewProduct } from './page/NewProduct/NewProduct.tsx'
import { ProductsList } from './page/ProductList/ProductsList.tsx'
import { EditProduct } from './page/EditProduct/EditProduct.tsx'

function App (): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/register' element={<Register />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/products' element={<ProductsList />} />
        <Route path='/admin/product' element={<NewProduct />} />
        <Route path='/admin/products/1/edit' element={<EditProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/checkout' element={<Checkout />} />
        <Route path='/cart/checkout/payment' element={<OrderSummary />} />
        <Route path='/cart/checkout/payment/review' element={<Review />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>

    </>
  )
}

export default App
