import './Slider.css'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from '../Icons'

const IMAGES_SLIDER = [
  'banner-golf.jpeg',
  'titleist.jpeg',
  'golf.webp',
  'golf2.webp',
  'prov.jpeg',
  'driver.webp'
]

export function Slider (): JSX.Element {
  const [image, setImage] = useState<string>(IMAGES_SLIDER[0])

  const handlePrevImage = (): void => {
    const index = IMAGES_SLIDER.indexOf(image)
    const nextIndex = index - 1
    const nextImage = IMAGES_SLIDER[nextIndex]

    if (nextIndex >= 0) {
      setImage(nextImage)
    } else {
      setImage(IMAGES_SLIDER[IMAGES_SLIDER.length - 1])
    }
  }

  const handleNextImage = (): void => {
    const index = IMAGES_SLIDER.indexOf(image)
    const nextIndex = index + 1
    const nextImage = IMAGES_SLIDER[nextIndex]

    if (nextIndex < IMAGES_SLIDER.length) {
      setImage(nextImage)
    } else {
      setImage(IMAGES_SLIDER[0])
    }
  }

  return (
    <div className='banner-container'>
      <span className='arrow-left' onClick={handlePrevImage}> <ArrowLeft /> </span>
      <img className='banner' src={image} alt={image} />
      <span className='arrow-right-banner' onClick={handleNextImage}> <ArrowRight /> </span>
    </div>
  )
}
