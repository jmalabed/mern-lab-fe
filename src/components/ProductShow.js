import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { Container , Row , Col, Button } from 'react-bootstrap'


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
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}><Image src={product.image} fluid/></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <p>{product.name}</p>
            <p>Price: {product.price}</p>
          </Col>
          <Col xs={6}>
            <p>Description: {product.description}</p>
          </Col>
          <Col>
            <style type="text/css">
              {`
              .btn-light {
                background-color: #00FFFF;
                color: black;
              }
              `}
            </style>
            <Row>
            <Button variant="light" >
              <Link to={`/products`}>Index Page</Link>
            </Button>
          </Row>
          <Row>
            <Button variant="light">
              <Link to={`/products/${product._id}/edit`}>Edit Product</Link>
            </Button>
          </Row>
          <Row>
            <Button onClick={() => handleDelete(product._id)} variant="light">Delete Product</Button>
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductIndex;
