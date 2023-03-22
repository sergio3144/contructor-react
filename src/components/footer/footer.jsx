import React from 'react'

/* ICONOS REDES SOCIALES */

import Facebook from '../images/redes/facebook.png'
import Twitter from '../images/redes/twitter.png'
import Linkedin from '../images/redes/linkedin.png'

function Footer () {
  return (
    <>
      <footer>
        <h1 className='logo'>Remolly</h1>
        <div className="services-footer">
          <ul className='container-items'>
            <li className="items">Productos</li>
            <li className="items">Historia</li>
            <li className="items">Nuestro equipo</li>
            <li className="items">Ubicaciones</li>
            <li className="items">Domicilios</li>
          </ul>
        </div>
        <div className="redes">
          <img src={Facebook} alt="" className="icono" />
          <img src={Twitter} alt="" className="icono" />
          <img src={Linkedin} alt="" className="icono" />
        </div>
      </footer>
    </>
  )
}

export { Footer }
