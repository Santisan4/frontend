import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Add, ProductsIcon, Users } from '../../components/Icons'
import { type UserData } from '../../types'
import adminService from '../../services/adminProduct.ts'

import './Dashboard.css'

export function Dashboard (): JSX.Element {
  const [users, setUsers] = useState<UserData[]>([])

  useEffect(() => {
    adminService.getUsers()
      .then(users => {
        setUsers(users)
      })
      .catch(err => {
        throw new Error(err)
      })
  }, [])

  const lastUser = users[users.length - 1]?.email

  return (
    <div className='dashboard-container'>
      <div className='user-container'>
        <div className='title-role-container'>
          <h1 className='title-user'>Hey Sant!</h1>
          <p className='role-user'>admin</p>
        </div>
        <img className='img-user' src='/rengo2.jpeg' alt='' />
      </div>

      <div className='sales-container'>
        <div className='sales-value-container'>
          <h3 className='title-sales'>Sales Value</h3>
          <p className='value-sales'> $40000</p>
        </div>

        <div className='percent-container'>
          <p className='percent'>+ 20%</p>
        </div>

      </div>

      <div className='users-total-container'>
        <div className='total'>
          <h3 className='title-total'>Total Users</h3>
          <p className='value-total'> {users.length} </p>
        </div>

        <div className='last-user'>
          <h3 className='title-last-user'>Last User</h3>
          <p className='value-last-user'> {lastUser} </p>
        </div>
      </div>

      <Link to='/admin/products' className='all-products'>
        <ProductsIcon />
        <h3>Products</h3>
      </Link>

      <Link to='/admin/product' className='all-products'>
        <Add />
        <h3>Product</h3>
      </Link>

      <Link to='/admin/users' className='all-products'>
        <Users />
        <h3>Users</h3>
      </Link>

    </div>

  )
}
