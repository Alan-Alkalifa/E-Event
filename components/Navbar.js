'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='py-3 px-3 text-center justify-between flex item-center text-yellow-300 bg-blue-900 mx-1 -mt-1rounded-lg border border-yellow-300 fixed top-0 left-0 right-0 z-50'>
      <button href='/' className='text-3xl font-semibold'>E-Event</button>
      <section className='space-x-6 flex'>
        <Link href="/address">
          <button className='text-1xl font-semibold' onClick={() => handleScroll('address')}>Contact</button>
        </Link>
        <Link href="/deals">
          <button className='text-1xl font-semibold' onClick={() => handleScroll('deals')}>Deals</button>
        </Link>
        <button onClick={toggleDropdown}>
          <Image
            src="/profile.svg"
            width={35}
            height={35}
            alt=""
            className='border border-yellow-300 rounded-full'
          />
        </button>
        {dropdownOpen && (
          <div className='absolute right-0 mt-12 py-2 w-48 bg-white rounded-lg shadow-xl border border-yellow-300'>
            <Link href="/login">
              <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'>Login</button>
            </Link>
            <Link href="/register">
              <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'>Register</button>
            </Link>
          </div>
        )}
      </section>
    </nav>
  );
}