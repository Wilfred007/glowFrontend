"use client"
import Input from 'postcss/lib/input'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Inspitation = () => {
  return (
    <Slide direction="up" damping={0.3} triggerOnce cascade>
          <div className='flex justify-center h-96 bg-gray-100'>
      <div className='mt-40'>
        <div>
            <h1 className='text-2xl font-bold font-serif text-center'>Get Inspiration Straigth To Your Inbox</h1>
            <p className='text-gray-600 mt-2 text-center'>Subscribe to our newsletter to keep up to date with our latest news, colour trends and product launches
            </p>
        </div>
        <div className='mt-5'>
            <input className='h-10 w-72 bg-transparent border-2 border-gray-300' type='email' placeholder='Enter your email ' />
            <button className='bg-yellow-600 py-2 px-5 text-white rounded-r-md'>Sign Up</button>
        </div>
      </div>
    </div>
    </Slide>

  )
}

export default Inspitation
