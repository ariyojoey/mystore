import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getTotals } from "../redux/cartSlice";
import headerLogo from "../assets/mystore-logo.svg";
import shopCart from "../assets/shopping-cart.svg";
import { logout } from "../redux/userSlice"
import { confirmAlert } from 'react-confirm-alert'
import { clearCart } from "../redux/cartSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
   dispatch(getTotals());
  }, [cart, dispatch]);

  const user = localStorage.getItem('userToken')
  
  const handleLogout = () => {
    dispatch(clearCart())
    dispatch(logout())
  }

  const confirmLogout = () => {
    confirmAlert({
      title: '',
      message: 'You are about to logout',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleLogout()
        },
        {
          label: 'No',

        }
      ]
    })
  }
  return (
    <div className="flex items-center justify-between py-2 w-full px-10 md:px-7 lg:px-12 mt-2  sticky top-0 left-0 right-0 bg-white">
      <div className="flex-1 flex md:justify-center">
        <img
          src={headerLogo}
          className="hover:cursor-pointer"
          onClick={() => navigate("/")}
          alt="Logo"
        />
      </div>
      {!user &&  <div className="flex items-center">
        <Link to="/login" className="text-gray-700 hover:underline mr-4">
          Login
        </Link>
        <Link to="/register" className="text-gray-700 hover:underline">
          SignUp
        </Link>
      </div>}
      {user && <div className="flex items-center">
        <button type='button' onClick={confirmLogout} className="text-gray-700 hover:underline">
          Logout
        </button>
      </div>}
      <img
        src={shopCart}
        className="hover:cursor-pointer ml-4"
        onClick={() => navigate("/cart")}
        alt="Shopping Cart"
      />
      <span className={`flex items-center justify-center ${cart.qty ? 'rounded-xl bg-blue-500' : ''} text-white ml-1 h-5 w-5 text-xs font-bold absolute right-8 md:right-4 lg:right-10 top-2`}>
        <span>{cart.qty ? cart.qty : ''}</span>
      </span>
    </div>
  );
}

export default Header;
