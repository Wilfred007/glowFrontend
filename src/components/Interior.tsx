import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Interior = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center p-10 rounded-lg w-11/12 mx-auto gap-10 bg-gray-50 shadow-lg'>
      {/* Image Section */}
      <div className='hidden lg:flex w-1/2'>
        <Image 
          src='/interior.jpg' 
          height={400} 
          width={600} 
          alt='Interior Design' 
          className='rounded-lg object-cover w-full' 
        />
      </div>
      
      {/* Text Section */}
      <div className='w-full lg:w-1/2 bg-[#2e1065] text-center p-10 rounded-lg'>
        <h1 className='text-white text-3xl font-bold'>Designed to Express</h1>
        <p className='text-white text-sm mt-5 font-medium'>
          Classic artisanal shades meet stylish <br/> textures in this exceptional new collection.
        </p>
        <div className='mt-5'>
          <Link 
            href='/' 
            className='bg-yellow-500 px-6 py-3 rounded-full text-white transition duration-300 hover:bg-black'
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Interior
