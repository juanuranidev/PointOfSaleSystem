import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Pages/Main/Main";
import Payment from "./Components/Pages/Payment/Payment";
import CardPayment from "./Components/Pages/CardPayment/CardPayment";
import CashPayment from "./Components/Pages/CashPayment/CashPayment";
import './App.scss';

function App() {
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState()

  useEffect(() => {
    let cartTotal = 0
    let productTotal = 0
    cart.forEach(product => {
        let productPrice = product.price.replace("$", "")
        productTotal = product.quantity * Number(productPrice)
        cartTotal += productTotal
      })
      setCartTotal(cartTotal)
  }, [cart])


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main cart={cart} setCart={setCart} cartTotal={cartTotal} />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/payment/card" element={<CardPayment cart={cart} />} />
          <Route path="/payment/cash" element={<CashPayment cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
