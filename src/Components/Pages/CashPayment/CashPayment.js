import React from 'react'

const CashPayment = () => {
  return (
    <div>
        <form>
        <h2>Datos del cliente</h2>
        <label>Email</label>
        <input type="email"/>
        <h2>Datos la compra</h2>
        <label>Monto de pago</label>
        <input type="number"/>

        </form>
    </div>
  )
}

export default CashPayment