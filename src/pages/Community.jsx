import React from "react";
import { Link } from 'react-router-dom';

//material ui
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';

//images
import gloria from "../images/gloria.svg";
import queen from "../images/queen.svg";
import yonder from "../images/yonder.svg";
import mitchelle from "../images/mitchelle.svg";
import rebecca from "../images/rebecca.svg";
import rachel from "../images/rachel.svg";
import pm from "../images/pm.svg";
import wd from "../images/wd.svg";
import ui from "../images/ui.svg";
import pd from "../images/pd.svg";
import da from "../images/da.svg";
import dm from "../images/dm.svg";
import img_1 from "../images/profile_1.svg";
import img_2 from "../images/profile_2.svg";
import img_3 from "../images/profile_3.svg";

const itemData = [
    {
      img: gloria,
      author: 'Gloria',
      title: 'Snr. Product Manager',
    },
    {
      img: queen,
      author: 'Queen',
      title: 'Product Designer',
    },
    {
      img: yonder,
      author: 'Yonder',
      title: 'Frontend Developer',
    },
    {
      img: mitchelle,
      author: 'Mitchelle',
      title: 'Digital Marketer',
    },
    {
      img: rebecca,
      author: 'Rebecca',
      title: 'Snr. Product Manager',
    },
    {
      img: rachel,
      author: 'Rachel',
      title: 'Snr. Product Manager',
    },
]

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

