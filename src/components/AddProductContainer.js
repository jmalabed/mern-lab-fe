import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const AddProductContainer = (props) => {
  const [formState, changeForm] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    const newProd = await fetch("http://localhost:9000/estore", {
      body: JSON.stringify(formState),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(newProd);
    props.history.push("/products");
  };
  const handleChange = (e) => {
    console.log("changed");
    console.log(e.target.name);
    console.log(e.target.value);
    changeForm({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <>
      <style type="text/css">
        {`
              .bg-grey {
                 background-color: rgb(214, 214, 214)
                   }
                `}
      </style>
      <Container className="mt-4 bg-grey p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="What is this product called?"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="price"
              type="number"
              placeholder="Price"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="description"
              type="text"
              placeholder="Describe your product!"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image Link</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="image"
              type="text"
              placeholder="Link To Your Image"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProductContainer;
