import { Link } from 'react-router-dom'
import { ArrowLeft, DeleteProduct, Edit } from '../../components/Icons'
import './styles.css'

export function ProductsList (): JSX.Element {
  return (
    <div className='product-list'>
      <div className='back'>
        <Link to='/admin/dashboard' className='arrow'><ArrowLeft /></Link>
        <h2>Productos Disponibles</h2>
      </div>
      <ul className='list'>
        <li className='product-item'>
          <p className='id'>1</p>
          <h3>Zapatos Nike</h3>
          <span className='product-price'>$ 500</span>
          <Link to='/admin/dashboard/products/1/edit' className='button'><Edit /></Link>
          <button><DeleteProduct /></button>
        </li>
        <li className='product-item'>
          <p className='id'>1</p>
          <h3>Zapatos Nike</h3>
          <span className='product-price'>$ 500</span>
          <Link to='/admin/dashboard/products/1/edit' className='button'><Edit /></Link>
          <button><DeleteProduct /></button>
        </li>
        <li className='product-item'>
          <p className='id'>1</p>
          <h3>Zapatos Nike</h3>
          <span className='product-price'>$ 500</span>
          <Link to='/admin/dashboard/products/1/edit' className='button'><Edit /></Link>
          <button><DeleteProduct /></button>
        </li>
        <li className='product-item'>
          <p className='id'>1</p>
          <h3>Zapatos Nike</h3>
          <span className='product-price'>$ 500</span>
          <Link to='/admin/dashboard/products/1/edit' className='button'><Edit /></Link>
          <button><DeleteProduct /></button>
        </li>
        <li className='product-item'>
          <p className='id'>1</p>
          <h3>Zapatos Nike</h3>
          <span className='product-price'>$ 500</span>
          <Link to='/admin/dashboard/products/1/edit' className='button'><Edit /></Link>
          <button><DeleteProduct /></button>
        </li>
        {/* <li className='product-item'>
          <div className='product-details'>
            <h3>title</h3>
            <p>description</p>
            <span className='product-price'>$price</span>
          </div>
        </li>
        <li className='product-item'>
          <div className='product-details'>
            <h3>title</h3>
            <p>description</p>
            <span className='product-price'>$price</span>
          </div>
        </li> */}
      </ul>
    </div>
  )
}
