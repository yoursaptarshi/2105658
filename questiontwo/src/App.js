import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Products/>} />
        <Route path="/product/:productName" element={<Product/>} />
      </Routes>
    </Router>
  );
}

export default App;