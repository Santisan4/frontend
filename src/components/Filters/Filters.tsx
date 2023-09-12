import { useId, useState } from 'react'

import { type Category, type FiltersType } from '../../types'
import { useFilters } from '../../hooks/useFilters'
import { CloseIcon, FilterIcon } from '../Icons'

import './Filters.css'
import { useProducts } from '../../hooks/useProducts'

export function Filters (): JSX.Element {
  const { setFilters, filters } = useFilters()
  const [checked, setChecked] = useState(false)
  // const [pendingFilters, setPendingFilters] = useState<FiltersType>(filters)
  const { products } = useProducts()

  const minPriceId = useId()

  const handleChangeCategory = (category: string): void => {
    const isCategorySelected = filters.category.includes(category)

    if (isCategorySelected !== false) {
      setFilters({
        ...filters,
        category: filters.category.filter((c: Category) => c !== category)
      })
    } else {
      setFilters({
        ...filters,
        category: [...filters.category, category]
      })
    }
  }

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilters((prevState: FiltersType) => ({
      ...prevState,
      minPrice: Number(e.target.value)
    }))
  }

  const handleChecked = (): void => {
    setChecked(!checked)
  }

  // const handleApplyFilters = (): void => {
  //   setFilters(pendingFilters)
  //   setChecked(false)
  // }

  const className = checked
    ? 'filters-article-container'
    : 'filters-article-container-hidden'

  const labelCategory = filters.category.length === 0
    ? 'Todos'
    : filters.category.join('/')

  const min = products.map(product => product.price)
  const minPrice = Math.min(...min)
  const max = products.map(product => product.price)
  const maxPrice = Math.max(...max)

  return (
    <div className='filters-container'>
      <div className='title-icon'>
        <h3 className=''> {labelCategory} </h3>

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
              checked={filters.category.includes('Todos')}
              onChange={() => { handleChangeCategory('Todos') }}
            />
            <label className='label-product'>Todos</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Bermudas'
              checked={filters.category.includes('Bermudas')}
              onChange={() => { handleChangeCategory('Bermudas') }}
            />
            <label className='label-product'>Bermudas</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Bolsas'
              checked={filters.category.includes('Bolsas')}
              onChange={() => { handleChangeCategory('Bolsas') }}
            />
            <label className='label-product'>Bolsas</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Carros'
              checked={filters.category.includes('Carros')}
              onChange={() => { handleChangeCategory('Carros') }}
            />
            <label className='label-product'>Carros</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Gorros'
              checked={filters.category.includes('Gorros')}
              onChange={() => { handleChangeCategory('Gorros') }}
            />
            <label className='label-product'>Gorros</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Hierros'
              checked={filters.category.includes('Hierros')}
              onChange={() => { handleChangeCategory('Hierros') }}
            />
            <label className='label-product'>Hierros</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Pantalones'
              checked={filters.category.includes('Pantalones')}
              onChange={() => { handleChangeCategory('Pantalones') }}
            />
            <label className='label-product'>Pantalones</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Remeras'
              checked={filters.category.includes('Remeras')}
              onChange={() => { handleChangeCategory('Remeras') }}
            />
            <label className='label-product'>Remeras</label>
          </div>

          <div className='type-product'>
            <input
              type='checkbox'
              className='input-product'
              name='Zapatos'
              checked={filters.category.includes('Zapatos')}
              onChange={() => { handleChangeCategory('Zapatos') }}
            />
            <label className='label-product'>Zapatos</label>
          </div>
        </div>

        {/* <button onClick={handleApplyFilters}>Aplicar</button> */}
      </article>
    </div>
  )
}
