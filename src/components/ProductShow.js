import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductIndex = (props) => {
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    try {
      const product = await fetch(
        `http://localhost:9000/estore/${props.match.params.id}`
      );
      const parsedProduct = await product.json();
      setProduct(parsedProduct);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch("http://localhost:9000/estore/" + id, { method: "DELETE" });
      props.history.push("/products");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <h1>Product Here</h1>
      <p>{product._id}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Link to={`/products`}>Index Page</Link>
      <br />
      <Link to={`/products/${product._id}/edit`}>Edit Product</Link>
      <br />
      <button onClick={() => handleDelete(product._id)}>Delete Product</button>
    </div>
  );
};

export default ProductIndex;
