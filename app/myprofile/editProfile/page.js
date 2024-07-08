'use client'
import React, { useState } from 'react';

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen" style={{ backgroundColor: '#1E3A8A' }}>
      <h1 className="text-2xl font-bold mb-4" style={{ color: '#FBBF24' }}>Edit Profile</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 rounded-lg shadow-md" style={{ backgroundColor: '#1E3A8A', color: '#FBBF24' }}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="username" style={{ color: '#FBBF24' }}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: '#1E3A8A', color: '#FBBF24', border: '1px solid #FBBF24' }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="profileImage" style={{ color: '#FBBF24' }}>
            Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: '#1E3A8A', color: '#FBBF24', border: '1px solid #FBBF24' }}
          />
          {profileImage && <img src={profileImage} alt="Profile Preview" className="mt-4 w-32 h-32 rounded-full object-cover" />}
        </div>
        <button
          type="submit"
          className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          style={{ backgroundColor: '#FBBF24', color: '#1E3A8A' }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;