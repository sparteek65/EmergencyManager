import React from "react";
import "./menu.css";

function EMmenuItem({ icon, name, link }) {
  return (
    <div className="icon-container">
      <img src={icon} height="20px" />
      {name}
    </div>
  );
}

export default EMmenuItem;
