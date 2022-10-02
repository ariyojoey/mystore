import { configureStore } from '@reduxjs/toolkit';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import App from './App'
import './index.css'
import cartReducer from '../cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
)
