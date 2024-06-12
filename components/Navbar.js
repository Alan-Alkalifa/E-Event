
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className='py-3 px-4 text-center justify-between flex item-center text-yellow-300 bg-blue-900 m-1 rounded-lg border border-yellow-300 relative'>
      <a href='/' className=' text-lg'>E-Event</a>
      <section className='space-x-5 flex'>
        <button className=' hover:first:bg-yellow-300 rounded-md hover:first:text-blue-900 hover:after:bg-blue-900 active:bg-yellow-300'>Deals</button>
        <button className=' md:flex-col'>Contact</button>
      <button><Image
       src="\profike.svg"
       width={35}
       height={35}
       alt=""/></button>
      </section>
    </nav>
  )
}
