import React from 'react';
import axios from 'axios'
function Product() {
    const getProduct = async()=>{
        const response = await axios.get(`http://127.0.0.1/categories/products`);
        return response.data
    }
const product = getProduct();
  return (
    <div>
      <h1>{product.productName}</h1>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
}

export default Product;
