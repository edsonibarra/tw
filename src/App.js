import React, { Component } from "react";
import "./styles.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import SidebarCol from "./Components/SidebarCol/SidebarCol";

import {
  HomeSolid,
  HashtagOutline,
  BellOutline,
  MailOutline,
  UserOutline,
  DotsCircleHorizontalOutline
} from "@graywolfai/react-heroicons";

// const sidebarIcons = [ < HomeSolid/>, < HashtagOutline/>, < BellOutline/>, < MailOutline/>, < UserOutline/>, < DotsCircleHorizontalOutline/>]

class App extends Component {
  constructor() {
    super();
    this.state = {
      icons: [
        <HomeSolid />,
        <HashtagOutline />,
        <BellOutline />,
        <MailOutline />,
        <UserOutline />,
        <DotsCircleHorizontalOutline />
      ],
      myProfileImage:
        "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2016/09/17/323680.jpg"
    };
  }
  render = () => (
    <div className="app">
      <Sidebar
        icons={this.state.icons}
        myProfileImage={this.state.myProfileImage}
      />
      <div className="app_main">
        <Main myProfileImage={this.state.myProfileImage} />
        <SidebarCol />
      </div>
    </div>
  );
}
export default App;
