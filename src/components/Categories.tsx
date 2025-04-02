"use client"
import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Categories = () => {
  return (
    <Slide direction="up" damping={0.3} triggerOnce cascade>
      <div className='w-11/12 mx-auto mt-10 text-center'>
        <h1 className='text-4xl font-bold'>Better, Bolder, More Beautiful</h1>
        <p className='mt-5 w-3/4 mx-auto text-gray-600'>
          From walls and ceilings to multi-surface and textured, no matter the task and whatever the room, we have the product for you. Our carefully curated collection of high-quality paints offers exceptional durability, coverage, and finish for every surface and style.
        </p>
        
        <div className='flex justify-center mt-10 gap-5'>
          <img src='/buke4.png' height={200} width={200} alt='buke' className='rounded-lg shadow-lg'/>
          <img src='/buke3.png' height={200} width={200} alt='buke' className='rounded-lg shadow-lg'/>
          <img src='/buke2.png' height={200} width={200} alt='buke' className='rounded-lg shadow-lg'/>
        </div>
        
        <div className='mt-10'>
          <Link href='/walls-cielings' className='bg-yellow-500 px-6 py-3 rounded-full text-white transition duration-300 hover:bg-black'>
            MEET OUR RANGES
          </Link>
        </div>
      </div>
    </Slide>
  )
}

export default Categories
