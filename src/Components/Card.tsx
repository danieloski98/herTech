import React from 'react';
import { FiMapPin, FiDollarSign, FiBriefcase, FiFacebook } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function JobCard() {
    const navigate = useNavigate();

  return (
    <div className='w-full h-24 rounded-lg bg-white flex p-3 items-center mb-6 cursor-pointer' onClick={() => navigate('/job')}>

        <div className="w-16 h-full bg-gray-200 flex justify-center items-center">
            <FiFacebook size={30} color="#3754DB" />
        </div>

        <div className="flex flex-col flex-1 w-full h-full">

            <div className="flex justify-between px-5 h-8 items-center">
                <p className='text-md font-bold'>Product Manager—Remote</p>
                <p className='text-xs'>Posted 5mins ago</p>
            </div>

            <p className='text-xs ml-5'>META</p>

            <div className="w-full flex px-5 h-8 items-end">
                <div className="flex">
                    <FiMapPin/>
                    <p  className='text-xs'>USA, Remote</p>
                </div>

                <div className="flex ml-3 mr-3">
                    <FiBriefcase />
                    <p  className='text-xs'>Full-time</p>
                </div>

                <div className="flex">
                    <FiDollarSign/>
                    <p  className='text-xs'>120k - 130k</p>
                </div>
            </div>

        </div>

    </div>
  );
}
