import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/HomePage/Header";
import { Navigate, Route,useLocation , Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";

import Footer from "./components/HomePage/Footer";

import { useDispatch, useSelector } from "react-redux";
import About from "./components/About";
import Campaign from "./components/HeaderLinks/Campaign";
import ClubDesign from "./components/HomePage/ClubDesign";

import { handleLogin, handleLogout } from "./components/Context/Reducer";
import Activities from "./components/HeaderLinks/Activities";
// import ActivitiesDetailles from "./components/HeaderLinks/ReligionActivity";
import ReligionActivities from "./components/HeaderLinks/ReligionActivity";
import ReligionActivitiesPict from "./components/HeaderLinks/ReligionActivityPic";
import SocialActivity from "./components/HeaderLinks/SocialActivity ";
import CulturalActivities from "./components/HeaderLinks/CulturalActivity";
import SocialActivitiesPict from "./components/HeaderLinks/SocialActivityPic";
import CulturalActivitiesPict from "./components/HeaderLinks/CulturelActivityPic";
import Teams from "./components/HomePage/Teams";

function App() {
 

  useEffect(() => {
 
    window.scrollTo(0, 0);
    
  }, []);

  return (

  
        <>
          <Header />
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/religion" element={<ReligionActivities />} />
            <Route path="/activities/social" element={<SocialActivity />} />
            <Route path="/activities/cultural" element={<CulturalActivities />} />
            <Route path="/activities/religion/pictures" element={<ReligionActivitiesPict />} />
            <Route path="/activities/social/pictures" element={<SocialActivitiesPict />} />
            <Route path="/activities/cultural/pictures" element={<CulturalActivitiesPict />} />
            
            <Route path="/teams" element={<Teams />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/logout" element={<LogOut />} /> */}
            {/* <Route path="/login" element={<Navigate replace to="/" />} /> */}
          </Routes>
          <Footer />
            </>
    
  
  );
}

export default App;
