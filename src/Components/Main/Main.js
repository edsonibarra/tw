import React from "react";
import PrimaryCol from "../PrimaryCol/PrimaryCol";
import "./main.css";

const Main = (props) => (
  <div className="main-container">
    <PrimaryCol myProfileImage={props.myProfileImage} />
  </div>
);
export default Main