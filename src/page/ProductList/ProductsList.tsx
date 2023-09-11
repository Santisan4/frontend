import { Link, redirect } from 'react-router-dom'
import { ArrowLeft, DeleteProduct, Edit } from '../../components/Icons.tsx'
import './styles.css'
import { useEffect, useState } from 'react'
import adminService from '../../services/admin.ts'
import { useUser } from '../../hooks/useUser'
import { type ProductData } from '../../types'

export function ProductsList (): JSX.Element {
  const { setUser } = useUser()
  const [products, setProducts] = useState<ProductData[]>([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    adminService.getProducts()
      .then((products: ProductData[]) => {
        setProducts(products)
        setLoading(false)
      })
      .catch(err => {
        setError(err.response.data.error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const userLogged = window.localStorage.getItem('user')
    if (userLogged !== null) {
      const user = JSON.parse(userLogged)
      setUser(user)
      adminService.setToken(user.token)
    }
  }, [])

  const onDelete = (id: number): void => {
    adminService.deleteProduct(id)
      .then(response => {
        console.log(response)
        redirect('/admin/products')
      })
      .catch(err => {
        throw new Error(err.response.data.error)
      })
  }

  return (
    <div className='product-list'>

      <div className='back'>
        <Link to='/admin/dashboard' className='arrow'><ArrowLeft /></Link>
        <h2>Lista de productos</h2>
      </div>
      <div className='titles'>
        <p className='title'>id</p>
        <p className='title'>Título</p>
        <p className='title'>precio</p>
        <p className='title'>stock</p>
        <p className='title'>editar</p>
        <p className='title'>eliminar</p>
      </div>
      <ul className='list'>
        {
          products.map(product => (
            <li key={product.id} className='product-item'>
              <p className='product-id'>{product.id}</p>
              <p className='product-title'>{product.title}</p>
              <p className='product-price'>${product.price}</p>
              <p className='product-stock'>{product.stock}</p>
              <Link to={`/admin/products/${product?.id}/edit`} className='button'><Edit /></Link>
              <button onClick={() => { onDelete(product.id) }}><DeleteProduct /></button>
            </li>
          ))
        }
        {
          loading
            ? <p>Cargando...</p>
            : null
        }
        {
          error !== null
            ? <p>{error}</p>
            : null
        }
      </ul>
    </div>
  )
}
