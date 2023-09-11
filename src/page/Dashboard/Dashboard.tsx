import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { type OrderType, type UserData } from '../../types'
import adminService from '../../services/admin.ts'

import { useUser } from '../../hooks/useUser.tsx'
import { Add, HomeIcon, ProductsIcon, Users } from '../../components/Icons'

import './Dashboard.css'

export function Dashboard (): JSX.Element {
  const [users, setUsers] = useState<UserData[]>([])
  const [orders, setOrders] = useState<OrderType[]>([])

  const { setUser, user } = useUser()

  useEffect(() => {
    const userFromStorage = window.localStorage.getItem('user')
    if (userFromStorage !== null) {
      const userLogged = JSON.parse(userFromStorage)
      setUser(userLogged)
      adminService.setToken(userLogged.token)
    }
    adminService.getUsers()
      .then(users => {
        setUsers(users)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    adminService.getOrders()
      .then(orders => {
        setOrders(orders)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const lastUser = users[users.length - 1]?.email
  const sales = orders.reduce((acc, order) => order.amount + acc, 0)

  return (
    <div className='dashboard-container'>
      <div className='user-container'>
        <div className='title-role-container'>
          <h1 className='title-user'>Hola {user?.name}!</h1>
          <p className='role-user'>administrador</p>
        </div>
        <img className='img-user' src='/rengo2.jpeg' alt='' />
      </div>

      <div className='sales-container'>
        <h3 className='title-sales'>Ventas</h3>
        <p className='value-sales'> ${sales}</p>
      </div>

      <div className='users-total-container'>
        <div className='total'>
          <h3 className='title-total'>Usuarios totales</h3>
          <p className='value-total'> {users.length} </p>
        </div>

        <div className='last-user'>
          <h3 className='title-last-user'>Último usuario</h3>
          <p className='value-last-user'> {lastUser} </p>
        </div>
      </div>

      <Link to='/admin/products' className='all-products'>
        <ProductsIcon />
        <h3>Productos</h3>
      </Link>

      <Link to='/admin/product' className='all-products'>
        <Add />
        <h3>Producto</h3>
      </Link>

      <Link to='/admin/users' className='all-products'>
        <Users />
        <h3>Usuarios</h3>
      </Link>

      <Link to='/' className='link-home'>
        <HomeIcon />
      </Link>

    </div>

  )
}
