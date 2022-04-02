import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { successfulPurchase, errorPurchase } from '../../Notifications/Notifications';
import axios from 'axios';
import './CardPayment.scss';

const CardPayment = ({cart, setCart, cartTotal}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    email: '',
    productoFavorito: '',
    numeroDeTarjeta: '',
    productoFavorito: '',
    nombreDelTitular:'',
    fechaDeVencimiento:'',
    cvv:''
  });

  const requiredInputs = [
    formData.nombre, 
    formData.dni, 
    formData.email, 
    formData.productoFavorito, 
    formData.numeroDeTarjeta, 
    formData.productoFavorito, 
    formData.nombreDelTitular, 
    formData.fechaDeVencimiento, 
    formData.cvv
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name] : e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios({
      url: "https://ait-tesapi.herokuapp.com/sales/",
      method: "POST",
      data: formData,
      cart: cart,
      cartTotal: cartTotal
    }).then(() => {
      successfulPurchase()
    }).catch(err => {
      console.log(err)
      errorPurchase()

    }).finally(() => {
      navigate('/', { replace: true })
      setCart([])
      setFormData({
        nombre: '',
        dni: '',
        email: '',
        productoFavorito: '',
        numeroDeTarjeta: '',
        productoFavorito: '',
        nombreDelTitular:'',
        fechaDeVencimiento:'',
        cvv:''
      })
    })
  }

  return (
    <div className='cardPayment'>
      <div className='cardPayment_back'>
        <Link className='cardPayment_back_a' to="/payment"><button className='cardPayment_back_a_button'>Volver</button></Link>
      </div>
      <form className='cardPayment_form' onSubmit={handleSubmit}>
        <h2 className='cardPayment_form_h2'>Datos del comprador</h2>
        <label className='cardPayment_form_label'>Nombre</label>
          <input 
            className='cardPayment_form_input'
            type="text" 
            name="nombre"
            placeholder="Ej: juan"
            value={formData.nombre}
            onChange={handleChange} />
        <label className='cardPayment_form_label'>DNI</label>
          <input
           className='cardPayment_form_input'
           type="number"
           name="dni"
           placeholder="Ej: 43534567"
           value={formData.dni}
           onChange={handleChange} />
        <label className='cardPayment_form_label'>Email</label>
          <input
           className='cardPayment_form_input'
           type="email"
           name="email"
           placeholder="Ej: juan@gmail.com"
           value={formData.email}
           onChange={handleChange} />
        <label className='cardPayment_form_label'>Producto Favorito</label>
          <input
           className='cardPayment_form_input'
           type="text"
           name="productoFavorito"
           placeholder="Ej: cappuccino"
           value={formData.productoFavorito}
           onChange={handleChange} />
        <h2 className='cardPayment_form_h2'>Datos del pago</h2>
        <label className='cardPayment_form_label'>Número de tarjeta</label>
          <input
           className='cardPayment_form_input'
           type="number"
           name="numeroDeTarjeta"
           placeholder="Ej: 123456789012"
           value={formData.numeroDeTarjeta}
           onChange={handleChange} />
        <label className='cardPayment_form_label'>Nombre del titular</label>
          <input
           className='cardPayment_form_input'
           type="text"
           name="nombreDelTitular"
           placeholder="Ej: nicolas martinez"
           value={formData.nombreDelTitular}
           onChange={handleChange} />
        <label className='cardPayment_form_label'>Fecha de vencimiento</label>
          <input
           className='cardPayment_form_input'
           type="month"
           name="fechaDeVencimiento"
           placeholder="Ej: 12/23"
           value={formData.fechaDeVencimiento}
           onChange={handleChange} />
        <label className='cardPayment_form_label'>CVV</label>
          <input
           className='cardPayment_form_input'
           type="number"
           name="cvv"
           placeholder="Ej: 1234"
           value={formData.cvv}
           onChange={handleChange} />
           {requiredInputs.includes("") || cart.length <= 0
            ? <button className='cardPayment_form_button disabled' disabled>Enviar</button>
            : <button className='cardPayment_form_button' type="submit">Enviar</button>}
         
      </form>
    </div>
  );
}

export default CardPayment;