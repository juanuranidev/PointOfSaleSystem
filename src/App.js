import React, { useState } from "react";
import Products from "./Components/Products/Products";
import CartList from './Components/CartList/CartList'
import './App.scss'


function App() {
  const [cart, setCart] = useState([])

  return (
    <div className="app">
      <Products cart={cart} setCart={setCart} />
      <CartList cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
