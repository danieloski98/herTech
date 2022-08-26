import React from 'react';
import JobCard from '../Components/Card';
import Navbar from '../Components/Navbar';

export default function JobBoard() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full h-auto bg-gray-200 pt-32 px-40 flex flex-col">
        <p className='text-xl font-bold'>Job board</p>
        <p className='w-3/5 text-xs font-light mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

        <input type="text" className="w-2/4 h-10 bg-white rounded-xl px-10 mt-10" />

        <div className="w-full grid grid-cols-2 gap-3 mt-10">

          <div className="w-full">
            <JobCard />
          </div>

          <div className="w-full">
            <JobCard />
          </div>

          <div className="w-full">
            <JobCard />
          </div>

          <div className="w-full">
            <JobCard />
          </div>

          <div className="w-full">
            <JobCard />
          </div>

          <div className="w-full">
            <JobCard />
          </div>

          <div className="w-full">
            <JobCard />
          </div>

        </div>
      </div>
    </div>
  );
}
