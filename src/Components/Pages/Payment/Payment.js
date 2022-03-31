import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment">
        <Link to="/"><button className="payment_button">Volver</button></Link>
        <div className='payment_div'>
          <Link to="/payment/card"><button className='payment_div_button'>Tarjeta</button></Link>
          <Link to="/payment/cash"><button className='payment_div_button'>Efectivo</button></Link>
        </div>
    </div>
  );
}

export default Payment;