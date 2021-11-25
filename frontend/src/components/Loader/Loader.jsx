import React from "react";

function Loader(props) {
  return (
    <div className="loader">
      {" "}
      <img
        src="https://c.tenor.com/y8BqGzWtqSAAAAAi/explore-map.gif"
        className="loader-icon"
      />
      <br />
      loading your content from server ....
    </div>
  );
}

export default Loader;
