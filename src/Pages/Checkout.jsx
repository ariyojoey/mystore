import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {clearCart as clear} from '../redux/cartSlice.js'
import { baseUrl } from '../main';
import { toast } from 'react-toastify'

function Checkout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)


  let clearCart = () => {
    toast.success(`Thanks for shopping with us`, {
      autoClose: 5000,
      position: "bottom-left",
      theme: "colored",
      closeOnClick: true,
      pauseOnHover: true,
   })
    dispatch(clear())
  }


  return (
    <div>
    <Header />
    <h1 className='text-center m-3'><strong> Checkout </strong></h1>
    <hr />

    
<div className="overflow-x-auto relative">

<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="py-3 px-6 rounded-l-lg">
            Product image
            </th>
            <th scope="col" className="py-3 px-6 rounded-l-lg">
                Product name
            </th>
            <th scope="col" className="py-3 px-6">
                Qty
            </th>
            <th scope="col" className="py-3 px-6 rounded-r-lg">
                Price
            </th>
        </tr>
    </thead>
    <tbody>
        {cart.items?.map((item) => (<tr key={item._id} className="bg-white dark:bg-gray-800">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img src={baseUrl+'/uploads/'+item.image} height={80} width={50} />
        </th>
        <td className="py-4 px-6">
            {item.title}
        </td>
        <td className="py-4 px-6">
            {item.cartQty}
        </td>
        <td className="py-4 px-6">
            ${item.price}
        </td>
    </tr>))}
    </tbody>
    <tfoot>
        <tr className="font-semibold text-gray-900 dark:text-white">
            <th scope="row" className="py-3 px-6 text-base"></th>
            <th scope="row" className="py-3 px-6 text-base"></th>
            <td className="py-3 px-6"></td>
            <td className="py-3 px-6"></td>
        </tr>
    </tfoot>
</table>
</div>
{/* <div className='flex justify-center items-center p-4 m-4'>
    <p className=''>
        Total: {" "} ${Math.trunc(cart.totalAmount * 100) / 100}
    </p>
    <button type="button" className="text-white bg-black hover:bg-black-800 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black-600 dark:hover:bg-black-700 focus:outline-none mx-6 dark:focus:ring-black-800" 
    onClick={() => {navigate('/pay')}}> 
        Pay 
    </button>
</div> */}
<button type="button" className="text-white bg-black hover:bg-black-800 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black-600 dark:hover:bg-black-700 focus:outline-none mx-9 dark:focus:ring-black-800" 
 onClick={() => {clearCart(); navigate('/')}}> 
    Thanks 
</button>
<Footer />
      
    </div>
  )
}

export default Checkout
