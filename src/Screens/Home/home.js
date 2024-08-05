import React from "react";
import { useState,useEffect } from "react";
import { setClientToken } from "../../spotify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './home.css'
import Videos from "../videos/videos";
import Sidebar from '../Sidebar/sidebar';
import Login from '../auth/login';
import Library from "../../Components/library/library";
//import Footer from '../Footer/footer'
function home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [token, setToken] = useState("");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return !token? (
   <Login />
  ): (  
     <Router>
       <div className="main-body">
       <Sidebar />
      <Routes>
        <Route path="/videos" element={<Videos />} />
        <Route path='/callback' element={<Library/>} />
      </Routes>
      
      </div>
    </Router>
    
    
  );
}

export default home;
