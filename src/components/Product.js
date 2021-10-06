import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

const Product = (props) => {
  return (
    <Col>
      <Card className="border">
        <Card.Img className="jimg" variant="top" src={props.product.image} />
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Text>Price: {props.product.price}</Card.Text>
          <Card.Text>Description: {props.product.description}</Card.Text>
          <Button variant="outline-primary">
            <Link
              to={`/products/${props.product._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              See Product Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
