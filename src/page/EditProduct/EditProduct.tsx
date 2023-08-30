import './styles.css'

export function EditProduct (): JSX.Element {
  return (
    <div className='edit-product-form'>
      <h2>Editar Producto</h2>
      <form>
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
        <button type='submit'>Guardar Cambios</button>
      </form>
    </div>
  )
}
