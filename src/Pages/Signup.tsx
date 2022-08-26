import React from 'react';
import Navbar from '../Components/Navbar';
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { IsloggedIn } from '../states/isLoggedInt';
import { useRecoilState } from 'recoil'

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false)
  const [isLoggedIn, setLoggedIn] = useRecoilState(IsloggedIn);

  const handleEmailSignUp =  async() => {
    if (email.length < 3 || password.length < 8) {
      alert('Please filling your email or password correctly');
    }

    setLoading(true);
    try {
      const signup = await createUserWithEmailAndPassword(auth, email, password);

    if (signup.user) {
      setLoggedIn(true);
      setLoading(false);
      localStorage.setItem('loggedin', 'true');
      localStorage.setItem('user', JSON.stringify(signup.user));
      alert(`Your just signed in with email ${signup.user.email}`)
      navigate('/');
    } else {
      alert('Sign up failed');
      setLoading(false);
    }
    } catch (error: any) {
        alert(error.message)
    }

  }

  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const signin = await signInWithPopup(auth, provider);

    try {
      if (signin.user) {
        setLoggedIn(true);
        localStorage.setItem('loggedin', 'true');
        localStorage.setItem('user', JSON.stringify(signin.user));
        alert(`Your just signed in with email ${signin.user.email}`)
        navigate('/');
      } else {
        alert('Sign up failed');
        setLoading(false);
      }
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
   <div className='w-full h-screen bg-gray-200 flex flex-col'>

    <Navbar />

    <div className="w-full h-full flex-1 flex justify-center items-center">

      <div className="w-2/5 h-3/5 bg-white rounded-2xl p-6">

        <p className='text-xl font-bold text-center'>HerTech</p>

        <p className=' text-xs font-light mt-2 text-center'>You’re 1-click away from creating an account</p>

        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-10 rounded-xl px-4 bg-white border border-gray-300 mt-10" />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-10 rounded-xl px-4 bg-white border border-gray-300 mt-5" />

        <button className='w-full h-10 rounded-xl bg-blue-500 mt-5 text-white' onClick={handleEmailSignUp}>
          {loading && 'Loading'}
          {!loading && 'Sign up'}
        </button>

        <p className=' text-xs font-light mt-2 text-center'>OR</p>

        <div onClick={signinWithGoogle} className="w-full h-10 flex justify-center items-center bg-gray-200 rounded-xl mt-4 cursor-pointer">
          <FaGoogle color="red" size={25} />
          <p className=' text-xs font-light text-center ml-2'>Continue with Google</p>
        </div>

        <p className=' text-sm cursor-pointer font-light mt-5 text-center'>Already have an account? <span className='font-bold underline' onClick={() => navigate('/login')}>Login</span></p>


      </div>

    </div>

   </div>
  );
}
