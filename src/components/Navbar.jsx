import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex justify-between w-full h-24 p-5 bg-white shadow-md item-center'>
    <div className='flex-1'>
        LOGO
    </div>

    <div className='flex flex-1 justify-evenly'>
    <Link to="/">
       <p>Home</p>
    </Link>

    <Link to="/login">
       <p>Login</p>
    </Link>

    <Link to="/signup">
        <p>Signup</p>
    </Link>
    </div>
</div>
  )
}
