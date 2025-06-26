import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ActiveFriendBar from "./ActiveFriendBar";

const CommonLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between ">
        <Sidebar />
        <Outlet />
        <ActiveFriendBar />
      </div>
    </>
  );
};

export default CommonLayout;
