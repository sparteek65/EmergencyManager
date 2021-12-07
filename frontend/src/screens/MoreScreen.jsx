import React, { useEffect, useState } from "react";
import api from "../api/api";
import Loader from "../components/Loader/Loader";
import "./screens.css";

function MoreScreen(props) {
  const [content, setcontent] = useState("");
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
      {content !== "" && <div className="content">content {content.title}</div>}
    </div>
  );
}

export default MoreScreen;
