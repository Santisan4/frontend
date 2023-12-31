import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { type ProductData, type EditForm } from '../../types'
import adminService from '../../services/admin.ts'

import './styles.css'
import { ArrowLeft } from '../../components/Icons.tsx'

export function EditProduct (): JSX.Element {
  const [product, setProduct] = useState<EditForm>({
    title: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    image: ''
  })
  const [image, setImage] = useState<File>('' as unknown as File)

  const navigate = useNavigate()

  const { id } = useParams()
  const idProduct = Number(id)

  useEffect(() => {
    adminService.getOneProduct(idProduct)
      .then(product => {
        const productToEdit: ProductData = {
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          stock: product.stock,
          category: product.category,
          image: product.image
        }
        setProduct(productToEdit)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProduct({ ...product, title: e.target.value })
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setProduct({ ...product, description: e.target.value })
  }

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProduct({ ...product, price: Number(e.target.value) })
  }

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProduct({ ...product, category: e.target.value })
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files !== null) {
      const selectedFile = e.target.files[0]
      setImage(selectedFile)
    }
  }

  const handleChangeStock = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProduct({ ...product, stock: Number(e.target.value) })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const formData = {
      title: product.title,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: product.category,
      image
    }

    adminService.updateProduct(idProduct, formData)
      .then(response => {
        console.log(response)
        console.log(formData)
        navigate('/admin/dashboard')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <section className='edit-product-form'>
      <div className='title-edit-product-container'>
        <Link to='/admin/products' className='arrow-back'><ArrowLeft /></Link>
        <h2 className='title-edit-product'>Editar Producto</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type='text' value={product?.title} onChange={handleChangeTitle} />
        </label>
        <label>
          Descripción:
          <textarea value={product?.description} onChange={handleChangeDescription} />
        </label>
        <label>
          Precio:
          <input type='number' value={product?.price} onChange={handleChangePrice} />
        </label>
        <label htmlFor=''> Stock </label>
        <input type='number' value={product?.stock} onChange={handleChangeStock} />
        <label>
          Categoría:
          <input type='text' value={product?.category} onChange={handleChangeCategory} />
        </label>
        <label>
          Imagen:
          <input type='file' accept='image/*' onChange={handleChangeImage} />
        </label>
        <button type='submit'>Guardar Cambios</button>
      </form>
    </section>
  )
}
