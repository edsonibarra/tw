import React from "react";
import Tweet from "../Tweet/Tweet";

export default Feed = (props) =>
  props.tweets.map((tweet) => {
    return (
      <Tweet
        profileUrl={tweet.profileUrl}
        profile={tweet.profile}
        username={tweet.username}
        content={tweet.content}
        reactions={tweet.interaction}
        // comments={tweet.interaction.comments}
        // retweets={tweet.interaction.retweets}
        // likes={tweet.interaction.likes}
      />
    );
  });
