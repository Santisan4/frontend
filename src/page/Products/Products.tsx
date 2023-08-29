import { Link } from 'react-router-dom'
import { FavIcon, FilterIcon } from '../../components/Icons'
import './Products.css'
import { useState } from 'react'
import { useProducts } from '../../hooks/useProducts'

export function Products (): JSX.Element {
  const [like, setLike] = useState(false)
  const { products } = useProducts()

  const className = like ? 'fav-icon-container fav-icon-container--active' : ''

  const handleLike = (): void => {
    setLike(!like)
  }

  return (
    <section className='section-container'>

      {/* TODO: add a component for this */}
      <div className='filters-container'>
        <p> Todos </p>
        {/* <p id='filter-container'> <FilterIcon /> Filtrar </p> */}
        <div id='filter-container'>
          <FilterIcon />
          <select id='sort-select' className='custom-select'>
            <option value='all'> Filtros  </option>
            <option value='calzado'> Calzado </option>
            <option value='abrigos'> Abrigos </option>
            <option value='pantalones'> Pantalones </option>
            <option value='remeras'> Remeras </option>
          </select>
        </div>
        <div>
          <select id='sort-select' className='custom-select'>
            <option value='Ordenar Por'>  Ordenar por </option>
            <option value='relevance'> Relevancia </option>
            <option value='date'> Fecha </option>
            <option value='popularity'> Precio </option>
          </select>
        </div>
      </div>

      <div className='products-container'>

        <div className='card-container'>
          {
            products.map(product => (
              <div key={product.id} className='card-container'>
                <Link to='/products/1'> <img src={product.image} alt='' /></Link>
                <p className='news'>Lo nuevo</p>
                <strong className='autor'>{product.description}</strong>
                <p className='name'> {product.name} </p>
                <strong>${product.price}</strong>
                <span onClick={handleLike} className={className}><FavIcon /></span>
              </div>
            ))
          }
        </div>

        <div className='card-container'>
          <Link to='/products/1'> <img src='/bermuda.jpeg' alt='' /></Link>
          <p className='news'>Lo nuevo</p>
          <strong className='autor'>Bermudas The Golfer Shop</strong>
          <p className='name'> Bermudas </p>
          <strong>$6200.00</strong>
          <span onClick={handleLike} className={className}><FavIcon /></span>
        </div>

        <div className='card-container'>
          <Link to='/products/1'> <img src='/bermuda.webp' alt='' /></Link>
          <p className='news'>Lo nuevo</p>
          <strong className='autor'>Bermuda Nike Modern Fit</strong>
          <p className='name'> Bermuda </p>
          <strong>$43.650</strong>
          <span onClick={handleLike} className={className}><FavIcon /></span>
        </div>

        <div className='card-container'>
          <Link to='/products/1'> <img src='/golf.webp' alt='' /></Link>
          <p className='news'>Lo nuevo</p>
          <strong className='autor'>Titleist ap</strong>
          <p className='name'> Hierros </p>
          <strong>$10.00</strong>
          <span onClick={handleLike} className={className}><FavIcon /></span>
        </div>

        <div className='card-container'>
          <Link to='/products/1'> <img src='/golf2.webp' alt='' /></Link>
          <p className='news'>Lo nuevo</p>
          <strong className='autor'>Hierros Titleist p90</strong>
          <p className='name'> Hierros </p>
          <strong>$10.00</strong>
          <span onClick={handleLike} className={className}><FavIcon /></span>
        </div>

        <div className='card-container'>
          <Link to='/products/1'> <img src='/paraguas.webp' alt='' /></Link>
          <p className='news'>Lo nuevo</p>
          <strong className='autor'>Callaway 60 Single Canopy</strong>
          <p className='name'> Paraguas </p>
          <strong>$20000.00</strong>
          <span onClick={handleLike} className={className}><FavIcon /></span>
        </div>

        <div className='card-container'>
          <Link to='/products/1'> <img src='/porta-tarjetas.webp' alt='' /></Link>
          <p className='news'>Lo nuevo</p>
          <strong className='autor'>Porta tarjetas Golf River PLate</strong>
          <p className='name'> Porta Tarjetas </p>
          <strong>$14.900</strong>
          <span onClick={handleLike} className={className}><FavIcon /></span>
        </div>

        <div className='card-container'>
          <Link to='/products/1'> <img src='/remera2.webp' alt='' /></Link>
          <p className='news'>Lo nuevo</p>
          <strong className='autor'>Camiseta Nike</strong>
          <p className='name'> Camiseta </p>
          <strong>$23.000.00</strong>
          <span onClick={handleLike} className={className}><FavIcon /></span>
        </div>

        <div className='card-container'>
          <Link to='/products/1'> <img src='/remera3.webp' alt='' /></Link>
          <p className='news'>Lo nuevo</p>
          <strong className='autor'>Remera Nike Hombre</strong>
          <p className='name'> Remera </p>
          <strong>$10.00</strong>
          <span onClick={handleLike} className={className}><FavIcon /></span>
        </div>

        <div className='card-container'>
          <Link to='/products/1'> <img src='/remeradama.webp' alt='' /></Link>
          <p className='news'>Lo nuevo</p>
          <strong className='autor'>Remera Dama Nike</strong>
          <p className='name'> Rayuela </p>
          <strong>$15000.00</strong>
          <span onClick={handleLike} className={className}><FavIcon /></span>
        </div>

        <div className='card-container'>
          <Link to='/products/1'> <img src='/zapas1.webp' alt='' /></Link>
          <p className='news'>Lo nuevo</p>
          <strong className='autor'>Zapatilla Nike Dama </strong>
          <p className='name'> Calzado </p>
          <strong>$1000.00</strong>
          <span onClick={handleLike} className={className}><FavIcon /></span>
        </div>
      </div>
    </section>
  )
}
