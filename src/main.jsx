import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import cartReducer, { getTotals } from "./redux/cartSlice";
import userReducer from "./redux/userSlice";
import productsReducer from "./redux/productSlice";
import ordersReducer from "./redux/orderSlice";

export const baseUrl = 'https://m-store-server.onrender.com'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    products: productsReducer,
    orders: ordersReducer
  },
});

store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
