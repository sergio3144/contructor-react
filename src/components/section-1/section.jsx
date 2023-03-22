import React from 'react'
import ImagenConstructor from '../images/constructor.jpg'

function Section () {
return (
  <>
    <div className="container-section">
      <div className="container-information">
        <h1 className='title-section'>Construimos el apartamento de tus sueños</h1>
        <p className='information-section'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nulla eligendi animi est voluptatem non eius! Aspernatur qui</p>
        <button className='contact'>Contáctanos</button>
      </div>

      <div className="space">
        <img className='image-constructor' src={ImagenConstructor} alt="imageConstructor" />
      </div>
    </div>
  </>
  )
}

export { Section }
