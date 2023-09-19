import { Slider } from '../../components/Slider/Slider'

import './Home.css'

export function Home (): JSX.Element {
  return (
    <div className='home'>
      <Slider />

      <h3 className='title-section-home'> Destacados </h3>
      <section className='new-articles-container'>
        <article className='article-container'>
          <img className='img-article' src='destacados1.jpeg' alt='TaylorMade p770' />
          <strong className='title-article'>TaylorMade p770</strong>
          <small className='category'>Irons</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='destacados2.jpeg' alt='Putter Spider' />
          <strong className='title-article'>Putter Spider</strong>
          <small className='category'>Putters</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='destacados3.webp' alt='Putter Odyssey' />
          <strong className='title-article'>Putter Odyssey</strong>
          <small className='category'>Putter</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='d4.jpeg' alt='TaylorMade Wedge' />
          <strong className='title-article'>TaylorMade Wedge</strong>
          <small className='category'>Wedges</small>
        </article>
      </section>

      <h3 className='title-section-home'> Tendencias </h3>
      <section className='new-articles-container'>
        <article className='article-container'>
          <img className='img-article' src='tendencia1.jpeg' alt='Zapato Nike' />
          <strong className='title-article'>Nike</strong>
          <small className='category'>Zapatos</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='tendencia2.jpeg' alt='Chaleco' />
          <strong className='title-article'>Chaleco</strong>
          <small className='category'>Indumentaria</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='tendencia3.jpeg' alt='Gorra Callaway' />
          <strong className='title-article'>Gorra Callaway</strong>
          <small className='category'>Gorras</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='tendencia4.jpeg' alt='Gorra Ping' />
          <strong className='title-article'>Gorra Ping</strong>
          <small className='category'>Gorras</small>
        </article>
      </section>

      <h3 className='title-section-home'> Ofertas </h3>
      <section className='new-articles-container'>
        <article className='article-container'>
          <img className='img-article' src='of1.jpeg' alt='Buzo' />
          <strong className='title-article'>Buzo</strong>
          <small className='category'>Buzos</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='of2.jpeg' alt='Remera Adidas' />
          <strong className='title-article'>Remera Adidas</strong>
          <small className='category'>Remeras</small>
        </article>

        <article className='article-container'>
          <img className='img-article' src='of3.jpeg' alt='Piluso personalizable' />
          <strong className='title-article'>Piluso personalizable</strong>
          <small className='category'>Indumentaria - Gorra</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='of4.jpeg' alt='gorra' />
          <strong className='title-article'>Gorra</strong>
          <small className='category'>Gorras</small>
        </article>
      </section>

      <footer className='footer'>

        <div className='footer-social-media'>
          <a href='#'><img src='fb.png' alt='facebook' /></a>
          <a href='#'><img src='g.webp' alt='google' /></a>
          <a href=''><img src='twi.png' alt='twitter' /></a>
        </div>

        <div className='footer-brand'>
          <h3>© 2023 Eos Golf</h3>
        </div>
      </footer>
    </div>
  )
}
