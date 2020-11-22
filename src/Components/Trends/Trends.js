import React from "react";
import EachTrend from "../EachTrend/EachTrend";
import { trends } from "../../dataTrends";

const trendsArr = trends;

const Trends = () => (
  <div className="trends-container">
    {trendsArr.map((trend) => {
      return (
        <EachTrend
          category={trend.category}
          title={trend.title}
          content={trend.content}
          noTweets={trend.noTweets}
          imageUrl={trend.imageUrl}
        />
      );
    })}
  </div>
);
export default Trends




