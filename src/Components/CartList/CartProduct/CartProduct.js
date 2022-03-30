import React from 'react';
import Delete from '../Img/Trash.png';
import './CartProduct.scss';

const CartProduct = ({cart, setCart}) => {

    const handleRemoveItem = (product) => {
      const productToDelete = cart.find(x => x._id === product._id)
      setCart(cart.filter(x => x._id !== productToDelete._id))
    }
    
    const handleIncrement = (product) => {
      const target = cart.find(x => x._id === product._id)
      target.quantity !== product.stock && setCart(cart.map(x => x._id === product._id ? { ...product, quantity: product.quantity + 1 }: x))
    }
    
    const handleDecrement = (product) => {
      const target = cart.find(x => x._id === product._id)
      target.quantity === 1
      ? setCart(cart.filter(x => x._id !== product._id))
      : setCart(cart.map(x => x._id === product._id ? { ...product, quantity: product.quantity - 1 }: x))
    }

  return (
    <>
    {cart.map(product => 
      <div className='cartProduct' key={product._id}>
        <img className='cartProduct_img' src={product.image}/>
        <div className='cartProduct_div'>
          <h2 className='cartProduct_div_h2'>{product.name}</h2>
          <p className='cartProduct_div_p'>{product.price}</p>
          <div className='cartProduct_div_div'>
            <button className='cartProduct_div_div_button' onClick={() => handleDecrement(product)}>-</button>
            <p className='cartProduct_div_div_p'>{`${product.quantity}`}</p>
            <button className={`cartProduct_div_div_button ${product.quantity===product.stock && "disabled"}`} onClick={() => handleIncrement(product)}>+</button>
          </div>
        </div>
        <img className='cartProduct_delete' src={Delete} onClick={() => handleRemoveItem(product)} />
      </div>
    )}
    </>
  );
}

export default CartProduct;