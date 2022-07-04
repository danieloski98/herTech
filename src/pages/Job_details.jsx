import React from "react";
import { Link } from 'react-router-dom';

//material UI
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircleIcon from '@mui/icons-material/Circle';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { grey } from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

//images
import mappin from "../images/map-pin.svg";
import briefcase from "../images/briefcase.svg";
import dollar from "../images/dollar-sign.svg";
import logo1 from "../images/1.svg";
import logo2 from "../images/2.svg";
import logo3 from "../images/Logo3.svg";
import meta from "../images/Logo.svg";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:5,
  };

export default function Job_details (){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className=" w-full h-auto">
            <div className="bg-white mx-auto my-16 gap-10 px-12 pb-5 pt-10 w-4/5 h-auto flex rounded-xl">
            <div >
                <img src={ meta } alt='meta'  />
                <h3 className="text-gray-500 text-sm mt-3">Meta Technologies inc</h3>
            </div>
            <div className="w-full">
                <div className="text">
                   <div className="flex justify-between">
                       <h1 className="text-2xl font-semibold">Senior Product Designer</h1>
                       <MoreVertIcon variant="outlined" sx={{height:1, color: '#3754DB', Border:'#3754DB', backgroundColor: 'white',}} />
                   </div>
                    <div className="flex gap-3 pt-3">
                            <img src={ mappin} alt='map-pin'/>
                            <p className="text-xs text-gray-500  -ml-1"> USA, Remote </p>
                            <img src={ briefcase} alt='dollar'/>
                            <p className="text-xs text-gray-500  -ml-1"> Full-time </p>
                            <img src={ dollar} alt='dollar'/>
                            <p className="text-xs text-gray-500  -ml-2">120k - 130k </p>
                    </div>
                    <div className="w-5/6">
                    <h3 className="mt-5 text-base text-black font-medium">About Company</h3>
                    <p className="mt-3 text-gray-500 text-base ">Meta has a mission: To help as many people as possible live healthier lives through better nutrition. With millions of users in more than 150 countries, we're well on our way to accomplishing this goal. As a remote-first company, we promote a modern form of employment in which our team works together across several cities and countries.
                    </p>
                    <p className="text-bluee underline decoration-bluee cursor-pointer mt-5">Read more about company here</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-3 w-full h-auto gap-9 bg-gray-200 px-44 pb-20">
                <div className="w-full h-auto bg-white rounded-xl px-10 pt-10 row-span-3 col-span-2">
                    <h1 className="text-3xl font-semibold">Product Designer at Yazio</h1>
                    <p className="text-gray-500 text text-base mt-3">Are you a changemaker who loves technology and working independently towards ambitious goals? Do you have a great passion for developing new concepts and eye-catching app designs? Is it in your nature to be a good team player and to collaborate with other product designers? If your answer is yes, you could be our new creative head for YAZIO’s app design. Together with the web product designer, you will enhance YAZIO’s corporate design to grab the attention of millions of users worldwide and help skyrocket YAZIO’s presence within the nutrition and fitness market. Let’s map out the next stage of YAZIO’s growth together!
                    </p>
                    <p className="text-gray-500 text text-base mt-5">Are you a changemaker who loves technology and working independently towards ambitious goals? Do you have a great passion for developing new concepts and eye-catching app designs? Is it in your nature to be a good team player and to collaborate with other product designers? If your answer is yes, you could be our new creative head for YAZIO’s app design you will enhance YAZIO’s corporate 
                    </p>

                    <h3 className="text-lg font-semibold mt-7">Your Role</h3>
                    <ul className="pt-3 pr-18">
                        <li className="text-gray-500 text-base"><CircleIcon sx={{color:'gray', fontSize:8,}} /> Distinct conceptual skills and ability to visualize thoughts and ideas</li>
                        <li className="text-gray-500 text-base"><CircleIcon sx={{color:'gray', fontSize:8,}} /> Experience in creating illustrations and motion design is a plus</li>
                        <li className="text-gray-500 text-base"><CircleIcon sx={{color:'gray', fontSize:8,}} /> Excellent eye for user-centered designs</li>
                        <li className="text-gray-500 text-base"><CircleIcon sx={{color:'gray', fontSize:8,}} /> Create graphical assets, layouts, icons and animations.</li>
                        <li className="text-gray-500 text-base"><CircleIcon sx={{color:'gray', fontSize:8,}} /> Participate in building and maintaining a solid design system.</li>
                        <li className="text-gray-500 text-base"><CircleIcon sx={{color:'gray', fontSize:8,}} /> Be part of the conception process and support the further development of our app.</li>
                        <li className="text-gray-500 text-base"><CircleIcon sx={{color:'gray', fontSize:8,}} /> Optimize our app to create the best possible user experience and take YAZIO to the next level!</li>
                    </ul>
                    <div className="flex w-full gap-10 mt-10 pl-5 m-auto">
                    <div>
      <Button onClick={handleOpen} variant='contained' sx={{borderRadius: '25px', backgroundColor: ' #3754DB', color: '#E4ECF7', textTransform:'none', fontWeight:'bold'}} >Apply Now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            <div className="flex justify-end">
            <Link to ="/job_details">
              <CloseIcon/>
              </Link>
            </div>
            
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

            <div className="flex justify-center">
            <button className='w-1/2 h-12 mt-5 font-bold text-center text-white bg-bluee rounded-3xl'>Submit application</button>
            </div>
            
        </Box>
      </Modal>
    </div>
                        <Button variant='outlined' sx={{borderRadius: '25px', backgroundColor: 'white', fontSize:13, textTransform:'none', color: '#3754DB', fontWeight:'bold'}} >Save job for later </Button>
                        
                    </div>
                </div>
                <div className="rounded-xl col-start-3 col-end-4 h-auto bg-white px-10 pb-9 pt-6">
                    <h3 className="text-lg font-semibold pb-5">Share this job</h3>
                    <div className="pb-6 ">
                        <Button variant='outlined' sx={{borderRadius: '10px', width:'100%', paddingX:'30px', paddingY:'10px', backgroundColor: 'white', fontSize:14, textTransform:'none', color: 'black', }} ><LinkedInIcon className="mr-5 text-blue-700" />Share job on linkedin </Button>
                    </div>
                    <div className="pb-6 ">
                        <Button variant='outlined' sx={{borderRadius: '10px', width:'100%', paddingX:'30px', paddingY:'10px', backgroundColor: 'white', fontSize:14, textTransform:'none', color: 'black', }} ><LinkedInIcon className="mr-5 text-blue-700" />Share job on linkedin </Button>
                    </div>
                    <div>
                        <Button variant='outlined' sx={{borderRadius: '10px', width:'100%', paddingX:'30px', paddingY:'10px', backgroundColor: 'white', outlineColor:grey, fontSize:14, textTransform:'none', color: 'black', }} ><LinkedInIcon className="mr-5 text-blue-700" />Share job on linkedin </Button>
                    </div>
                </div>
                <div className="rounded-xl col-start-3 col-end-4 h-auto bg-white px-10 pb-9 pt-6">
                    <h3 className="text-lg font-semibold pb-5">Related Jobs</h3>
                    <div className="flex gap-3 p-3 mb-3 rounded-xl border-2 border-gray-100">
                        <div>
                            <img src={logo1}  alt='logo'/>
                        </div>
                        <div>
                            <h3>Product Designer</h3>
                            <p className="text-xs text-gray-500">Meta</p>
                            <div className="flex gap-3 pt-3">
                            <img src={ mappin} alt='map-pin'/>
                            <p className="text-xs text-gray-500 -ml-1"> USA, Remote </p>
                            <img src={ briefcase} alt='briefcase'/>
                            <p className="text-xs text-gray-500 -ml-1"> Full-time </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 p-3 mb-3 rounded-xl border-2 border-gray-100 ">
                        <div>
                            <img src={logo2}  alt='logo'/>
                        </div>
                        <div>
                            <h3>Senior Product Engineer</h3>
                            <p className="text-xs text-gray-500">Loom</p>
                            <div className="flex gap-3 pt-3">
                            <img src={ mappin} alt='map-pin'/>
                            <p className="text-xs text-gray-500 -ml-1"> USA, Remote </p>
                            <img src={ briefcase} alt='briefcase'/>
                            <p className="text-xs text-gray-500 -ml-1"> Full-time </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 p-3 mb-3 rounded-xl border-2 border-gray-100">
                        <div>
                            <img src={logo3}  alt='logo'/>
                        </div>
                        <div>
                            <h3>Product Designer</h3>
                            <p className="text-xs text-gray-500">Meta</p>
                            <div className="flex gap-3 pt-3">
                            <img src={ mappin} alt='map-pin'/>
                            <p className="text-xs text-gray-500 -ml-1"> USA, Remote </p>
                            <img src={ briefcase} alt='briefcase'/>
                            <p className="text-xs text-gray-500 -ml-1"> Full-time </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button variant='contained' sx={{borderRadius: '25px', backgroundColor: ' #3754DB', color: '#E4ECF7', textTransform:'none', fontSize:14}} >View all job  </Button>
                    </div>
                </div>
            </div>
    </div>
    )
}