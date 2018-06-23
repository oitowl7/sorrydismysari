import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar";
 




class StandardHomePage extends React.Component {

  state = {
    house: null,
  };

  render() {
    return(
      <div>
        <Navbar
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
        />

      </div>
    )
  }
}

export default StandardHomePage;
