import React from 'react';
import JobCard from '../Components/Card';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom'
import { useRecoilState} from 'recoil'
import { IsloggedIn } from '../states/isLoggedInt';

export default function Home() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useRecoilState(IsloggedIn);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(IsloggedIn);

  const check = React.useCallback((path: string) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      navigate('/login')
    }
  }, [])

  React.useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === null) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  });

  return (
    <div className='w-full h-screen'>
      <Navbar />
      <div className="w-full h-screen flex px-40" style={{ backgroundColor: '#101225' }}>

        <div className="flex-1 flex flex-col justify-center">

          <h1 className='text-6xl font-bold text-white'>Hire <span className='text-blue-500'> female </span> <br /> tech-talent on <br /> demand</h1>
          <p className='mt-10 text-white w-4/5'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries</p>

          <div className="w-full flex text-sm mt-8">
            <button className='w-40 h-12 rounded-full bg-blue-500 text-white' onClick={() => navigate('/signup')}>Get Started</button>
            <button className='w-40 h-12 rounded-full bg-white text-black ml-4' onClick={() => check('/job-board')}>See job listing</button>
          </div>

          <div className="flex w-3/5 h-20 mt-6 py-5 text-white">

            <div className="flex-1 flex-col flex border-r-2 border-white items-center justify-center">
              <h3 className='font-bold text-sm'>100k+</h3>
              <p className='font-light text-xs'>Jobs Listings</p>
            </div>

            <div className="flex-1 flex-col flex border-r-2 border-white items-center justify-center">
              <h3 className='font-bold text-sm'>262+</h3>
              <p className='font-light text-xs'>Members</p>
            </div>

            <div className="flex-1 flex-col flex items-center justify-center">
              <h3 className='font-bold text-sm'>5+</h3>
              <p className='font-light text-xs'>Countries</p>
            </div>

          </div>

        </div>

        <div className="flex-1"></div>

      </div>

      <div className="w-full h-screen flex p-20">
        <div className="w-full h-full bg-gray-100 rounded-2xl p-10 flex flex-col  overflow-auto">
          <p className='text-lg font-bold'>1,000,000+ jobs available for you</p>
          <p className='text-sm font-light mt-2'>Lorem ipsum is placeholder text commonly used in the graphic.</p>

          <div className="w-full flex h-10 mt-4 mb-8">
            <input type="text" className='w-3/5 h-10 border border-black bg-white rounded-lg px-5' />
            <button className="w-32 h-10 bg-blue-500 text-white rounded-full ml-6" onClick={() => navigate('job-board')}>View Jobs</button>
          </div>

          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />

        </div>
        <div className="w-1/6"></div>
        <div className="w-2/4 h-full bg-gray-200 rounded-2xl"></div>
      </div>

    </div>
  );
}
