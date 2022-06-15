import React from 'react';

import { Link } from 'react-router-dom';

export default function Forgotpassword() {
  return (
    <div className='flex items-center justify-center w-full py-32  h-auto bg-gray-200'>
        <div className='flex flex-col h-auto p-4 bg-white shadow-md w-96 rounded-2xl mt-14'>
            <h3 className='text-2xl font-bold text-center text-black'>HerTech</h3>
            <p className='mt-2 font-light text-center text-gray-600 text-md'>Forgot password</p>

            <input type="email" placeholder='email address' className='w-full h-10 px-8 mt-4 border-2 border-gray-500 rounded-lg' />

            <button className='w-full h-12 mt-5 font-bold text-center text-white bg-black rounded-lg'>Reset password</button>

            <p className='mt-5 font-medium text-center text-gray-700'>Already have an account? 
            <Link to="/login">
            <span className='font-bold text-black'> Login</span>
            </Link>
            </p>            

        </div>
    </div>
  )
}
