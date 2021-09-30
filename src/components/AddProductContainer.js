import React, { useState } from "react";

const AddProductContainer = (props) => {
  const [formState, changeForm] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    await fetch("http://localhost:9000/estore", {
      body: JSON.stringify(formState),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.history.push("/products");
  };
  const handleChange = (e) => {
    changeForm({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Price
          <input
            type="number"
            name="price"
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Description
          <input type="text" name="description" onChange={handleChange}></input>
        </label>
        <label>
          Image Link
          <input type="text" name="image" onChange={handleChange}></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AddProductContainer;
