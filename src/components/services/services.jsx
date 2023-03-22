import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Services({ icon, type }) {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <div data-aos="flip-down" className="container-services">
        <div className="service">
          <div className='icon-service'>{ icon }</div>
          <p className='title-service'>{ type }</p>
        </div>
      </div>
    </>
  )
}

export { Services }
