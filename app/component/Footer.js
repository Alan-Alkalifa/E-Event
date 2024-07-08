import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='py-6 px-8 w-full text-yellow-300 bg-blue-900'>
      <div className='flex flex-col sm:flex-row justify-between items-start'>
        <div className='mb-4 sm:mb-0'>
          <h2 className='text-2xl font-bold'>E-NEWS</h2>
          <p className='mt-2'>
            Seputar Event adalah media publikasi online yang berkaitan dengan event : informasi, tips, review, interview tokoh, komunitas, lowongan kerja dan berita-berita event lainnya.
          </p>
          <p className='mt-2'>
            Alamat: The Archade Permata Hijau, Jl Raya Pos Pengumben No 1 B, Jakarta, Indonesia
          </p>
          <p className='mt-2'>
            Email: <a href='mailto:redaksi@seputarevent.com' className='underline'>redaksi@seputarevent.com</a> | © 2014-2022
          </p>
        </div>
        <div className='flex space-x-4 mb-4 sm:mb-0'>
          <a href='#' className='text-yellow-300'>
            <i className='fab fa-tiktok'></i>
          </a>
          <a href='#' className='text-yellow-300'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='#' className='text-yellow-300'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#' className='text-yellow-300'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <div>
          <Image
            src="/sosmed.svg"
            width={200}
            height={60}
            alt='Sosial Media'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;