import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { type ProductData } from '../../types'
import { ArrowLeft } from '../../components/Icons'
import { useCart } from '../../hooks/useCart.tsx'
import productService from '../../services/product.ts'

import './ProductDetail.css'

export function ProductDetail (): JSX.Element {
  const [product, setProduct] = useState<ProductData>()
  const { addToCart } = useCart()

  const { id } = useParams()
  const idProduct = Number(id)

  console.log(id)

  useEffect(() => {
    productService.productDetail(idProduct)
      .then((product: ProductData) => { setProduct(product) })
      .catch(error => { console.log(error) })
  }, [])

  const handleAddToCart = (product: ProductData): void => {
    addToCart(product)
  }

  return (
    <div className='product-container'>

      <Link to='/products' className='arrow'><ArrowLeft /> Volver </Link>

      <img src={product?.image} alt='' />

      <div className='product-info'>
        <span>Lo nuevo</span>
        <h2>{product?.title}</h2>
        <strong>${product?.price}</strong>
      </div>

      <button onClick={() => { handleAddToCart(product as ProductData) }}>Agregar al carrito</button>

      <p className='product-review'>
        {product?.description}
      </p>

    </div>
  )
}
