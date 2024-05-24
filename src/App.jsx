import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Products from "./Pages/Products";
import HomePage from "./Pages/homepage";
import LoginPage from "./Pages/login";
import SignupPage from "./Pages/signup";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
