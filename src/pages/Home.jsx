import React from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Login from './Login';

//material UI
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


//images
import Hero_img from "../images/Hero_img.svg";
import Hero_element from "../images/Hero_element.svg";
import frame1 from "../images/Vector.svg";
import frame2 from "../images/Frame _25.svg";
import frame3 from "../images/Group_7.svg";
import frame4 from "../images/Frame_24.svg";
import frame5 from "../images/Frame_31.svg";
import frame6 from "../images/Vector_1.svg";
import logo1 from "../images/1.svg";
import logo2 from "../images/2.svg";
import logo3 from "../images/linkedIn.svg"
import img_1 from "../images/profile_1.svg";
import img_2 from "../images/profile_2.svg";
import img_3 from "../images/profile_3.svg";
import podcast from "../images/Frame_281.svg";
import mappin from "../images/map-pin.svg";
import briefcase from "../images/briefcase.svg";
import dollar from "../images/dollar-sign.svg";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Home() {

  const nav = useNavigate();
  const auth = getAuth();
const user = auth.currentUser;
const clickHandler = () => {
  if (user) {
    nav("/job_board")
  } else {
    nav("/signup")
  }
}
  
  return (
    <div className='w-full h-auto '>
      <div className='flex w-full h-auto py-20 pl-32 bg-darkblue'>
        <div>
          <h1 className='font-bold leading-tight text-white text-7xl'>Hire <span className='text-[#782f99]'>female</span></h1>
          <h1 className='font-bold leading-tight text-white text-7xl'>tech-talent on <br/>demand</h1>
          <p className='text-gray-400 pb-7'>
          Lorem ipsum is placeholder text commonly used in the <br/> graphic, print, and publishing industries
          </p>

          <div className='flex gap-10'>
          <Button variant="contained" sx={{borderRadius: '25px',}} >Get started</Button>
          <Button variant="contained" sx={{borderRadius: '25px', backgroundColor: '#E1E8FF', color: '#3754DB', }} >See job listing</Button>
          </div>

         <div className='flex'>

         <div className='py-10 pr-10'>
            <p className='pb-1 text-3xl font-semibold text-gray-400'>100k+</p>
            <p className='text-lg font-normal text-gray-400'>Job listed</p>
          </div>

          <div className='px-2 border-l-2 border-gray-400 border-solid my-14 h-9'></div>

          <div className='py-10 pl-8 pr-10'>
            <p className='pb-1 text-3xl font-semibold text-gray-400'>262+</p>
            <p className='text-lg font-normal text-gray-400'>Members</p>
          </div>

          <div className='px-2 border-l-2 border-gray-400 border-solid h-9 my-14'></div>

          <div className='py-10 pl-10 pr-8'>
            <p className='pb-1 text-3xl font-semibold text-gray-400'>5+</p>
            <p className='text-lg font-normal text-gray-400'>Countries</p>
          </div>

         </div>
        </div>
        <div className='relative pl-30'>
          <img src={ Hero_element } className='w-full pl-80 h-76' />
          <img src={Hero_img} className='absolute top-0 w-full p-4 pl-80 h-72'/>
          <div className='absolute items-center '>
  
          </div>
        </div>
      </div>
      <div className='w-full h-auto py-12 text-center bg-white'>
            <p className='pb-10 text-lg font-normal text-gray-700'>COMPANIES HIRING ON HERTECH</p>
            <div className='flex justify-evenly'>
            <img src={frame1}/>
            <img src={frame2}/>
            <img src={frame3}/>
            <img src={ frame1}/>
            <img src={frame6}/>
            <img src={frame1}/>
            <img src={frame5}/>
            <img src={frame6}/>
            </div>
        </div>
        <div className='grid w-full h-auto grid-cols-2 gap-4 px-10 pb-10'>
          <div className='w-full h-auto row-start-1 row-end-3 py-10 bg-gray-100 rounded-3xl' >
            <h1 className='text-left px-20 text-3xl font-bold text-black'>1,000,000+ jobs available for you</h1>
            <p className='text-left px-20 text-gray-700 text-lg'>Lorem ipsum is placeholder text commonly used in the graphic.</p>
            <div  >
            <Box  sx={{ flexGrow: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, }}>
      <Grid  container spacing={2}>
      <Grid item xs={6}>
          <Item>Job title</Item>
        </Grid>
        <Grid item xs>
          <Item>Location</Item>
        </Grid>
        <Grid item xs>
          <Item>Job type</Item>
        </Grid>
      </Grid>
    </Box>
            </div>

            
            <div className='p-14 h-auto bg-gray-100'>
            <div className="w-full  h-auto gap-3 flex bg-white rounded-2xl px-5 py-8" onClick={clickHandler} >
                          <img src={ logo1 } />
                      <div>
                        <h1 className='font-semibold text-xl'>Product Manager—Remote </h1>
                        <p className='text-gray-500'>Meta</p>
                        <div className="flex gap-3 pt-3">
                            <img src={ mappin} />
                            <p className="text-sm text-gray-500 pt-1 -ml-1"> USA, Remote </p>
                            <img src={ briefcase} />
                            <p className="text-sm text-gray-500 pt-1 -ml-1"> Full-time </p>
                            <img src={ dollar} />
                            <p className="text-sm text-gray-500 pt-1 -ml-2">120k - 130k </p>
                        </div>
                    </div>
                    <p className="text-right text-gray-500 ml-32"> Posted 5mins ago</p>
            </div>
            </div>
            

            <div className='p-14 h-auto bg-gray-100'>
            <div className="w-full  h-auto gap-3 flex bg-gray-100 rounded-2xl px-5 py-8" onClick={clickHandler} >
                          <img src={ logo2 } />
                      <div>
                        <h1 className='font-semibold text-xl'>Data Analytics </h1>
                        <p className='text-gray-500'>Loom Inc.</p>
                        <div className="flex gap-3 pt-3">
                            <img src={ mappin} />
                            <p className="text-sm pt-1 text-gray-500 -ml-1"> Australia </p>
                            <img src={ briefcase} />
                            <p className="text-sm pt-1 text-gray-500 -ml-1"> Full-time </p>
                            <img src={ dollar} />
                            <p className="text-sm pt-1 text-gray-500 -ml-2">120k - 130k </p>
                        </div>
                    </div>
                    <p className="text-right text-gray-500 ml-32">Posted 18hrs ago</p>
            </div>
            </div>

            <div className='p-14 h-auto bg-gray-100'>
            <div className="w-full  h-auto gap-3 flex bg-white rounded-2xl px-5 py-8" onClick={clickHandler} >
                          <img className='h-16 w-16 mt-3' src={ logo3 } />
                      <div>
                        <h1 className='font-semibold text-xl'>Product Manager—Remote </h1>
                        <p className='text-gray-500'>Meta</p>
                        <div className="flex gap-3 pt-3">
                            <img src={ mappin} />
                            <p className="text-sm pt-1 text-gray-500 -ml-1"> USA, Remote </p>
                            <img src={ briefcase} />
                            <p className="text-sm pt-1 text-gray-500 -ml-1"> Full-time </p>
                            <img src={ dollar} />
                            <p className="text-sm pt-1 text-gray-500 -ml-2">120k - 130k </p>
                        </div>
                    </div>
                    <p className="text-right ml-32"> Posted 5mins ago</p>
            </div>
            </div>

            <div className='p-14 h-auto bg-gray-100'>
            <div className="w-full  h-auto gap-3 flex bg-white rounded-2xl px-5 py-8" onClick={clickHandler} >
                          <img src={ logo2 } />
                      <div>
                        <h1 className='font-semibold text-xl'>Data Analytics </h1>
                        <p>Loom Inc.</p>
                        <div className="flex gap-3 pt-3">
                            <img src={ mappin} />
                            <p className="text-sm pt-1 -ml-1"> Australia </p>
                            <img src={ briefcase} />
                            <p className="text-sm pt-1 text-gray-500 -ml-1"> Full-time </p>
                            <img src={ dollar} />
                            <p className="text-sm pt-1 text-gray-500 -ml-2">120k - 130k </p>
                        </div>
                    </div>
                    <p className="text-right ml-32 text-gray-500">Posted 18hrs ago</p>
            </div>
            </div>

            <div className='p-14 h-auto bg-gray-100'>
            <div className="w-full  h-auto gap-3 flex bg-white rounded-2xl px-5 py-8" onClick={clickHandler} >
                          <img src={ logo2 } />
                      <div>
                        <h1 className='font-semibold text-xl'>Data Analytics </h1>
                        <p className='text-gray-500'>Loom Inc.</p>
                        <div className="flex gap-3 pt-3">
                            <img src={ mappin} />
                            <p className="text-sm pt-1 text-gray-500 -ml-1"> Australia </p>
                            <img src={ briefcase} />
                            <p className="text-sm pt-1 text-gray-500 -ml-1"> Full-time </p>
                            <img src={ dollar} />
                            <p className="text-sm pt-1 text-gray-500 -ml-2">120k - 130k </p>
                        </div>
                    </div>
                    <p className="text-right text-gray-500 ml-32">Posted 18hrs ago</p>
            </div>
            </div>
    
          </div>
          <div >
          <div className='col-start-2 col-end-4 rounded-3xl px-10 py-10 bg-gray-100 ' >
            <h1 className='text-left text-3xl font-bold text-black'>Online communities</h1>
            <p className='text-left text-gray-700 text-lg'>Lorem ipsum is placeholder text commonly used in the graphic.</p>
            <div className='flex justify-between pt-7'>
              <div>
              <h3 className='tect-black font-bold text-lg'>#Product Management</h3>
              <span className='flex '>
              <img src={ img_1 } />
              <img src={ img_2 } className='-ml-2'/>
              <img src={ img_3 } className='-ml-2'/>
              <p className='mt-2 text-black font-bold'>+107</p>
              </span>
              </div>
              <Button className='w-20' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>
              Join
              </Button>
            </div>

            <hr className='mt-5'/>

            <div className='flex justify-between pt-7'>
              <div>
              <h3 className='tect-black font-bold text-lg'>#Product Design</h3>
              <span className='flex '>
              <img src={ img_1 } />
              <img src={ img_2 } className='-ml-2'/>
              <img src={ img_3 } className='-ml-2'/>
              <p className='mt-2 text-black font-bold'>+291</p>
              </span>
              </div>
              <Button className='w-20' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>
              Join
              </Button>
            </div>

            <hr className='mt-5'/>

            <div className='flex justify-between pt-7'>
              <div>
              <h3 className='tect-black font-bold text-lg'>#Web Development</h3>
              <span className='flex '>
              <img src={ img_1 } />
              <img src={ img_2 } className='-ml-2'/>
              <img src={ img_3 } className='-ml-2'/>
              <p className='mt-2 text-gray-700 font-bold'>+21</p>
              </span>
              </div>
              <Button className='w-20' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>
              Join
              </Button>
            </div>
            
          </div>
        </div>
        <div className='w-full h-auto col-start-2 rounded-3xl px-10 py-3 col-end-4 bg-gray-100'>
            <div className='flex justify-between'>
                <div>
                  <h2 className='text-left text-3xl font-bold text-black'>Podcast</h2>
                  <p className='text-left text-gray-700 text-lg'>Lorem ipsum is placeholder text common</p>
                </div>
                <div>
                <Button className='w-24' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>
                See all
              </Button>
                </div>
            </div>
            <div className='flex gap-4 pt-5'>
              <div>
                <img src={ podcast }/>
              </div>
              <div>
                <h2 className='text-left text-lg font-semibold text-black'>Women In Tech Q&A Series</h2>
                <p className='text-left text-gray-700 text-sm' >Martyna Lewinska, Co-Founder and CTO at Fiat Republic</p>
                <Button className='w-24' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>
                12mins
              </Button>
              </div>
            </div>

            <div className='flex gap-4 pt-5'>
              <div>
                <img src={ podcast }/>
              </div>
              <div>
                <h2 className='text-left text-lg font-semibold text-black'>Women In Tech Q&A Series</h2>
                <p className='text-left text-gray-700 text-sm' >Martyna Lewinska, Co-Founder and CTO at Fiat Republic</p>
                <Button className='w-24' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>
                12mins
              </Button>
              </div>
            </div>
            
        </div>
        </div>
</div>
    
  )
}
