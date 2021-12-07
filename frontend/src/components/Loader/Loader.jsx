import React from "react";
import loader from "../../assets/loader.gif";
function Loader(props) {
  return (
    <div className="loader">
      {" "}
      <img src={loader} className="loader-icon" alt="loader-icon" />
      <br />
      loading your content from server ....
    </div>
  );
}

export default Loader;
