import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Award = () => {
  return (
    <div className='flex w-11/12 mx-auto mt-10'>
    <div className=''>
     <Image src='/pour.jpeg' height={500} width={400} alt='home' className='rounded-r-lg' />
    </div>
    <div className='flex justify-center w-6/12 mx-auto my-20'>
      <div>
      <h1 className='flex justify-center text-4xl font-bold'>Enjoy</h1>
      <h1 className='flex justify-center text-xl text-gray-700 mt-5'>Our Award Winning Product</h1>
      <p className='flex justify-center text-center mt-5 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium mollitia nesciunt debitis repellendus error, recusandae quas nisi accusamus quibusdam asperiores soluta earum quo amet rem omnis accusantium? Ratione, saepe illum?</p>
      <div className='mt-5 px-10 flex justify-center'>
            <Link href='/' className='bg-yellow-500 px-5 py-2 rounded-full text-white mt-5'>Read More</Link>
      </div>
      </div>
      
    </div>
   
  </div>
  )
}

export default Award
