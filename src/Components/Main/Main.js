import React from "react";
import PrimaryCol from "../PrimaryCol/PrimaryCol";
import "./main.css";

export default Main = (props) => (
  <div className="main-container">
    <PrimaryCol myProfileImage={props.myProfileImage} />
  </div>
);
