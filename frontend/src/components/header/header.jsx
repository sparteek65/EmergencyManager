import React from "react";
import logo from "../../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { RiSearch2Line, RiVideoLine } from "react-icons/ri";

import "./header.css";

function EMheader(props) {
  let navigate = useNavigate();

  return (
    <div className="outer-container">
      <div className="header-container">
        <div className="left-side-icons">
          <RiSearch2Line
            className="header-search"
            size="25px"
            onClick={() => {
              navigate("/search");
            }}
          />
          <RiVideoLine
            className="header-search"
            size="25px"
            onClick={() => {
              navigate("/EMVid");
            }}
          />
        </div>
        <img
          className="header-logo"
          src={logo}
          alt="header-icon"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="right-side-icons">
          <AiOutlineMenu
            className="header-user"
            size="25px"
            onClick={() => {
              navigate("/more");
            }}
          />
          <BsFillPersonFill
            className="header-user"
            size="25px"
            onClick={() => {
              navigate("/profile");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EMheader;
