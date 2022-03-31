import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct/CartProduct';
import './CartList.scss';

const CartList = ({cart, setCart, cartTotal, setCartTotal}) => {

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
    <div className='cartList'>
      <h1 className='cartList_h1'>CART</h1>
      <div className='cartList_products'>
        <CartProduct cart={cart} setCart={setCart} />
      </div>
      <div className='cartList_total'>
        {cart.length > 0 && <p className='cartList_total_p'>TOTAL: ${cartTotal.toLocaleString("en")}</p>}
      </div>
      <div className='cartList_sell'>
        {cart.length > 0
        ? <Link to="/payment"><button className="cartList_sell_button">Vender</button></Link>
        : <button className="cartList_sell_button disabled" disabled>No hay productos</button>}
      </div>
    </div>
  );
}

export default CartList;