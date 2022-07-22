import React from "react";
import { SliderData } from "../../images/SliderData";
import Home from "../../components/home/Home";
import HotelConfig from "../../components/hotel-config/HotelConfig"
import logo from "../../images/logo.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import trip from "../../images/tripadvisor.svg";
import trip_lg from "../../images/tripadvisor-large.svg";
import Rooms from "../../components/rooms/Rooms";
import Footer from "../../components/Footer/Footer";

import ScrollToTop from "../../components/ScrollToTop";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import Navbar from "../../components/Navbar/Navbar";
  
function Homepage() {
  return (
    <>
    <Navbar></Navbar>

      <Home slides={SliderData}></Home>
      <Rooms logo={logo}></Rooms>
      <Footer logo={logo}></Footer>
      
    </>
  );
}

export default Homepage;
