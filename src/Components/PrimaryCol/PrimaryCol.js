import React, { Component } from "react";
import PostTweet from "../PostTweet/PostTweet";
import "./primaryCol.css";
import Feed from "../Feed/Feed";
import { dataTweet } from "../../dataTweet";

class PrimaryCol extends Component {
  constructor() {
    super();
    this.state = {
      tweets: dataTweet,
      newTweet: ""
    };
  }

  // metodo para agregar un nuevo tuit
  addNewTweet = () => {
    let tweetsClone = [...this.state.tweets];
    // console.log(tweetsClone);
    tweetsClone.unshift({
      profile: "Edson Ibarra",
      profileUrl:
        "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2016/09/17/323680.jpg",
      username: "edson_ibarra_97",
      content: this.state.newTweet,
      interaction: { comments: 2000, retweets: 3000, likes: 8000 }
    });
    this.setState({
      tweets: [...tweetsClone],
      newTweet: ""
    });
    // console.log(this.state.tweets);
  };
  updateNewTweetText = (event) => {
    console.log(this.state.newTweet);
    this.setState({
      newTweet: event.target.value
    });
  };
  render = () => (
    <div className="primaryCol-container">
      <PostTweet
        myProfileImage={this.props.myProfileImage}
        tweets={this.state.tweets}
        addNewTweetFn={this.addNewTweet}
        newTweetValue={this.state.newTweet}
        updateNewTweetTextFn={this.updateNewTweetText}
      />
      <Feed tweets={this.state.tweets} />
    </div>
  );
}

export default PrimaryCol;
