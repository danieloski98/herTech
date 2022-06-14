import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex justify-between w-full h-20 p-5 bg-white shadow-md item-center'>
    <div className='flex-1 font-bold text-lg pl-8'>
        HerTech
    </div>

    <div className='flex flex-1 justify-evenly text-gray-500'>
    <Link to="/">
       <p>Job Listing</p>
    </Link>

    <Link to="/">
       <p>Find a mentor</p>
    </Link>

    <Link to="/">
        <p>Find a community</p>
    </Link>

    <Link to="/">
        <p>More</p>
    </Link>

    
    </div>
</div>
  )
}
