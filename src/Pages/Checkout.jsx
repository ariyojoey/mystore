import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  return (
    <div>
    <Header />
    <h2 className='text-center'> Checkout </h2>
    <hr />

    <button type="button" className="text-white bg-black hover:bg-black-800 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black-600 dark:hover:bg-black-700 focus:outline-none mx-9 dark:focus:ring-black-800"> Thanks </button>
    <Footer />
      
    </div>
  )
}

export default Checkout
