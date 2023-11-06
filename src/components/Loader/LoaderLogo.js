import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <img alt="saad sitting on table" src={require("../../assests/images/home1.jpg")} style={{ width: "700px", height: "700px" }} ></img> 

    );
  }
}

export default LogoLoader;
