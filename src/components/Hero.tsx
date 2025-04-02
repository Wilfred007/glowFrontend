import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[90vh] flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image 
          src='/paint1.jpg' 
          alt='hero' 
          layout='fill' 
          objectFit='cover' 
          className='brightness-50'
        />
      </div>
      
      {/* Hero Content */}
      <div className='relative z-10 text-center px-6 md:px-12'>
        <h1 className='text-5xl md:text-7xl font-bold text-white leading-tight'>
          Colour <br className='hidden md:block'/> Defines Beauty
        </h1>
        <Link 
          href='/our-colors' 
          className='inline-block mt-6 px-8 py-4 bg-yellow-500 text-white text-lg md:text-2xl font-semibold rounded-full transition duration-300 hover:bg-black'
        >
          Let's Find Your Perfect Colour
        </Link>
      </div>
    </div>
  )
}

export default Hero
