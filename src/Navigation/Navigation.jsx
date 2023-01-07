import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../Pages/Detail/Detail";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import RecoveryPassword from "../Pages/RecoveryPassword/RecoveryPassword";
import Register from "../Pages/Register/Register";
import Search from "../Pages/Search/Search";
const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/recoverypassword" element={<RecoveryPassword/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/home" element={<Home/>}/>
    



        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
