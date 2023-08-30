import { Link } from 'react-router-dom'
import { ArrowLeft } from '../../components/Icons'
import './styles.css'

export function NewProduct (): JSX.Element {
  return (
    <div className='product-form'>
      <div className='back'>
        <Link to='/admin/dashboard' className='arrow'><ArrowLeft /></Link>
        <h2 className='add-title'>Crear Producto</h2>
      </div>
      <form className='form'>
        <label>
          Título:
          <input type='text' />
        </label>
        <label>
          Descripción:
          <textarea />
        </label>
        <label>
          Precio:
          <input type='number' />
        </label>
        <label>
          Categoría:
          <input type='text' />
        </label>
        <label>
          Imagen:
          <input type='file' accept='image/*' />
        </label>
        <button type='submit'>Crear Producto</button>
      </form>
    </div>
  )
}
