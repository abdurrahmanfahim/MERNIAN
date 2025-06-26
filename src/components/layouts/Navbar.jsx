import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../icons/HamburgerMenu";
import EXP from "../EXP";
import CartIcon from "../../icons/CartIcon";
import SmsIcon from "../../icons/SmsIcon";
import BellICon from "../../icons/BellICon";
import ToolsIcon from "../../icons/ToolsIcon";
import SearchIcon from "../../icons/SearchIcon";
import CircleIcon from "../../icons/CircleIcon";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-primary font-poppins text-white py-5 px-7 ">
      <div>
        <img src="./images/logo/logo.png" alt="logo" />
      </div>
      <div className="flex gap-20 items-center ">
        <nav className="font-poppins text-sm font-bold  ">
          <ul className="flex gap-12 ">
            <li>
              <Link to={"/"}>
                <HamburgerMenu />
              </Link>
            </li>
            <li>
              <Link to={"/"}>Careers</Link>
            </li>
            <li>
              <Link to={"/"}>Store</Link>
            </li>
            <li>
              <Link to={"/"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/"}>...</Link>
            </li>
          </ul>
        </nav>
        <div className="relative">
          <input
            type="text"
            className="w-[415px] p-4 text-[#6965E0] bg-[#4E4AC8] rounded-[11px] text-sm focus:bg-white outline-0 "
            placeholder="Search here ...."
          />
          <span className=" absolute top-1/2 right-4 -translate-1/2 ">
            <SearchIcon />
          </span>
        </div>
        <div className="flex gap-8 ">
          <div>
            <EXP />
          </div>
          <div className="bg-light w-[1px] h-8  "></div>
          <div className="flex gap-8 ">
            <span className="relative h-auto">
              <CartIcon />
              <span className="absolute top-[18.5%] left-[60%] -translate-1/2  "><p className="font-poppins text-[7px] font-bold text-[#615DFA] ">5</p></span>
            </span>
            <span className="relative h-auto">
              <SmsIcon />
              <span className="absolute -right-[1px] bottom-4.5 "></span>
              
            </span>
            <span className="relative h-auto">
              <BellICon />
              <span className="absolute -right-[1px] bottom-4.5 "><CircleIcon /></span>
            </span>
          </div>
          <div className="bg-light w-[1px] h-8  "></div>
          <div>
            <ToolsIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
