import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/HomePage/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Course from "./components/HeaderLinks/Courses";
import Footer from "./components/HomePage/Footer";
import Signup from "./components/register_login/Singup/SignUp";
import Login from "./components/register_login/Login/Login";

import { useDispatch, useSelector } from "react-redux";
import About from "./components/About";
import Campaign from "./components/HeaderLinks/Campaign";
import ClubDesign from "./components/HomePage/ClubDesign";

import { handleLogin, handleLogout } from "./components/Context/Reducer";

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state: any) => state.auth.isLogged);
 
  // if (data !== "") {
  //   dispatch(handleLogin());
  // } else {
  //   dispatch(handleLogout());
  // }
  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data !== ""||data===undefined) {
      dispatch(handleLogin());
    } else {
      dispatch(handleLogout());
    }
    window.scrollTo(0, 0);
  }, []);

  console.log(isLogged);
  return (
    <>
      {" "}
      {isLogged ? (
        <>
          <Header />
          <Routes>
            <Route path="/Courses" element={<Course />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/logout" element={<LogOut />} /> */}
            <Route path="/login" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <Header />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <ClubDesign />
        </>
      )}
    </>
  );
}

export default App;
