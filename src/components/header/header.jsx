import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { RxHamburgerMenu } from 'react-icons/rx';
function Header() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <nav data-aos="fade-right">
        <input type="checkbox" id="check"/>
        <label htmlFor ='check' className="checkbtn">
            <RxHamburgerMenu/>
        </label>
        <h1 className='logo'>Remolly</h1>
        <ul className='container-items'>
            <li className='items'>Inicio</li>
            <li className='items'>Servicios</li>
            <li className='items'>Blog</li>
            <li className='items'>Páginas</li>
            <button className='contact'>Contact</button>
        </ul>
      </nav>
    </>
  );
}

export { Header }