import React, { useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.png";
import profile from "../../assets/profile.png";
import "./header.css";

function EMheader(props) {
  const [searchOn, setsearchOn] = useState(false);
  const searchInput = useRef("");

  const searchToggler = () => {
    if (searchOn === false) {
      setsearchOn(true);
      // searchInput.current.focus
    } else {
      setsearchOn(false);
    }
  };

  return (
    <div className="outer-container">
      <div className="header-container">
        <div onClick={searchToggler}>
          <img className="header-search" src={search} height="35px" />
        </div>
        <img className="header-logo" src={logo} />
        <img className="header-user" src={profile} height="35px" />
      </div>
      {searchOn && (
        <div className="search-container">
          <input
            autoFocus
            ref={searchInput}
            className="search-input"
            type="text"
            id="search"
            name="search"
            placeholder="Search . . ."
          />
        </div>
      )}
    </div>
  );
}

export default EMheader;
