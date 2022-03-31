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

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main cart={cart} setCart={setCart} cartTotal={cartTotal} setCartTotal={setCartTotal} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/card" element={<CardPayment cart={cart} setCart={setCart} />} />
          <Route path="/payment/cash" element={<CashPayment cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
