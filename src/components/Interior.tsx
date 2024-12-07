import { ButtonIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Interior = () => {
  return (
    <div className='flex p-10 rounded-lg '>
        <div className='hidden lg:flex'>
          <Image
          src='/interior.jpg'
          height={400}
          width={600}
          alt='image'
           />
        </div>
        <div className='w-[700px] h-[360px] bg-[#2e1065]'>
          <div>
            <h1 className='text-white text-3xl mt-10 px-10 font-bold flex justify-center'>Designed to express</h1>
            <p className='text-white text-sm mt-5 px-10  font-bold flex justify-center'>Classic artisanal shades meet stylish <br/> textures in this exceptional new collection.</p>
            <div className='mt-5 px-10 flex justify-center'>
            <Link href='/' className='bg-yellow-500 px-5 py-2 rounded-full text-white mt-5'>Get Started</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Interior
