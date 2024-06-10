
import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='py-3 px-4 text-center justify-between flex text-yellow-300 bg-blue-900 m-1 rounded-lg border border-yellow-300'>
      <a href='/'>E-Event</a>
      <section className='space-x-5'>
        <button className=' hover:first:bg-yellow-300 rounded-md hover:first:text-blue-900 hover:after:bg-blue-900 active:bg-yellow-300'>Deals</button>
        <button>Contact</button>
        <button>img</button>
      </section>
    </nav>
  )
}
