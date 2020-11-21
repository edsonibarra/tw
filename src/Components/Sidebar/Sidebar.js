import React, { Component } from "react";
import Icon from "../Icon/Icon";
import TwitterLogo from "../TwitterLogo/TwitterLogo";
import MyAccountImage from "../MyAccountImage/MyAccountImage";
import TweetButton from "../TweetButton/TweetButton";

import "./sidebar.css";

class Sidebar extends Component {
  render = () => (
    <div className="sidebar-container">
      <div className="sidebar_logo">
        <TwitterLogo />
      </div>
      <div className="sidebar_icons">
        {this.props.icons.map((icon) => {
          return <Icon icon={icon} />;
        })}
      </div>
      <div className="sidebar_accountImage">
        <MyAccountImage image={this.props.myProfileImage} />
      </div>
      <TweetButton />
    </div>
  );
}

export default Sidebar;
