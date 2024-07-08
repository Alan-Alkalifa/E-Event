'use client'
import React from 'react'
import Image from 'next/image'

const Contact = () => {
  const handleClick = () => {
    window.location.href = 'https://wa.link/l3f2rg';
  }

  return (
    <button onClick={handleClick}>
      <section className='flex fixed text-vertical -right-3 top-1/2 transform -translate-y-1/2 p-3 m-1 border border-yellow-300 rounded-lg bg-blue-900 text-yellow-300 gap-2'>
        Contact Us
        <Image
          src="/ContactUs.svg"
          width={25}
          height={25}
          alt="Contact Us Icon"
        /> 
      </section>
    </button>
  )
}

export default Contact