import React from 'react';

export default function Navbar() {
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
        </div>
    </div>
  );
}
