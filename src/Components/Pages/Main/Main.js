import React from 'react';
import CartList from '../../CartList/CartList';
import Products from '../../Products/Products';

const Main = ({cart, setCart, cartTotal, setCartTotal}) => {
  return (
    <>
      <Products cart={cart} setCart={setCart} />
      <CartList cart={cart} setCart={setCart} cartTotal={cartTotal} setCartTotal={setCartTotal}/>
    </>
  );
}

export default Main;