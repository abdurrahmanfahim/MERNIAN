import React from "react";
import { Link } from "react-router-dom";

const DropdownThreeDot = () => {
  return (
    <ul className="w-[140px] font-poppins text-xs text-black bg-white py-2.5 flex flex-col z-50 shadow-dropdown rounded-lg ">
      <li>
        <Link className="px-4 py-[3px] w-full block hover:bg-gray-100 " to={"/"}>
          Edit Post
        </Link>
      </li>
      <li>
        <Link className="px-4 py-[3px] w-full block hover:bg-gray-100 " to={"/"}>
          Delete Post
        </Link>
      </li>
      <li>
        <Link className="px-4 py-[3px] w-full block hover:bg-gray-100 " to={"/"}>
          Report Post
        </Link>
      </li>
      <li>
        <Link className="px-4 py-[3px] w-full block hover:bg-gray-100 " to={"/"}>
          Report Author
        </Link>
      </li>
    </ul>
  );
};

export default DropdownThreeDot;
