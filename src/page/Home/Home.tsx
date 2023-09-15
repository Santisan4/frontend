import { Slider } from '../../components/Slider/Slider'

import './Home.css'

export function Home (): JSX.Element {
  return (
    <div className='home'>
      <Slider />

      <h3 className='title-section-home'> Destacados </h3>
      <section className='new-articles-container'>
        <article className='article-container'>
          <img className='img-article' src='new.jpeg' alt='' />
          <strong className='title-article'>Titleist p90</strong>
          <small className='category'>Irons</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='new.jpeg' alt='' />
          <strong className='title-article'>Titleist p90</strong>
          <small className='category'>Irons</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='new.jpeg' alt='' />
          <strong className='title-article'>Titleist p90</strong>
          <small className='category'>Irons</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='new.jpeg' alt='' />
          <strong className='title-article'>Titleist p90</strong>
          <small className='category'>Irons</small>
        </article>
      </section>

      <h3 className='title-section-home'> Tendencias </h3>
      <section className='new-articles-container'>
        <article className='article-container'>
          <img className='img-article' src='zapas1.webp' alt='' />
          <strong className='title-article'>FootJoy</strong>
          <small className='category'>Shoes</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='zapas1.webp' alt='' />
          <strong className='title-article'>FootJoy</strong>
          <small className='category'>Shoes</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='zapas1.webp' alt='' />
          <strong className='title-article'>FootJoy</strong>
          <small className='category'>Shoes</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='zapas1.webp' alt='' />
          <strong className='title-article'>FootJoy</strong>
          <small className='category'>Shoes</small>
        </article>
      </section>

      <h3 className='title-section-home'> Ofertas </h3>
      <section className='new-articles-container'>
        <article className='article-container'>
          <img className='img-article' src='zapas2.webp' alt='shoes' />
          <strong className='title-article'>FootJoy</strong>
          <small className='category'>Shoes</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='zapas2.webp' alt='shoes' />
          <strong className='title-article'>FootJoy</strong>
          <small className='category'>Shoes</small>
        </article>

        <article className='article-container'>
          <img className='img-article' src='piluso.webp' alt='fj-shoes' />
          <strong className='title-article'>Piluso Reversible Nike</strong>
          <small className='category'>Indumentaria - Gorra</small>
        </article>
        <article className='article-container'>
          <img className='img-article' src='piluso.webp' alt='fj-shoes' />
          <strong className='title-article'>Piluso Reversible Nike</strong>
          <small className='category'>Indumentaria - Gorra</small>
        </article>
      </section>

      <footer className='footer'>

        <div className='footer-social-media'>
          <a href='#'><img src='fb.png' alt='' /></a>
          <a href='#'><img src='g.webp' alt='' /></a>
          <a href=''><img src='twi.png' alt='' /></a>
        </div>

        <div className='footer-brand'>
          <h3>© 2023 Eos Golf</h3>
        </div>
      </footer>
    </div>
  )
}
