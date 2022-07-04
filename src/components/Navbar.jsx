import React from 'react';

import { Link } from 'react-router-dom';

//material UI
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <div className='flex justify-between w-full h-20 p-5 bg-white shadow-md item-center'>
    
    <div className='flex-1 font-bold text-2xl pl-8'>
    <Link to = "/">
        HerTech
        </Link>
    </div>
    

    <div className='flex flex-1 justify-evenly text-gray-500'>
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

    
    </div>
</div>
  )
}
