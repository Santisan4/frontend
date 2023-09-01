import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from '../../components/Icons'
import './ProductDetail.css'
import { useEffect, useState } from 'react'
import productService from '../../services/product.ts'
import { type Product } from '../../types'

export function ProductDetail (): JSX.Element {
  const [product, setProduct] = useState<Product>()
  // params
  const { id } = useParams()
  const idProduct = Number(id)

  useEffect(() => {
    productService.productDetail(idProduct)
      .then((product: Product) => { setProduct(product) })
      .catch(error => { console.log(error) })
  }, [])

  return (
    <div className='product-container'>

      <Link to='/products' className='arrow'><ArrowLeft /></Link>

      <img src={product?.image} alt='' />

      <div className='product-info'>
        <span>Lo nuevo</span>
        <h2>{product?.title}</h2>
        <strong>${product?.price}</strong>
      </div>

      <button>Add to cart</button>

      <p className='product-review'>
        {product?.description}
      </p>

    </div>
  )
}
