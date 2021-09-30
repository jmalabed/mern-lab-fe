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
        <form onSubmit={handleSubmit}>
          <legend>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </legend>
          <legend>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              value={input.price}
              onChange={handleChange}
            />
          </legend>
          <legend>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
            >
              {input.description}
            </textarea>
          </legend>
          <legend>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              name="image"
              value={input.image}
              onChange={handleChange}
            />
          </legend>
          <input type="submit" value="Edit Product" />
        </form>
      )}
    </>
  );
};

export default EditForm;
