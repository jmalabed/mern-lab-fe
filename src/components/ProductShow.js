import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

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
      <Container className="mt-4">
        <Card style={{ width: "50%" }} className="mx-auto">
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Description: {product.description}</Card.Text>
            <Button variant="outline-primary" className="mx-2">
              <Link
                to={`/products`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Index Page
              </Link>
            </Button>
            <Button variant="outline-primary" className="mx-2">
              <Link
                to={`/products/${product._id}/edit`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Edit Product
              </Link>
            </Button>
            <Button
              onClick={() => handleDelete(product._id)}
              variant="outline-primary"
              className="mx-2"
            >
              Delete Product
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ProductIndex;
