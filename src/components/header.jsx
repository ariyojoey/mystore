import React from 'react'
import headerlogo from '../assets/mystore-logo.svg'
import shopCart from '../assets/shopping-cart.svg'
import { useNavigate } from 'react-router-dom'


function Header() {
  const history = useNavigate()
  return (
    <div className="flex items-center py-2 border border-t-0 border-b-2 w-screen px-10 md:px-7 lg:px-12 mt-2  sticky top-0 left-0 right-0 bg-white">
      
    <div className='flex-1 flex justify-center'>
         <img src={headerlogo} className="hover:cursor-pointer" onClick={() => history('/')}/>
    </div>
      <img src={shopCart} className="hover:cursor-pointer" onClick={() => history('/cart')} />
    </div>
  )
}

export default Header
