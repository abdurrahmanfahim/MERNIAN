import React from "react";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[300px] bg-white ">
      <div>
        <Link to={'/public-profile'} className="w-full h-[75px] flex justify-center items-center bg-[#45437F] relative  ">
          <img
            className="absolute size-full"
            src="./images/bannerImages/bannerImage.jpg"
            alt="bannerImage"
          />
          <span className="absolute left-1/2 -translate-x-1/2 top-1/5 ">
            <img
              className="size-[120px] border-[5px] border-white rounded-full "
              src="./images/avatar/avatersidebar.png"
              alt="avatar"
            />
          </span>
        </Link>

        <div className="mt-[75px] flex justify-center items-center flex-col text-center ">
          <p className="font-poppins text-base font-bold text-black ">
            <Link to={"/public-profile"}>A B M Shawon Islam</Link>
          </p>
          <a
            className="font-poppins text-xs font-medium text-[#AFB0C0] "
            href="www.abm.com"
            target="_blank"
          >
            www.abm.com
          </a>
        </div>

        <div className="flex gap-6 justify-center items-center mt-[42px] ">
          <Link to={""} className="flex flex-col justify-center items-center ">
            <b className="font-poppins text-base font-bold text-black ">930</b>
            <small className="font-poppins text-gray font-medium text-xs ">
              Friends
            </small>
          </Link>
          <span className="h-[25px] w-[1px] bg-gray block "></span>
          <Link to={""} className="flex flex-col justify-center items-center ">
            <b className="font-poppins text-base font-bold text-black ">87</b>
            <small className="font-poppins text-gray font-medium text-xs ">
              Posts
            </small>
          </Link>
          <span className="h-[25px] w-[1px] bg-gray block "></span>
          <Link to={""} className="flex flex-col justify-center items-center ">
            <b className="font-poppins text-base font-bold text-black ">1k</b>
            <small className="font-poppins text-gray font-medium text-xs ">
              Followers
            </small>
          </Link>
        </div>

        <div className="flex mt-16 w-[268px] ml-6 mr-2  ">
          <SideNav />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
