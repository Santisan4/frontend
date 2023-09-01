import { Link } from 'react-router-dom'
import { FavIcon, FilterIcon } from '../../components/Icons.tsx'
import './Products.css'
import { useEffect, useState } from 'react'
import productService from '../../services/product.ts'
import { type ApiResponseProducts } from '../../types'

interface ProductsWithLikes {
  id: number
  description: string
  title: string
  price: number
  image: string
  likes?: true | false
}

export function Products (): JSX.Element {
  const [products, setProducts] = useState<ProductsWithLikes[]>([])

  const handleLike = (id: number): void => {
    const likeProducts = products.map((product: ProductsWithLikes) => {
      if (product.id === id) {
        if (product.likes === undefined) product.likes = false
        return {
          ...product,
          likes: !product.likes
        }
      }
      return product
    })
    setProducts(likeProducts)
  }

  useEffect(() => {
    productService.getProducts()
      .then((products: ApiResponseProducts) => {
        const productsWithLikes: ProductsWithLikes[] = products.map(product => {
          return {
            ...product,
            likes: false
          }
        })
        setProducts(productsWithLikes)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <section className='section-container'>

      {/* TODO: add a component for this */}
      <div className='filters-container'>
        <p> Todos </p>
        {/* <p id='filter-container'> <FilterIcon /> Filtrar </p> */}
        <div id='filter-container'>
          <FilterIcon />
          <select id='sort-select' className='custom-select'>
            <option value='all'> Filtros  </option>
            <option value='calzado'> Calzado </option>
            <option value='abrigos'> Abrigos </option>
            <option value='pantalones'> Pantalones </option>
            <option value='remeras'> Remeras </option>
          </select>
        </div>
        <div>
          <select id='sort-select' className='custom-select'>
            <option value='Ordenar Por'>  Ordenar por </option>
            <option value='relevance'> Relevancia </option>
            <option value='date'> Fecha </option>
            <option value='popularity'> Precio </option>
          </select>
        </div>
      </div>

      <div className='products-container'>

        {
          products.map((product: ProductsWithLikes) => {
            return (
              <div key={product.id} className='card-container'>
                <Link to={`/products/${product.id}`}> <img src={product.image} alt='' /></Link>
                <p className='news'>Lo nuevo</p>
                <strong className='autor'>Bermudas The Golfer Shop</strong>
                <p className='name'> {product.title} </p>
                <strong>${product.price}</strong>
                <span onClick={() => { handleLike(product.id) }} className={product.likes !== undefined ? 'fav-icon-container' : ''}><FavIcon /></span>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}
