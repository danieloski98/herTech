import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/Forgotpassword";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Job_board from "./pages/Job_board";
import Job_details from "./pages/Job_details";
import Communities from "./pages/Community";
import Community_form from "./pages/Community_form";
import Apply from "./pages/Apply";
import { RecoilRoot } from "recoil";

function App() {

  (function(opts) {
    opts.traits = {
      "email": "Respondent's email",
      "first_name": "Respondent's name",
      "last_name": "Respondent's last name", 
      "my_custom_attribute": "Custom attribute value"
    };
    console.log(window._sva);
    // opts._sva.retarget();
  })(window._sva = window._sva || {});
  return (
    <RecoilRoot>
      <div className="w-full h-screen bg-gray-200">
        <BrowserRouter>
          <Navbar />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="forgotpassword" element={<Forgotpassword />} />
              <Route path="job_board" element={<Job_board />} />
              <Route path="job_details" element={<Job_details />} />
              <Route path="community" element={<Communities />} />
              <Route path="community_form" element={<Community_form />} />
              <Route path="apply" element={<Apply />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
