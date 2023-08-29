import { Link } from 'react-router-dom'
import { ArrowLeft } from '../../components/Icons'
import './Product.css'

export function Product (): JSX.Element {
  return (
    <div className='product-container'>

      <Link to='/products' className='arrow'><ArrowLeft /></Link>

      <img src='/paraguas.webp' alt='' />

      <div className='product-info'>
        <span>Lo nuevo</span>
        <h2>Product Name</h2>
        <p>Product Description</p>
        <strong>$499.99</strong>
      </div>

      <button>Add to cart</button>

      <p className='product-review'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quasi, provident suscipit cupiditate error fuga aliquam officiis consequatur, sit totam exercitationem repudiandae possimus ex ipsum animi explicabo molestiae vel placeat.
      </p>

    </div>
  )
}
