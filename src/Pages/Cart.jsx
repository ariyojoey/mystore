import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'

function Cart() {
  return (
    <div>
      <Header />
    <h2 className='text-center'> Cart </h2>
    <hr>

    <button type="button" class="text-white bg-black-700 hover:bg-black-800 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black-600 dark:hover:bg-black-700 focus:outline-none dark:focus:ring-black-800">Continue to Checkout</button>
    </hr>
      <Footer />
    </div>
  )
}

export default Cart
