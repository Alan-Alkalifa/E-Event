'use client'
import React, { useState } from 'react';
import { Navbar } from '../component/Navbar';

const initialData = [
  { id: 1, nama: 'John Doe', alamat: '123 Main St', noHp: '123-456-7890', tanggalMulai: '2023-01-01', pesan: 'Pesan 1', poster: 'poster.jpg' },
  { id: 2, nama: 'Jane Smith', alamat: '456 Elm St', noHp: '987-654-3210', tanggalMulai: '2023-02-01', pesan: 'Pesan 2', poster: 'poster.jpg' },
  // ... 8 more fake data entries
];

const DashboardAdmin = () => {
  const [data, setData] = useState(initialData);
  const [form, setForm] = useState({ id: '', nama: '', alamat: '', noHp: '', tanggalMulai: '', pesan: '', poster: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setData([...data, { ...form, id: data.length + 1 }]);
    setForm({ id: '', nama: '', alamat: '', noHp: '', tanggalMulai: '', pesan: '', poster: '' });
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 py-20">
        <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input name="nama" value={form.nama} onChange={handleChange} placeholder="Nama Lengkap" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" />
          <input name="alamat" value={form.alamat} onChange={handleChange} placeholder="Alamat" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" />
          <input name="noHp" value={form.noHp} onChange={handleChange} placeholder="No HP" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" />
          <input name="tanggalMulai" value={form.tanggalMulai} onChange={handleChange} placeholder="Tanggal Mulai" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" />
          <input name="pesan" value={form.pesan} onChange={handleChange} placeholder="Pesan" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" />
          <input name="poster" value={form.poster} onChange={handleChange} placeholder="Poster" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" />
          <button onClick={handleAdd} className="w-full bg-blue-900 text-yellow-300 py-2 rounded-lg hover:bg-blue-700">Add</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID Deals</th>
                <th className="py-2 px-4 border-b">Nama Lengkap</th>
                <th className="py-2 px-4 border-b">Alamat</th>
                <th className="py-2 px-4 border-b">No HP</th>
                <th className="py-2 px-4 border-b">Tanggal Mulai Paket</th>
                <th className="py-2 px-4 border-b">Pesan</th>
                <th className="py-2 px-4 border-b">Poster Banner</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b">{item.id}</td>
                  <td className="py-2 px-4 border-b">{item.nama}</td>
                  <td className="py-2 px-4 border-b">{item.alamat}</td>
                  <td className="py-2 px-4 border-b">{item.noHp}</td>
                  <td className="py-2 px-4 border-b">{item.tanggalMulai}</td>
                  <td className="py-2 px-4 border-b">{item.pesan}</td>
                  <td className="py-2 px-4 border-b">
                    <img src={item.poster} alt="Poster" className="w-16 h-16 object-cover" />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;