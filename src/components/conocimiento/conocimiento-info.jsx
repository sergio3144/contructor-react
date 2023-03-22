import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Information ({ imagenConocimiento, titleTarget, descriptionTarget }) {


  return (
    <div className='container-blog'>
      <img className='imagen-blog' src={ imagenConocimiento } alt="" />
      <div className="container-text">
        <p className='title-target'> { titleTarget } </p>
        <div className="container-view">
          <p className='information-target'>{ descriptionTarget }</p>
          <button className='btn-view'>Ver más <span className='row'><BsArrowRight/></span></button>
        </div>
      </div>
    </div>
  )
}

export {Information}
