import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct/CartProduct';
import Close from './Img/Close.png'
import './CartList.scss';

const CartList = ({cart, setCart, openMenu, setOpenMenu, cartTotal}) => {
  return (
    <div className={`cartList ${openMenu && "active"}`}>
      <div className='cartList_title'>
        <h1 className='cartList_title_h1'>CART</h1>
        <img className='cartList_title_img' src={Close} onClick={() => setOpenMenu(false)} />
      </div>
      <div className='cartList_products'>
        <CartProduct cart={cart} setCart={setCart} />
      </div>
      <div className='cartList_total'>
        {cart.length > 0 && <p className='cartList_total_p'>TOTAL: ${cartTotal.toLocaleString("ar")}</p>}
      </div>
      <div className='cartList_sell'> 
        {cart.length > 0
        ? <Link className="cartList_sell_a" to="/payment"><button className="cartList_sell_a_button">Vender</button></Link>
        : <button className="cartList_sell_disabled" disabled>No hay productos</button>}
      </div>
    </div>
  );
}

export default CartList;