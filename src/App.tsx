import './App.css'

import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header.tsx'
import { Home } from './page/Home/Home.tsx'
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
import { Settings } from './page/Settings/Settings.tsx'
import { Profile } from './page/Profile/Profile.tsx'
import { ProfileEdit } from './page/ProfileEdit/ProfileEdit.tsx'
import { NotFound } from './page/404/NotFound.tsx'
import { Orders } from './page/Orders/Orders.tsx'

function App (): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/register' element={<Register />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/settings/:user' element={<Profile />} />
        <Route path='/settings/:user/my-orders' element={<Orders />} />
        <Route path='/settings/:user/edit' element={<ProfileEdit />} />
        <Route path='/admin'>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<ProductsList />} />
          <Route path='product' element={<NewProduct />} />
          <Route path='products/:id/edit' element={<EditProduct />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/checkout' element={<Checkout />} />
        <Route path='/cart/checkout/payment' element={<OrderSummary />} />
        <Route path='/cart/checkout/payment/review' element={<Review />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
