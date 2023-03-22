import React from 'react';
import { Header } from './header/header';
import { Section } from './section-1/section'; 
import { Services } from './services/services';
import { BsFillTelephoneOutboundFill }  from 'react-icons//bs'    /* TELEPHONE */
import { FaMoneyBillWaveAlt } from 'react-icons/fa' /* MONEY */
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { About } from './About/About';
import { Client } from './clients-our/clients';
import { ClientSlider } from './clients-our/client.jsx';
import { Conocimiento } from './conocimiento/conocimiento-blog';

// IMAGENES PERFILES

import Sergio from './images/SergioG.jpg';
import Paola from './images/paola.jpg';
import Diego from './images/diego.jpg';

/* IMAGENES TARGETAS CONOCIMIENTO */

import ImagenConocimientoUno from './images/conocimiento-1.jpg'
import ImagenConocimientoDos from './images/conocimiento-2.jpg'
import ImagenConocimientoTres from './images/conocimiento-3.jpg'
import { Information } from './conocimiento/conocimiento-info';
import { Footer } from './footer/footer';

function Container () {

  const clientes = [
    {photo: Paola, name: 'Paola Ramirez', description: '"Lorem", ipsum dolor sit amet consectetur adipisicing elit. Vel autem earum enim facere veniam rem! Dolorum quibusdam iste cum quaerat vel error natus praesentium quisquam.'},

    {photo: Diego, name: 'Diego Martinez', description: '¿Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel autem earum enim facere veniam rem! Dolorum quibusdam iste cum quaerat vel error natus praesentium quisquam. this match join freedeng?'},

    {photo: Sergio, name: 'Sergio Gonzalez', description: 'Hi ipsum dolor sit amet consectetur adipisicing elit. Vel autem earum enim facere veniam rem! Dolorum quibusdam iste cum quaerat vel error natus praesentium quisquam morin pituji veloz!'}

  ];

  const targetsConocimiento = [
    {imagen: ImagenConocimientoUno, titleTarget: 'Enseñar es un talento', descriptionTarget: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi vel tempore, aliquam ipsa quos quod, eaque alias, laudantium minima doloribus assumenda praesentium voluptatum placeat dignissimos porro totam ratione provident!'},

    {imagen: ImagenConocimientoDos, titleTarget: 'El talento es aprender', descriptionTarget: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi vel tempore, aliquam ipsa quos quod, eaque alias, laudantium minima doloribus assumenda praesentium voluptatum placeat dignissimos porro totam ratione provident!'},

    {imagen: ImagenConocimientoTres, titleTarget: 'El aprendizaje es abierto', descriptionTarget: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi vel tempore, aliquam ipsa quos quod, eaque alias, laudantium minima doloribus assumenda praesentium voluptatum placeat dignissimos porro totam ratione provident!'},
  ]

  /* ESTADOS */
  let [clientIndex, setClientIndex] = React.useState(clientes[0])
  let [indexAmentar, setIndexAumnetar] = React.useState(1)

  setTimeout(() => {
    if(indexAmentar < clientes.length) {
      setClientIndex(
        clientes[indexAmentar],
        setIndexAumnetar(indexAmentar + 1),
      )
    } else {
      setIndexAumnetar(indexAmentar = 1, setClientIndex(clientes[0]))
    }
  }, 2000)


  return (
    <>
      <Header/>
      <Section/>
      <div className="services-container">
        <Services
          icon = {<BsFillTelephoneOutboundFill/>}
          type = {'Servicio 24 horas'}
        />
        <Services
          icon = {<FaMoneyBillWaveAlt/>}
          type = {'Servicio de bajo costo'}
        />
        <Services
          icon = {<BsFillPersonCheckFill/>}
          type = {'Gestión de clientes'}
        />
      </div>

      <About/>
      <Client>
        {
          <ClientSlider
            photo = {clientIndex.photo}
            name = {clientIndex.name}
            description = {clientIndex.description}
            key = {clientIndex.name}
          />
        }
      </Client>
      <div>
        <Conocimiento>
          <div className="container-conocimiento">
            {
              targetsConocimiento.map(target => 
                <Information
                  imagenConocimiento = {target.imagen}
                  titleTarget = {target.titleTarget}
                  descriptionTarget = {target.descriptionTarget}
                />
              )
            }
          </div>
        </Conocimiento>
      </div>
      <Footer/>
    </>
  );
}

export { Container }