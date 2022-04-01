import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CashPayment.scss'

const CashPayment = ({cart, setCart, cartTotal}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    productoFavorito: '',
    montoPagado:''
  });

  const requiredInputs = [
    formData.nombre, 
    formData.productoFavorito, 
    formData.montoPagado
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
    }).then((res) => {
      alert("Compra realizada correctamente")
      console.log(res)
      console.log(`El vuelto es de $${(formData.montoPagado - cartTotal).toLocaleString("ar")}`)
    }).catch(err => {
      console.log(err)

    }).finally(() => {
      navigate('/', { replace: true })
      setCart([])
      setFormData({
        nombre: '',
        productoFavorito: '',
        montoPagado:''
      })
    })
  }

  return (
    <div className='cashPayment'>
      <div className='cashPayment_back'>
        <Link className='cashPayment_back_a' to="/payment"><button className='cashPayment_back_a_button'>Volver</button></Link>
      </div>
      <form className='cashPayment_form' onSubmit={handleSubmit}>
        <h2 className='cashPayment_form_h2'>Datos del comprador</h2>
        <label className='cashPayment_form_label'>Nombre</label>
          <input 
            className='cashPayment_form_input'
            type="text" 
            name="nombre"
            placeholder="Ej: juan"
            value={formData.nombre}
            onChange={handleChange} />
        <label className='cashPayment_form_label'>Producto Favorito</label>
          <input
           className='cashPayment_form_input'
           type="text"
           name="productoFavorito"
           placeholder="Ej: cappuccino"
           value={formData.productoFavorito}
           onChange={handleChange} />
        <h2 className='cashPayment_form_h2'>Datos del pago</h2>
        <label className='cashPayment_form_label'>Catidad pagado</label>
          <input
           className='cashPayment_form_input'
           type="number"
           name="montoPagado"
           placeholder="Ej: 1000 (sólo números)"
           value={formData.montoPagado}
           onChange={handleChange} />
           {requiredInputs.includes("") || cart.length <= 0
            ? <button className='cashPayment_form_button disabled' disabled>Enviar</button>
            : <button className='cashPayment_form_button' type="submit">Enviar</button>}
         
      </form>
    </div>
  );
}

export default CashPayment