import React from 'react';

import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { LoggedIn } from '../states/loggedin';
import { useRecoilState } from 'recoil'

//material UI
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';

export default function Navbar() {
    const [isl, setL] = useRecoilState(LoggedIn);

    const logout = async () => {
        await signOut(auth);
        setL(false);
    }
  return (
    <div className='flex justify-between w-full h-20 px-5 bg-white shadow-md items-center fixed z-20'>
    
    <div className='flex-1 font-bold text-2xl pl-8 h-full flex items-center'>
    <Link to = "/">
        HerTech
        </Link>
    </div>
    

    <div className='flex flex-1 justify-evenly items-center text-gray-500'>
    <Link to="/job_board">
       <p>Job Listing </p>
    </Link>

    <Link to="/">
       <p>Find a mentor</p>
    </Link>

    <Link to="/community">
        <p>Find a community</p>
    </Link>

    <Link to="/">
        <p>More <KeyboardArrowDownIcon /></p>
    </Link>

    <Link to="/">
        <Button variant="contained" sx={{borderRadius: '25px',}} >Post a job</Button>
    </Link>

    {
        isl && (
            <div onClick={logout} className='w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer'>
                logout
            </div>
        )
    }
    
    </div>
</div>
  )
}
