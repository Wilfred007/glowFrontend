'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow max-container padding-container relative z-30 py-5">
      <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-betwee items-center n h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* You can add your logo here */}
              <Link href='/' className="text-xl font-bold text-gray-800"><Image src='/logo.jpeg' height={90} width={90} alt='logo' className='rounded-full' /></Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-10">
            <Link href='/walls-cielings' className='regular-16 text-gray-700 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold'>Our Products</Link>
            <Link href='/our-colors' className='regular-16 text-gray-700 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold'>Our Colours</Link>
            <Link href='/' className='regular-16 text-gray-700 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold'>Contact</Link>
          </div>
          
        </div>
        <div className="lg:flex items-center hidden">
          <button className='bg-yellow-500 transition-transform duration-400 ease-in-out px-5 py-2 rounded-full text-white hover:bg-black hover:text-white'>Colour Samples</button>
        </div>

        <HamburgerMenuIcon className='lg:hidden w-5 items-center mt-5 h-5 inline-block cursor-pointer '/>
      </div>
    </nav>
  )
}

