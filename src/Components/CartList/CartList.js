import React, { useEffect, useState } from 'react'
import Delete from './Img/Trash.png'
import './CartList.scss'

const CartList = ({cart, setCart}) => {
  const [cartTotal, setCartTotal] = useState()

  useEffect(() => {
    let cartTotal = 0
    let productTotal = 0
    
    
    
    cart.forEach(product => {
        let productPrice = product.price.replace("$", "")
        productTotal = product.quantity * Number(productPrice)
        cartTotal += productTotal
        console.log(product.quantity)
        console.log(Number(productPrice))
      })
      
      setCartTotal(cartTotal)
  }, [cart])
  





  const handleRemoveItem = (product) => {
    const productToDelete = cart.find(x => x._id === product._id)
    setCart(cart.filter((x) => x._id !== productToDelete._id))
  }

  const handleIncrement = (product) => {
    const target = cart.find(x => x._id === product._id)
    target.quantity !== product.stock && setCart(cart.map((x) => x._id === product._id ? { ...product, quantity: product.quantity + 1 }: x))
  }

  const handleDecrement = (product) => {
    const target = cart.find(x => x._id === product._id)
    target.quantity === 1
    ? setCart(cart.filter((x) => x._id !== product._id))
    : setCart(cart.map((x) => x._id === product._id ? { ...product, quantity: product.quantity - 1 }: x))
  }



  return (
    <div className='cartList'>
      <h1 className='cartList_h1'>CART</h1>
      <div className='cartList_products'>
        {cart.map(product => 
          <div className='cartList_product' key={product._id}>
            <img className='cartList_product_img' src={product.image}/>
            <div className='cartList_product_info'>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <div>
                <button onClick={() => handleDecrement(product)} >-</button>
                <p>{`${product.quantity}`}</p>
                <button onClick={() => handleIncrement(product)} disabled={product.quantity===product.stock} >+</button>
              </div>
            </div>
            <img className='cartList_product_img' src={Delete} onClick={() => handleRemoveItem(product)} />
          </div>
        )}
      </div>
      <div className='cartList_total'>
        {cart.length>0 ? <p>${(cartTotal).toFixed(2)}</p> : <p>$0</p>}
      </div>
    </div>
  )
}

export default CartList