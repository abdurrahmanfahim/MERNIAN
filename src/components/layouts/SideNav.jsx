import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <ul className="w-full font-poppins font-medium text-sm text-gray ">
      <li >
        <Link to={"/"} className="py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white block " > Newsfeed </Link>
      </li>
      <li >
        <Link to={"/"} className="py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white block " > Videos </Link>
      </li>
      <li >
        <Link to={"/"} className="py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white block " > Groups </Link>
      </li>
      <li >
        <Link to={"/"} className="py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white block " > Photos </Link>
      </li>
      <li >
        <Link to={"/"} className="py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white block " > Friends </Link>
      </li>
      <li >
        <Link to={"/"} className="py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white block ">  Friends Request </Link>
      </li>
      <li >
        <Link to={"/"} className="py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white block " > Logout </Link>
      </li>
    </ul>
  );
};

export default SideNav;
