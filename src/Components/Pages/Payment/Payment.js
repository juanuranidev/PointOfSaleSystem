import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment_back">
        <Link className="payment_back_a" to="/"><button className="payment_back_a_button">Volver</button></Link>
      </div>
        <div className='payment_div'>
          <Link className='payment_div_a' to="/payment/card"><button className='payment_div_a_button'>Tarjeta</button></Link>
          <Link className='payment_div_a' to="/payment/cash"><button className='payment_div_a_button'>Efectivo</button></Link>
        </div>
    </div>
  );
}

export default Payment;