import React from 'react';
import CartList from '../../CartList/CartList';
import Products from '../../Products/Products';

const Main = ({cart, setCart, cartTotal}) => {
  return (
    <>
      <Products cart={cart} setCart={setCart} />
      <CartList cart={cart} setCart={setCart} cartTotal={cartTotal} />
    </>
  );
}

export default Main;