import { Link } from 'react-router-dom'

import { type ProductData } from '../../types'
import { useFilters } from '../../hooks/useFilters.tsx'
import { useProducts } from '../../hooks/useProducts.tsx'
import { Filters } from '../../components/Filters/Filters.tsx'

import './Products.css'

export function Products (): JSX.Element {
  const { products } = useProducts()
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <section className='section-container'>

      <Filters />

      <div className='products-container'>

        {
          filteredProducts.length === 0
            ? <p className='no-products'>No hay productos</p>
            : filteredProducts.map((product: ProductData) => {
              return (
                <div key={product.id} className='card-container'>
                  <Link to={`${product.id}`}> <img src={product.image} alt='' /></Link>
                  <p className='name'> {product.title} </p>
                  <strong>${product.price}</strong>
                </div>
              )
            })
        }

      </div>
    </section>
  )
}
