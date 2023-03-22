import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function ClientSlider({ photo, name, description, condition }) {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div data-aos="flip-left">
        <img className='person-image' src={photo} alt="" />
        <h1 className='slider-name'>{name}</h1>
        <p className='slider-information'>{description}</p>
      </div>

    </>
  )
}

export { ClientSlider }
