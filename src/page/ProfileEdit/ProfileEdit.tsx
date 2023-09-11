import { Link } from 'react-router-dom'
import { ArrowLeft } from '../../components/Icons'
import './ProfileEdit.css'
import { useUser } from '../../hooks/useUser'

export function ProfileEdit (): JSX.Element {
  const { user } = useUser()
  return (
    <section className='edit-profile-page-container'>
      <div className='title-form-container'>
        <div className='title-icon-container'>
          <Link className='icon-back-edit' to='/settings/santiago'><ArrowLeft /></Link>
          <h1 className='title-edit-profile'>Editar Perfil</h1>
        </div>
        <form className='form-edit-profile'>
          <label htmlFor='name'>Nombre</label>
          <input type='text' id='name' name='name' value={user?.name} />

          <label htmlFor='email'>Correo electrónico</label>
          <input type='email' id='email' name='email' value={user?.email} />

          <button className='button-edit'>Cambiar contraseña</button>

          <button className='button-edit'>Guardar</button>
        </form>
      </div>

      <Link to='/' className='button-cancel-edit'>Cancelar</Link>

    </section>
  )
}
