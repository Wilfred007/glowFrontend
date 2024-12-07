import { ButtonIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <div>
        <div className='w-full h-[88vh] !overflow-hidden relative'>
        <img src='/paint1.jpg' fill alt='hero' className='w-full h-full z-10 brightness-50 object-cover'/>
        <div className='absolute z-20 w-full h-full top-52 left-20  '><h1 className='text-7xl font-bold text-white'>Colour <br/> Defines Beauty</h1>
        <Link href='/' className='bg-yellow-500 transition-transform duration-200 ease-in-out px-5 py-2 rounded-full text-white mt-10 hover:bg-black hover:text-white '>Let's Find Your Perfect Colour</Link>
        </div>
    </div>
    </div>
  )
}

export default Hero
