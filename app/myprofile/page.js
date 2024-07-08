'use client'
import React, { useState } from 'react';
import { Navbar } from '../component/Navbar';
import MyPost from './myPost/page';
import UploadArtikel from './uploadArtikel/page';
import EditProfile from './editProfile/page';

const ProfileMenu = () => {
  const [activePage, setActivePage] = useState('menu');

  const renderPage = () => {
    switch (activePage) {
      case 'editProfile':
        return <EditProfile/>;
      case 'uploadArtikel':
        return <UploadArtikel/>;
      case 'myPost':
        return <MyPost/>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-8 px-4 min-w-fit min-h-screen mx-auto px-auto bg-blue-900 text-yellow-300 rounded-lg border border-yellow-300 overflow-y-auto">
        <h1 className="text-3xl mb-6 text-center">Profile Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <button
              className="w-full p-3 bg-yellow-300 text-blue-900 rounded-lg"
              onClick={() => setActivePage('editProfile')}
            >
              Edit Profile
            </button>
          </div>
          <div className="space-y-4">
            <button
              className="w-full p-3 bg-yellow-300 text-blue-900 rounded-lg"
              onClick={() => setActivePage('uploadArtikel')}
            >
              Upload Artikel
            </button>
          </div>
          <div className="space-y-4">
            <button
              className="w-full p-3 bg-yellow-300 text-blue-900 rounded-lg"
              onClick={() => setActivePage('myPost')}
            >
              My Post
            </button>
          </div>
        </div>
        <main className='py-8 mt-10 px-4 min-w-fit min-h-screen mx-auto px-auto bg-blue-900 text-yellow-300 rounded-lg border border-yellow-300 overflow-y-auto'>
          {renderPage()}
        </main>
      </section>
    </>
  );
};

export default ProfileMenu;