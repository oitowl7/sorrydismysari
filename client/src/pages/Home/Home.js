import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
// import API from "../../utils/API.js";
import Navbar from "../../components/Navbar";
import TopImage from "../../components/TopImage";
import { Image } from 'semantic-ui-react';
import firebaseFunction from "../../utils/firebase.js"
import SignOutButton from "../../components/SignOutButton/SignOutButton";
import SignInButton from "../../components/SignInButton/SignInButton";
import HomeInformation from "../../components/HomeInformation/HomeInformation";
import Footer from "../../components/Footer";

class Home extends React.Component {

  state = {
    house: null,
  };

  componentDidMount() {
    console.log(firebaseFunction.getTest())
  }

  render() {
    return(
      <div style={{backgroundColor: this.props.color5}}>
        <Navbar
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
          color5={this.props.color5}
        />
        {this.props.loggedIn ?
          <SignOutButton
            color1={this.props.color1}
            color2={this.props.color2}
            color3={this.props.color3}
            color4={this.props.color4}
            color5={this.props.color5}
          />
        :
          <SignInButton
            color1={this.props.color1}
            color2={this.props.color2}
            color3={this.props.color3}
            color4={this.props.color4}
            color5={this.props.color5}
          />
        }
        <TopImage />
        <HomeInformation 
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
          color5={this.props.color5}
        />
        <Footer 
          color1={this.props.color1}
          color2={this.props.color2}
          color3={this.props.color3}
          color4={this.props.color4}
          color5={this.props.color5}
        />
      </div>
    )
  }
}

export default Home;
