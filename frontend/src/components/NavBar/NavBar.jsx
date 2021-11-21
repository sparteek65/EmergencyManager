import React from "react";
import NavBarItem from "./NavBarItem";
import {
  AiFillVideoCamera,
  AiOutlineMenu,
  AiTwotoneHome,
} from "react-icons/ai";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";

import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="nav-bar-container">
      <NavBarItem icon={<AiFillVideoCamera size="25px" />} text="EMVid" />
      <NavBarItem icon={<AiOutlineMenu size="25px" />} text="Services" />
      <NavBarItem icon={<AiTwotoneHome size="25px" />} text="Home" />
      <NavBarItem icon={<BsSearch size="25px" />} text="Search" />
      <NavBarItem icon={<BsFillPersonFill size="25px" />} text="Profile" />
    </div>
  );
}

export default NavBar;
