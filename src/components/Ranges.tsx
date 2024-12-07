"use client";
import React, { useEffect, useState } from "react";

const slides = [
  { id: 1, src: "/Room1.jpeg", alt: "Room 1" },
  { id: 2, src: "/room2.jpeg", alt: "Slide 2" },
  { id: 3, src: "/room3.jpeg", alt: "Slide 3" },
];

const Slider: React.FC = () => {
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Slider component that displays a carousel of images with automatic and manual slide navigation.
 * 
 * - Automatically transitions to the next slide every 4 seconds.
 * - Allows manual navigation using left and right arrow buttons.
 * - Displays indicators at the bottom for quick navigation to any slide.
 * 
 * @returns A JSX element representing the slider component.
 */
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
    <div className="relative w-full max-w-3xl mx-auto h-64 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0">
            <img
              src={slide.src} // Fixed to use the correct property name
              alt={slide.alt}
              className="w-full h-full object-cover"
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
  );
};

export default Slider;
