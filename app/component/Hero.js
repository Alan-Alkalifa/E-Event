'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  // Simulated database of images
  const images = [
    "/banner1.png",
    "/banner2.png",
    "/banner3.png"
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle "Next" button click
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });
  };

  return (
    <main className='flex content-center border-cyan-400 relative py-20 px-4 m-1 object-contain flex-wrap'>
      <section>
        <Image 
          src={images[currentImageIndex]}
          width={1500}
          height={200}
          alt="Hero Image"
        />
        <div className="flex justify-center py-3">
          <a href="#" onClick={handlePrevious} className="flex items-center justify-center px-3 h-8 me-3 text-sm font-semibold text-blue-900 bg-white border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-900 dark:bg-blue-900 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-blue-900 dark:hover:border-blue-900">
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
            Previous
          </a>
          <a href="#" onClick={handleNext} className="flex items-center justify-center px-3 h-8 text-sm font-semibold text-blue-900 bg-white border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-900 dark:bg-blue-900 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-blue-900 dark:hover:border-blue-900">
            Next
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Hero;