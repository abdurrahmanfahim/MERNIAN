import React from "react";
import { Link } from "react-router-dom";
import NewsfeedIcon from "../../icons/NewsfeedIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import GroupsIcon from "../../icons/GroupsIcon";
import PhotosIcon from "../../icons/PhotosIcon";
import FriendsIcon from "../../icons/FriendsIcon";
import FriendsRequestIcon from "../../icons/FriendsRequestIcon";
import LogoutIcon from "../../icons/LogoutIcon";

const SideNav = () => {
  return (
    <ul className="w-full h-dvh font-poppins font-medium text-sm text-gray capitalize flex flex-col gap-1 ">
      <li>
        <Link
          to={"/"}
          className="sideNav py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white flex gap-7 items-center "
        >
          <NewsfeedIcon /> Newsfeed
        </Link>
      </li>
      <li>
        <Link
          to={"/"}
          className="sideNav py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white flex gap-7 items-center "
        >
          <ProfileIcon />
          Profile
        </Link>
      </li>
      <li>
        <Link
          to={"/"}
          className="sideNav py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white flex gap-7 items-center "
        >
          <GroupsIcon />
          Groups
        </Link>
      </li>
      <li>
        <Link
          to={"/"}
          className="sideNav py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white flex gap-7 items-center "
        >
          <PhotosIcon />
          Photos
        </Link>
      </li>
      <li>
        <Link
          to={"/"}
          className="sideNav py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white flex gap-7 items-center "
        >
          <FriendsIcon />
          Friends
        </Link>
      </li>
      <li>
        <Link
          to={"/"}
          className="sideNav py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white flex gap-7 items-center "
        >
          <FriendsRequestIcon />
          Friends Request
        </Link>
      </li>
      <li>
        <Link
          to={"/"}
          className="sideNav py-4 px-5 rounded-[10px] hover:bg-secondary hover:text-white flex gap-7 items-center "
        >
          <LogoutIcon />
          Logout
        </Link>
      </li>
    </ul>
  );
};

export default SideNav;
