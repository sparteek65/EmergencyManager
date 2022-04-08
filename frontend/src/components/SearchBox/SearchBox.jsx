import React, { useRef } from "react";
import "./SearchBox.css";
import { RiSearch2Line } from "react-icons/ri";

function SearchBox(props) {
  const searchInput = useRef(<input></input>);
  const searchEvent = () => {};
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
          onClick={searchEvent}
        ></input>
      </div>
      <div className="searchbox-result-container">
        <div className="searchbox-result-item"> search result item </div>
        <div className="searchbox-result-item"> search result item </div>
        <div className="searchbox-result-item"> search result item </div>
      </div>
    </div>
  );
}

export default SearchBox;
