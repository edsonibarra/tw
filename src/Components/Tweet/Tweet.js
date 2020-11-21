import React from "react";
import Reactions from "../Reactions/Reactions";

import "./tweet.css";
export default Tweet = (props) => (
  <div>
    <div className="outter-container">
      <div className="profilePicture-container">
        <img src={props.profileUrl} />
      </div>
      <div className="text">
        <div className="user-info">
          <div className="profile-container">
            <h5 className="profile-text">{props.profile}</h5>
          </div>
          <div className="username-container">@{props.username}</div>
        </div>
        <div className="content-container">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
    <div className="icons-reactions-container">
      <Reactions reactions={props.reactions} />
    </div>
  </div>
);
