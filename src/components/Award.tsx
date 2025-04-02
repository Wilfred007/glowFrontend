import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Award = () => {
  return (
    <div className='flex flex-col lg:flex-row w-11/12 mx-auto mt-10 bg-gray-50 rounded-lg shadow-lg overflow-hidden'>
      {/* Image Section */}
      <div className='hidden lg:flex w-1/2'>
        <Image 
          src='/pour.jpeg' 
          height={500} 
          width={400} 
          alt='home' 
          className='rounded-r-lg object-cover w-full' 
        />
      </div>
      
      {/* Text Section */}
      <div className='flex flex-col justify-center items-center w-full lg:w-1/2 p-10 text-center'>
        <h1 className='text-4xl font-bold text-gray-900'>Enjoy</h1>
        <h2 className='text-xl text-gray-700 mt-3'>Our Award-Winning Product</h2>
        <p className='text-gray-600 mt-4 max-w-lg'>
          Experience the best in quality and innovation. Our products have been recognized globally for their excellence, delivering top-tier performance for all your needs.
        </p>
        <Link 
          href='/' 
          className='bg-yellow-500 px-6 py-3 rounded-full text-white mt-6 transition duration-300 hover:bg-black'
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Award
