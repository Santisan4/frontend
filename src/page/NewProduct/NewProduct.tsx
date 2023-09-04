/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from '../../components/Icons'
import adminService from '../../services/adminProduct.ts'

import './styles.css'

export function NewProduct (): JSX.Element {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState<number | string>('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState<File>('' as unknown as File)

  const navigate = useNavigate()

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const handleChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(event.target.value)
  }

  const handleChangePreice = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPrice(Number(event.target.value))
  }

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCategory(event.target.value)
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files === null) {
      console.log('No hay archivo')
    } else {
      const selectedFile = e.target.files[0]
      setImage(selectedFile)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('price', String(price))
    formData.append('category', category)
    formData.append('image', image)

    adminService.createProduct(formData)
      .then(product => {
        console.log(product)
        // redirect to home
        navigate('/admin/dashboard')
        // clear form
        setTitle('')
        setDescription('')
        setPrice('')
        setCategory('')
        setImage('' as unknown as File)
      })
      .catch(err => {
        console.log(err)
      })

    // try {
    //   const response = await adminService.createProduct(formData)

    //   console.log(response)
    //   // redirect to home
    //   navigate('/admin/dashboard')
    //   // clear form
    //   setTitle('')
    //   setDescription('')
    //   setPrice('')
    //   setCategory('')
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <div className='product-form'>
      <div className='back'>
        <Link to='/admin/dashboard' className='arrow'><ArrowLeft /></Link>
        <h2 className='add-title'>Crear Producto</h2>
      </div>
      <form className='form' onSubmit={handleSubmit} encType='multipart/form-data'>
        <label>
          Título:
          <input type='text' value={title} onChange={handleChangeTitle} required />
        </label>
        <label>
          Descripción:
          <textarea value={description} onChange={handleChangeDescription} required />
        </label>
        <label>
          Precio:
          <input type='number' value={price} onChange={handleChangePreice} required />
        </label>
        <label>
          Categoría:
          <input type='text' value={category} onChange={handleChangeCategory} required />
        </label>
        <label>
          Imagen:
          <input type='file' accept='image/*' onChange={handleChangeImage} required />
        </label>
        <button type='submit'>Crear Producto</button>
      </form>
    </div>
  )
}
