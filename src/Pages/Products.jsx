import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import { useParams, useNavigate } from "react-router-dom";
import { items } from './homepage'
import Card  from '../components/Card'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
  


 function Products() {
        const history = useNavigate();
        let params = useParams();
        const [value, setValue] = useState(null)
        const [map, setMap] = useState(null)

        const user = localStorage.getItem('userToken')

        useEffect(() => {
            setValue(items.filter((x) => `${x.id}` == params.id)[0])
            setMap(items.filter((x) => `${x.id}` != params.id).slice(0, 3).map((e) => {
                return <Card title={e.title} price={e.price} image={e.image} key={e.title} onClick={() => history(`/products/${e.id}`, {
                    replace: true,
                    state: {}
                })}/>
                }))}, [params.id])
           
    const dispatch = useDispatch()
    const handleAddToCart = (value) => {
        dispatch(addToCart(value));
    }

    return (
        <div className='min-h-screen'>
        <Header />
        {
            value && (
                <div className="bg-white dark:bg-gray-800 dark:border-gray-700 mt-14 lg:px-16 md:px-8 sm:px-4 w-screen">
                <div className='flex flex-col-reverse md:flex-row max-w-screen'>
                    <div className="space-y-5 flex-1 px-10">
                        <div className='flex items-center space-x-4'>
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">{ value.title }</h5>
                        </a>
                        <div className="flex items-center space-x-0">
                            <svg aria-hidden="true" className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-regular text-gray-800 font-bold dark:text-white">${value.price}</span>
                        </div>
                        <p> {value.description} </p>
                        {user && <button type="button" className="text-white bg-black hover:bg-black focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-black-600 dark:hover:bg-black-700 focus:outline-none dark:focus:ring-black-800"
                         onClick={() => handleAddToCart(value)} disabled={!user}>Add to Cart</button>}
                         {!user && <span className='pb-8 text-base text-gray-400 italic'>Login to add to cart</span>}
                    </div>
                    <div className='flex-1'>
                        <img src={value.image} style={{objectFit: 'contain'}}/>
                    </div>
                </div>
                
            </div>
            )
        }
    <div className="grid place-items-center w-screen px-4 md:px-8 lg:px-16">
                        <h3 className='mt-3 text-center'>Recommendations</h3>
                    </div>
                    <div className='grid gap-4 px-6 md:grid-cols-2 lg:grid-cols-3 mt-5 w-screen'>
                        {map}
                    </div>

        <Footer />
    </div>
    )
    }

    export default Products
