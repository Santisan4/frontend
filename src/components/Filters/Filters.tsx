import { useFilters } from '../../hooks/useFilters'
import { type FiltersType } from '../../types'
import { FilterIcon } from '../Icons'
import './Filters.css'

export function Filters (): JSX.Element {
  const { setFilters } = useFilters()

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilters((prevState: FiltersType) => (
      {
        ...prevState,
        category: e.target.value
      }
    ))
  }
  return (
    <div className='filters-container'>
      <div id='filter-container'>
        <FilterIcon />
        <select className='custom-select' onChange={handleChangeCategory}>
          <option value='Todos'> Todos  </option>
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
      </div>
      <div>
        <select id='sort-select' className='custom-select'>
          <option value='Ordenar Por'>  Ordenar por </option>
          <option value='date'> Fecha </option>
          <option value='popularity'> Precio </option>
        </select>
      </div>
    </div>
  )
}
