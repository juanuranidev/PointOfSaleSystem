import React, { useEffect, useState } from "react";
import axios from "axios";
import PageLoader from "../PageLoader/PageLoader";
import Product from "./Product/Product";
import './Products.scss';

const Products = ({cart, setCart, setOpenMenu}) => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
      axios.get(`https://ait-tesapi.herokuapp.com/products`)
      .then(res => setProducts(res.data.products))
      .finally(() => setLoader(false))
    }, [])
    
    return (
        <section className="products">
            {loader
            ? <PageLoader/>
            : <Product products={products} cart={cart} setCart={setCart} setOpenMenu={setOpenMenu} />}
        </section>
  );
}

export default Products;