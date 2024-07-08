import React from 'react'

export const DetailArt = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="/poster.jpg" alt="Art" />
        </div>
        <div className="p-8">
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Art Title</h2>
          <p className="mt-2 text-gray-500">This is a description of the art. It provides details about the artwork, its history, and other relevant information.</p>
        </div>
      </div>
    </div>
  )
}

export default DetailArt;