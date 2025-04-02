"use client"
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Inspiration = () => {
  return (
    <Slide direction="up" damping={0.3} triggerOnce cascade>
      <div className='flex flex-col items-center justify-center h-96 bg-gray-100 px-6 text-center'>
        <h1 className='text-3xl md:text-4xl font-bold font-serif'>
          Get Inspiration Straight To Your Inbox
        </h1>
        <p className='text-gray-600 mt-2 max-w-lg'>
          Subscribe to our newsletter to keep up to date with our latest news, colour trends, and product launches.
        </p>
        <div className='mt-5 flex flex-col sm:flex-row items-center gap-3'>
          <input 
            className='h-12 w-72 bg-white border-2 border-gray-300 px-4 rounded-md focus:outline-none focus:border-yellow-600' 
            type='email' 
            placeholder='Enter your email' 
          />
          <button className='bg-yellow-600 px-6 py-3 text-white rounded-md transition duration-300 hover:bg-black'>
            Sign Up
          </button>
        </div>
      </div>
    </Slide>
  )
}

export default Inspiration
