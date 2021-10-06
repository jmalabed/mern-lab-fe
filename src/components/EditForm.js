import { Form, Button, Container } from "react-bootstrap";

import React, { useState, useEffect } from "react";
const EditForm = (props) => {
  const initState = {
    name: "",
    price: 0,
    description: "",
    image: "",
  };
  const [input, setInput] = useState(initState);
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, image, price } = input;
    const id = props.match.params.id;
    const ProductData = { name, description, image, price };
    await fetch(`http://localhost:9000/estore/${id}`, {
      method: "PUT",
      body: JSON.stringify(ProductData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.history.push(`/products/${id}`);
  };

  const getProduct = async () => {
    try {
      const id = props.match.params.id;
      const foundProduct = await fetch(`http://localhost:9000/estore/${id}`);
      const parsedProduct = await foundProduct.json();
      setInput(parsedProduct);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <style type="text/css">
            {`
              .bg-grey {
                 background-color: rgb(214, 214, 214)
                   }
                `}
          </style>
          <Container className="mt-4 bg-grey p-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={input.name}
                  onChange={handleChange}
                  id="name"
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="price"
                  type="number"
                  value={input.price}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  as="textarea"
                  value={input.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  name="image"
                  type="text"
                  value={input.image}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      )}
    </>
  );
};

export default EditForm;
