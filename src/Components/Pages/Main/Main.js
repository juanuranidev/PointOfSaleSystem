import React, { useState } from 'react';
import Menu from './Img/Menu.png';
import CartList from '../../CartList/CartList';
import Products from '../../Products/Products';
import './Main.scss';

const Main = ({cart, setCart, cartTotal}) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className='main'>
      <div className="main_menu">
        <img className='main_menu_img' src={Menu} onClick={() => setOpenMenu(true)} />
      </div>
      <Products cart={cart} setCart={setCart} setOpenMenu={setOpenMenu} />
      <CartList cart={cart} setCart={setCart} openMenu={openMenu} setOpenMenu={setOpenMenu} cartTotal={cartTotal} />
    </div>
  );
}

export default Main;