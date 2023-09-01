import { Link } from 'react-router-dom'
import { ArrowLeft, DeleteProduct, Edit } from '../../components/Icons.tsx'
import './styles.css'
import { useEffect, useState } from 'react'
import productService from '../../services/adminProduct.ts'
import { useUser } from '../../hooks/useUser'
import { type Product } from '../../types'

export function ProductsList (): JSX.Element {
  const { setUser } = useUser()
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    productService.getProducts()
      .then((products: Product[]) => {
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
      productService.setToken(user.token)
    }
  }, [])

  return (
    <div className='product-list'>

      <div className='back'>
        <Link to='/admin/dashboard' className='arrow'><ArrowLeft /></Link>
        <h2>Productos Disponibles</h2>
      </div>
      <ul className='list'>
        {
          products.map(product => (
            <li key={product.id} className='product-item'>
              <p className='id'>{product.id}</p>
              <h3 className='product-title'>{product.title}</h3>
              <span className='product-price'>$ {product.price}</span>
              <Link to={`/admin/dashboard/products/${product.id}/edit`} className='button'><Edit /></Link>
              <button><DeleteProduct /></button>
            </li>
          ))
        }
        {
          loading
            ? <p>Loading...</p>
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
