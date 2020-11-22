import React from "react";
import "./eachTrend.css";

const EachTrend = (props) => (
  <div className="eachTrend-container">
    <div className="eachTrend-container_column_1">
      <div>
        <div>
          <p className="category-text">{props.category}</p>
        </div>
        <div>
          <h4>{props.title}</h4>
        </div>
        <div>
          <p>{props.content}</p>
        </div>
      </div>
      <div className="eachTrend_image_container">
        <img src={props.imageUrl} alt={props.category} />
      </div>
    </div>
    <div className="eachTrend-container_column_2">
      <p className="noTweets-text">
        {props.noTweets > 1000000
          ? props.noTweets / 1000000 + "M"
          : props.noTweets}
      </p>
    </div>
  </div>
);
export default EachTrend;
