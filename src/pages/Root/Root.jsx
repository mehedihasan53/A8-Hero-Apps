import React from "react";
import Navbar from "../../components/header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/header/Banner";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
