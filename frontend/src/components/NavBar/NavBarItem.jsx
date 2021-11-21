import React from "react";
import "./NavBar.css";

function NavBarItem({ icon, link, text }) {
  return (
    <div className="navbar-item-container">
      {icon}
      {text}
    </div>
  );
}

export default NavBarItem;
