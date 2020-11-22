import React, { Component } from "react";
import "./postTweet.css";

class PostTweet extends Component {
  // El metodo para agregar un tweet, se lo estare pasando como
  // prop a este componente.
  addNewTweet = () => {
    this.props.addNewTweetFn();
  };
  //Evitar que el formulario recargue la pagina
  handleSubmitForm = (event) => {
    event.preventDefault();
  };
  //Actualizar con el onChange
  // updateNewTweetText = (event) => {

  // };

  render() {
    return (
      <div className="container-outter">
        <div className="title-postTweet">
          <div>
            <h3>Home</h3>
          </div>
          <div className="sparkless-container">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
        </div>
        <div className="container">
          <div className="image-container">
            <img src={this.props.myProfileImage} />
          </div>
          <div className="form-container">
            <form className="form" onSubmit={this.handleSubmitForm}>
              <input
                type="text"
                placeholder="What's Happening?"
                value={this.props.newTweetValue}
                onChange={this.props.updateNewTweetTextFn}
              />
              <div className="button-container">
                <button
                  type="submit"
                  className="button-post"
                  onClick={this.addNewTweet}
                >
                  Tweet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTweet;
