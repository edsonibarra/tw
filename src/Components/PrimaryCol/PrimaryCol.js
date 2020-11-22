import React, { Component } from "react";
import PostTweet from "../PostTweet/PostTweet";
import "./primaryCol.css";
import Feed from "../Feed/Feed";
import { dataTweet } from "../../dataTweet";
import { ThumbUpSolid } from "@graywolfai/react-heroicons";
import DeleteTwitter from '../DeleteTwitter/DeleteTwitter'
class PrimaryCol extends Component {
  constructor() {
    super();
    this.state = {
      tweets: dataTweet,
      newTweet: ""
    };
  }
  
  //METODO QUE AUMENTA EL NUMERO DE LIKES CON CLICK.
  likeHandler = (index) => {
    let likeHandlerArray = [...this.state.tweets];
    if(!likeHandlerArray[index].liked){
      likeHandlerArray[index].interaction.likes += 1;
      this.setState({
      tweets: likeHandlerArray
    });
    };
    likeHandlerArray[index].liked = true
  };
  //METODO PARA COMPARTIR TWEET (RETWITTEAR)
  retweetHandler = (index) => {
    let retweetHandlerArray = [...this.state.tweets]
    if(!retweetHandlerArray[index].shared){
      retweetHandlerArray[index].interaction.retweets += 1;
      this.setState({
        tweets: retweetHandlerArray
      });
    };
    retweetHandlerArray[index].shared = true
  };
  // METODO PARA AGREGAR UN NUEVO TUIT
  addNewTweet = () => {
    let tweetsClone = [...this.state.tweets];                                 
    tweetsClone.unshift({                              
      profile: "Edson Ibarra",                                    
      profileUrl:      
        "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2016/09/17/323680.jpg",
      username: "edson_ibarra_97",
      content: this.state.newTweet,      
      interaction: { comments: 0, retweets: 0, likes: 0 }
    });      
    this.setState({      
      tweets: [...tweetsClone],
      newTweet: ""
    });
  };
  //ACTUALIZA EL ESTADO PARA EL NUEVO TUIT AL MOMENTO DE TYPEAR
  updateNewTweetText = (event) => {
    console.log(this.state.newTweet);
    this.setState({
      newTweet: event.target.value
    });
  };
  // //MOSTRAR MENU CONTEXTUAL (DELETE)
  showContextMFn = (index) => {
    let showContextMArray = [...this.state.tweets];
    showContextMArray[index].showContextM = true;
    this.setState({
      tweets: showContextMArray
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
      <Feed 
        tweets={this.state.tweets} 
        likeHandler={this.likeHandler} 
        retweetHandler={this.retweetHandler} 
        showContextM={this.showContextMFn} /> 
    </div>
  );
}

export default PrimaryCol;
