
import './App.css';
import Navbar from './components/navbar/navbar';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Product from './pages/product/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about/about';
import Conatact from './pages/contactus/contact';

function App() {
  return (

   <Router>
    <Navbar/>
   
      <Routes>

      <Route path="/" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Conatact />} />
        
      </Routes>
    </Router>

  );
}

export default App;
