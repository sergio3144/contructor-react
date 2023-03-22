import React from 'react'

function Client ({ children }) {
  return (
    <>
      <div className="container-client">
        <h1 className='client-title'>Nuestros clientes</h1>
        <div className="slider">
          
          <div className="slider-client">
            <div className="person">
              {children}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export { Client }
 