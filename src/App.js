import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './container';
import { ProductDetail } from './container';
import './App.css';

const App = () => (
  <Router>
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  </div>
</Router>
);

export default App;

