import React from "react";
import Tweet from "../Tweet/Tweet";

const Feed = (props) =>
  props.tweets.map((tweet, index) => {
    return (
      <Tweet
        profileUrl={tweet.profileUrl}
        profile={tweet.profile}
        username={tweet.username}
        content={tweet.content}
        reactions={tweet.interaction}
        index={index}
        likeHandler={props.likeHandler}
        retweetHandler={props.retweetHandler}
        showContextM={props.showContextM}
        sCm = {tweet.showContextM}
      />
    );
  });
  export default Feed
