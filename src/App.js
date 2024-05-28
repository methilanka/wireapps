import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';
import CategoryDetails from './pages/CategoryDetails';

import './App.css';
 
function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/mens-clothing" element={<MensClothing />} />
            <Route path="/womens-clothing" element={<WomensClothing />} />
            <Route path="/category/:category" element={<CategoryDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
