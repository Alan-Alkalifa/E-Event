'use client'
import React, { useState } from 'react';
import Payment from './Payment';

const Deals = () => {
  const [showCards, setShowCards] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowCards(!showCards);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section id="deals" className='py-3 px-4 m-1 bg-blue-900 rounded-lg'>
      <div className='flex py-1'>
        <h1 className='text-[41px] text-yellow-300'>Promote Your <span className='text-blue-900 bg-yellow-300 rounded-lg p-1'>Event</span> Here <br/> and get some benefits!</h1> 
      </div>
      <div className="flex justify-center py-3">
        <button onClick={handleButtonClick} className="flex items-center justify-center p-5 text-2xl h-8 me-3 font-semibold text-yellow-300 border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-900 dark:bg-blue-900 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-blue-900">
          Click Here !
        </button>
      </div>
      {showCards && (
        <>
          <div className="flex flex-wrap justify-center md:flex-row gap-4 mt-4">
            <div className="w-60 bg-blue-900 text-yellow-300 rounded-lg p-4 border border-yellow-300">
              <h2 className="text-xl font-bold">FREE DEALS</h2>
              <p className="text-lg">Rp. 0</p>
              <p className="mt-2">Benefit:</p>
              <ul className="list-disc list-inside">
                <li>Submit Promo di halaman Promo Acara</li>
                <li>1x share promo di feed Twitter @seputarevent</li>
              </ul>
              <p className="mt-2">Ketentuan Media Partnership Full Barter klik disini</p>
            </div>
            <div className="w-60 bg-blue-900 text-yellow-300 rounded-lg p-4 border border-yellow-300">
              <h2 className="text-xl font-bold">SEMI DEALS 1</h2>
              <p className="text-lg">Rp. 75 K</p>
              <p className="mt-2">Benefit:</p>
              <ul className="list-disc list-inside">
                <li>Submit Promo di halaman Promo Acara</li>
                <li>1x share promo di feed IG @seputarevent</li>
                <li>1x share promo di feed Twitter @seputarevent</li>
                <li>Durasi paket: 7 hari</li>
              </ul>
              <p className="mt-2">Ketentuan:</p>
              <ul className="list-disc list-inside">
                <li>Wajib mencantumkan logo Seputar Event pada setiap materi promo.</li>
                <li>Tidak bisa request tanggal share IG</li>
                <li>Tanpa MOU</li>
                <li>Tanpa bukti tayang</li>
              </ul>
            </div>
            <div className="w-60 bg-blue-900 text-yellow-300 rounded-lg p-4 border border-yellow-300">
              <h2 className="text-xl font-bold">SEMI DEALS 2</h2>
              <p className="text-lg">Rp. 250 K</p>
              <p className="mt-2">Benefit:</p>
              <ul className="list-disc list-inside">
                <li>Submit Promo di halaman Promo Acara</li>
                <li>1x share promo di feed IG @seputarevent</li>
                <li>1x share promo di feed Twitter @seputarevent</li>
                <li>Durasi paket: 7 hari</li>
              </ul>
              <p className="mt-2">Ketentuan:</p>
              <ul className="list-disc list-inside">
                <li>Wajib mencantumkan logo Seputar Event pada setiap materi promo.</li>
                <li>Tidak bisa request tanggal share IG</li>
                <li>Tanpa MOU</li>
                <li>Tanpa bukti tayang</li>
              </ul>
            </div>
            <div className="w-60 bg-blue-900 text-yellow-300 rounded-lg p-4 border border-yellow-300">
              <h2 className="text-xl font-bold">FULL DEALS</h2>
              <p className="text-lg">Rp. 500 K</p>
              <p className="mt-2">Benefit:</p>
              <ul className="list-disc list-inside">
                <li>Submit Promo di halaman Promo Acara</li>
                <li>1x share promo di feed IG @seputarevent</li>
                <li>1x share promo di feed Twitter @seputarevent</li>
                <li>Durasi paket: 7 hari</li>
              </ul>
              <p className="mt-2">Ketentuan:</p>
              <ul className="list-disc list-inside">
                <li>Wajib mencantumkan logo Seputar Event pada setiap materi promo.</li>
                <li>Tidak bisa request tanggal share IG</li>
                <li>Tanpa MOU</li>
                <li>Tanpa bukti tayang</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center py-3">
            <button onClick={togglePopup} className="flex items-center justify-center p-5 text-2xl h-8 me-3 font-semibold text-yellow-300 border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-900 dark:bg-blue-900 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-blue-900 dark:hover:border-blue-900g">
              Payment
            </button>
          </div>
        </>
      )}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg border border-yellow-300">
            <Payment />
            <button onClick={togglePopup} className="mt-2 bg-blue-900 text-yellow-300 p-2 rounded-lg">
            Close
          </button>
        </div>
      </div>
    )}
  </section>
);
};

export default Deals;