import React from 'react';
import ImageAbut from '../images/about.jpg'

function About() {
  return (
    <>
      <div className="container-about">
        <img className='image-about' src={ImageAbut} alt="" />
        <div className="about-text">
          <p className='about-title'>Sobre Nosotros</p>
          <h1 className='about-info'>Construcción de alto nivel de edificaciones</h1>
          <p className='information-about'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, quia amet nemo enim quaerat voluptas! Fugit, error omnis beatae aliquid ducimus unde totam, dignissimos reprehenderit doloribus, eaque facilis rerum! Nobis.</p>
          <button className='contact'>Contáctanos</button>
        </div>
      </div>
    </>
  )
}

export { About }
