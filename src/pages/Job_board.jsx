import React from "react";
import { useNavigate } from "react-router-dom";

//material UI
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

//images
import logo1 from "../images/1.svg";
import logo2 from "../images/2.svg";
import mappin from "../images/map-pin.svg";
import briefcase from "../images/briefcase.svg";
import dollar from "../images/dollar-sign.svg";
import searchicon from "../images/search.svg";
import Selecticon from "../images/Select.svg";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    
  }));

  const item = styled(Paper)(({ theme }) => ({
    height: 'auto',
    
    textAlign: 'center',
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    lineHeight: '60px',
  }));
  
  const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Job_board(){

    return(
        <div className=' w-full h-auto bg-background flex px-10 pb-10 pt-10'>
        <div className='w-full h-auto ' >
          <div className="relative">
          <h1 className='text-left px-20 text-3xl font-bold text-black'><searchicon /> Job board</h1>
          </div>
          
          <p className='text-left px-20 text-gray-700 text-lg'>Lorem ipsum is placeholder text commonly used in the graphic.</p>
          <div >
          <Box sx={{ flexGrow: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, }}>
    <Grid container spacing={2}>
    <Grid item xs={6}>
        <Item>Job title <KeyboardArrowDownIcon /> </Item>
      </Grid>
      <Grid item xs>
        <Item>Location <KeyboardArrowDownIcon /></Item>
      </Grid>
      <Grid item xs>
        <Item>Job type <KeyboardArrowDownIcon /></Item>
      </Grid>
    </Grid>
  </Box>
          </div>
          <h1 className='text-left px-20 text-xl py-10 font-bold text-black'>Over 1,000,000+ for you</h1>

          <Grid spacing={2}>
      {[lightTheme ].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                paddingLeft: 10,
                paddingRight: 10,
                bgcolor: '#F7FAFC',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[{
                src: logo1,
                heading: 'Product Manager—Remote',
                company: 'Meta',
                location: 'USA, Remote',
                job: 'Full-time',
                amount: '120k - 130k',
                time: 'Posted 5mins ago', 
                mapPin: mappin,
                briefcase: briefcase,
                dollarsign: dollar,
              }, 
              {
                src: logo1,
                heading: 'Product Manager—Remote',
                company: 'Meta',
                location: 'USA, Remote',
                job: 'Full-time',
                amount: '120k - 130k',
                time: 'Posted 5mins ago', 
                mapPin: mappin,
                briefcase: briefcase,
                dollarsign: dollar,
              }, 
              {
                src: logo2,
                heading: 'Product Manager—Remote',
                company: 'Loom Inc.',
                location: 'Australia',
                job: 'Full-time',
                amount: '120k - 130k',
                time: 'Posted 18hrs ago', 
                mapPin: mappin,
                briefcase: briefcase,
                dollarsign: dollar,
              }, 
              {
                src: logo2,
                heading: 'Product Manager—Remote',
                company: 'Loom Inc.',
                location: 'Australia',
                job: 'Full-time',
                amount: '120k - 130k',
                time: 'Posted 18hrs ago', 
                mapPin: mappin,
                briefcase: briefcase,
                dollarsign: dollar,
              },
              {
                src: logo1,
                heading: 'Product Manager—Remote',
                company: 'Meta',
                location: 'USA, Remote',
                job: 'Full-time',
                amount: '120k - 130k',
                time: 'Posted 5mins ago', 
                mapPin: mappin,
                briefcase: briefcase,
                dollarsign: dollar,
              },
              {
                src: logo1,
                heading: 'Product Manager—Remote',
                company: 'Meta',
                location: 'USA, Remote',
                job: 'Full-time',
                amount: '120k - 130k',
                time: 'Posted 5mins ago', 
                mapPin: mappin,
                briefcase: briefcase,
                dollarsign: dollar,
              },
              {
                src: logo2,
                heading: 'Product Manager—Remote',
                company: 'Loom Inc.',
                location: 'Australia',
                job: 'Full-time',
                amount: '120k - 130k',
                time: 'Posted 18hrs ago', 
                mapPin: mappin,
                briefcase: briefcase,
                dollarsign: dollar,
              },
              {
                src: logo2,
                heading: 'Product Manager—Remote',
                company: 'Loom Inc.',
                location: 'Australia',
                job: 'Full-time',
                amount: '120k - 130k',
                time: 'Posted 18hrs ago', 
                mapPin: mappin,
                briefcase: briefcase,
                dollarsign: dollar,
              },
              {
                src: logo1,
                heading: 'Product Manager—Remote',
                company: 'Meta',
                location: 'USA, Remote',
                job: 'Full-time',
                amount: '120k - 130k',
                time: 'Posted 5mins ago', 
                mapPin: mappin,
                briefcase: briefcase,
                dollarsign: dollar,
              },
              {
                src: logo1,
                heading: 'Product Manager—Remote',
                company: 'Meta',
                location: 'USA, Remote',
                job: 'Full-time',
                amount: '120k - 130k',
                time: 'Posted 5mins ago', 
                mapPin: mappin,
                briefcase: briefcase,
                dollarsign: dollar,
              }].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  <div className="flex gap-2 px-5 py-7">
                    <img src={ elevation.src } />
                    <div>
                        <h1> {elevation.heading} </h1>
                        <p>{ elevation.company }</p>
                        <div className="flex gap-3 pt-3">
                            <img src={ elevation.mapPin} />
                            <p className="text-sm pt-1 -ml-2"> { elevation.location} </p>
                            <img src={ elevation.briefcase} />
                            <p className="text-sm pt-1 -ml-2"> {elevation.job} </p>
                            <img src={ elevation.dollarsign} />
                            <p className="text-sm pt-1 -ml-2"> {elevation.amount} </p>
                        </div>
                    </div>
                    <p className="text-right ml-36"> {elevation.time} </p>
                  </div>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
          </div>
          </div>
    )
}