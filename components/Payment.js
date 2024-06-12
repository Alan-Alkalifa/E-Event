import React from 'react';

const Payment = () => {
  return (
    <section className="py-8 px-4 bg-blue-900 text-yellow-300 rounded-lg border border-yellow-300">
      <h1 className="text-3xl mb-6 text-center">KONFIRMASI PEMBAYARAN</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full p-3 bg-yellow-300 text-blue-900 rounded-lg"
          />
          <input
            type="email"
            placeholder="Alamat Email"
            className="w-full p-3 bg-yellow-300 text-blue-900 rounded-lg"
          />
          <input
            type="text"
            placeholder="Nomor HP"
            className="w-full p-3 bg-yellow-300 text-blue-900 rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <div>
            <p className="mb-2">Pilihan Paket:</p>
            <ul className="list-disc list-inside">
              <li>Free Deals</li>
              <li>Semi Deals 1</li>
              <li>Semi Deals 2</li>
              <li>Full Deals</li>
            </ul>
          </div>
          <div>
            <p className="mb-2">Pengiriman Dana:</p>
            <ul className="list-disc list-inside">
              <li>OVO</li>
              <li>GOPAY</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <input
            type="date"
            placeholder="Tanggal mulai paket"
            className="w-full p-3 bg-yellow-300 text-blue-900 rounded-lg"
          />
          <textarea
            placeholder="Tulis pesan di sini"
            className="w-full p-3 bg-yellow-300 text-blue-900 rounded-lg"
          ></textarea>
        </div>
        <div className="space-y-4">
          <button className="w-full p-3 bg-yellow-300 text-blue-900 rounded-lg">
            Syarat dan Ketentuan
          </button>
          <button className="w-full p-3 bg-blue-900 text-yellow-300 border border-yellow-300 rounded-lg hover:bg-yellow-300 hover:text-blue-900">
            Kirim
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;