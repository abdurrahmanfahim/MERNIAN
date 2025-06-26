import React, { useEffect, useRef, useState } from "react";
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
  const [hamburgerMenuState, setHamburgerMenuState] = useState(false);
  const hamburgerMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (
        hamburgerMenuRef.current &&
        !hamburgerMenuRef.current.contains(event.target)
      ) {
        setHamburgerMenuState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <header className="flex justify-between items-center bg-primary font-poppins text-white py-5 px-7 ">
      <div>
        <img src="./images/logo/logo.png" alt="logo" />
      </div>
      <div className="flex gap-20 items-center ">
        <nav className="font-poppins text-sm font-bold  ">
          <ul className="flex gap-12 ">
            <li className=" relative h-full">
              <span
                className="h-full "
                ref={hamburgerMenuRef}
                onClick={() => setHamburgerMenuState(!hamburgerMenuState)}
              >
                <HamburgerMenu />
              </span>

              {hamburgerMenuState && (
                <ul
                  className="w-28 mt-8 absolute top-full bg-white shadow-2xl text-black  flex flex-col "
                  ref={hamburgerMenuRef}
                  onClick={() => setHamburgerMenuState(false)}
                >
                  <li className="hover:bg-gray-100 p-2 hover:text-primary border-r-2 border-transparent border-l-2 hover:border-secondary  ">
                    one
                  </li>
                  <li className="hover:bg-gray-100 p-2 hover:text-primary border-r-2 border-transparent border-l-2 hover:border-secondary  ">
                    two
                  </li>
                  <li className="hover:bg-gray-100 p-2 hover:text-primary border-r-2 border-transparent border-l-2 hover:border-secondary  ">
                    three
                  </li>
                </ul>
              )}
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
            <Link to={"/"}>
              <EXP />
            </Link>
          </div>
          <div className="bg-light w-[1px] h-8  "></div>
          <div className="flex gap-8 items-center ">
            <span className="relative  ">
              <Link to={"/"}>
                <CartIcon />
              <span className="absolute top-[44%] left-[60%] -translate-1/2  ">
                <p className="font-poppins text-[7px] font-bold text-[#615DFA] ">
                  5
                </p>
              </span>
              </Link>
            </span>
            <span className="relative  ">
              <Link to={"/"}>
                <SmsIcon />
              </Link>
              <span className="absolute -right-[1px] bottom-4.5 "></span>
            </span>
            <span className="relative  ">
              <Link to={"/"}>
                <BellICon />
              </Link>
              <span className="absolute right-0 bottom-[2px] ">
                <CircleIcon />
              </span>
            </span>
          </div>
          <div className="bg-light w-[1px] h-8  "></div>
          <div className="flex items-center ">
            <Link to={"/"}>
              <ToolsIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
