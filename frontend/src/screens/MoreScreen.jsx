import React, { useEffect, useState } from "react";
import api from "../api/api";
import CatagoryCard from "../components/Cards/CatagoryCard";
import Loader from "../components/Loader/Loader";
import "./screens.css";

function MoreScreen(props) {
  const [content, setcontent] = useState("");
  const data = [
    { title: "India", link: "/menu/india", color: "greenyellow" },
    { title: "Health", link: "/menu/health", color: "pink" },
    { title: "Disaster", link: "/menu/health", color: "#ee5253" },
    { title: "Training", link: "/menu/health", color: "#1dd1a1" },
    { title: "Alert", link: "/menu/health", color: "#ffcccc" },
    { title: "Bussiness", link: "/menu/health", color: "#17c0eb" },

    { title: "Technology", link: "/menu/india", color: "#48dbfb" },
    { title: "Crime", link: "/menu/health", color: "#ff6b6b" },
    { title: "Social", link: "/menu/india", color: "#1dd1a1" },
    { title: "Follow Us", link: "/follow-us", color: "#12CBC4" },
    { title: "Contact Us", link: "/contact-us", color: "#ff9ff3" },
    { title: "Our Magazine", link: "/our-magazine", color: "#D980FA" },
    { title: "Privacy Policy", link: "/privacy-policy", color: "#FFC312" },
  ];
  useEffect(() => {
    api
      .get("")
      .then((response) => response.data)
      .then(setcontent);
    return () => {};
  }, []);
  return (
    <div className="screen-container">
      {content === "" && <Loader />}
      {content !== "" && (
        <div className="category-screen">
          {data.map((category) => {
            return (
              <CatagoryCard
                key={category.title}
                title={category.title}
                link={category.link}
                color={category.color}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MoreScreen;
