//el dive de sidebarcol debe medir 40%
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Trends from "../Trends/Trends";
import "./sideBarCol.css";

export default SidebarCol = () => (
  <div className="sidebarCol-container">
    <SearchBar />
    <Trends />
  </div>
);
