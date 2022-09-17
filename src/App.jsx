import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import HomePage from './Pages/homepage'
import Products from './Pages/Products'
import Cart from './Pages/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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
