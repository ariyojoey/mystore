import React from 'react'

function Footer() {
  return (
    <div className='mt-7'>
      <hr></hr>
      <div className='flex justify-between items-center px-8 mt-5 mb-6'>
      <p> © 2022 MyStore</p>
      <div className=''>
          
      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option >Choose a country</option>
        <option value="US">Nigeria</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>

        </div>
      </div>
     
    </div>
  )
}

export default Footer
