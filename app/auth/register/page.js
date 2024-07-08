'use client'
import React, { useState, useEffect } from 'react'

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  useEffect(() => {
    if (isRegistered) {
      alert('Your account has been created');
      window.location.href = '/auth/login';
    }
  }, [isRegistered]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="bg-yellow-300 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-700 text-yellow-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
            <a
              href="/auth/login"
              className="inline-block align-baseline font-bold text-sm text-blue-900 hover:underline"
            >
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register