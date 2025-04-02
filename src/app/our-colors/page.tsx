import Award from '@/components/Award';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Colors = () => {
    const colors = [
        {
          color: "Yellow",
          shades: "44 Shades",
          className: "bg-[#fef08a]",

        },
        {
          color: "Blue",
          shades: "32 Shades",
          className: "bg-blue-200",
        },
        {
            color: "Pinks",
            shades: "12 Shades",
            className: "bg-[#fbcfe8]",
          },
          {
            color: "Purple",
            shades: "32 Shades",
            className: "bg-[#c084fc]",
          },
          {
            color: "Cream",
            shades: "32 Shades",
            className: "bg-[#ecfeff]",
          },
          {
            color: "Green",
            shades: "32 Shades",
            className: "bg-[#86efac]",
          },
          {
            color: "Red",
            shades: "33 Shades",
            className: "bg-[#fda4af]",
          },
          {
            color: "Metallics",
            shades: "30 Shades",
            className: "bg-[#d6d3d1]",
          },
          {
            color: "Grays",
            shades: "10 Shades",
            className: "bg-[#d1d5db]",
          },
          {
            color: "Seude",
            shades: "52 Shades",
            className: "bg-[#f3f4f6]",
          },
      ];
  return (
    <div>
        <div className='flex justify-center gap-20'>
      <div className='my-10'>
        <h1 className='flex justify-center text-2xl font-bold mx-10 text-center'>Feel Comfortable With Our Different</h1>
        <h1 className='flex justify-center text-6xl font-bold'>Shades</h1>
        <p className='w-2/4 mx-auto mt-5 text-gray-700'>Whatever your inspiration, we have just the perfect colours for you. </p>
      </div>
      <div className='hidden md:flex w-6/12 mt-10'>
        <Image src='/interior.jpg' height={700} width={700} alt='image' />
      </div>
      </div>
      <div className="flex justify-center mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mx-10 text-center">Choose From Over 50 Shades</h1>
        <div className=""></div>
      </div>
      <div className="border-t border-gray-300 my-4 p-10 w-1/4 m-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-5">
      {colors.map((item, index) => (
        <>
                <div key={index} className={`p-4 rounded h-60 shadow-lg ${item.className}`}>
          <h3 className="font-bold text-3xl text-gray-600">{item.color}</h3>
          <p className='text-gray-500'>{item.shades}</p>
          <div className='mt-28'>
                      <Link href='/color-sample' className=' hover:underline  bg-gray-600 text-white py-3  px-5 rounded-full'>View</Link>
                      </div>
        </div>
        </>
      ))}
    </div>
    <div className='bg-gray-100 p-5 mt-10 hidden md:flex'>
            <Award />
            </div>

    </div>
  )
}

export default Colors
