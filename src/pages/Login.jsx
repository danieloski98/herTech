import React from 'react'
import { Link } from 'react-router-dom'

// firebase 
import { app } from '../firebaseconfig'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('')


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
    <div className='w-full h-auto flex justify-center items-center bg-gray-200'>
      <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
          <h3 className='text-black text-2xl font-bold text-center'>HerTech</h3>
          <p className='text-gray-600 text-md font-light text-center mt-2'>Welcome back! {userEmail}</p>

          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" className='w-full h-10 rounded-lg border-2 border-gray-500 px-6 mt-4' />


          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="password" className='w-full h-10 rounded-lg border-2 border-gray-500 px-6 mt-4' />

          <button onClick={login} className='w-full h-12 rounded-lg bg-black text-white font-bold text-md mt-5'>
            {!loading && 'Login to HerTech'}
            {loading && 'Loading...'}
          </button>

          <p className=' text-center mt-6 font-light text-2xl text-gray-600'>OR</p>

          <p className='text-center mt-5 text-gray-700 font-medium'>Don't have an account? 
            <Link to="/signup">
              <span className='font-bold text-black'> Sign up</span>
            </Link>
          </p>
          <Link to="/forgotpassword">
            <p className='text-center mt-5 text-gray-700 font-medium'>Forgot Password</p>
          </Link>
      </div>
    </div>
  )
}
