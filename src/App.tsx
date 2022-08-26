import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Job from './Pages/Job';
import JobBoard from './Pages/Job-Board';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { RecoilRoot } from 'recoil';


function App() {
  return (
   <RecoilRoot>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job-board' element={<JobBoard />} />
        <Route path='/job' element={<Job />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
   </RecoilRoot>
  );
}

export default App;
