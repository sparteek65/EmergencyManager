import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBarItem({ icon, linkTo, text }) {
  let navigate = useNavigate();
  return (
    <div
      className="navbar-item-container"
      onClick={() => {
        navigate(linkTo);
      }}
    >
      {icon}
      {text}
    </div>
  );
}

export default NavBarItem;
