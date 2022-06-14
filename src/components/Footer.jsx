import React from 'react';

//material UI
import Button from '@mui/material/Button';

export default function Footer(){
    return(
        <div className='w-full h-auto bg-darkblue px-30 pt-20'>
        <div className='bg-white h-auto px-10 pt-10 w-4/6 m-auto rounded-xl flex justify-between'>
        <div>
          <h2 className=' text-lg font-semibold text-blue'>Newsletter</h2>
          <p className=' text-gray-700 text-sm'>Be the first one to know  about discounts, offers and events</p>
        </div>
        <div className='relative'>
            <input type='text' placeholder='Enter your email' className='w-full h-10 px-4 pb-6 pt-4 mt-4 border-2 border-gray-500 rounded-3xl' />
            <Button className='w-28 absolute bottom-0 text-gray-500  rounded-3xl cursor-pointer right-1 -top-10 left-56 font-xs' sx={{borderRadius: 7, color: '#E4ECF7', backgroundColor: ' #3754DB',}}>
                Subscribe
              </Button>
            </div>
        </div>

        <div className='flex justify-around py-10'>
          <div className='flex gap-4'>
              <p className=' text-gray-500 text-left text-base'>Privacy Policy</p>
              <p className=' text-gray-500 text-base text-left'>Terms of Service</p>
              <p className=' text-gray-500 text-base text-left'>FAQs</p>
          </div>
          <div>
            <p className='text-right text-gray-500 text-base'>© 2022, All Rights Reserved</p>
          </div>
        </div>
        </div>
    )
} 