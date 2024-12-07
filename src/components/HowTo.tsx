import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HowTo = () => {
  return (
    <div className='flex justify-between w-11/12 mx-auto mt-10'>
      <div className='p-10'>
        <h1 className='text-4xl font-sans font-bold'>How To & Tips</h1>
        <p>Planning, prepping or painting, you can select from our <br/> rich collection</p>
        <div className='mt-5'>
            <Link href='/' className='bg-yellow-500 px-5 py-2 rounded-sm text-white mt-5'>Let's Get Started</Link>
        </div>
      </div>
      <div className='flex'>
        <div>
            <Image src='/Pal1.jpeg' height={400} width={200} alt='lapi' />
        </div>
        <div>
            <Image src='/pal2.jpeg' height={400} width={200} alt='lapi' />
        </div>
        <div>
            <Image src='/pal3.jpeg' height={400} width={200} alt='lapi' />
        </div>
        <div>
            <Image src='/pallette.jpeg' height={400} width={200} alt='lapi' />
        </div>
      </div>
    </div>
  )
}

export default HowTo
