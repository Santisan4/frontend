/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from '../../components/Icons'
import adminService from '../../services/admin.ts'

import './styles.css'

export function NewProduct (): JSX.Element {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState<string>('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const navigate = useNavigate()

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const handleChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(event.target.value)
  }

  const handleChangePreice = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPrice(event.target.value)
  }

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>): void => {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // const formData = new FormData()
    // formData.append('title', title)
    // formData.append('description', description)
    // formData.append('price', String(price))
    // formData.append('category', category)
    // formData.append('image', image)
    const formData = {
      title,
      description,
      price,
      category,
      image
    }

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
          <input type='text' value={title} onChange={handleChangeTitle} placeholder='Campera' required />
        </label>
        <label>
          Descripción:
          <textarea value={description} onChange={handleChangeDescription} placeholder='100% algodón, nueva temporada, etc' required />
        </label>
        <label>
          Precio:
          <input type='number' value={price} onChange={handleChangePreice} placeholder='$2400' required />
        </label>
        <label>
          Categoría:
          <select onChange={handleChangeCategory}>
            <option value='All'> Filtros  </option>
            <option value='Zapatos'> Zapatos </option>
            <option value='Remeras'> Remeras </option>
            <option value='Bermudas'> Bermudas </option>
            <option value='Pantalones'> Pantalones </option>
            <option value='Bolsas'> Bolsas </option>
            <option value='Carros'> Carros </option>
            <option value='Hierros'> Hierros </option>
            <option value='Gorras'> Gorras </option>
            <option value='Accesorios'> Accesorios </option>
          </select>
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
