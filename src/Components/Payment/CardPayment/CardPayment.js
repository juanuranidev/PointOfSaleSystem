import axios from 'axios';
import React, { useState } from 'react';
import './CardPayment.scss';

const CardPayment = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    emailVerification: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    alert("datos enviados ")

    const inputsArray = e.target[0].value
    console.log(inputsArray)
    // arrayInputs.map(item => {item.name : item.value}

    axios.post()

  }

//   componentDidMount() {
//     // Simple POST request with a JSON body using axios
//     const article = { title: 'React POST Request Example' };
//     axios.post('https://reqres.in/api/articles', article)
//         .then(response => this.setState({ articleId: response.data.id }));
// }


  return (
    <div className='cardPayment'>
      <form className='cardPayment_form' onSubmit={(e) => handleSubmit(e)}>
        <h2 className='cardPayment_form_h2'>Datos del comprador</h2>
        <label className='cardPayment_form_label'>Nombre</label>
          <input className='cardPayment_form_input' type="text" name="nombre" />
        <label className='cardPayment_form_label'>DNI</label>
          <input className='cardPayment_form_input' type="number" name="dni" />
        <label className='cardPayment_form_label'>Email</label>
          <input className='cardPayment_form_input' type="email"/>
        <label className='cardPayment_form_label'>Producto Favorito</label>
          <input className='cardPayment_form_input' type="text"/>
        <h2 className='cardPayment_form_h2'>Datos del pago</h2>
        <label className='cardPayment_form_label'>Número de tarjeta</label>
          <input className='cardPayment_form_input' type="number"/>
        <label className='cardPayment_form_label'>Nombre del titular</label>
          <input className='cardPayment_form_input' type="text"/>
        <label className='cardPayment_form_label'>Fecha de vencimiento</label>
          <input className='cardPayment_form_input' type="date"/>
        <label className='cardPayment_form_label'>CVV</label>
          <input className='cardPayment_form_input' type="number"/>
        <button className='cardPayment_form_button' type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default CardPayment;