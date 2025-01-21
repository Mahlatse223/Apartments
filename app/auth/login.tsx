'use client'
//import Gradient from '@/components/gradient';
import React, { useState } from 'react'


const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
  
      <section   className="p-6 flex items-center justify-center min-h-screen relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle, rgba(14, 6, 41, 1) 0%, rgba(65, 9, 121, 1) 51%, rgba(0, 0, 0, 1) 100%)',
      }}
    >
      {/* Ellipses */}
      <div className="absolute w-[520px] h-[520px] left-[1005px] top-[-113px] bg-[#0B2872] filter blur-[135px]"></div>
      <div className="absolute w-[938px] h-[938px] left-[209px] top-[571px] bg-[#190D50] filter blur-[135px]"></div>
      <div className="absolute w-[491px] h-[491px] left-[-111px] top-[57px] bg-[#544FE6] filter blur-[135px]"></div>
        <div className="space-y-4 p-9 rounded-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20">
          <h2 className="text-2xl font-bold text-white">Sign in</h2>
          <p className="">Welcome back to Studio Apartments</p>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Email or Phone"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus: ring-blue-500"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus: ring-blue-500 "
              />
              <p
                className="absolute right-3 top-2 cursor-pointer text-blue-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </p>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign in
            </button>
            
          </form>
        </div>
      </section>

  );
};

export default PasswordInput;
