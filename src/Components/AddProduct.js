
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createProduct } from "../actions/Products";

function AddProduct() {

  const initialProductState = {
    id: null,
    description: "",
    price: 0,
    quantity: 0
  };

  const [product, setProduct] = useState(initialProductState);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  const saveProduct = () => {
    dispatch(createProduct(product))
      .then(data => {
        setProduct({
          id: data.id,
          description: data.description,
          price: data.price,
          quantity: data.quantity
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
      <>          
        <form>
          <h3>Add New Product</h3>           
          <label>Description</label>
          <input name="description" type="text" onChange={handleInputChange} placeholder="Enter Description..." />
          <label>Price</label>
          <input name="price" type="text" onChange={handleInputChange} placeholder="Enter Price..." />
          <label>Quantity</label>
          <input name="quantity" type="text" onChange={handleInputChange} placeholder="Enter Quantity..." />
          <button onClick={saveProduct} className="btnSave">
            Submit
          </button>
        </form>
      </>
  )
}

export default AddProduct

