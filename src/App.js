import { BrowserRouter, Routes, Route, } from "react-router-dom";

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

function App() {
  return (
    <div className="w-full h-screen bg-gray-200">
       <BrowserRouter>
       <Navbar />
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
      <Footer />
  </BrowserRouter>
    </div>
  );
}

export default App;
