import React from "react";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart as clear } from "../redux/cartSlice.js";
import { baseUrl } from "../main";
import { toast } from "react-toastify";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let clearCart = () => {
    toast.success(`Thanks for shopping with us`, {
      autoClose: 5000,
      position: "bottom-left",
      theme: "colored",
      closeOnClick: true,
      pauseOnHover: true,
    });
    dispatch(clear());
  };

  return (
    <div>
      <Header />
      <h1 className="text-center m-3 text-lg">
        <strong> Checkout </strong>
      </h1>
      <hr />

      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 pb-4">
            <tr>
              <th scope="col" className="py-8 md:py-3 px-6">
                Image
              </th>
              <th scope="col" className=" hidden md:block py-8 md:py-3 px-6">
                Product
              </th>
              <th scope="col" className="py-8 md:py-3 px-6">
                Qty
              </th>
              <th scope="col" className="py-8 md:py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.items?.map((item) => (
              <tr key={item._id} className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    src={baseUrl + "/uploads/" + item.image}
                    height={80}
                    width={50}
                  />
                </th>
                <td className="hidden md:block py-4 px-6">{item.title}</td>
                <td className="py-4 px-6">{item.cartQty}</td>
                <td className="py-4 px-6">£{item.price?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" className="py-3 px-6 text-base"></th>
              <th scope="row" className="hidden md:block py-3 px-6 text-base"></th>
              <td className="py-3 px-6"></td>
              <td className="py-3 px-6"></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-center items-center p-4 m-4">
        <button
          type="button"
          className="text-white bg-black hover:bg-black-800 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black-600 dark:hover:bg-black-700 focus:outline-none mx-9 dark:focus:ring-black-800"
          onClick={() => {
            clearCart();
            navigate("/");
          }}
        >
          Proceed to payment
        </button>
      </div>
    </div>
  );
}

export default Checkout;
