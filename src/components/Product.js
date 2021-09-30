import React from "react";
import { Link } from "react-router-dom";
const Product = (props) => {
  return (
    <div>
      <h1>Product Here</h1>
      <p>{props.product._id}</p>
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
      <p>{props.product.description}</p>
      <Link to={`/products/${props.product._id}`}>See Product Details</Link>
    </div>
  );
};

export default Product;
