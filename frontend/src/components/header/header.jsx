import React from "react";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.png";
import profile from "../../assets/profile.png";
import "./header.css";

function EMheader(props) {
  return (
    <div className="outer-container">
      <div className="header-container">
        <img className="header-search" src={search} height="35px" />
        <img className="header-logo" src={logo} />
        <img className="header-user" src={profile} height="35px" />
      </div>
      <div className="search-container"></div>
    </div>
  );
}

export default EMheader;
