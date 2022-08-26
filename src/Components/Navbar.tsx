import React from 'react';
import { FiUser } from 'react-icons/fi'
import { IsloggedIn } from '../states/isLoggedInt';
import { useRecoilState } from 'recoil';
import { signOut, getAdditionalUserInfo, User } from 'firebase/auth'
import { auth } from '../firebase.config'


export default function Navbar() {
    const [LoggedIn, setIsLoggedIn] = useRecoilState(IsloggedIn);
    const signuserout = async () => {
       try {
        await signOut(auth);
        const item = localStorage.setItem('user', '');
       alert(`has been signed out`);
       localStorage.setItem('loggedin', 'false');
       setIsLoggedIn(false);
       } catch (error: any) {
            alert(error.message);
       }
    }

  return (
    <div className="w-full h-24 bg-white shadow-md fixed flex px-16 items-center">
        <div className="flex-1">
            <p className=' font-bold'>HerTech</p>
        </div>
        <div className="flex-1 h-full flex justify-evenly items-center">
            <p>Job Listing</p>
            <p>Find A Mentor</p>
            <p>Find a Community</p>
            <p>More</p>
            <button className='w-40 h-12 rounded-full bg-blue-500 text-white'>Post a job</button>
            {
                LoggedIn && (
                    <div onClick={signuserout} className="w-12 h-12 rounded-full bg-gray-200 cursor-pointer flex justify-center items-center" title="You are logged in">
                        <FiUser size={25} />
                    </div>
                )
            }
        </div>
    </div>
  );
}
