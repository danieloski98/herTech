import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { LoggedIn } from '../states/loggedin'
import { useRecoilState } from 'recoil'

import google from "../images/google.svg";
import linkedIn from "../images/linkedIn.svg";

import { db, app, auth } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,  signInWithPopup, } from 'firebase/auth';


export default function Signup() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [items, setItems] = useState("");
  
    const [loading, setLoading] = React.useState(false);
    const [userEmail, setUserEmail] = React.useState('');

    const [passwordSwitch, setPasswordSwitch] = useState(false);
    const [loggedIn, setLoggedIn] = useRecoilState(LoggedIn);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const nav = useNavigate();

    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
  
    const signup = async () => {
      
      try {
      setLoading(true); 
      const details = await createUserWithEmailAndPassword(auth, email, password);
      console.log(details.user);
      localStorage.setItem('user', JSON.stringify(details.user));
      setLoggedIn(true);
      setUserEmail(details.user.email);
      setLoading(false);
      
      
      await addDoc( collection (db, "authentication2"), {
        email :email,
        password : password,
        created : Timestamp.now(),
      })
      nav("/")
      } catch (error) {
        alert(error.message);
      }
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result);
            localStorage.setItem('user', JSON.stringify(result.user));
            setLoggedIn(true);
            nav("/")
        }).catch ((error) => {
            console.log(error.message);
          });

    }

  return (
    <div className='flex items-center justify-center w-full h-auto bg-gray-200'>
        <div className='flex flex-col h-auto p-4 bg-white shadow-md w-96 rounded-3xl mt-14'>
            <h3 className='text-2xl font-bold text-center text-black'>HerTech</h3>
            <p className='mt-2 font-medium text-center text-black text-md'>You're 1-click away from creating an account {userEmail}</p>

            <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email address' className='w-full h-10 px-4 mt-4 border-2 border-gray-500 rounded-lg' />
            <div className='relative'>
            <input type={passwordSwitch ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='password' className='w-full h-10 px-4 mt-4 border-2 border-gray-500 rounded-lg' />
            <span onClick={() => setPasswordSwitch(!passwordSwitch)}
            className='absolute bottom-0 text-right text-gray-500 cursor-pointer right-4 top-6 left-8 font-xs'>
            show
            </span>
            </div>


            <button onClick={signup}  className='w-full h-12 mt-5 font-bold text-center text-white bg-black rounded-lg'>
            {!loading && 'Signup'}
            {loading && 'Loading...'}
            </button>

            <p className='mt-5 text-lg font-light text-center text-gray-600'>OR</p>

            <button onClick={signInWithGoogle} className='flex items-center justify-center w-full h-12 mt-3 font-medium text-center text-black bg-gray-200 rounded-lg '> <img src={google} alt='google-icon' className='p-3 ' /> Continue with Google</button>

            {/* <button className='flex items-center justify-center w-full h-12 mt-3 mb-5 font-medium text-black bg-gray-200 rounded-lg'><img src={linkedIn} alt='linkedIn-icon' className='p-3'/> Continue with LinkedIn</button> */}


            <p className='mt-5 mb-5 font-medium text-center text-gray-700'>Already have an account? 
            <Link to="/login">
            <span className='font-bold text-black'> Login</span>
            </Link>
            </p>            

        </div>
    </div>
  )
}
