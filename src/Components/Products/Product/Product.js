import React from 'react';
import './Products.scss';

const Product = ({products, cart, setCart, setOpenMenu}) => {

    const handleAddToCart = (product) => {
        setOpenMenu(true)
        const isInCart = cart.find((x => x._id === product._id))
        if(isInCart){
            const NewCart = cart.map((x) => {
                if (x._id === product._id) {
                    if(x.quantity === product.stock){
                        alert("No hay más stock del producto")
                    } else {
                        return { ...product, quantity: x.quantity + 1}
                    }
                }
                return x
            })
            setCart(NewCart)
        } else {
            setCart([...cart, {...product, quantity: 1}])
        }
    }

  return (
    <>
    {products.map(product =>
        <div key={product._id} className={product.stock > 0 ? "product" : "product noStock"}>
            <img src={product.image} className="product_img"/>
            <h2 className="product_h2">{product.name}</h2> 
            <div className="product_div">
                <p className="product_div_p">{product.price}</p>
                {product.stock > 0
                ? <button className="product_div_button" onClick={() => handleAddToCart(product)}>Agregar</button>
                : <button className="product_div_button" disabled>Sin stock</button>}
            </div>
        </div>)}
    </>
  );
}

export default Product;
