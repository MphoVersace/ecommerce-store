// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/MenuSidebar';
import { ProductDetail } from './container';
import { Home } from './container';
import BagDetails from './Bag/BagDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/menu-icon" element={<MenuIcon />} />
        <Route path="/nav-link" element={<NavLink />} />
        <Route path="/dashboard" element={<ProductDetail />} />
        <Route path="/bag" element={<BagDetails />} />
      </Routes>
    </BrowserRouter>
  );
}


const Logo = () => <div>Logo Page</div>;
const MenuIcon = () => <div>Menu Icon Page</div>;
const NavLink = () => <div>Nav Link Page</div>;

export default App;

