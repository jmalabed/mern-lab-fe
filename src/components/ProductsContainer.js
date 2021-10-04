import React, { useState, useEffect } from "react";
import Product from "./Product";

const ProductsContainer = (props) => {
  const [products, changeProducts] = useState([]);
  const handleClick = () => {};
  const getProducts = async () => {
    try {
      const products = await fetch("http://localhost:9000/estore");
      console.log(products);
      const parsedProducts = await products.json();
      console.log(parsedProducts);
      changeProducts(parsedProducts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productsCompArr = products.map((prod) => (
    <Product product={prod} onClick={handleClick}></Product>
  ));
  // look for all products => all prodcusts list from FE => map that, for each product product._id => make <Product id={product._id}></Product>
  return (
    <div className="flex">
      {productsCompArr}
    </div>
  )};

export default ProductsContainer;
