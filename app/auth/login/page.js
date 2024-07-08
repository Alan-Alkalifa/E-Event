'use client'
import React from 'react'

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Successfully logged in');
    window.location.href = '/';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="bg-yellow-300 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-blue-900">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" />
          </div>
          <div className="mb-6">
            <label className="block text-blue-900">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300" />
          </div>
          <button type="submit" className="w-full bg-blue-900 text-yellow-300 py-2 rounded-lg hover:bg-blue-700">Login</button>
        </form>
        <div className="mt-4 text-center">
          <a href="/auth/forgot-pass" className="text-blue-900 hover:underline">Forgot Password?</a>
        </div>
        <div className="mt-2 text-center">
          <a href="/auth/register" className="text-blue-900 hover:underline">Register</a>
        </div>
      </div>
    </div>
  )
}

export default Login