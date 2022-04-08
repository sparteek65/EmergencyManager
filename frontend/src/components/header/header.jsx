import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { RiSearch2Line, RiVideoLine } from "react-icons/ri";
import publicIp from "public-ip";
import "./header.css";

function EMheader(props) {
  const [ip, setip] = useState("");
  let navigate = useNavigate();
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  // gtag("config", "UA-215552036-1");
  // ga("create", "UA-215552036-1", "auto");
  publicIp
    .v4({
      fallbackUrls: ["https://ifconfig.co/ip"],
    })
    .then((i) => {
      gtag("set", { user_id: i });
      console.log(i);
      setip(i);
    });

  // ga("set", "userId", "USER_ID_1234_test"); // Set the user ID using signed-in user_id.
  // Set the user ID using signed-in user_id.
  gtag("config", "UA-215552036-1");
  return (
    <div className="outer-container">
      <div className="header-container">
        <div className="left-side-icons">
          {ip}
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
