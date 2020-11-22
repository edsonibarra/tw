import React from "react";
import Reactions from "../Reactions/Reactions";
import DeleteTwitter from "../DeleteTwitter/DeleteTwitter"

import "./tweet.css";
const Tweet = (props) => (
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
      {
        props.sCm ? <DeleteTwitter /> : null
      }
      <div className="delete_tweet_icon_container" onClick={() => props.showContextM(props.index)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
    <div className="icons-reactions-container">
      <Reactions 
        reactions={props.reactions} 
        index={props.index} 
        likeHandler={props.likeHandler} 
        retweetHandler={props.retweetHandler}/>
    </div>
  </div>
);
export default Tweet
