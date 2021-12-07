import React, { useRef } from "react";
import "./SearchBox.css";
import { RiSearch2Line } from "react-icons/ri";

function SearchBox(props) {
  const searchInput = useRef(<input></input>);
  return (
    <div
      className="searchbox-container"
      onClick={() => {
        searchInput.current.focus();
      }}
    >
      <div className="searchbox-input-row">
        <RiSearch2Line size="20px" />
        <input
          ref={searchInput}
          className="seachbox-input"
          placeholder="Search"
          type="text"
        ></input>
      </div>
      <div className="searchbox-result-container">
        {/* <div className="searchbox-result-item"> india on a great hipe </div> */}
      </div>
    </div>
  );
}

export default SearchBox;
