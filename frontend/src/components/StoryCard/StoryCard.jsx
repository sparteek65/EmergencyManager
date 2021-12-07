import React, { useRef } from "react";
import "./StoryCard.css";

import { RiBookReadLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function StoryCard({ category, title, description, link }) {
  let navigate = useNavigate();
  const ref = useRef("");

  return (
    <div
      className="story-card"
      onClick={() => {
        ref.current.click();
      }}
    >
      <div className="story-card-category">{category}</div>
      <div className="story-card-title">{title}</div>
      {/* <div className="story-card-image">
        <img src={image} className="story-card-image" />
      </div> */}
      <div className="story-card-description">{description}</div>
      <div
        ref={ref}
        className="story-card-read-more"
        onClick={() => {
          navigate(link);
        }}
      >
        Read More &nbsp;
        <RiBookReadLine size="24px" />
      </div>
    </div>
  );
}

export default StoryCard;
