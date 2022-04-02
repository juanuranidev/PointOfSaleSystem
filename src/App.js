import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Main from "./Components/Pages/Main/Main";
import Payment from "./Components/Pages/Payment/Payment";
import CardPayment from "./Components/Pages/CardPayment/CardPayment";
import CashPayment from "./Components/Pages/CashPayment/CashPayment";
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState()

  useEffect(() => {
    // Get total price of the cart
    let cartPriceTotal = 0
    let productTotal = 0
    cart.forEach(product => {
        let productPrice = product.price.replace("$", "")
        productTotal = product.quantity * Number(productPrice)
        cartPriceTotal += productTotal
      })
      setCartTotal(cartPriceTotal)
  }, [cart])

  return (
    <>
      <ToastContainer 
        position="bottom-left"
        theme="colored"
        limit={3}
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main cart={cart} setCart={setCart} cartTotal={cartTotal} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/card" element={<CardPayment cart={cart} setCart={setCart} cartTotal={cartTotal} />} />
          <Route path="/payment/cash" element={<CashPayment cart={cart} setCart={setCart} cartTotal={cartTotal} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
