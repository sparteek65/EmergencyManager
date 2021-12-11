import React from "react";
import { useNavigate } from "react-router";
import "./Category.css";

function CatagoryCard({ title, link, color }) {
  let navigate = useNavigate();

  return (
    <div
      className="category-card"
      style={{ backgroundColor: color }}
      onClick={() => {
        navigate(link);
      }}
    >
      {title}
    </div>
  );
}

export default CatagoryCard;
