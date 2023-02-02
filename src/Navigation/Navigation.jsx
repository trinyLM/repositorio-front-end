import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../Pages/Detail/Detail";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import Search from "../Pages/Search/Search";
import About from "../Pages/About/About";
import Step1 from "../Pages/RecoveryPassword/Step1";
import Step2 from "../Pages/RecoveryPassword/Step2";
import Step3 from "../Pages/RecoveryPassword/Step3";
import VerifyRegister from "../Pages/Register/VerifyRegister";
import Admin from "../Pages/Admin/Admin";
import AddFile from "../Pages/Admin/AddFile";
import AddAutor from "../Pages/Admin/AddAutor";
const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/register/verify" element={<VerifyRegister/>}/>
            <Route path="/recoverypassword/step1" element={<Step1/>}/>
            <Route path="/recoverypassword/step2" element={<Step2/>}/>
            <Route path="/recoverypassword/step3" element={<Step3/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/addfile" element={<AddFile/>}/>
            <Route path="/addautor" element={<AddAutor/>}/>



        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