export default function Communities(){

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
    return(
        <div className=" w-full h-auto bg-background px-32 pb-10 pt-20">
            <h1 className="text-3xl font-bold text-black">There’s a community for you!</h1>
            <p className="text-gray-700 text-base pt-1">Lorem ipsum is placeholder text common</p>
            <div>
            <div className="flex justify-between pt-10" sx={{ width: 500, height: 450 }} >
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img  sx={{borderRadius:25,}}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x` }
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.author}
            subtitle={item.title}
          />
        </ImageListItem>
      ))}
    </div>
            
            </div>
            <div className="flex justify-between pt-12 ">
              <h1 className="text-lg font-bold text-gray-800">HerTech Communities for Women</h1>
              <div className="relative">
                <IconButton >
                  <SearchIcon className="absolute pl-2 ml-10" />
                </IconButton>
                <input type='text' className="pl-8 pr-10 py-1 text-sm" placeholder="Search community "/>
              </div> 
            </div>

            <div className="flex justify-between items-center gap-7 pt-7">
              <div className="w-1/2">
              
              <div className="w-full mb-5 h-auto gap-5 flex bg-white rounded-2xl px-3 py-5">
                          <img src={ pm } />
                       <div className="flex justify-between w-full">
                       <div>
                          <h3 className='tect-black font-bold text-lg'>#Product Management</h3>
                          <p className='text-gray-500 text-sm py-1'>Group description goes here</p>
                        <span className='flex '>
                          <img src={ img_1 } />
                          <img src={ img_2 } className='-ml-2'/>
                          <img src={ img_3 } className='-ml-2'/>
                          <p className='mt-2 text-black font-bold'>+549</p>
                        </span>
                        </div>
                        <div className="flex justify-center items-center">
                        <div>
      <Button onClick={handleOpen} className='w-20' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>Join</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            <div className="flex justify-end">
            <Link to ="/community">
              <CloseIcon/>
              </Link>
            </div>
            
            <h3 className='text-2xl font-bold pb-5 text-center text-black'>Join a  community</h3>

            <div className="flex gap-2">
            <input type="email" placeholder='First Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            <input type="email" placeholder='Last Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            </div>

            <input type="email" placeholder='Email address' className='w-full h-10 pl-2 text-left mt-4 border-2 border-gray-500 rounded-lg' />

            <div className="flex justify-center items-center">
            <button className='w-1/2 h-12 mt-5 font-bold text-center  text-white bg-bluee rounded-3xl'>Request to join</button>
            </div>
            
        </Box>
      </Modal>
    </div>
                        </div>
                       </div>
                  </div>
                  
                  <div className="w-full mb-5 h-auto gap-5 flex bg-white rounded-2xl px-3 py-5">
                          <img src={ wd } />
                       <div className="flex justify-between w-full">
                       <div>
                          <h3 className='tect-black font-bold text-lg'>#Web Development</h3>
                          <p className='text-gray-500 text-sm py-1'>Group description goes here</p>
                        <span className='flex '>
                          <img src={ img_1 } />
                          <img src={ img_2 } className='-ml-2'/>
                          <img src={ img_3 } className='-ml-2'/>
                          <p className='mt-2 text-black font-bold'>+104</p>
                        </span>
                        </div>
                        <div className="flex justify-center items-center">
                        <div>
      <Button onClick={handleOpen} className='w-20' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>Join</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            <div className="flex justify-end">
            <Link to ="/community">
              <CloseIcon/>
              </Link>
            </div>
            
            <h3 className='text-2xl font-bold pb-5 text-center text-black'>Join a  community</h3>

            <div className="flex gap-2">
            <input type="email" placeholder='First Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            <input type="email" placeholder='Last Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            </div>

            <input type="email" placeholder='Email address' className='w-full h-10 pl-2 text-left mt-4 border-2 border-gray-500 rounded-lg' />

            <div className="flex justify-center items-center">
            <button className='w-1/2 h-12 mt-5 font-bold text-center  text-white bg-bluee rounded-3xl'>Request to join</button>
            </div>
            
        </Box>
      </Modal>
    </div>
                        </div>
                       </div>
                  </div>
                  
                  <div className="w-full h-auto mb-5 gap-5 flex bg-white rounded-2xl px-3 py-5">
                          <img src={ ui } />
                       <div className="flex justify-between w-full">
                       <div>
                          <h3 className='tect-black font-bold text-lg'>#UI/UX Design</h3>
                          <p className='text-gray-500 text-sm py-1'>Group description goes here</p>
                        <span className='flex '>
                          <img src={ img_1 } />
                          <img src={ img_2 } className='-ml-2'/>
                          <img src={ img_3 } className='-ml-2'/>
                          <p className='mt-2 text-black font-bold'>+1427</p>
                        </span>
                        </div>
                        <div className="flex justify-center items-center">
                        <div>
      <Button onClick={handleOpen} className='w-20' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>Join</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            <div className="flex justify-end">
            <Link to ="/community">
              <CloseIcon/>
              </Link>
            </div>
            
            <h3 className='text-2xl font-bold pb-5 text-center text-black'>Join a  community</h3>

            <div className="flex gap-2">
            <input type="email" placeholder='First Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            <input type="email" placeholder='Last Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            </div>

            <input type="email" placeholder='Email address' className='w-full h-10 pl-2 text-left mt-4 border-2 border-gray-500 rounded-lg' />

            <div className="flex justify-center items-center">
            <button className='w-1/2 h-12 mt-5 font-bold text-center  text-white bg-bluee rounded-3xl'>Request to join</button>
            </div>
            
        </Box>
      </Modal>
    </div>
                        </div>
                       </div>
                  </div>
            </div>
            

            <div className="w-1/2 ">
            <div className="w-full h-auto gap-5 flex mb-5 bg-white rounded-2xl px-3 py-5">
                          <img src={ pd } />
                       <div className="flex justify-between w-full">
                       <div>
                          <h3 className='tect-black font-bold text-lg'>#Product Designer</h3>
                          <p className='text-gray-500 text-sm py-1'>Group description goes here</p>
                        <span className='flex '>
                          <img src={ img_1 } />
                          <img src={ img_2 } className='-ml-2'/>
                          <img src={ img_3 } className='-ml-2'/>
                          <p className='mt-2 text-black font-bold'>+365</p>
                        </span>
                        </div>
                        <div className="flex justify-center items-center">
                        <div>
      <Button onClick={handleOpen} className='w-20' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>Join</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            <div className="flex justify-end">
            <Link to ="/community">
              <CloseIcon/>
              </Link>
            </div>
            
            <h3 className='text-2xl font-bold pb-5 text-center text-black'>Join a  community</h3>

            <div className="flex gap-2">
            <input type="email" placeholder='First Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            <input type="email" placeholder='Last Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            </div>

            <input type="email" placeholder='Email address' className='w-full h-10 pl-2 text-left mt-4 border-2 border-gray-500 rounded-lg' />

            <div className="flex justify-center items-center">
            <button className='w-1/2 h-12 mt-5 font-bold text-center  text-white bg-bluee rounded-3xl'>Request to join</button>
            </div>
            
        </Box>
      </Modal>
    </div>
                        </div>
                       </div>
                  </div>

                  <div className="w-full h-auto gap-5 mb-5 flex bg-white rounded-2xl px-3 py-5">
                          <img src={ da } />
                       <div className="flex justify-between w-full">
                       <div>
                          <h3 className='tect-black font-bold text-lg'>#Data Analytics</h3>
                          <p className='text-gray-500  text-sm py-1'>Group description goes here</p>
                        <span className='flex '>
                          <img src={ img_1 } />
                          <img src={ img_2 } className='-ml-2'/>
                          <img src={ img_3 } className='-ml-2'/>
                          <p className='mt-2  font-bold'>+201</p>
                        </span>
                        </div>
                        
                        <div className="flex justify-center items-center">
                        <div>
      <Button onClick={handleOpen} className='w-20' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>Join</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            <div className="flex justify-end">
            <Link to ="/community">
              <CloseIcon/>
              </Link>
            </div>
            
            <h3 className='text-2xl font-bold pb-5 text-center text-black'>Join a  community</h3>

            <div className="flex gap-2">
            <input type="email" placeholder='First Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            <input type="email" placeholder='Last Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            </div>

            <input type="email" placeholder='Email address' className='w-full h-10 pl-2 text-left mt-4 border-2 border-gray-500 rounded-lg' />

            <div className="flex justify-center items-center">
            <button className='w-1/2 h-12 mt-5 font-bold text-center  text-white bg-bluee rounded-3xl'>Request to join</button>
            </div>
            
        </Box>
      </Modal>
    </div>
                        </div>
                      
                       </div>
                  </div>

                  <div className="w-full h-auto gap-5 flex mb-5 bg-white rounded-2xl px-3 py-5">
                          <img src={ dm } />
                       <div className="flex justify-between w-full">
                       <div>
                          <h3 className='tect-black font-bold text-lg'>#Digital Marketing</h3>
                          <p className='text-gray-500  text-sm py-1'>Group description goes here</p>
                        <span className='flex '>
                          <img src={ img_1 } />
                          <img src={ img_2 } className='-ml-2'/>
                          <img src={ img_3 } className='-ml-2'/>
                          <p className='mt-2 text-black font-bold'>+828</p>
                        </span>
                        </div>
                        <div className="flex justify-center items-center">
                        <div>
      <Button onClick={handleOpen} className='w-20' sx={{borderRadius: 7, color: '#3754DB', backgroundColor: '#E4ECF7',}}>Join</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            <div className="flex justify-end">
            <Link to ="/community">
              <CloseIcon/>
              </Link>
            </div>
            
            <h3 className='text-2xl font-bold pb-5 text-center text-black'>Join a  community</h3>

            <div className="flex gap-2">
            <input type="email" placeholder='First Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            <input type="email" placeholder='Last Name' className='w-full h-10 pl-2 mt-4 border-2 text-left border-gray-500 rounded-lg' />
            </div>

            <input type="email" placeholder='Email address' className='w-full h-10 pl-2 text-left mt-4 border-2 border-gray-500 rounded-lg' />

            <div className="flex justify-center items-center">
            <button className='w-1/2 h-12 mt-5 font-bold text-center  text-white bg-bluee rounded-3xl'>Request to join</button>
            </div>
            
        </Box>
      </Modal>
    </div>
                        </div>
                       </div>
                  </div>
            </div>
            </div>            
        </div>
    )
}