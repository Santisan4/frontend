import { useId, useState } from 'react'

import { useFilters } from '../../hooks/useFilters'
import { useProducts } from '../../hooks/useProducts'
import { CloseIcon, FilterIcon } from '../Icons'

import './Filters.css'
import { type CategoryType } from '../../types'
import { CATEGORIES } from '../../const'

export function Filters (): JSX.Element {
  const { setFilters, filters } = useFilters()
  const [checked, setChecked] = useState(false)
  const { products } = useProducts()

  const minPriceId = useId()

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newCategory = event.target.name

    if (CATEGORIES.includes(newCategory)) {
      const newFilters = {
        ...filters,
        category: newCategory as CategoryType
      }

      setFilters(newFilters)
    }
  }

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newMinPrice = Number(e.target.value)

    if (typeof newMinPrice === 'number') {
      const newFilters = {
        ...filters,
        minPrice: newMinPrice
      }

      setFilters(newFilters)
    }
  }

  const handleChecked = (): void => {
    setChecked(!checked)
  }

  const className = checked
    ? 'filters-article-container'
    : 'filters-article-container-hidden'

  const min = products.map(product => product.price)
  const minPrice = Math.min(...min)
  const max = products.map(product => product.price)
  const maxPrice = Math.max(...max)

  console.log(filters)

  return (
    <div className='filters-container'>
      <div className='title-icon'>
        <h3 className=''> {filters.category} </h3>

        <span onClick={handleChecked} className='icon-filter-container'>
          <FilterIcon />
        </span>
      </div>

      <article className={className}>
        <div className='title-filter-article'>
          <h3 className='title-filter'>FILTRAR POR</h3>
          <span onClick={handleChecked}>
            <CloseIcon />
          </span>
        </div>

        <hr />

        <div className='item-filter'>
          <h3 id={minPriceId}>Precio</h3>
          <input
            type='range'
            id={minPriceId}
            value={filters.minPrice}
            min={minPrice}
            max={maxPrice}
            onChange={handleChangePrice}
          />
          <div className='filter-price'>
            <span>${filters.minPrice}</span> - <span>${maxPrice}</span>
          </div>
        </div>

        <div className='filter-products'>
          <h3>Tipo de producto</h3>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Todos'
              onChange={handleChangeCategory}
            />
            <label className='label-product'>Todos</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Bermudas'
              onChange={handleChangeCategory}
            />
            <label className='label-product'>Bermudas</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Bolsas'
              onChange={handleChangeCategory}
            />
            <label className='label-product'>Bolsas</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Carros'
              onChange={handleChangeCategory}
            />
            <label className='label-product'>Carros</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Gorros'
              onChange={handleChangeCategory}
            />
            <label className='label-product'>Gorros</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Hierros'
              onChange={handleChangeCategory}
            />
            <label className='label-product'>Hierros</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Pantalones'
              onChange={handleChangeCategory}
            />
            <label className='label-product'>Pantalones</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Remeras'
              onChange={handleChangeCategory}
            />
            <label className='label-product'>Remeras</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Zapatos'
              onChange={handleChangeCategory}
            />
            <label className='label-product'>Zapatos</label>
          </div>
        </div>

      </article>
    </div>
  )
}
