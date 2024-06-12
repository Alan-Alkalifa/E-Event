import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <button className=''>
    <section className='flex absolute -right-2 p-3 m1 border border-yellow-300 rounded-lg align-top bg-blue-900 text-yellow-300 text-vertical gap-2'>
     Contact Us
     <Image
     src="/ContactUs.svg"
     width={25}
     height={25}
     alt=""/> 
    </section>
    </button>
  )
}

export default Contact