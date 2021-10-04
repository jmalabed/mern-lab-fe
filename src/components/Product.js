import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Product = (props) => {
  return (
    <div className="cardWidth">
    <Card className="border" style={{ width: '18rem' }}>
      <Card.Img className="jimg"  variant="top" src={props.product.image} />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>
          Price: {props.product.price}

        </Card.Text>
        <Card.Text>

          Description: {props.product.description}
        </Card.Text>
        <Button variant="light"><Link to={`/products/${props.product._id}`}>See Product Details</Link></Button>
      </Card.Body>
    </Card>

  </div>
  );
};

export default Product;
