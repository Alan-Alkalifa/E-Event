
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className='py-3 px-4 text-center justify-between flex item-center text-yellow-300 bg-blue-900 m-1 rounded-lg border border-yellow-300 relative'>
      <a href='/' className=' text-3xl font-semibold'>E-Event</a>
      <section className='space-x-6 flex'>
      <button className='text-2xl'>Contact</button>
      <button className='text-2xl'>Deals</button>
      <button><Image
       src="\profike.svg"
       width={35}
       height={35}
       alt=""
       className='border border-yellow-300 rounded-full'/></button>
      </section>
    </nav>
  )
}
