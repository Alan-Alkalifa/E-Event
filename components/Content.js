import React from 'react'
import Search from './Search'
import Image from 'next/image'

const Content = () => {
  return (
    <main>
      <Search/>
<section id="content" class="bg-blue-900 p-2 m-1 rounded-lg border border-yellow-300">
    <div class="container mx-auto px-5">
        <h2 class="text-3xl font-bold text-center mb-8 text-yellow-300 border-t-blue-900">See Our Event</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            <div class="bg-white rounded-lg shadow-md my-12 text-center border border-yellow-300">
               <img src='/poster.jpg' className='rounded-lg'></img>
            </div>

            
            <div class="bg-white rounded-lg shadow-md my-12 text-center border border-yellow-300">
               <img src='/poster.jpg' className='rounded-lg'></img>
            </div>

            
            <div class="bg-white rounded-lg shadow-md my-12 text-center border border-yellow-300">
               <img src='/poster.jpg' className='rounded-lg'></img>
            </div>

            
            <div class="bg-white rounded-lg shadow-md my-12 text-center border border-yellow-300">
               <img src='/poster.jpg' className='rounded-lg'></img>
            </div>

            
            <div class="bg-white rounded-lg shadow-md my-12 text-center border border-yellow-300">
               <img src='/poster.jpg' className='rounded-lg'></img>
            </div>

            
            <div class="bg-white rounded-lg shadow-md my-12 text-center border border-yellow-300">
               <img src='/poster.jpg' className='rounded-lg'></img>
            </div>

            
            <div class="bg-white rounded-lg shadow-md my-12 text-center border border-yellow-300">
               <img src='/poster.jpg' className='rounded-lg'></img>
            </div>

            
            <div class="bg-white rounded-lg shadow-md my-12 text-center border border-yellow-300">
               <img src='/poster.jpg' className='rounded-lg'></img>
            </div>
        </div>
    </div>
    <div className="flex justify-center py-3">
  <a className="flex items-center justify-center px-3 h-8 me-3 text-sm font-semibold text-blue-900 bg-white border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-900 dark:bg-blue-900 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-blue-900 dark:hover:border-blue-900">
    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
    Previous
  </a>
  <a className="flex items-center justify-center px-3 h-8 text-sm font-semibold text-blue-900 bg-white border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-900 dark:bg-blue-900 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-blue-900 dark:hover:border-blue-900">
    Next
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </a>
</div>
    </section>
    </main>
  )
}

export default Content