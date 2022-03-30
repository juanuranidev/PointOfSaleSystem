import React, { useState } from "react";
import Products from "./Components/Products/Products";
import CartList from './Components/CartList/CartList';
import Payment from "./Components/Payment/Payment";
import './App.scss';

function App() {
  const [cart, setCart] = useState([])
  const [payment, setPayment] = useState(false)

  return (
    <div className="app">
      <Products cart={cart} setCart={setCart} />
      <CartList cart={cart} setCart={setCart} setPayment={setPayment} />
      <Payment cart={cart} setCart={setCart} payment={payment} setPayment={setPayment} />
    </div>
  );
}

export default App;
