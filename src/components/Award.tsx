"use client"

// import Image from 'next/image'
import Link from 'next/link'
// import React from 'react'
import React, { useEffect, useState } from "react";


const slides = [
  { id: 1, src: "/Room1.jpeg", alt: "Room 1" },
  { id: 2, src: "/slider1.jpg", alt: "Slide 2" },
  { id: 3, src: "/slider3.jpg", alt: "Slide 3" },
  { id: 3, src: "/crown.png", alt: "Slide 3" },
  { id: 3, src: "/room4.jpeg", alt: "Slide 3" },
  { id: 3, src: "/room7.jpeg", alt: "Slide 3" },


];

const Award = () => {


  /******  3d667779-3c0e-450b-85a4-7d353201ab5e  *******/  const [currentSlide, setCurrentSlide] = useState(0);
  

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000); // Slide every 4 seconds
      return () => clearInterval(interval);
    }, []);
  
    const goToPreviousSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  return (
    <div className='flex flex-col lg:flex-row w-11/12 mx-auto mt-10 bg-gray-50 rounded-lg shadow-lg overflow-hidden'>
      {/* Image Section */}
      {/* <div className='hidden lg:flex w-1/2'>
        <Image 
          src='/pour.jpeg' 
          height={500} 
          width={400} 
          alt='home' 
          className='rounded-r-lg object-cover w-full' 
        />
      </div> */}
      <div className="relative w-full max-w-3xl mx-auto  overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-[750px] flex-shrink-0">
            <img
              src={slide.src} // Fixed to use the correct property name
              alt={slide.alt}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        onClick={goToPreviousSlide}
      >
        ◀
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        onClick={goToNextSlide}
      >
        ▶
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
      
      {/* Text Section */}
      <div className='flex flex-col justify-center items-center w-full lg:w-1/2 p-10 text-center'>
        <h1 className='text-4xl font-bold text-gray-900'>Enjoy</h1>
        <h2 className='text-xl text-gray-700 mt-3'>Our Award-Winning Product</h2>
        <p className='text-gray-600 mt-4 max-w-lg'>
          Experience the best in quality and innovation. Our products have been recognized globally for their excellence, delivering top-tier performance for all your needs.
        </p>
        <Link 
          href='/' 
          className='bg-yellow-500 px-6 py-3 rounded-full text-white mt-6 transition duration-300 hover:bg-black'
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Award
