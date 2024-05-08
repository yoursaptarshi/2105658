import React, { useState } from 'react';
import axios from 'axios';



const Products = () => {
    const [companyName, setCompanyName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [topN, setTopN] = useState(10); // Default value for top N products
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://127.0.0.1/categories/${categoryName}/companies/${companyName}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleSearch = () => {
      fetchData();
    };
  return (
    <div>
    <h1>All Products</h1>
    <div>
      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        id="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="categoryName">Category Name:</label>
      <input
        type="text"
        id="categoryName"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="topN">Top N Products:</label>
      <input
        type="number"
        id="topN"
        value={topN}
        onChange={(e) => setTopN(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="minPrice">Minimum Price:</label>
      <input
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="maxPrice">Maximum Price:</label>
      <input
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
    <button onClick={handleSearch}>Search</button>
    
    {loading ? (
      <p>Loading...</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Discount</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.productName}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
              <td>{product.discount}</td>
              <td>{product.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  )
}

export default Products