import React from 'react';
import Navbar from '../Components/Navbar';
import { FiMapPin, FiDollarSign, FiBriefcase } from 'react-icons/fi'


export default function Job() {
  return (
    <div className="w-full h-screen" style={{ backgroundColor: 'whitesmoke'}}>
        <Navbar />

        <div className="pt-32 px-20 w-full">

            <div className="w-full h-64 bg-white flex p-6 rounded-2xl">
                <div className="w-56 h-full bg-gray-200"></div>
                <div className="flex-1 flex flex-col p-6">
                    <p className='text-xl font-bold'>Product Manager—Remote</p>

                    <div className="w-full flex px-0 h-8 items-end mt-2">
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

                    <p className='text-xs mt-5 font-semibold'>About Company</p>

                    <p className='w-3/5 text-xs font-light mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero deleniti cumque eum adipisci nulla iusto consequatur voluptatum quos labore, inventore facere doloremque assumenda natus. elit. Explicabo libero deleniti cumque eum adipisci nulla iusto consequatur voluptatum quos labore, inventore facere doloremque assumenda natus </p>

                    <p className='text-xs text-blue-600 underline cursor-pointer mt-4'>Read more about company here</p>

                </div>
            </div>

        </div>

        <div className="w-full h-screen flex px-20 py-10 justify-center" style={{ backgroundColor: 'whitesmoke' }}>

            <div className="w-3/4 h-full bg-white rounded-2xl p-6 flex flex-col">
                <p className='text-xl font-bold'>Product Manager—Remote</p>

                <p className='w-full text-xs font-light mt-2'>Are you a changemaker who loves technology and working independently towards ambitious goals? Do you have a great passion for developing new concepts and eye-catching app designs? Is it in your nature to be a good team player and to collaborate with other product designers? If your answer is yes, you could be our new creative head for YAZIO’s app design. Together with the web product designer, you will enhance YAZIO’s corporate design to grab the attention of millions of users worldwide and help skyrocket YAZIO’s presence within the nutrition and fitness market. Let’s map out the next stage of YAZIO’s growth together!

                    
                Are you a changemaker who loves technology and working independently towards ambitious goals? Do you have a great passion for developing new concepts and eye-catching app designs? Is it in your nature to be a good team player and to collaborate with other product designers? If your answer is yes, you could be our new creative head for YAZIO’s app design you will enhance YAZIO’s corporate </p>

                <p className='w-full text-xs font-light mt-4'>Are you a changemaker who loves technology and working independently towards ambitious goals? Do you have a great passion for developing new concepts and eye-catching app designs? Is it in your nature to be a good team player and to collaborate with other product designers? If your answer is yes, you could be our new creative head for YAZIO’s app design. Together with the web product designer, you will enhance YAZIO’s corporate design to grab the attention of millions of users worldwide and help skyrocket YAZIO’s presence within the nutrition and fitness market. Let’s map out the next stage of YAZIO’s growth together! </p>

                <p className='text-md mt-5 font-bold'>Your Role</p>

                <ol className='list list-disc list-inside text-xs font-light mt-5'>
                    <li>Are you a changemaker who loves technology and working</li>
                    <li>Are you a changemaker who loves technology and working</li>
                    <li>Are you a changemaker who loves technology and working</li>
                    <li>Are you a changemaker who loves technology and working</li>
                    <li>Are you a changemaker who loves technology and working</li>
                    <li>Are you a changemaker who loves technology and working</li>
                    <li>Are you a changemaker who loves technology and working</li>
                    <li>Are you a changemaker who loves technology and working</li>
                    <li>Are you a changemaker who loves technology and working</li>
                    <li>Are you a changemaker who loves technology and working</li>
                </ol>

                <div className="w-full flex text-sm mt-8">
                    <button className='w-40 h-12 rounded-full bg-blue-500 text-white' onClick={() => alert('You have successfully applied for this job')}>Apply Now</button>
                    <button onClick={() => alert('You have saved this job for later')} className='w-40 h-12 rounded-full bg-white text-black ml-4 border border-blue-500'>Save for later</button>
                </div>
            </div>

            {/* <div className="w-1/12"></div>
            <div className="w-full flex-1 h-full"></div> */}
        </div>
    </div>
  );
}
