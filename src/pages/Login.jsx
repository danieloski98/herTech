import React, { useState } from 'react';

import { Link } from 'react-router-dom';

// firebase 
import { app } from '../firebaseConfig.jsx';

import { getAuth, signInWithEmailAndPassword, } from 'firebase/auth'

export default function Login() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const [loading, setLoading] = React.useState(false);
    const [userEmail, setUserEmail] = React.useState('');

    const [passwordSwitch, setPasswordSwitch] = useState(false);
  
  
    const login = async () => {
      try {
      setLoading(true); 
      const authentication = getAuth();
      const details = await signInWithEmailAndPassword(authentication, email, password);
      console.log(details.user);
      setUserEmail(details.user.email);
      setLoading(false);
      } catch (error) {
        alert(error.message);
      }
    }

  return (
    <div className='flex items-center justify-center w-full h-auto bg-gray-200'>
      <div className="flex flex-col h-auto p-6 mt-16 bg-white shadow-md w-96 rounded-xl">
          <h3 className='text-2xl font-bold text-center text-black'>HerTech</h3>
          <p className='mt-2 font-light text-center text-gray-600 text-md'>Welcome back! {userEmail}</p>

          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="example@email.com" className='w-full h-10 px-6 mt-4 border-2 border-gray-500 rounded-lg' />


          <div className='relative'>
            <input type={passwordSwitch ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='password' className='w-full h-10 px-8 mt-4 border-2 border-gray-500 rounded-lg' />
            <span onClick={() => setPasswordSwitch(!passwordSwitch)}
            className='absolute bottom-0 text-right text-gray-500 right-4 top-6 left-8 font-xs cursor-pointer'>
            show
            </span>
            </div>

          <button onClick={login} className='w-full h-12 mt-5 font-bold text-white bg-black rounded-lg text-md'>
          {!loading && 'Login to HerTech'}
            {loading && 'Loading...'}
          </button>

          <p className='mt-6 text-2xl font-light text-center text-gray-600 '>OR</p>

          <p className='mt-5 font-medium text-center text-gray-700'>Don't have an account? 
            <Link to="/signup">
              <span className='font-bold text-black'> Sign up</span>
            </Link>
          </p>
          <Link to="/forgotpassword">
            <p className='mt-5 font-medium text-center text-gray-700'>Forgot Password</p>
          </Link>
      </div>
    </div>
  )
}
