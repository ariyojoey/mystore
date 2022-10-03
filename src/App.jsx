import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './Pages/homepage'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout';
import { ToastContainer } from 'react-toastify';

function App() {
 
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
  )
}

export default App
