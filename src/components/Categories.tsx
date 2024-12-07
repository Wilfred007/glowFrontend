"use client"
import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Categories = () => {
  return (
    <Slide direction="up" damping={0.3} triggerOnce cascade>
    <div className=' w-11/12 mx-auto mt-10'>
      {/* <div>
        <Image src='/hey.jpg' height={500} width={400} alt='home' className=" bg-white shadow-[inset -4px 0 10px rgba(0,0,0,0.25)] hidden lg:flex" />
      </div> */}
      <div className='flex justify-center'>
        <div>
        <h1 className='text-4xl font-bold flex justify-center'>Better, Bolder, More Beautiful</h1>
        <p className='mt-5 w-3/4 mx-auto text-gray-600 flex justify-center text-center'>From walls and ceilings to multi surface and textured, no matter the task and whatever the room, we have the product for you. </p>
        <div className='flex justify-center'>
        <div className='flex  mt-10'>
        <div>
            <img src='/buke4.png' height={200} width={200} alt='buke' />
        </div>
        <div>
            <img src='/buke3.png' height={200} width={200} alt='buke' />
        </div>
        <div>
            <img src='/buke2.png' height={200} width={200} alt='buke' />
        </div>
        </div> 
        </div>
        <div className='mt-10 flex justify-center lg:ml-5'>
                <Link href='/walls-cielings' className='bg-yellow-500 px-5 py-2 rounded-full text-white flex justify-center'>MEET OUR RANGES</Link>
        </div>
        </div>
      </div>

    </div>
    </Slide>
  )
}

export default Categories
