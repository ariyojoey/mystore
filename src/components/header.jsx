import React, {useEffect} from 'react'
import headerLogo from '../assets/mystore-logo.svg'
import shopCart from '../assets/shopping-cart.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../cartSlice';


function Header() {
  const history = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])
  
  return (
    <div className="flex items-center py-2 border border-t-0 border-b-2 w-screen px-10 md:px-7 lg:px-12 mt-2  sticky top-0 left-0 right-0 bg-white">
      
    <div className='flex-1 flex justify-center'>
         <img src={headerLogo} className="hover:cursor-pointer" onClick={() => history('/')}/>
    </div>
      <img src={shopCart} className="hover:cursor-pointer" onClick={() => history('/cart')} />
      <span className='flex items-center justify-center rounded-xl bg-blue-500 text-white ml-1 h-5 w-5 text-xs font-bold absolute right-8 md:right-4 lg:right-10 top-2'>
        <span>{cart?.qty}</span>
      </span>
    </div>
  )
}

export default Header
