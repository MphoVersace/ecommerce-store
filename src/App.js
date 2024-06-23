import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
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
=======
import Sidebar from './components/MenuSidebar';
import './App.css'; // Assuming App.css is in the src directory
import Home from './container/Home/Home';
import BagDetails from './Bag/BagDetails';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#EAEAEA' }}>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logo" element={<Logo />} />
            <Route path="/menu-icon" element={<MenuIcon />} />
            <Route path="/nav-link" element={<NavLink />} />
            <Route path="/bag-details" element={<BagDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
>>>>>>> e3170fd76f5fe112a473c6546e3ba60665e3f313

// const Home = () => <div>Home Page</div>;
const Logo = () => <div>Logo Page</div>;
const MenuIcon = () => <div>Menu Icon Page</div>;
const NavLink = () => <div>Nav Link Page</div>;

export default App;

