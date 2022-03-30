import React, { useEffect, useState } from "react";
import axios from "axios";
import './Products.scss'

const Products = ({cart, setCart}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      axios.get(`https://ait-tesapi.herokuapp.com/products`)
      .then(res => setProducts(res.data.products))
    }, [])
  
    const handleAddToCart = (product) => {
        const isInCart = cart.find((x => x._id === product._id))
        if(isInCart){
            const oldCart = cart.map((x) => {
                if (x._id === product._id) {
                    return { ...product, quantity: x.quantity + 1}
                }
                return x
            })
            setCart(oldCart)
        } else {
            setCart([...cart, {...product, quantity: 1}])
        }
    }
    
    return (
        <section className="products">
        {products.map(product =>
            <div key={product._id} className={product.stock > 0 ? "product" : "product noStock"} >
                <img src={product.image} className="product_img"/>
                <h2 className="product_h2">{product.name}</h2> 
                <div className="product_div">
                <p className="product_div_p">{product.price}</p>
                {product.stock > 0
                ? <button onClick={() => handleAddToCart(product)} className="product_div_button">Agregar</button>
                : <button disabled className="product_div_button">Sin stock</button>}
                </div>
            </div>)}
        </section>
  )
}

export default Products