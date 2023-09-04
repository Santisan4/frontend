import { Link } from 'react-router-dom'
// import { FavIcon } from '../../components/Icons.tsx'
import './Products.css'
import { useEffect, useState } from 'react'
import productService from '../../services/product.ts'
import { type ProductData, type ApiResponseProducts } from '../../types'
import { Filters } from '../../components/Filters/Filters.tsx'
import { useFilters } from '../../hooks/useFilters.tsx'

interface ProductsWithLikes {
  id: number
  description: string
  title: string
  price: number
  image: string
  likes?: true | false
}

export function Products (): JSX.Element {
  const [products, setProducts] = useState<ProductData[]>([])
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  console.log(filteredProducts)

  useEffect(() => {
    productService.getProducts()
      .then((products: ApiResponseProducts) => {
        setProducts(products)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <section className='section-container'>

      <Filters />

      <div className='products-container'>

        {
          filteredProducts.map((product: ProductsWithLikes) => {
            return (
              <div key={product.id} className='card-container'>
                <Link to={`/products/${product.id}`}> <img src={product.image} alt='' /></Link>
                <p className='news'>Lo nuevo</p>
                <strong className='autor'>Bermudas The Golfer Shop</strong>
                <p className='name'> {product.title} </p>
                <strong>${product.price}</strong>
                {/* <span onClick={() => { handleLike(product.id) }} className={product.likes !== undefined ? 'fav-icon-container' : ''}><FavIcon /></span> */}
              </div>
            )
          })
        }

      </div>
    </section>
  )
}
