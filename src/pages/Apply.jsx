import React from "react";

import { TextField } from "@mui/material";

export default function Apply() {
    

    return(
        <div className='flex items-center justify-center w-full py-32  h-auto bg-gray-200'>
        <div className='flex justify-center items-center flex-col h-auto py-7 px-9 bg-white shadow-md w-96 rounded-2xl mt-14'>
            <h3 className='text-2xl font-bold pb-5 text-center text-black'>Apply</h3>

            <div className="flex gap-2">
            <input type="email" placeholder='First Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            <input type="email" placeholder='Last Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            </div>

            <input type="email" placeholder='Email address' className='w-full h-10 pl-2 text-left mt-4 border-2 border-gray-500 rounded-lg' />

            <input type="text" placeholder='+234   Phone number' className='w-full h-10 pl-2 text-left mt-4 border-2 border-gray-500 rounded-lg' />

            <input type="text" placeholder='Country of residence' className='w-full h-10 pl-2 text-left mt-4 border-2 border-gray-500 rounded-lg' />

            <div className="flex gap-2">
            <input type="text" placeholder='City' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            <input type="number" placeholder='Postal code' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            </div>

            <input type="text" placeholder='LinkedIn profile link' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />

            <input type="file" placeholder='Upload Resume (PDF)' className='w-full h-20 flex items-center justify-center pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' hidden />

            <button className='w-1/2 h-12 mt-5 font-bold text-center text-white bg-bluee rounded-3xl'>Submit application</button>

        </div>
    </div>
    )
}