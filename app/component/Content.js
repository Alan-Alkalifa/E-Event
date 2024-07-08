'use client'
import React, { useState } from 'react';
import Search from './Search';
import Link from 'next/link';


const Content = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;
  const totalItems = 24; // Assuming you have 24 items in total
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalPages - 1 ? prevIndex + 1 : totalPages - 1));
  };

  return (
    <main>
      <Search />
      <section id="content" className="bg-blue-900 p-2 m-1 rounded-lg border border-yellow-300">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-300 border-t-blue-900">See Our Event</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[...Array(itemsPerPage)].map((_, index) => {
              const itemIndex = currentIndex * itemsPerPage + index;
              return (
                <Link href="/DetailArt" key={itemIndex}>
                  <div className="bg-white rounded-lg shadow-md my-6 text-center border border-yellow-300">
                    <img src='/poster.jpg' className='rounded-lg w-full h-auto' alt='Event Poster' />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center py-3">
          <button onClick={handlePrevious} className="flex items-center justify-center px-3 h-8 me-3 text-sm font-semibold text-blue-900 bg-white border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-900 dark:bg-blue-900 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-blue-900 dark:hover:border-blue-900">
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
            Previous
          </button>
          <button onClick={handleNext} className="flex items-center justify-center px-3 h-8 text-sm font-semibold text-blue-900 bg-white border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-900 dark:bg-blue-900 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-blue-900 dark:hover:border-blue-900">
            Next
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Content;