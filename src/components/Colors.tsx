"use client"
import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Colors = () => {
  return (
    <Slide direction="up" damping={0.3} triggerOnce cascade>
    <div className='flex justify-between gap-10 w-11/12 mx-auto'>
      <div className='p-10'>
        <div className='mb-5'>
          <h1 className='text-4xl font-serif font-bold flex justify-center'>Statement</h1>
          <h1 className='text-2xl text-gray-800 flex justify-center'>Colors</h1>
        </div>
        <div  className=''>
          <p className='flex justify-center text-center text-gray-700'>Whether it is walls, ceilings, or tricky textures, our paints are built to perform. Premium quality, lasting results, made for every space.</p>
          <div className='mt-5 flex justify-center'>
            <Link href='/' className='bg-yellow-500 transition-transform duration-200 ease-in-out px-5 py-2 rounded-full text-white mt-5 hover:bg-black hover:text-white'>Get Started</Link>
            </div>
        </div>
      </div>

      <div className='hidden lg:flex'>
        {/* <div className='bg-red-400 p-8'>
        <img src='buke2.png' height={250} width={150} alt='bucket1' className='rounded-sm' />
        </div> */}
        <div className='bg-blue-400 p-8 w-[220px]'>
        <img src='buke.png' height={250} width={150} alt='bucket1' className='rounded-sm' />
        </div>
        <div className='bg-red-400 p-8 w-[220px]'>
        <img src='buke3.png' height={250} width={150} alt='bucket1' className='rounded-sm' />
        </div>
        <div className='bg-green-400 p-8 w-[220px]'>
        <img src='buke4.png' height={50} width={150} alt='bucket1' className='rounded-sm' />
        </div>      
        </div>
    </div>
    </Slide>
  )
}

export default Colors
