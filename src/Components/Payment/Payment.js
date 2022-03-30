import React from 'react';
import CashPayment from './CashPayment/CashPayment';
import CardPayment from './CardPayment/CardPayment';
import './Payment.scss';

const Payment = ({cart, setCart, payment, setPayment}) => {

  return (
    <div className={`payment ${payment && "active"}`}>
        <button onClick={() => setPayment(false)}>Volver</button>
        <div className='payment_div'>
            <button className='payment_div_button'>Tarjeta</button>
            <button className='payment_div_button'>Efectivo</button>
        </div>
        {/* <CashPayment/> */}
        <CardPayment/>
    </div>
  );
}

export default Payment;