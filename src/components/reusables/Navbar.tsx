'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow max-container padding-container relative z-30 py-5">
      <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 w-full justify-between">
          {/* Logo */}
          <Link href='/' className="text-xl font-bold text-gray-800">
            <Image src='/logo.jpeg' height={100} width={100} alt='logo' className='rounded-full' />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center space-x-10">
            <Link href='/walls-cielings' className='regular-16 text-gray-700 cursor-pointer pb-1.5 transition-all hover:font-bold'>Our Products</Link>
            <Link href='/our-colors' className='regular-16 text-gray-700 cursor-pointer pb-1.5 transition-all hover:font-bold'>Our Colours</Link>
            <Link href='/contact' className='regular-16 text-gray-700 cursor-pointer pb-1.5 transition-all hover:font-bold'>Contact</Link>
          </div>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link href='/our-colors' className='bg-yellow-500 transition-transform duration-400 ease-in-out px-5 py-2 rounded-full text-white hover:bg-black'>Colour Samples</Link>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className='lg:hidden w-8 h-8 flex items-center justify-center' 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md py-5 px-6 space-y-4">
          <Link href='/walls-cielings' className='block text-gray-700 text-lg hover:font-bold' onClick={() => setIsMobileMenuOpen(false)}>Our Products</Link>
          <Link href='/our-colors' className='block text-gray-700 text-lg hover:font-bold' onClick={() => setIsMobileMenuOpen(false)}>Our Colours</Link>
          <Link href='/contact' className='block text-gray-700 text-lg hover:font-bold' onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <button 
            className='block w-full bg-yellow-500 px-5 py-2 rounded-full text-white hover:bg-black' 
            onClick={() => setIsMobileMenuOpen(false)}
          >Colour Samples</button>
        </div>
      )}
    </nav>
  )
}
