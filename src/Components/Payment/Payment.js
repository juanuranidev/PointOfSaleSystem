import React, { useState } from 'react';
import CashPayment from './CashPayment/CashPayment';
import CardPayment from './CardPayment/CardPayment';
import './Payment.scss';

const Payment = ({cart, setCart, payment, setPayment}) => {
  const [method, setMethod] = useState("")


  if(method==="cash"){
    return(
      <div className={`payment ${payment && "active"}`}>
        <button className="payment_button" onClick={() => setMethod("")}>Volver</button>
        <CashPayment/>
      </div>
    )
  }

  if(method==="card"){
    return(
      <div className={`payment ${payment && "active"}`}>
        <button className="payment_button" onClick={() => setMethod("")}>Volver</button>
        <CardPayment/>
      </div>
    )
  }


  return (
    <div className={`payment ${payment && "active"}`}>
        <button className="payment_button" onClick={() => setPayment(false)}>Volver</button>
        <div className='payment_div'>
            <button className='payment_div_button' onClick={() => setMethod("card")}>Tarjeta</button>
            <button className='payment_div_button' onClick={() => setMethod("cash")}>Efectivo</button>
        </div>
    </div>
  );
}

export default Payment;