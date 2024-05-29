import React from 'react'
import { baseUrl } from '../main'

const Card = ({title, price, image, onClick}) => {
  
  return (
    <div>
        <div className="p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-700" onClick={onClick}>
            <img src={baseUrl+'/uploads/'+image} />
            <div className='flex flex-col items-center'>
                <p className='font-semibold'>{ title }</p>
                <p className='text-xs font-regular text-gray-400'>${ price }</p>
            </div>
        </div>
    </div>
  )
}

export default Card
