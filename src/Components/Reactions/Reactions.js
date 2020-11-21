import React from "react";
import "./reactions.css";
import {
  HeartOutline,
  ShareOutline,
  ChatOutline,
  DotsHorizontalOutline,
  TrashOutline
} from "@graywolfai/react-heroicons";

export default Reactions = (props) => (
  <div className="outter-container-reactions">
    <div className="inner-container-reactions">
      <div className="reactions_icon_container">
        <ChatOutline />
      </div>
      <div className="number_reactions">
        {props.reactions.comments > 1000
          ? props.reactions.comments / 1000 + "K"
          : props.reactions.comments}
      </div>
    </div>
    <div className="inner-container-reactions">
      <div className="reactions_icon_container">
        <ShareOutline />
      </div>
      <div className="number_reactions">
        {props.reactions.retweets > 1000
          ? props.reactions.retweets / 1000 + "K"
          : props.reactions.retweets}
      </div>
    </div>
    <div className="inner-container-reactions">
      <div className="reactions_icon_container">
        <HeartOutline />
      </div>
      <div className="number_reactions">
        {props.reactions.likes > 1000
          ? props.reactions.likes / 1000 + "K"
          : props.reactions.likes}
      </div>
    </div>
  </div>
);
