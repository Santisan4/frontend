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

      <img className='img-product-detail' src={product?.image} alt='' />

      <div className='product-info'>
        <h2>{product?.title}</h2>
        <strong>${product?.price}</strong>
      </div>

      <p className='product-review'>
        {product?.description}
      </p>

      <button className='button-add-to-cart' onClick={() => { handleAddToCart(product as ProductData) }}>Agregar al carrito</button>
    </div>
  )
}
