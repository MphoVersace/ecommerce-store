<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/MenuSidebar';
import './App.css'; // Assuming App.css is in the src directory
import Home from './container/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logo" element={<Logo />} />
            <Route path="/menu-icon" element={<MenuIcon />} />
            <Route path="/nav-link" element={<NavLink />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// const Home = () => <div>Home Page</div>;
const Logo = () => <div>Logo Page</div>;
const MenuIcon = () => <div>Menu Icon Page</div>;
const NavLink = () => <div>Nav Link Page</div>;

export default App;
=======
>>>>>>> 128afec2f7879c8a22b0dbbae3dfc5896b8c1b24
